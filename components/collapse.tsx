import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const Collapse = ({ show, children }: { show: boolean; children: ReactNode }) => (
  <AnimatePresence initial={false}>
    {show && (
      <motion.div
        key="collapse"
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: "auto",
          opacity: 1,
          transition: { height: { duration: 0.35, ease }, opacity: { duration: 0.25, delay: 0.1 } },
        }}
        exit={{
          height: 0,
          opacity: 0,
          transition: { height: { duration: 0.3, ease }, opacity: { duration: 0.15 } },
        }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
