import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type IndexRow = {
  href: string;
  code: string;
  title: string;
  description?: string | null;
  meta: ReactNode;
  thumb?: { src: string };
};

/** A line-sheet index: one row per story or post. */
export const IndexTable = ({ rows, columns }: { rows: IndexRow[]; columns: [string, string, string] }) => (
  <div>
    <div aria-hidden className="hidden md:grid grid-cols-[6.5rem_10rem_1fr_15rem] gap-x-6 py-2 border-y border-ink font-mono text-xs uppercase text-ink-3">
      <span>{columns[0]}</span>
      <span />
      <span>{columns[1]}</span>
      <span>{columns[2]}</span>
    </div>
    <ul className="border-t-2 md:border-t-0 border-ink">
      {rows.map((r) => (
        <li key={r.href} className="border-b border-hair">
          <Link
            href={r.href}
            className="group no-underline grid grid-cols-1 md:grid-cols-[6.5rem_10rem_1fr_15rem] gap-x-4 md:gap-x-6 gap-y-1 py-5 items-start"
          >
            <span className="hidden md:block font-mono text-sm text-code tabular pt-1">{r.code}</span>
            <span className="hidden md:block relative aspect-[16/10] overflow-hidden rounded-lg bg-white ring-1 ring-inset ring-hair">
              {r.thumb && "src" in r.thumb ? (
                <Image src={r.thumb.src} alt="" fill sizes="160px" className="object-contain p-1 transition-transform duration-500 ease-out-expo motion-safe:group-hover:scale-[1.03]" />
              ) : null}
            </span>
            <span className="min-w-0">
              <span className="block font-head font-extrabold text-2xl sm:text-3xl leading-[1.05] group-hover:text-accent transition-colors">
                {r.title}
              </span>
              {r.description && <span className="block mt-2 text-ink-2 leading-relaxed max-w-[62ch]">{r.description}</span>}
            </span>
            <span className="font-mono text-xs uppercase text-ink-2 tabular md:pt-2 whitespace-pre-line leading-relaxed"><span className="md:hidden text-code">{r.code} · </span>{r.meta}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
