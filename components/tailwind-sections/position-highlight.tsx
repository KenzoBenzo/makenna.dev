import { Card } from "@/components/card";
import { Dialog } from "@/components/dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import { CircleArrowUpIcon } from "../icons";
import { ExperienceCardProps } from "../landing-sections/career-experience";

export const PositionHighlight = ({
  brandColor,
  logo,
  title,
  company,
  dateRange,
  description,
}: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Company = () => (
    <div className='flex items-center'>
      <motion.div
        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl mr-3`}
        style={{ backgroundColor: brandColor }}
        layout
      >
        {logo}
      </motion.div>
      <div>
        <div className='flex items-center gap-2'>
          <motion.h3 className='font-semibold' layout>
            {title} @ {company}
          </motion.h3>
        </div>
        <motion.p className='text-xs text-sage-9' layout>
          {dateRange}
        </motion.p>
      </div>
    </div>
  );
  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        layoutId={company}
        layout={true}
        content={
          <>
            <Company />

            <div className='ml-[45px]'>
              <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
                {description?.map((desc, index) => (
                  <motion.li key={index} className='text-sage-10 text-sm'>
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </div>
          </>
        }
      />
      <div className='cursor-pointer group/card'>
        <Card
          onClick={() => setIsOpen(true)}
          layoutId={company}
          layout={true}
          className='w-full'
        >
          <Company />
        </Card>
        <div
          className='flex items-center mx-auto gap-1.5 mt-2 max-w-fit text-mint-11 group-hover/card:text-sage-11'
          onClick={() => setIsOpen(true)}
        >
          <CircleArrowUpIcon className='group-hover/card:animate-jump transition-all' />
          <p className='transition-color text-sm'>CV details</p>
        </div>
      </div>
    </>
  );
};