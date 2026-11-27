import { Pigment } from "@/components/pigment";
import clsx from "clsx";
import { ReactNode } from "react";

/* Small shared pieces so badges, toggles and quiet buttons look the same everywhere. */

const tones = {
  new: "bg-[#e5edfc] text-[#1848ad] ring-[#1f5bd0]/15",
  sage: "bg-sage text-sage-ink ring-sage-ink/15",
  plain: "bg-paper text-ink-2 ring-hair",
} as const;

/** A small pill label, vertically centered with whatever it sits beside. */
export const Tag = ({ tone = "plain", children }: { tone?: keyof typeof tones; children: ReactNode }) => (
  <span
    className={clsx(
      "inline-flex h-5 shrink-0 items-center self-center rounded-full px-2 font-mono text-[11px] leading-none ring-1 ring-inset",
      tones[tone]
    )}
  >
    {children}
  </span>
);

/** Plus that turns into a minus: the vertical bar rotates flat as the row opens. */
export const ToggleIcon = ({ open, size = 18 }: { open: boolean; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
    <path d="M5 12h14" />
    <path
      d="M12 5v14"
      className="origin-center transition-transform duration-300 ease-out-expo motion-reduce:transition-none"
      style={{ transformBox: "fill-box", transform: open ? "rotate(90deg) scaleY(0.001)" : "rotate(0deg)" }}
    />
  </svg>
);

/** Quiet secondary button: paper at rest, lifts to white with a cobalt edge on hover. */
export const quiet =
  "rounded-full bg-paper text-ink ring-1 ring-inset ring-hair transition-[background-color,box-shadow,color,transform] duration-200 ease-out-expo hover:bg-white hover:text-accent hover:ring-accent/40 hover:shadow-[0_8px_18px_-12px_rgb(29_35_64/0.45)] hover:-translate-y-px active:translate-y-0";

/** Filter / choice chip: quiet at rest, Deep bloom with white text when on. */
export const chip = (on: boolean) =>
  clsx(
    "inline-flex h-8 items-center px-3.5 text-sm cursor-pointer",
    on ? "relative isolate overflow-hidden rounded-full text-white" : quiet
  );

/** Drop inside a chip that is on. */
export const ChipPaint = ({ on, seed }: { on: boolean; seed: number }) => (on ? <Pigment mode={1} seed={seed} /> : null);
