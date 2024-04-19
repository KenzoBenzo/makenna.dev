import { Card } from "@/components/card";
import { Dialog } from "@/components/dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExperienceHeadline } from "../experience-headline";
import { CircleArrowUpIcon } from "../icons";
import { ExperienceCardProps } from "../landing-sections/career-experience";

export const PositionHighlight = (experience: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { company, responsibilities } = experience;

  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        layoutId={company}
        layout={true}
        content={
          <>
            <ExperienceHeadline {...experience} />

            <div className='ml-[45px]'>
              <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
                {responsibilities?.map((desc, index) => (
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
          <ExperienceHeadline {...experience} />
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