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
          "bg-stock p-4 flex justify-center items-center min-h-60 border border-ink"
        )}
      >
        {children}
      </div>
      {caption && <p className="font-mono text-xs uppercase text-ink-3 mt-2">{caption}</p>}
    </div>
  );
};
