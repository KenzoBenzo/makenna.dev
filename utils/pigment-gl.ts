/*
  One shared WebGL context paints every shader surface on the page.
  Each surface owns a 2D canvas; per frame the renderer draws the shader for
  that surface into a corner of an offscreen GL canvas and copies the pixels
  across. Surfaces pause off-screen, and reduced motion gets a single frame.
*/

export type PigmentMode = 0 | 1 | 2 | 3; // 0 pigment flow, 1 deep bloom, 2 floret cells, 3 hydrangea heads

export type Surface = {
  canvas: HTMLCanvasElement;
  mode: PigmentMode;
  seed: number;
  pointer: [number, number];
  hover: number; // eased 0..1
  hoverTarget: number;
  visible: boolean;
  /** cap on device pixel ratio, for large surfaces */
  maxDpr?: number;
  /** hydrangea head layout for mode 3: 0 hero, 1 small accent, 2 footer band */
  layout?: number;
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
uniform int uLayout;

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

// Hydrangea head layouts. Layouts 0 and 1 are CSS px from the top-right corner:
// (from right, from top, radius, depth 0 pale .. 1 deep). Layout 2 (footer) is
// (fraction of width from left, px up from the bottom, radius, depth).
vec4 head(int layout, int i) {
  if (layout == 1) {
    if (i == 0) return vec4(70.0, 60.0, 44.0, 0.45);
    if (i == 1) return vec4(150.0, 104.0, 26.0, 0.75);
    if (i == 2) return vec4(28.0, 140.0, 20.0, 0.3);
    return vec4(0.0);
  }
  if (layout == 2) {
    if (i == 0) return vec4(0.04, 30.0, 120.0, 0.7);
    if (i == 1) return vec4(0.17, 10.0, 80.0, 0.3);
    if (i == 2) return vec4(0.29, 40.0, 140.0, 0.85);
    if (i == 3) return vec4(0.43, 0.0, 92.0, 0.4);
    if (i == 4) return vec4(0.56, 36.0, 128.0, 0.6);
    if (i == 5) return vec4(0.7, 6.0, 86.0, 0.25);
    if (i == 6) return vec4(0.83, 44.0, 136.0, 0.9);
    if (i == 7) return vec4(0.97, 14.0, 100.0, 0.45);
    return vec4(0.0);
  }
  if (i == 0) return vec4(90.0, 205.0, 160.0, 0.75);
  if (i == 1) return vec4(335.0, 120.0, 80.0, 0.25);
  if (i == 2) return vec4(255.0, 360.0, 108.0, 0.55);
  if (i == 3) return vec4(455.0, 300.0, 40.0, 0.85);
  if (i == 4) return vec4(60.0, 455.0, 66.0, 0.3);
  if (i == 5) return vec4(430.0, 450.0, 30.0, 0.6);
  return vec4(0.0);
}

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
  float alpha = 1.0;

  if (uMode == 3) {
    // painted hydrangea heads: whole four-petal florets on soft domes
    vec2 P = vec2(frag.x, uRes.y - frag.y) / uDpr; // CSS px, top-left origin
    float W = uRes.x / uDpr;
    float k = clamp(W / 1100.0, 0.42, 1.0); // heads shrink with the screen
    float cellPx = 15.0 * mix(0.75, 1.0, k);
    vec2 g = P / cellPx;
    vec2 cell = floor(g), f = fract(g);
    float best = 9.0; vec2 bestOff = vec2(0.0); vec2 bestC = vec2(0.0); vec2 bestId = vec2(0.0);
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 o = vec2(float(x), float(y));
      vec2 h = hash2(cell + o);
      vec2 c = o + 0.5 + 0.28 * sin(t * 0.25 + 6.2831 * h);
      float dd = length(c - f);
      if (dd < best) { best = dd; bestOff = f - c; bestC = cell + c; bestId = cell + o; }
    }
    vec2 w = bestC * cellPx; // floret center in CSS px

    // which head owns this floret, and how deep inside it sits
    float cov = -1.0; float depth = 0.5; vec2 rel = vec2(0.0);
    float H = uRes.y / uDpr;
    for (int i = 0; i < 8; i++) {
      vec4 hd = head(uLayout, i);
      if (hd.z <= 0.0) continue;
      vec2 c = uLayout == 2 ? vec2(hd.x * W, H - hd.y) : vec2(W - hd.x * k, hd.y * k);
      c += vec2(sin(t * 0.2 + float(i)), cos(t * 0.17 + float(i))) * 2.0;
      float edge = 0.84 + 0.3 * fbm(w / 34.0 + float(i) * 7.3);
      float rr = hd.z * (uLayout == 2 ? mix(0.7, 1.0, k) : k);
      float dn = length(w - c) / (rr * edge);
      if (1.0 - dn > cov) { cov = 1.0 - dn; depth = hd.w; rel = (w - c) / rr; }
    }

    vec2 h = hash2(bestId);
    vec2 ptrPx = vec2(uPointer.x * W, (1.0 - uPointer.y) * uRes.y / uDpr);
    float near = exp(-dot(w - ptrPx, w - ptrPx) / (110.0 * 110.0)) * uHover;
    float ang = atan(bestOff.y, bestOff.x) + h.x * 6.2831;
    float rad = length(bestOff);
    float grow = smoothstep(0.0, 0.5, cov); // florets shrink and thin toward the rim
    float open = (0.52 + 0.14 * grow + 0.03 * sin(t * 0.5 + h.y * 6.2831) + near * 0.07);
    // broad, rounded sepals: four soft lobes rather than a thin cross
    float lobe = pow(abs(cos(2.0 * ang)), 0.35);
    float petal = open * (0.42 + 0.58 * lobe);
    float inside = smoothstep(petal, petal - 0.14, rad) * step(0.0, cov);

    // color: pale periwinkle to blue, lit from the top left, a few lilac florets
    vec3 light = hex(206.0, 218.0, 247.0);
    vec3 mid = hex(140.0, 164.0, 232.0);
    vec3 blue = hex(96.0, 128.0, 222.0);
    vec3 shade = hex(70.0, 96.0, 196.0);
    vec3 lil = hex(178.0, 166.0, 234.0);
    float s = clamp(0.12 + depth * 0.4 + (rel.x + rel.y) * 0.22 + (h.y - 0.5) * 0.35 - near * 0.15, 0.0, 1.0);
    vec3 fl = mix(light, mid, smoothstep(0.0, 0.45, s));
    fl = mix(fl, blue, smoothstep(0.4, 0.75, s));
    fl = mix(fl, shade, smoothstep(0.7, 1.0, s) * 0.8);
    fl = mix(fl, lil, step(0.86, h.x) * 0.55);
    fl = mix(fl, shade, smoothstep(petal * 0.5, petal, rad) * 0.3); // pigment pools at petal edges
    fl = mix(fl, shade, smoothstep(0.07, 0.0, rad) * 0.5); // tiny center

    // a faint wash under each head, then the florets over it
    float wash = smoothstep(-0.05, 0.55, cov) * 0.16;
    alpha = max(wash, inside * (0.22 + 0.48 * grow));
    col = mix(mix(light, mid, 0.55 + depth * 0.3), fl, inside);
    alpha *= 0.9 + 0.1 * fbm(P / 6.0); // paper tooth in the pigment
    // dissolve toward every edge of the surface, never a hard cut
    float edgeFade = smoothstep(0.0, 64.0, H - P.y) * smoothstep(0.0, 48.0, P.y) * smoothstep(0.0, 80.0, W - P.x) * smoothstep(0.0, 48.0, P.x);
    if (uLayout == 2) edgeFade = smoothstep(0.0, 90.0, P.y) * smoothstep(0.0, 40.0, W - P.x) * smoothstep(0.0, 40.0, P.x);
    alpha *= edgeFade;
    if (uLayout == 1) alpha *= 0.6;
  } else if (uMode == 2) {
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
      col = mix(col, sky, pigment * 0.42);
      col = mix(col, lilac, smoothstep(0.55, 0.9, q.y) * 0.45 * (1.0 - pigment));
      col = mix(col, paper, vein * 0.25);
    }
  }

  // paper tooth and grain
  float fiber = fbm(vec2(uv.x * 60.0, uv.y * 9.0) + uSeed) - 0.5;
  float grain = hash(frag + floor(uSeed)) - 0.5;
  col += fiber * 0.035 + grain * 0.07;
  gl_FragColor = vec4(col, alpha);
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
    for (const n of ["uRes", "uOrigin", "uTime", "uPointer", "uHover", "uSeed", "uMode", "uDpr", "uLayout"]) this.uni[n] = gl.getUniformLocation(prog, n);
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
    const dpr = Math.min(window.devicePixelRatio || 1, s.maxDpr ?? 2);
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
    gl.uniform1i(this.uni.uLayout, s.layout ?? 0);
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
