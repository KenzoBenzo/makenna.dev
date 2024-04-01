import { Link } from "@radix-ui/themes";
import { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

// export type StyledExternalLinkProps = React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>

export const StyledExternalLink = ({ children, href, ...props }: { children: ReactNode; href: string }) => {
  return (
    <Link
      highContrast
      href={href}
      className={`inline-flex items-baseline group/link relative w-fit after:bg-mint-12 after:absolute after:h-px after:w-0 after:bottom-[3px] after:left-0 hover:after:w-full after:transition-all after:duration-100`}
      target='_blank'
      {...props}
    >
      {children}{" "}
      <ArrowUpRightIcon
        size={16}
        className={`transition-all group-hover/link:translate-x-px group-hover/link:-translate-y-px`}
      />
    </Link>
  )
}