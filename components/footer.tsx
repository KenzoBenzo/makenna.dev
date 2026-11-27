import Link from "next/link";
import { socials } from "@/utils/line";
import { Floret } from "./hydrangea";
import { Pigment } from "./pigment";

export const Footer = () => (
  <footer className="relative isolate overflow-hidden border-t border-hair">
    {/* the fullest bed of hydrangeas on the site, rising from the bottom of the page */}
    <Pigment mode={3} layout={2} maxDpr={1.5} />
    <div className="max-w-[1360px] mx-auto px-4 sm:px-10 pt-8 pb-56 sm:pb-64 grid gap-4 sm:grid-cols-[1fr_auto] items-start">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 font-head font-bold text-lg no-underline hover:text-accent"><Floret size={24} /> Makenna Smutz</Link>
        <p className="mt-2 font-mono text-xs uppercase text-ink-3 tabular">
          Based in Westchester, NY · Terms: net 30, coffee preferred
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <li><Link href="/writing" className="no-underline hover:text-accent">Writing</Link></li>
        <li><a href="/cv.pdf" download="makenna-smutz-cv.pdf" className="no-underline hover:text-accent">CV</a></li>
        {socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer" className="no-underline hover:text-accent">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
