import { Pigment } from "@/components/pigment";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Floret } from "./hydrangea";

const nav = [{ href: "/writing", label: "Writing" }];

export const Masthead = () => {
  const { pathname } = useRouter();
  const isActive = (href: string) =>
    pathname.startsWith("/writing") || pathname.startsWith("/projects") || pathname.startsWith("/blog");

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-hair">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 h-14 flex items-center gap-3 sm:gap-6">
        <Link href="/" className="group flex items-center gap-2 shrink-0 no-underline">
          <Floret size={22} className="transition-transform duration-500 ease-out-expo motion-safe:group-hover:rotate-45" />
          <span className="font-head font-bold text-[15px]">Makenna Smutz</span>
        </Link>


        <nav aria-label="Primary" className="ml-auto flex items-center gap-4 sm:gap-6 text-sm font-medium">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={clsx(
                "underline-offset-[6px] decoration-2 transition-colors hover:text-accent",
                isActive(href) ? "underline" : "no-underline",
              )}
            >
              {label}
            </Link>
          ))}
          <a href="/cv.pdf" download="makenna-smutz-cv.pdf" className="no-underline transition-colors hover:text-accent">
            CV
          </a>
        </nav>

        <Link
          href="/#order"
          className="relative isolate overflow-hidden text-white shrink-0 rounded-full text-sm font-semibold px-4 h-9 inline-flex items-center no-underline"
        >
          <Pigment mode={1} seed={2} />
          Get in touch
        </Link>
      </div>
    </header>
  );
};
