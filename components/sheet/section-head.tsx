import { ReactNode } from "react";

/** A line-sheet section rule: heavy rule, condensed title, optional meta at right. */
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
  <div className="border-t-[3px] border-ink pt-3 pb-5 flex flex-wrap items-end gap-x-6 gap-y-3">
    <h2 id={id} className="font-condensed font-black uppercase text-4xl sm:text-5xl leading-[0.9] tracking-tight">
      {title}
    </h2>
    {meta && <p className="font-mono text-xs uppercase text-ink-3 tabular pb-1">{meta}</p>}
    {children && <div className="ml-auto">{children}</div>}
  </div>
);
