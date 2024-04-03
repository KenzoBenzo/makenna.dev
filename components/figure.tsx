import { ReactNode } from "react";

export const Figure = ({
  children,
  caption,
}: {
  children: ReactNode;
  caption: string;
}) => (
  <figure>
    {children}
    <figcaption className='text-sage-10 mt-3 text-sm text-center mx-auto'>
      {caption}
    </figcaption>
    <hr className='border-sage-3 mt-4' />
  </figure>
);