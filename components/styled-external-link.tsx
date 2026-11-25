import { Link } from "@radix-ui/themes";
import { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

// export type StyledExternalLinkProps = React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>

export const StyledExternalLink = ({ children, href, ...props }: { children: ReactNode; href: string }) => {
  return (
    <Link
      highContrast
      underline='none'
      href={href}
      className={`inline-flex items-baseline [@media(hover:none)]:underline underline-offset-[calc(0.025em+2px)] group/link relative w-fit after:bg-mint-12 after:absolute after:h-px after:w-full after:bottom-[3px] after:left-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out`}
      target='_blank'
      {...props}
    >
      {children}{" "}
      <ArrowUpRightIcon
        size={16}
        className={`transition-transform duration-200 ease-out group-hover/link:translate-x-px group-hover/link:-translate-y-px`}
      />
    </Link>
  )
}