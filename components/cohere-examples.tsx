import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface CohereButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { }

export const CohereButton = ({
  children,
  className,
  ...props
}: CohereButtonProps) => {
  return (
    <a className='sm:w-btn-md focus:outline-none disabled:cursor-not-allowed inline-block'>
      <div className='relative flex grow'>
        <div className='z-10 flex grow'>
          <div className='h-10 flex grow'>
            <svg
              viewBox='0 0 10 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full min-h-cell-md max-h-cell-md -mr-[1px]'
              data-element='svg'
              data-component='DefaultLeftSide'
              data-source-file='CellParts.tsx'
            >
              <path
                d='M10 40V0H6C2.68629 0 0 2.68629 0 6V34C0 37.3137 2.68629 40 6 40H10Z'
                className='fill-[#212121]'
              />
            </svg>
            <div className='bg-[#212121] text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center'>
              <span className='px-0 justify-between duration-400 flex w-full items-center transition-[padding] ease-in-out'>
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
              className='h-full min-h-cell-md max-h-cell-md -ml-[1px]'
            >
              <path
                d='M10.899 0H0V40H2C4.40603 40 6.55968 38.5075 7.4045 36.2547L17.4533 9.45786C19.1694 4.88161 15.7864 0 10.899 0Z'
                className='fill-[#212121]'
              />
            </svg>
          </div>
          <div className='h-full min-h-cell-md max-h-cell-md flex grow -ml-1 grow-0'>
            <svg
              viewBox='0 0 18 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full min-h-cell-md max-h-cell-md -mr-[1px]'
              data-element='svg'
            >
              <path
                d='M7.101 40H18V0H16C13.594 0 11.4403 1.49249 10.5955 3.74532L0.546698 30.5421C-1.1694 35.1184 2.21356 40 7.101 40Z'
                className='fill-[#212121]'
              />
            </svg>
            <div className='bg-[#212121] text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center'>
              <span className='px-0 duration-400 flex items-center transition-all ease-in-out'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 12H11'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M14 12L21 12'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M13 4L21 12L13 20'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </span>
            </div>
            <svg
              viewBox='0 0 10 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full min-h-cell-md max-h-cell-md -ml-[1px]'
            >
              <path
                d='M0 40V0H4C7.31371 0 10 2.68629 10 6V34C10 37.3137 7.31371 40 4 40H0Z'
                className='fill-[#212121]'
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};
