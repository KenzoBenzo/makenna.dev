import { yearsSince } from "@/utils/years-since";
import Image from "next/image";

const facts = [
  { label: "Origin", value: "Grew up in the Midwest, lived in Slovenia for 8 years" },
  { label: "Based", value: "Westchester, NY, with my wife Špela and our cat Einštein" },
  { label: "Born", value: `Earth Day (I'm ${yearsSince("1997-04-22")})` },
  { label: "Fuel", value: "Filter coffee, maté (!!!) and Croatian white wine" },
  { label: "Fan of", value: "Women's soccer and the New York Liberty" },
  { label: "Hobbies", value: "Golf, squash, padel, sailing and via ferrata. Friends say it's very old-dude of me." },
  { label: "Travel", value: "Any chance I get" },
];

const shots = [
  { src: "/via-ferrata.png", alt: "Makenna climbing a via ferrata", caption: "Via ferrata, Slovenia", w: 720, h: 1600, className: "row-span-2" },
  { src: "/sailing.png", alt: "Makenna sailing in Croatia", caption: "Sailing, Croatia", w: 4032, h: 3024, className: "" },
  { src: "/spela-eini.png", alt: "Špela and Einštein the cat", caption: "Špela and Einštein", w: 4032, h: 3024, className: "" },
];

export const Maker = () => (
  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
    <dl className="border-t border-ink self-start">
      {facts.map((f) => (
        <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 border-b border-hair">
          <dt className="font-mono text-xs uppercase text-ink-3 pt-1">{f.label}</dt>
          <dd className="leading-relaxed">{f.value}</dd>
        </div>
      ))}
    </dl>

    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[28rem] sm:h-[34rem]">
      {shots.map((s) => (
        <figure key={s.src} className={`relative overflow-hidden rounded-xl bg-stock group ${s.className}`}>
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out-expo motion-safe:group-hover:scale-[1.03]"
          />
          <figcaption className="absolute left-2 bottom-2 bg-paper/90 rounded-full font-mono text-[11px] px-2.5 py-1">
            {s.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
);
