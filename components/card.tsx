import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";

export const Card = ({ className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    className={clsx(
      "bg-(--color-panel) p-4 rounded-xl border border-sage-5",
      className
    )}
    {...props}
  />
);
