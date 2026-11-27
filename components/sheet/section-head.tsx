import { ReactNode } from "react";
import { Floret } from "../hydrangea";

/** A line-sheet section rule: rule, mono title, optional meta at right. */
export const SectionHead = ({
  id,
  title,
  meta,
  children,
}: {
  id?: string;
  title: string;
  meta?: ReactNode;
  children?: ReactNode;
}) => (
  <div className="border-t-2 border-ink pt-3 pb-5 flex flex-wrap items-end gap-x-6 gap-y-3">
    <h2 id={id} className="flex items-center gap-2.5 font-display font-extrabold text-3xl sm:text-4xl leading-none">
      <Floret size={20} className="text-accent shrink-0" />
      {title}
    </h2>
    {meta && <p className="font-mono text-xs uppercase text-ink-3 tabular pb-1">{meta}</p>}
    {children && <div className="ml-auto">{children}</div>}
  </div>
);
