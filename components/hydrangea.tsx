import { useId, useMemo } from "react";

/*
  Painted hydrangeas, drawn in code. Each head is a dome of tiny four-petal
  florets in cobalt, periwinkle and violet, run through a watercolor filter
  (organic edges, pigment pooling, paper grain). Used as a background cluster.
  Output is seeded, so server and client render the same flowers.
*/

type RGB = [number, number, number];

const hex = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
const mix = (a: RGB, b: RGB, t: number): RGB => a.map((v, i) => Math.round(v + (b[i] - v) * t)) as RGB;
const css = ([r, g, b]: RGB) => `rgb(${r} ${g} ${b})`;
const clamp = (v: number) => Math.min(1, Math.max(0, v));

// Acidic (cobalt to periwinkle, a touch of lilac) and alkaline (rose to blush).
const BLUE = ["#1b3fc4", "#2558dc", "#3f78ee", "#73a0f6", "#aecaf9", "#e0ebfd"].map(hex);
const VIOLET = ["#4b2fb8", "#6a4fd6", "#8f78e8", "#b8a8f3", "#ddd4fb", "#efeafd"].map(hex);

const pick = (family: RGB[], t: number): RGB => {
  const x = clamp(t) * 0.999 * (family.length - 1);
  const i = Math.floor(x);
  return mix(family[i], family[i + 1], x - i);
};

const rng = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

type Floret = { x: number; y: number; r: number; rot: number; shade: number; tone: number; lilac: number; petals: number[] };

/** One head: florets on a dome, lit from the top left, painted back to front. */
const buildHead = (seed: number, count: number): Floret[] => {
  const rand = rng(seed);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const out: Floret[] = [];
  for (let i = 0; i < count; i++) {
    const d = Math.sqrt((i + 0.5) / count);
    const a = i * golden + rand() * 0.4;
    const z = Math.sqrt(1 - d * d * 0.9);
    const wobble = 1 + (rand() - 0.5) * 0.18 * d;
    out.push({
      x: Math.cos(a) * d * 46 * wobble,
      y: Math.sin(a) * d * 38 * wobble - z * 3,
      r: 4.6 + z * 2.2 + rand() * 1.4,
      rot: rand() * 90,
      shade: clamp(0.1 + (1 - z) * 0.35 + (Math.sin(a) * d * 0.5 + 0.5) * 0.3 + (rand() - 0.5) * 0.45),
      tone: rand(),
      lilac: rand() < 0.32 ? 0.45 + rand() * 0.5 : 0,
      petals: [0, 1, 2, 3].map(() => 0.85 + rand() * 0.3),
    });
  }
  return out.sort((p, q) => p.r - q.r);
};

const petalPath = (r: number) =>
  `M0 0 C ${-r * 0.78} ${-r * 0.2}, ${-r * 0.74} ${-r * 1.08}, 0 ${-r} C ${r * 0.74} ${-r * 1.08}, ${r * 0.78} ${-r * 0.2}, 0 0 Z`;

/** One floret, used as Makenna's mark and as a small accent across the site. */
export const Floret = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="-12 -12 24 24" aria-hidden className={className}>
    <g transform="rotate(20)">
      {[0, 90, 180, 270].map((deg, i) => (
        <path key={deg} transform={`rotate(${deg})`} d={petalPath(11)} fill={i % 2 ? "#4a72e6" : "#2f55d4"} />
      ))}
    </g>
    <circle r={1.8} fill="#f8f8fc" />
  </svg>
);

type HeadSpec = { x: number; y: number; scale: number; tilt: number; depth: number; seed: number; violet: number };

// A loose cluster, listed back to front. depth: 0 pale, 1 deep. violet: share of purple heads.
const HEADS: HeadSpec[] = [
  { x: 191, y: 145, scale: 1.5, tilt: -10, depth: 0.25, seed: 21, violet: 0.2 },
  { x: 312, y: 104, scale: 1.65, tilt: 4, depth: 0.95, seed: 33, violet: 0.05 },
  { x: 448, y: 145, scale: 1.55, tilt: 12, depth: 0.55, seed: 48, violet: 0.7 },
  { x: 562, y: 97, scale: 1.4, tilt: -6, depth: 0.85, seed: 114, violet: 0.1 },
  { x: 134, y: 266, scale: 1.35, tilt: -16, depth: 0.9, seed: 55, violet: 0.35 },
  { x: 586, y: 250, scale: 1.45, tilt: 16, depth: 0.2, seed: 61, violet: 0.5 },
  { x: 272, y: 234, scale: 1.8, tilt: -4, depth: 0.7, seed: 7, violet: 0.15 },
  { x: 425, y: 266, scale: 1.75, tilt: 6, depth: 0.12, seed: 74, violet: 0.6 },
  { x: 199, y: 371, scale: 1.45, tilt: -8, depth: 0.4, seed: 86, violet: 0.25 },
  { x: 521, y: 379, scale: 1.5, tilt: 10, depth: 0.95, seed: 92, violet: 0.3 },
  { x: 360, y: 387, scale: 1.7, tilt: 0, depth: 0.85, seed: 103, violet: 0.08 },
];

const Head = ({ spec, filterId, washId, index }: { spec: HeadSpec; filterId: string; washId: string; index: number }) => {
  const florets = useMemo(() => buildHead(spec.seed, 118), [spec.seed]);

  return (
    <g transform={`translate(${spec.x} ${spec.y}) rotate(${spec.tilt}) scale(${spec.scale})`}>
      <g className="hydrangea-head" style={{ animationDelay: `${index * 0.08}s` }}>
        {/* a loose wash of color under the florets, like the first layer of paint */}
        <path
          d="M-46 -4 C -48 -30, -18 -44, 4 -40 C 30 -44, 50 -24, 46 2 C 50 26, 24 40, 0 36 C -26 42, -50 22, -46 -4 Z"
          fill={css(mix(pick(BLUE, 0.25 + (1 - spec.depth) * 0.5), pick(VIOLET, 0.25 + (1 - spec.depth) * 0.5), spec.violet))}
          opacity={0.38}
          filter={`url(#${washId})`}
        />
        <g filter={`url(#${filterId})`}>
        {florets.map((f, i) => {
          // deep heads sit low on the ramp, pale heads high
          const s = clamp(f.shade * 0.75 + (1 - spec.depth) * 0.5);
          // each floret leans blue or violet; violet heads get more violet florets
          const v = clamp(spec.violet + (f.lilac ? f.lilac : 0) * (1 - spec.violet) + (f.tone - 0.5) * 0.2);
          const base = mix(pick(BLUE, s), pick(VIOLET, s), v);
          const edge = mix(base, mix(BLUE[0], VIOLET[0], v), 0.55);
          return (
            <g key={i} transform={`translate(${f.x.toFixed(1)} ${f.y.toFixed(1)}) rotate(${f.rot.toFixed(0)})`}>
              {f.petals.map((k, j) => (
                <path
                  key={j}
                  transform={`rotate(${j * 90}) scale(${k.toFixed(2)})`}
                  d={petalPath(f.r)}
                  fill={css(base)}
                  fillOpacity={0.8}
                />
              ))}
              <circle r={1.1} fill={css(edge)} fillOpacity={0.55} />
            </g>
          );
        })}
        </g>
      </g>
    </g>
  );
};

/** Decorative background cluster of painted hydrangeas. */
export const HydrangeaField = ({ className = "" }: { className?: string }) => {
  const id = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 720 520" overflow="visible" className={className} aria-hidden focusable="false">
      <defs>
        <filter id={`${id}-paint`} x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
          {/* organic edges: low-frequency turbulence pushes every outline off true */}
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" result="wobble" />
          <feGaussianBlur in="wobble" stdDeviation="0.8" result="soft" />
          {/* pigment pools darker at the edges as watercolor dries */}
          <feGaussianBlur in="soft" stdDeviation="2.4" result="spread" />
          <feComposite in="soft" in2="spread" operator="arithmetic" k1="0" k2="1.7" k3="-0.7" k4="0" result="pooled" />
          {/* granulation: paint settling into the paper's tooth */}
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.45 1.2" result="grainAlpha" />
          <feComposite in="pooled" in2="grainAlpha" operator="in" />
        </filter>
        <filter id={`${id}-wash`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {HEADS.map((h, i) => (
        <Head key={h.seed} spec={h} filterId={`${id}-paint`} washId={`${id}-wash`} index={i} />
      ))}
    </svg>
  );
};
