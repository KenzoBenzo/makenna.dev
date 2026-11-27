/* The floret mark: one four-petal hydrangea floret, used in the masthead, footer and favicon. */

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
