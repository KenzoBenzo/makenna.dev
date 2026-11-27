import { LineItem } from "@/utils/line";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const Row = ({
  item,
  open,
  onToggle,
  hasStory,
  priority,
}: {
  item: LineItem;
  open: boolean;
  onToggle: () => void;
  hasStory: boolean;
  priority?: boolean;
}) => {
  const panelId = useId();
  const reduce = useReducedMotion();

  return (
    <li className="border-b border-hair">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group w-full text-left grid grid-cols-[1fr_auto] md:grid-cols-[6rem_10rem_minmax(0,1fr)_13rem_9rem_2.5rem] gap-x-4 md:gap-x-6 gap-y-2 py-4 items-start cursor-pointer"
      >
        <span className="hidden md:block font-mono text-sm text-code tabular pt-1">{item.sku}</span>

        <span className="hidden md:block relative aspect-[16/10] overflow-hidden rounded-lg bg-stock">
          <Image
            src={item.image.src}
            alt=""
            fill
            sizes="160px"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out-expo motion-safe:group-hover:scale-[1.04]"
          />
        </span>

        <span className="min-w-0">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-head font-extrabold text-2xl sm:text-3xl leading-none group-hover:text-accent transition-colors">
              {item.name}
            </span>
            {item.isNew && (
              <span className="font-mono text-[11px] bg-lilac text-lilac-ink rounded-full px-2 py-1 leading-none tabular">
                New
              </span>
            )}
          </span>
          <span className="block mt-2 text-ink-2 text-[15px] leading-relaxed max-w-[60ch]">
            {item.summary}
          </span>
          <span className="md:hidden block mt-3 font-semibold text-sm">{item.proof}</span>
          <span className="md:hidden block mt-1 font-mono text-xs uppercase text-ink-3 tabular">
            <span className="text-code">{item.sku}</span> · {item.role} · <span className="whitespace-nowrap">since {item.since}</span>
          </span>
        </span>

        <span className="hidden md:block pt-1 font-head font-bold text-lg leading-snug">{item.proof}</span>
        <span className="hidden md:block pt-1 text-sm">
          {item.role}
          <span className="block mt-1 font-mono text-xs text-ink-2 tabular">since {item.since}</span>
        </span>

        <span
          aria-hidden
          className="justify-self-end size-9 rounded-full border border-hair inline-flex items-center justify-center transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent"
        >
          {open ? <Minus size={18} strokeWidth={1.75} /> : <Plus size={18} strokeWidth={1.75} />}
        </span>
        <span className="sr-only">{open ? "Close" : "Open"} spec for {item.name}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="spec"
            initial={reduce ? false : { height: 0 }}
            animate={{ height: "auto", transition: { duration: 0.55, ease } }}
            exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { height: 0, transition: { duration: 0.35, ease } }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-[6rem_minmax(0,1.15fr)_minmax(0,1fr)] gap-x-6 gap-y-6 pb-8 pt-2">
              <div className="hidden md:block" />
              <motion.div
                initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, ease, delay: 0.05 } }}
                className="relative aspect-[16/10] bg-stock border border-hair rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease, delay: 0.15 } }}
                className="flex flex-col"
              >
                <dl className="border-t border-ink">
                  {item.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-[7rem_1fr] gap-4 py-2.5 border-b border-hair text-sm">
                      <dt className="font-mono text-xs uppercase text-ink-3 pt-0.5">{s.label}</dt>
                      <dd className="leading-relaxed">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  {hasStory && item.storySlug && (
                    <Link
                      href={`/projects/${item.storySlug}`}
                      className="bg-ink text-paper rounded-full text-sm font-semibold px-5 h-10 inline-flex items-center no-underline transition-colors hover:bg-accent"
                    >
                      Read the story
                    </Link>
                  )}
                  {item.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      {...(l.href.endsWith(".pdf") ? { download: "makenna-smutz_resume" } : {})}
                      className="border border-ink rounded-full text-sm font-semibold px-5 h-10 inline-flex items-center gap-1.5 no-underline transition-colors hover:bg-ink hover:text-paper"
                    >
                      {l.label}
                      {l.external && <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export const LineTable = ({ items, storySlugs }: { items: LineItem[]; storySlugs: string[] }) => {
  const [openSku, setOpenSku] = useState<string | null>(null);

  return (
    <div>
      <div
        aria-hidden
        className="hidden md:grid grid-cols-[6rem_10rem_minmax(0,1fr)_13rem_9rem_2.5rem] gap-x-6 py-2 border-y border-ink font-mono text-xs uppercase text-ink-3"
      >
        <span>SKU</span>
        <span>Item</span>
        <span>Description</span>
        <span>Proof</span>
        <span>Role</span>
        <span />
      </div>
      <ul className={clsx("md:border-t-0 border-t-2 border-ink")}>
        {items.map((item, i) => (
          <Row
            key={item.sku}
            item={item}
            priority={i < 2}
            open={openSku === item.sku}
            onToggle={() => setOpenSku(openSku === item.sku ? null : item.sku)}
            hasStory={!!item.storySlug && storySlugs.includes(item.storySlug)}
          />
        ))}
      </ul>
    </div>
  );
};
