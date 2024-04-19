import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceCardProps } from "./landing-sections/career-experience";

export interface ExperienceHeadlineProps
  extends Pick<
    ExperienceCardProps,
    "brandColor" | "logo" | "jobTitle" | "company" | "dateRange"
  > {
  size?: "sm" | "lg";
}

export const ExperienceHeadline = ({
  brandColor,
  logo,
  jobTitle,
  company,
  dateRange,
  size = "lg",
}: ExperienceHeadlineProps) => {
  return (
    <div className='flex items-center'>
      <motion.div
        className={clsx(`flex-shrink-0 flex items-center justify-center`, {
          "w-8 h-8 rounded-xl mr-3": size === "lg",
          "w-4 h-4 rounded-md mr-1.5": size === "sm",
        })}
        style={{ backgroundColor: brandColor.hex }}
        layout
      >
        {logo ? (
          <Image
            alt={company + " logo"}
            src={logo.url}
            width={size === "lg" ? 16 : 10}
            height={size === "lg" ? 16 : 10}
          />
        ) : (
          <div
            className={clsx({
              "h-4 w-4": size === "lg",
              "h-2 w-2": size === "sm",
            })}
          />
        )}
      </motion.div>
      <div>
        <div className='flex items-center gap-2'>
          <motion.h3 className={clsx('font-medium', { "text-sm": size === 'sm' })} layout>
            {size === "lg" ? `${jobTitle} @` : null} {company}
          </motion.h3>
        </div>
        {size === "lg" ? (
          <motion.p className='text-xs text-sage-9' layout>
            {dateRange}
          </motion.p>
        ) : null}
      </div>
    </div>
  );
};
