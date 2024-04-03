import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Card = ({
  children,
  layoutId,
  layout,
  className,
  onClick,
}: {
  children: ReactNode;
  layoutId?: string;
  layout?: boolean | "size" | "position" | "preserve-aspect" | undefined;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      layoutId={layoutId}
      layout={layout}
      className={clsx(
        "bg-[var(--color-panel)] p-4 rounded-xl border border-sage-5",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
