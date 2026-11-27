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
          "bg-stock p-4 flex justify-center items-center min-h-60 rounded-xl ring-1 ring-inset ring-hair"
        )}
      >
        {children}
      </div>
      {caption && <p className="text-xs text-ink-3 mt-2">{caption}</p>}
    </div>
  );
};
