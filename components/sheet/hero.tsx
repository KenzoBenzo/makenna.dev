import { Pigment } from "@/components/pigment";

export const Hero = () => (
  <section aria-labelledby="hello" className="relative isolate pt-40 sm:pt-28 lg:pt-20 pb-16 sm:pb-24 lg:min-h-[34rem]">
    {/* painted hydrangea heads, drawn live; the section is the pointer host */}
    <Pigment mode={3} maxDpr={1.5} className="!h-40 sm:!h-28 lg:!h-full" />

    <div className="max-w-[38rem]">
      <h1 id="hello" className="font-display font-extrabold text-5xl sm:text-6xl leading-[1.02]">
        Hi, I&apos;m Makenna.
      </h1>
      <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-2">
        I&apos;m a design engineer, and lately a CPG founder too: co-founder of Cirrus 9 Candy, a
        small organic cotton candy company, and the builder of ShelfFlow, the wholesale CRM we
        needed to sell it. Most days I&apos;m somewhere between Figma, a code editor and a box of
        samples, and I love that.
      </p>
    </div>
  </section>
);
