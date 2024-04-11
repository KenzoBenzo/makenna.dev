import clsx from "clsx";
import { MotionValue, animate, motion, useMotionValue } from "framer-motion";
import { ButtonHTMLAttributes, DetailedHTMLProps, useCallback } from "react";
import { CohereArrowIcon } from "./icons";

import { interpolate } from "flubber";
import { useTransform } from "framer-motion";

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(
    progress,
    paths.map((_, index: number) => index),
    paths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    }
  );
}

const RightBottomCollapsedSvg = () => (
  <svg
    viewBox='0 0 18 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='h-10 -ml-[1px]'
  >
    <path
      d='M10.899 0H0V40H2C4.40603 40 6.55968 38.5075 7.4045 36.2547L17.4533 9.45786C19.1694 4.88161 15.7864 0 10.899 0Z'
      className='fill-cohere-volcanic'
    />
  </svg>
);

const LeftTopCollapsedSvg = () => (
  <svg
    viewBox='0 0 18 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='h-10 -mr-[1px]'
    data-element='svg'
  >
    <path
      d='M7.101 40H18V0H16C13.594 0 11.4403 1.49249 10.5955 3.74532L0.546698 30.5421C-1.1694 35.1184 2.21356 40 7.101 40Z'
      className='fill-cohere-volcanic'
    />
  </svg>
);

export interface CohereButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { }

export const CohereArrowButton = ({
  children,
  className,
  ...props
}: CohereButtonProps) => {
  return (
    <button
      className={clsx(
        "sm:w-72 focus:outline-none disabled:cursor-not-allowed group relative inline-flex items-center transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <div className='h-10 flex grow'>
        <div className='bg-cohere-volcanic text-cohere-marble h-10 truncate flex grow justify-start items-center px-2 text-xs font-sans font-medium uppercase rounded-l-md'>
          Contact Sales
        </div>
        <RightBottomCollapsedSvg />
      </div>

      <div className='h-10 flex -ml-1 items-center'>
        <LeftTopCollapsedSvg />
        <div className='bg-cohere-volcanic text-cohere-marble h-10 truncate flex items-center pl-0 pr-2 group-hover:pr-4 group-hover:pl-1 transition-all duration-300 ease-in-out rounded-r-md'>
          <CohereArrowIcon className='stroke-cohere-marble' />
        </div>
      </div>
    </button>
  );
};

const squaredPath =
  "M11 0.5H-1V39.5H11C14.3137 39.5 17 36.8137 17 33.5V6.5C17 3.18629 14.3137 0.5 11 0.5Z";
const bentPath =
  "M7.97868 0.5H-1V39.5H2.34436C5.0841 39.5 7.47586 37.6441 8.15635 34.9902L14.7593 9.23863C15.8948 4.81046 12.5501 0.5 7.97868 0.5Z";

export const CohereButton = ({
  children,
  className,
  ...props
}: CohereButtonProps) => {
  const progress = useMotionValue(0);
  const path = useFlubber(progress, [squaredPath, bentPath]);

  const handleMouseEnter = useCallback(() => {
    animate(progress, 1, { duration: 0.3, ease: "easeInOut" });
  }, [progress]);

  const handleMouseLeave = useCallback(() => {
    animate(progress, 0, { duration: 0.3, ease: "easeInOut" });
  }, [progress]);

  return (
    <button
      className='flex items-center bg-cohere-marble text-cohere-volcanic'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        viewBox='0 0 18 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-10 -mr-px'
      >
        <path
          d='M19 0.5H7C3.68629 0.5 1 3.18629 1 6.5V33.5C1 36.8137 3.68629 39.5 7 39.5H19V0.5Z'
          className='stroke-cohere-volcanic'
        />
      </svg>

      <div
        className={clsx(
          "h-10 sm:w-72 border-y border-cohere-volcanic text-xs font-sans font-medium uppercase flex items-center sm:justify-start justify-center",
          className
        )}
      >
        {children}
      </div>

      <svg
        viewBox='0 0 18 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-10 -ml-px'
      >
        <motion.path d={path} className='stroke-cohere-volcanic' />
      </svg>
    </button>
  );
};
