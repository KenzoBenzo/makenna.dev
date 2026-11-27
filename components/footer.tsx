import Link from "next/link";
import { socials } from "@/utils/line";
import { Floret } from "./hydrangea";

export const Footer = () => (
  <footer className="border-t border-hair">
    <div className="max-w-[1360px] mx-auto px-4 sm:px-10 py-6 grid gap-4 sm:grid-cols-[1fr_auto] items-end">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 font-head font-bold text-lg no-underline hover:text-accent"><Floret size={24} /> Makenna Smutz</Link>
        <p className="mt-2 font-mono text-xs uppercase text-ink-3 tabular">
          Based in Westchester, NY · Terms: net 30, coffee preferred
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <li><Link href="/" className="no-underline hover:text-accent">Line sheet</Link></li>
        <li><Link href="/projects" className="no-underline hover:text-accent">Stories</Link></li>
        <li><Link href="/blog" className="no-underline hover:text-accent">Writing</Link></li>
        <li><a href="/resume.pdf" download="makenna-smutz_resume" className="no-underline hover:text-accent">CV</a></li>
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
