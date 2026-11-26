import { socials } from "@/utils/line";
import { ArrowUpRight, Download } from "lucide-react";

const lines = [
  { item: "Founder chat", detail: "Investing, partnerships, CPG and retail", via: socials[0] },
  { item: "Design engineering", detail: "Contract or full-time product and design-system work", via: socials[0] },
  { item: "Show and tell", detail: "Code, systems and side projects", via: socials[1] },
  { item: "Hot takes", detail: "Design, building and candy", via: socials[2] },
];

export const OrderForm = () => (
  <section aria-labelledby="order" className="mt-24 -mb-24 bg-spot text-paper mx-[calc(50%-50vw)] px-4 sm:px-10 py-12 sm:py-20">
    <div className="max-w-[1280px] mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <h2 id="order" className="font-condensed font-black uppercase text-6xl sm:text-8xl leading-[0.85] tracking-tight">
          Place an order
        </h2>
        <p className="mt-5 text-lg leading-relaxed max-w-[42ch]">
          No minimums. Pick a line, reach out where I&apos;m quickest, and I&apos;ll get back to you.
        </p>
        <a
          href="/resume.pdf"
          download="makenna-smutz_resume"
          className="mt-8 inline-flex items-center gap-2 bg-paper text-ink font-semibold px-5 h-12 no-underline transition-colors hover:bg-ink hover:text-paper"
        >
          <Download size={18} strokeWidth={1.75} aria-hidden />
          Download the CV
        </a>
      </div>

      <table className="w-full text-left self-start">
        <caption className="sr-only">Ways to get in touch</caption>
        <thead>
          <tr className="border-b-[3px] border-paper font-mono text-xs uppercase">
            <th scope="col" className="py-2 font-normal">Line</th>
            <th scope="col" className="py-2 font-normal hidden sm:table-cell">For</th>
            <th scope="col" className="py-2 font-normal text-right">Order via</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((l) => (
            <tr key={l.item} className="border-b border-paper/50">
              <td className="py-3.5 pr-4 font-semicondensed font-bold text-xl">{l.item}</td>
              <td className="py-3.5 pr-4 hidden sm:table-cell text-paper text-sm">{l.detail}</td>
              <td className="py-3.5 text-right">
                <a
                  href={l.via.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold underline decoration-paper/50 hover:decoration-paper"
                >
                  {l.via.label}
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
