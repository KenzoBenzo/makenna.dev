import { Dialog as HeadlessDialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const Dialog = ({
  isOpen,
  setIsOpen,
  layoutId,
  layout,
  content,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  layoutId?: string;
  layout?: boolean | "size" | "position" | "preserve-aspect" | undefined;
  content: ReactNode;
}) => {
  const { Panel, Title, Description } = HeadlessDialog;

  const MotionPanel = motion(Panel);

  return (
    <HeadlessDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <motion.div
        className="fixed dark:hidden inset-0 bg-sage-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="fixed light:hidden inset-0 bg-sage-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      />

      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <MotionPanel
          layout={layout}
          layoutId={layoutId}
          className='w-full max-w-screen-sm bg-[var(--color-page-background)] p-4 rounded-xl border border-sage-5'
        >
          {content}
        </MotionPanel>
      </div>
    </HeadlessDialog>
  );
};
