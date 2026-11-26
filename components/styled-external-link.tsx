import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes } from "react";

/** Inline link for prose. External links open in a new tab and carry an arrow. */
export const StyledExternalLink = ({ children, href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-cyan underline decoration-cyan/40 hover:decoration-cyan hover:text-spot transition-colors"
      {...props}
    >
      {children}
      {external && <ArrowUpRight size="0.9em" strokeWidth={2} aria-hidden className="inline align-[-0.1em] ml-0.5" />}
    </a>
  );
};
