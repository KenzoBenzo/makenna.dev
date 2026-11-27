import { Pigment } from "@/components/pigment";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { chip, ChipPaint } from "@/components/ui";

const ease = [0.16, 1, 0.3, 1] as const;

// Public prices only (brand guide and wholesale listings). No costs.
const lines = [
  { id: "full", label: "3 oz bag", msrp: 9.99, wholesale: 5.39, pack: "Case of 30" },
  { id: "maple", label: "New York Maple", msrp: 9.99, wholesale: 5.99, pack: "Case of 30" },
  { id: "mini", label: "8 g mini", msrp: 3.99, wholesale: 2.39, pack: "Case of 45" },
] as const;

const money = (n: number) => `$${n.toFixed(2)}`;

/** Retailer margin at the public prices, against the 40% floor and 50% goal. */
const MarginLadder = () => {
  const [active, setActive] = useState<(typeof lines)[number]["id"]>("full");
  const reduce = useReducedMotion();
  const line = lines.find((l) => l.id === active)!;
  const margin = (line.msrp - line.wholesale) / line.msrp;

  return (
    <div className="rounded-2xl bg-paper border border-hair p-5">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Pick a product">
        {lines.map((l) => (
          <button
            key={l.id}
            type="button"
            aria-pressed={active === l.id}
            onClick={() => setActive(l.id)}
            className={chip(active === l.id)}
          >
            <ChipPaint on={active === l.id} seed={l.label.length} />
            {l.label}
          </button>
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <dt className="font-mono text-xs text-ink-3">Shelf price</dt>
          <dd className="mt-1 font-head font-bold text-2xl tabular">{money(line.msrp)}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink-3">Wholesale</dt>
          <dd className="mt-1 font-head font-bold text-2xl tabular">{money(line.wholesale)}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink-3">Shop keeps</dt>
          <dd className="mt-1 font-head font-bold text-2xl tabular text-code">{Math.round(margin * 100)}%</dd>
        </div>
      </dl>

      <div className="mt-5" aria-hidden>
        <div className="relative h-3 rounded-full bg-stock">
          <motion.div
            className="absolute inset-y-0 left-0 isolate overflow-hidden rounded-full"
            initial={false}
            animate={{ width: `${margin * 100}%` }}
            transition={{ duration: reduce ? 0 : 0.5, ease }}
          >
            <Pigment mode={0} seed={4} />
          </motion.div>
          <span className="absolute -top-1 bottom-[-4px] w-px bg-ink" style={{ left: "40%" }} />
          <span className="absolute -top-1 bottom-[-4px] w-px bg-ink/40" style={{ left: "50%" }} />
        </div>
        <div className="relative mt-1.5 h-4 font-mono text-[11px] text-ink-3">
          <span className="absolute -translate-x-full pr-1.5" style={{ left: "40%" }}>40% floor</span>
          <span className="absolute pl-1.5" style={{ left: "50%" }}>50% goal</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-2">
        {line.pack}. Shelf prices end in .49 or .99, and every product leaves a shop at least a 40% margin.
      </p>
    </div>
  );
};

const Row = ({
  title,
  summary,
  specs,
  visual,
  flip,
}: {
  title: string;
  summary: ReactNode;
  specs: string[];
  visual: ReactNode;
  flip?: boolean;
}) => (
  <li className="border-t border-hair py-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
    <div className={clsx(flip && "lg:order-2")}>
      <h3 className="font-head font-bold text-2xl">{title}</h3>
      <p className="mt-3 text-ink-2 leading-relaxed max-w-[52ch]">{summary}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {specs.map((s) => (
          <li key={s} className="pl-5 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:size-2 before:rounded-full before:bg-accent/70">
            {s}
          </li>
        ))}
      </ul>
    </div>
    <div className={clsx(flip && "lg:order-1")}>{visual}</div>
  </li>
);

const Well = ({ src, alt, width, height, caption }: { src: string; alt: string; width: number; height: number; caption?: string }) => (
  <figure>
    <div className="rounded-2xl bg-white ring-1 ring-inset ring-hair p-3 sm:p-5 overflow-hidden">
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 720px, 100vw" className="w-full h-auto" />
    </div>
    {caption && <figcaption className="mt-2 text-xs text-ink-3">{caption}</figcaption>}
  </figure>
);

const wins = [
  { logo: "/stories/cirrus-9-candy/good-morning-america.svg", alt: "Good Morning America", w: 120, h: 40, text: "Featured on Good Morning America, July 2026" },
  { logo: "/stories/cirrus-9-candy/sofi-awards.png", alt: "sofi Awards", w: 120, h: 48, text: "2027 sofi Awards finalists: New York Maple and Wild Raspberry" },
  { logo: "/stories/cirrus-9-candy/startup-cpg.svg", alt: "Startup CPG", w: 120, h: 32, text: "Startup CPG Shelfie Awards finalist: Sour Melon" },
];

export const C9Work = () => (
  <div>
    <p className="max-w-[62ch] text-ink-2 leading-relaxed -mt-1">
      Running a candy company means the design work never stays on screen. Alongside the
      storefront, I make the packaging, the pricing model and the systems that keep our wholesale
      listings honest.
    </p>

    <ul className="mt-8 grid gap-6 sm:grid-cols-3 rounded-3xl bg-white ring-1 ring-inset ring-hair p-5 sm:p-6" aria-label="Press and awards">
      {wins.map((w) => (
        <li key={w.alt} className="flex items-center gap-4">
          <span className="shrink-0 w-24 h-12 rounded-xl bg-paper ring-1 ring-inset ring-hair grid place-items-center px-2">
            <Image src={w.logo} alt={w.alt} width={w.w} height={w.h} className="max-h-8 w-auto object-contain" />
          </span>
          <span className="text-sm leading-snug">{w.text}</span>
        </li>
      ))}
    </ul>
    <p className="mt-3 text-xs text-ink-3">
      Also a Taste NY brand, rated 4.8 stars across 85 reviews.
    </p>

    <ul className="mt-10">
      <Row
        title="Packaging system"
        summary="One bag system across every flavor: a resealable pouch with a frosted window so the cotton candy sells itself, and a label layout that flexes from strawberry to maple."
        specs={[
          "3 oz (85 g) resealable pouch and an 8 g mini",
          "Color only from beet and turmeric, never dyes",
          "All 16 nutrition panels transcribed into code, so the store and the bags never disagree",
        ]}
        visual={
          <Well
            src="/stories/cirrus-9-candy/bag-lineup.png"
            alt="Five Cirrus 9 cotton candy bags: Double Strawberry, Wild Raspberry, Madagascar Vanilla, New York Maple and Salted Butter"
            width={2400}
            height={906}
            caption="Full-size bag lineup"
          />
        }
      />
      <Row
        flip
        title="Mini Caddy"
        summary="A counter display for our minis: tear off the top, fold the lid up, and the box becomes the shelf. I adapted the structure from a stock carton and took three color directions to a print-ready file."
        specs={[
          "8.5 × 4 × 5 in, 350 g white paperboard",
          "Holds eight 8 g minis in a single row",
          "Charcoal, cream and gold directions prototyped before v3.6",
        ]}
        visual={
          <Well
            src="/stories/cirrus-9-candy/mini-caddy-print.jpg"
            alt="Print artwork for the Cirrus 9 Mini Caddy laid flat on its dieline, with dimensions and fold lines"
            width={2000}
            height={1622}
            caption="Mini Caddy v3.6, print artwork on the dieline"
          />
        }
      />
      <Row
        title="Pricing and unit economics"
        summary="A 14-tab model that turns ingredient and packaging costs into case packs, box sizes and prices. Prices are set once, everything else is formulas, and a script reads every order to pick the shipping boxes people actually need."
        specs={[
          "Assumptions → COGS → price book → unit economics → P&L → path to profit",
          "Pop-up and off-price scenarios before we say yes to a buyer",
          "Box sizes chosen from how many bags real orders hold",
        ]}
        visual={<MarginLadder />}
      />
      <Row
        flip
        title="Wholesale listings"
        summary="Our Faire and Airgoods listings refresh from code: copy, prices and photos stay in sync. Lifestyle shots are generated, but the bag never is: the real bag gets composited in and checked before anything uploads."
        specs={[
          "One catalog file drives both marketplaces",
          "About 3¢ a still, and I review every image before it uploads",
          "A buyer-ready spec sheet generated from the same data",
        ]}
        visual={
          <div className="grid grid-cols-2 gap-3">
            <Well
              src="/stories/cirrus-9-candy/new-york-maple.jpg"
              alt="Studio photo of a New York Maple bag"
              width={1200}
              height={1200}
              caption="Studio bag"
            />
            <Well
              src="/stories/cirrus-9-candy/listing-generated-retail.jpg"
              alt="Generated retail shelf scene with real New York Maple bags composited in"
              width={1200}
              height={1200}
              caption="Generated shelf, real bag"
            />
          </div>
        }
      />
    </ul>

  </div>
);
