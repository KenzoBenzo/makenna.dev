import { mdxComponents } from "@/utils/custom-mdx-components";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type ArticleSpec = { label: string; value: ReactNode };

/** Spec-sheet header plus prose body, shared by stories and writing. */
export const Article = ({
  back,
  sku,
  title,
  description,
  specs,
  cover,
  links = [],
  source,
}: {
  back: { href: string; label: string };
  sku?: string;
  title: string;
  description?: string | null;
  specs: ArticleSpec[];
  cover?: { src: string; alt: string; width: number; height: number };
  links?: { label: string; href: string }[];
  source: MDXRemoteSerializeResult;
}) => (
  <article className="pt-8">
    <Link href={back.href} className="inline-flex items-center gap-1.5 text-sm no-underline hover:text-accent">
      <ArrowLeft size={16} strokeWidth={1.75} aria-hidden /> {back.label}
    </Link>

    <header className="mt-6 border-t-2 border-ink pt-4 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div>
        <h1 className="font-display font-extrabold leading-[0.95] text-[clamp(2.5rem,6vw,5rem)]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 font-head font-bold text-xl sm:text-2xl leading-snug max-w-[38ch]">{description}</p>
        )}
      </div>
      <div className="self-end">
        <dl className="border-t border-ink">
          {sku && (
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-2.5 border-b border-hair text-sm">
              <dt className="font-mono text-xs uppercase text-ink-3 pt-0.5">SKU</dt>
              <dd className="font-mono text-code tabular">{sku}</dd>
            </div>
          )}
          {specs.map((s) => (
            <div key={s.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-2.5 border-b border-hair text-sm">
              <dt className="font-mono text-xs uppercase text-ink-3 pt-0.5">{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="border border-ink rounded-full text-sm font-semibold px-4 h-9 inline-flex items-center gap-1 no-underline transition-colors hover:bg-ink hover:text-paper"
              >
                {l.label} <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden />
              </a>
            ))}
          </div>
        )}
      </div>
    </header>

    {cover && (
      <div className="mt-10 relative border border-hair rounded-2xl bg-stock overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          priority
          sizes="(min-width: 1360px) 1280px, 100vw"
          className="w-full h-auto max-h-[70vh] object-cover object-top"
        />
      </div>
    )}

    <div className="mt-12 max-w-[68ch] mx-auto">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  </article>
);
