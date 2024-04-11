import { ReactNode } from "react";

export interface FigureProps {
  children: ReactNode;
  caption: string;
}

export const Figure = ({
  children,
  caption,
}: FigureProps) => (
  <figure>
    {children}
    <figcaption className='text-sage-10 mt-3 text-sm text-center mx-auto'>
      {caption}
    </figcaption>
    <hr className='border-sage-3 mt-4' />
  </figure>
);