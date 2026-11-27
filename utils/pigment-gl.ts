/*
  One shared WebGL context paints every shader surface on the page.
  Each surface owns a 2D canvas; per frame the renderer draws the shader for
  that surface into a corner of an offscreen GL canvas and copies the pixels
  across. Surfaces pause off-screen, and reduced motion gets a single frame.
*/

export type PigmentMode = 0 | 1 | 2; // 0 pigment flow, 1 deep bloom, 2 floret cells

export type Surface = {
  canvas: HTMLCanvasElement;
  mode: PigmentMode;
  seed: number;
  pointer: [number, number];
  hover: number; // eased 0..1
  hoverTarget: number;
  visible: boolean;
};

const VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform vec2 uOrigin;
uniform float uTime;
uniform vec2 uPointer;
uniform float uHover;
uniform float uSeed;
uniform int uMode;
uniform float uDpr;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}

vec3 hex(float r, float g, float b) { return vec3(r, g, b) / 255.0; }

void main() {
  vec2 frag = gl_FragCoord.xy - uOrigin;
  vec2 uv = frag / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 pa = vec2(uv.x * aspect, uv.y);
  vec2 ptr = vec2(uPointer.x * aspect, uPointer.y);
  float d = distance(pa, ptr);
  float bloom = exp(-d * d * 3.5) * uHover;
  float t = uTime;

  vec3 paper = hex(238.0, 242.0, 252.0);
  vec3 sky = hex(174.0, 199.0, 246.0);
  vec3 lilac = hex(201.0, 189.0, 243.0);
  vec3 cobalt = hex(31.0, 91.0, 208.0);
  vec3 deep = hex(22.0, 44.0, 140.0);
  vec3 navy = hex(24.0, 30.0, 66.0);
  vec3 col;

  if (uMode == 2) {
    // hydrangea florets: a cellular field, one four-petal floret per cell
    vec2 g = frag / (13.0 * uDpr) + uSeed * 3.1;
    vec2 cell = floor(g), f = fract(g);
    float best = 9.0; vec2 bestOff = vec2(0.0); vec2 bestId = vec2(0.0);
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 o = vec2(float(x), float(y));
      vec2 h = hash2(cell + o);
      vec2 c = o + 0.5 + 0.32 * sin(t * 0.35 + 6.2831 * h);
      float dd = length(c - f);
      if (dd < best) { best = dd; bestOff = f - c; bestId = cell + o; }
    }
    vec2 h = hash2(bestId);
    float ang = atan(bestOff.y, bestOff.x) + h.x * 6.2831 + t * 0.08;
    float rad = length(bestOff);
    float open = 0.5 + 0.05 * sin(t * 0.6 + h.y * 6.2831) + bloom * 0.12;
    float petal = open * (0.62 + 0.38 * abs(cos(2.0 * ang)));
    float inside = smoothstep(petal, petal - 0.06, rad);
    float tone = fract(h.x + h.y * 0.5 + fbm(bestId * 0.3 + t * 0.03) * 0.6);
    // mostly sky and lilac, cobalt only where the head is deepest
    float depth = fbm(bestId * 0.18 + t * 0.02);
    vec3 fl = mix(sky, lilac, smoothstep(0.3, 0.8, tone));
    fl = mix(fl, cobalt, smoothstep(0.55, 0.8, depth) * 0.85);
    fl = mix(fl, deep, 0.35 * smoothstep(0.0, petal, rad)); // darker toward petal tips
    col = mix(mix(paper, sky, 0.25), fl, inside * 0.7);
    col = mix(col, deep, smoothstep(0.045, 0.0, rad) * 0.45); // floret center
  } else {
    vec2 p = frag / (85.0 * uDpr) + uSeed;
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.06)), fbm(p + vec2(5.2, 1.3) - vec2(t * 0.05, 0.0)));
    float r = fbm(p + 2.2 * q + vec2(t * 0.03, -t * 0.02));
    float pigment = smoothstep(0.42, 0.8, r + bloom * 0.45);
    float vein = smoothstep(0.035, 0.0, abs(r - 0.6)); // pigment pools at the wet edge
    if (uMode == 0) {
      col = mix(paper, sky, smoothstep(0.25, 0.7, q.x) * 0.7);
      col = mix(col, lilac, smoothstep(0.45, 0.85, q.y) * 0.6);
      col = mix(col, cobalt, pigment * 0.6);
      col = mix(col, deep, vein * 0.35 * (0.4 + pigment));
    } else {
      col = mix(navy, deep, smoothstep(0.2, 0.8, q.x));
      col = mix(col, sky, pigment * 0.55);
      col = mix(col, lilac, smoothstep(0.55, 0.9, q.y) * 0.45 * (1.0 - pigment));
      col = mix(col, paper, vein * 0.25);
    }
  }

  // paper tooth and grain
  float fiber = fbm(vec2(uv.x * 60.0, uv.y * 9.0) + uSeed) - 0.5;
  float grain = hash(frag + floor(uSeed)) - 0.5;
  col += fiber * 0.035 + grain * 0.07;
  gl_FragColor = vec4(col, 1.0);
}
`;

class PigmentRenderer {
  private gl: WebGLRenderingContext;
  private glCanvas: HTMLCanvasElement;
  private uni: Record<string, WebGLUniformLocation | null> = {};
  private surfaces = new Set<Surface>();
  private raf = 0;
  private start = performance.now();
  private reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  constructor(gl: WebGLRenderingContext, canvas: HTMLCanvasElement) {
    this.gl = gl;
    this.glCanvas = canvas;
    const prog = gl.createProgram()!;
    for (const [type, src] of [
      [gl.VERTEX_SHADER, VERT],
      [gl.FRAGMENT_SHADER, FRAG],
    ] as const) {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
      gl.attachShader(prog, sh);
    }
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    for (const n of ["uRes", "uOrigin", "uTime", "uPointer", "uHover", "uSeed", "uMode", "uDpr"]) this.uni[n] = gl.getUniformLocation(prog, n);
  }

  add(s: Surface) {
    this.surfaces.add(s);
    this.kick();
  }

  remove(s: Surface) {
    this.surfaces.delete(s);
  }

  kick() {
    if (this.reduce) {
      requestAnimationFrame(() => this.frame(false));
      return;
    }
    if (!this.raf) this.raf = requestAnimationFrame(() => this.frame(true));
  }

  private draw(s: Surface, time: number) {
    const { gl } = this;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = s.canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (s.canvas.width !== w || s.canvas.height !== h) {
      s.canvas.width = w;
      s.canvas.height = h;
    }
    if (this.glCanvas.width < w || this.glCanvas.height < h) {
      this.glCanvas.width = Math.max(this.glCanvas.width, w);
      this.glCanvas.height = Math.max(this.glCanvas.height, h);
    }
    // draw in the bottom-left corner of the GL canvas, then copy across
    gl.viewport(0, 0, w, h);
    gl.uniform2f(this.uni.uRes, w, h);
    gl.uniform2f(this.uni.uOrigin, 0, 0);
    gl.uniform1f(this.uni.uTime, time);
    gl.uniform2f(this.uni.uPointer, s.pointer[0], s.pointer[1]);
    gl.uniform1f(this.uni.uHover, s.hover);
    gl.uniform1f(this.uni.uSeed, s.seed);
    gl.uniform1i(this.uni.uMode, s.mode);
    gl.uniform1f(this.uni.uDpr, dpr);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    const ctx = s.canvas.getContext("2d");
    ctx?.clearRect(0, 0, w, h);
    ctx?.drawImage(this.glCanvas, 0, this.glCanvas.height - h, w, h, 0, 0, w, h);
  }

  private last = 0;

  private frame(loop: boolean) {
    this.raf = 0;
    // 30fps is plenty for drifting pigment and halves the GPU work
    const now = performance.now();
    if (loop && now - this.last < 32) {
      this.raf = requestAnimationFrame(() => this.frame(true));
      return;
    }
    this.last = now;
    const time = (performance.now() - this.start) / 1000;
    let active = false;
    for (const s of Array.from(this.surfaces)) {
      s.hover += (s.hoverTarget - s.hover) * 0.12;
      if (!s.visible) continue;
      this.draw(s, this.reduce ? 4.0 + s.seed : time + s.seed);
      active = true;
    }
    if (loop && active) this.raf = requestAnimationFrame(() => this.frame(true));
  }
}

let renderer: PigmentRenderer | null | undefined;

/** The shared renderer, or null when WebGL is unavailable. */
export const getPigmentRenderer = () => {
  if (renderer !== undefined) return renderer;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 240;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: false, antialias: false, preserveDrawingBuffer: true });
    renderer = gl ? new PigmentRenderer(gl, canvas) : null;
  } catch {
    renderer = null;
  }
  return renderer;
};
