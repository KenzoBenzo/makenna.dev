import { HydrangeaField } from "@/components/hydrangea";

export const Hero = () => (
  <section aria-labelledby="hello" className="relative isolate pt-6 lg:pt-20 pb-16 sm:pb-24">
    {/* painted hydrangeas, purely decorative: a band above the text on small screens,
        a cluster bleeding off the right edge on large ones */}
    <div className="pointer-events-none -z-10 relative ml-[18%] w-[95%] -mb-4 lg:m-0 lg:absolute lg:top-4 lg:right-[-7%] lg:w-[min(46rem,52vw)]">
      <HydrangeaField className="w-full h-auto" />
    </div>

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
      <dl className="mt-8 grid grid-cols-3 gap-4 text-sm max-w-[34rem]">
        <div>
          <dt className="font-mono text-xs text-ink-3">Now</dt>
          <dd className="mt-1">ShelfFlow, Cirrus 9 Candy</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink-3">Craft</dt>
          <dd className="mt-1">Design, front end, motion</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-ink-3">Based</dt>
          <dd className="mt-1">Westchester, NY</dd>
        </div>
      </dl>
    </div>
  </section>
);
