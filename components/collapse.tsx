import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export const Collapse = ({ show, children }: { show: boolean; children: ReactNode }) => {
  return (
    <AnimatePresence initial={false}>
      {show && <motion.div
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: 'auto' },
          collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.15, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        {children}
      </motion.div>}
    </AnimatePresence>
  )
}