import { Pigment } from "@/components/pigment";
import { quiet } from "@/components/ui";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/utils/profile";

export const Hero = () => (
  <section aria-labelledby="hello" className="relative isolate pt-32 sm:pt-28 lg:pt-20 pb-16 sm:pb-24 lg:min-h-[34rem]">
    {/* painted hydrangea heads, drawn live; the section is the pointer host */}
    <Pigment mode={3} maxDpr={1.5} className="opacity-60 lg:opacity-100" style={{ left: "calc(50% - 50vw)", width: "100vw" }} />

    {/* portrait tucked into the hydrangeas on large screens */}
    <figure className="hidden lg:block absolute right-[19%] top-[5.75rem] w-52 rotate-[-3deg] transition-transform duration-700 ease-out-expo hover:rotate-0">
      <Image
        src="/ken.png"
        alt="Makenna smiling in golden-hour light, wearing a Cirrus 9 cap"
        width={512}
        height={512}
        priority
        sizes="208px"
        className="rounded-[2rem] ring-[6px] ring-paper shadow-[0_18px_40px_-18px_rgb(29_35_64/0.45)]"
      />
    </figure>

    <div className="max-w-[38rem]">
      <h1 id="hello" className="flex items-center gap-4 font-display font-extrabold text-5xl sm:text-6xl leading-[1.02]">
        <Image
          src="/ken.png"
          alt=""
          width={512}
          height={512}
          priority
          sizes="72px"
          className="lg:hidden shrink-0 size-16 sm:size-[4.5rem] rounded-full ring-4 ring-paper shadow-[0_8px_20px_-10px_rgb(29_35_64/0.5)]"
        />
        <span>Hi, I&apos;m Makenna.</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-2">{profile.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/cv.pdf"
          download="makenna-smutz-cv.pdf"
          className="relative isolate overflow-hidden rounded-full text-white font-semibold px-6 h-12 inline-flex items-center gap-2 no-underline"
        >
          <Pigment mode={1} seed={21} />
          <Download size={18} strokeWidth={1.75} aria-hidden />
          Download my CV
        </a>
        <Link href="/writing" className={`${quiet} font-semibold px-6 h-12 inline-flex items-center no-underline`}>
          Read my writing
        </Link>
      </div>
    </div>
  </section>
);
