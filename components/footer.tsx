import Link from "next/link";
import { socials } from "@/utils/line";

export const Footer = () => (
  <footer className="border-t-[6px] border-ink">
    <div className="max-w-[1360px] mx-auto px-4 sm:px-10 py-6 grid gap-4 sm:grid-cols-[1fr_auto] items-end">
      <div>
        <p className="font-condensed font-black text-4xl leading-none">MCS</p>
        <p className="mt-2 font-mono text-xs uppercase text-ink-3 tabular">
          Printed in Westchester, NY · Terms: net 30, coffee preferred
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <li><Link href="/projects" className="no-underline hover:text-spot">Stories</Link></li>
        <li><Link href="/blog" className="no-underline hover:text-spot">Writing</Link></li>
        {socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer" className="no-underline hover:text-spot">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
