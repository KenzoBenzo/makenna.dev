import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeSwitch } from "./theme-switch";

const nav = [
  { href: "/", label: "Line sheet" },
  { href: "/projects", label: "Stories" },
  { href: "/blog", label: "Writing" },
];

export const Masthead = () => {
  const { pathname } = useRouter();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-hair">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 h-14 flex items-center gap-3 sm:gap-6">
        <Link href="/" className="flex items-baseline gap-2 shrink-0 no-underline">
          <span className="font-display font-extrabold text-2xl leading-none tracking-tight">MCS</span>
          <span className="hidden md:inline text-sm text-ink-2">Makenna Smutz</span>
        </Link>

        <span className="hidden lg:inline font-mono text-xs uppercase text-ink-3 tabular">
          F/W 2026 · Westchester, NY
        </span>

        <nav aria-label="Primary" className="ml-auto flex items-center gap-4 sm:gap-6 text-sm font-medium">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={clsx(
                "underline-offset-[6px] decoration-2 transition-colors hover:text-accent",
                isActive(href) ? "underline" : "no-underline",
                href === "/" && "hidden sm:inline"
              )}
            >
              {label}
            </Link>
          ))}
          <a href="/resume.pdf" download="makenna-smutz_resume" className="hidden sm:inline no-underline transition-colors hover:text-accent">
            CV
          </a>
        </nav>

        <ThemeSwitch className="shrink-0" />
        <Link
          href="/#order"
          className="shrink-0 bg-accent text-on-accent rounded-full text-sm font-semibold px-4 h-9 inline-flex items-center no-underline transition-colors hover:bg-accent-ink"
        >
          <span className="sm:hidden">Order</span>
          <span className="hidden sm:inline">Place an order</span>
        </Link>
      </div>
    </header>
  );
};
