import { PropsWithChildren } from "react";

export const ExampleFrame = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-sage-1 p-4 flex justify-center items-center min-h-60 rounded-xl border border-sage-5'>
      {children}
    </div>
  );
};
