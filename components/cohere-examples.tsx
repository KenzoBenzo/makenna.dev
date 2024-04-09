import clsx from "clsx";
import { interpolate } from "flubber";
import { MotionValue, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
  });
}

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
        "sm:w-[312px] focus:outline-none disabled:cursor-not-allowed inline-block group",
        className
      )}
      {...props}
    >
      <div className='relative flex grow'>
        <div className='z-10 flex grow items-center'>
          <div className='h-10 flex grow'>
            <svg
              viewBox='0 0 10 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 -mr-[1px]'
            >
              <path
                d='M10 40V0H6C2.68629 0 0 2.68629 0 6V34C0 37.3137 2.68629 40 6 40H10Z'
                className='fill-cohere-volcanic dark:fill-cohere-marble transition-all duration-300'
              />
            </svg>
            <div className='bg-cohere-volcanic dark:bg-cohere-marble text-cohere-marble dark:text-cohere-volcanic h-10 truncate flex grow-[2] justify-start items-center pr-2 group-hover:pr-0 transition-all duration-300 ease-in-out'>
              <span className='flex w-full items-center justify-start'>
                <span className='text-xs font-body uppercase'>
                  <span>Contact Sales</span>
                  <br />
                </span>
              </span>
            </div>
            <svg
              viewBox='0 0 18 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 -ml-[1px]'
            >
              <path
                d='M10.899 0H0V40H2C4.40603 40 6.55968 38.5075 7.4045 36.2547L17.4533 9.45786C19.1694 4.88161 15.7864 0 10.899 0Z'
                className='fill-cohere-volcanic dark:fill-cohere-marble transition-all duration-300'
              />
            </svg>
          </div>
          <div className='h-10 flex -ml-1 items-center'>
            <svg
              viewBox='0 0 18 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 -mr-[1px]'
              data-element='svg'
            >
              <path
                d='M7.101 40H18V0H16C13.594 0 11.4403 1.49249 10.5955 3.74532L0.546698 30.5421C-1.1694 35.1184 2.21356 40 7.101 40Z'
                className='fill-cohere-volcanic dark:fill-cohere-marble transition-all duration-300'
              />
            </svg>
            <div className='bg-cohere-volcanic dark:bg-cohere-marble text-cohere-marble dark:text-cohere-volcanic h-10 truncate flex items-center px-0 group-hover:px-2 transition-all duration-300 ease-in-out'>
              <span className='flex items-center transition-all ease-in-out'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 12H11'
                    className='stroke-cohere-marble dark:stroke-cohere-volcanic transition-all duration-300'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14 12L21 12'
                    className='stroke-cohere-marble dark:stroke-cohere-volcanic transition-all duration-300'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13 4L21 12L13 20'
                    className='stroke-cohere-marble dark:stroke-cohere-volcanic transition-all duration-300'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </div>
            <svg
              viewBox='0 0 10 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 -ml-[1px]'
            >
              <path
                d='M0 40V0H4C7.31371 0 10 2.68629 10 6V34C10 37.3137 7.31371 40 4 40H0Z'
                className='fill-cohere-volcanic dark:fill-cohere-marble transition-all duration-300'
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};


const squaredPath = "M11 1H-1V39H11C14.3137 39 17 36.3137 17 33V7C17 3.68629 14.3137 1 11 1Z";
const bentPath = "M9.21677 1H-1V39H2.37467C5.10029 39 7.48346 37.1628 8.17711 34.527L15.0192 8.52696C16.0204 4.72245 13.1508 1 9.21677 1Z";

export const CohereButton = ({
  children,
  className,
  ...props
}: CohereButtonProps) => {
  const progress = useMotionValue(0);
  const path = useFlubber(progress, [squaredPath, bentPath]);

  const handleMouseEnter = () => {
    animate(progress, 1, { duration: 0.3, ease: "easeInOut" });
  };

  const handleMouseLeave = () => {
    animate(progress, 0, { duration: 0.3, ease: "easeInOut" });
  };


  return (
    <button
      className='flex items-center focus:outline-none disabled:cursor-not-allowed bg-cohere-marble dark:bg-cohere-volcanic text-cohere-volcanic dark:text-cohere-marble'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        viewBox='0 0 11 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-10 -mr-[1px]'
      >
        <path
          d='M10.9999 39.5H7.00008C3.68637 39.5 1.00008 36.8137 1.00008 33.5L1.00001 6.50002C1.00001 3.1863 3.6863 0.5 7.00001 0.5H10.9999'
          className='stroke-cohere-volcanic dark:stroke-cohere-marble'
        />
      </svg>
      <div
        className={`h-10 sm:w-[312px] border-t border-b border-cohere-volcanic dark:border-cohere-marble text-xs font-body uppercase text-start flex items-center justify-start ${className}`}
      >
        {children}
      </div>

      <motion.svg
        viewBox='0 0 18 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-[41px] -ml-[1px]'
      >
        <motion.path
          d={path}
          className='stroke-cohere-volcanic fill-cohere-marble dark:stroke-cohere-marble dark:fill-cohere-volcanic'
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </button>
  );
};
