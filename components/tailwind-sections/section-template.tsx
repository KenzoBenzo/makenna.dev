import { ReactNode } from "react";

export const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section className='mt-24 first:mt-0'>
    <a href={`#${id}`} className='cursor-default'>
      <h2 id={id} className='text-xl mb-3 text-sage-11'>
        {title}
      </h2>
    </a>
    <div className='flex flex-col gap-4'>{children}</div>
  </section>
);