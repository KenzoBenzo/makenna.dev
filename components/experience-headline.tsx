import clsx from "clsx";
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
      <div
        className={clsx(`shrink-0 flex items-center justify-center`, {
          "w-8 h-8 rounded-xl mr-3": size === "lg",
          "w-4 h-4 rounded-md mr-1.5": size === "sm",
        })}
        style={{ backgroundColor: brandColor.hex }}
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
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <h3 className={clsx('font-medium', { "text-sm": size === 'sm' })}>
            {size === "lg" ? `${jobTitle} @` : null} {company}
          </h3>
        </div>
        {size === "lg" ? (
          <p className='text-xs text-sage-9'>
            {dateRange}
          </p>
        ) : null}
      </div>
    </div>
  );
};
