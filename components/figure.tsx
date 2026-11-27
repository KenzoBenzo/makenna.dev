import clsx from "clsx";
import { ReactNode } from "react";

export interface FigureProps {
  children: ReactNode;
  caption: string;
  className?: string;
}

export const Figure = ({ children, caption, className }: FigureProps) => (
  <figure className={clsx(className)}>
    {children}
    <figcaption className='text-xs text-ink-3 mt-2'>
      {caption}
    </figcaption>
  </figure>
);
