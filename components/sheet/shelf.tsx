import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Cirrus 9 core line. Lines and proof come from the brand guide; keep them verbatim.
const flavors = [
  {
    name: "Double Strawberry",
    line: "Sweet, sun-ripened strawberry, dialed up ALL the way.",
    proof: "#1 best seller",
    img: "/stories/cirrus-9-candy/flavor-double-strawberry.jpg",
    tint: "bg-lilac",
  },
  {
    name: "New York Maple",
    line: "Warm, rich, and unmistakably maple.",
    proof: "2027 sofi Awards finalist",
    img: "/stories/cirrus-9-candy/flavor-new-york-maple.jpg",
    tint: "bg-sage",
  },
  {
    name: "Wild Raspberry",
    line: "Sharp, juicy raspberry meets your favorite county fair.",
    proof: "2027 sofi Awards finalist",
    img: "/stories/cirrus-9-candy/flavor-wild-raspberry.jpg",
    tint: "bg-lilac",
  },
  {
    name: "Sour Melon",
    line: "Juicy summer melon with a clean sour kick.",
    proof: "Shelfie Awards finalist",
    img: "/stories/cirrus-9-candy/flavor-sour-melon.jpg",
    tint: "bg-sage",
  },
];

export const Shelf = () => (
  <div>
    <p className="max-w-[62ch] text-ink-2 leading-relaxed -mt-1 mb-8">
      The Cirrus 9 core line: organic cotton candy hand spun in the Hudson Valley. I designed and
      built the store, its product pages and the software that keeps every listing in sync.
    </p>
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
      {flavors.map((f) => (
        <li key={f.name} className="group">
          <a href="https://cirrus9candy.com" target="_blank" rel="noreferrer" className="no-underline block">
            <span className={`relative block aspect-square rounded-2xl overflow-hidden ${f.tint}`}>
              <Image
                src={f.img}
                alt={`A bag of Cirrus 9 ${f.name} cotton candy`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 ease-out-expo motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-[1.03]"
              />
              <span className="absolute left-2.5 top-2.5 rounded-full bg-paper/90 px-2.5 py-1 font-mono text-[11px] text-ink">
                {f.proof}
              </span>
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-head font-bold text-lg leading-tight group-hover:text-accent transition-colors">{f.name}</span>
              <span className="font-mono text-xs text-ink-3 tabular shrink-0">3 oz</span>
            </span>
            <span className="mt-1 block text-sm text-ink-2 leading-relaxed">{f.line}</span>
          </a>
        </li>
      ))}
    </ul>
    <a
      href="https://cirrus9candy.com"
      target="_blank"
      rel="noreferrer"
      className="mt-8 inline-flex items-center gap-1.5 border border-ink rounded-full text-sm font-semibold px-5 h-10 no-underline transition-colors hover:bg-ink hover:text-paper"
    >
      Shop the line at cirrus9candy.com <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
    </a>
  </div>
);
