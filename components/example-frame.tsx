import clsx from "clsx";
import { PropsWithChildren } from "react";

export interface ExampleFrameProps extends PropsWithChildren {
  className?: string;
  caption?: string;
}

export const ExampleFrame = ({ children, className, caption }: ExampleFrameProps) => {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx(
          "bg-sage-2 dark:bg-sage-3 p-4 flex justify-center items-center min-h-60 rounded-xl border border-sage-5"
        )}
      >
        {children}
      </div>
      {caption && <p className="text-center text-sm text-sage-11 mt-1.5">{caption}</p>}
    </div>
  );
};
