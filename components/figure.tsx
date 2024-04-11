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
    <figcaption className='text-sage-10 mt-3 text-sm text-center mx-auto'>
      {caption}
    </figcaption>
    <hr className='border-sage-3 mt-4' />
  </figure>
);
