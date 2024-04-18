import { Card } from "@/components/card";
import { BusinessSkills, DesignSkills, ExperiencesQuery, TechnicalSkills } from "@/utils/graphql-generated";
import { splitAtUppercase } from "@/utils/split-at-uppercase";
import { Skill, useFilters } from "@/utils/use-filters";
import { Badge, Button, DropdownMenu } from "@radix-ui/themes";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Collapse } from "../collapse";
import { CaretDownIcon, ChevronDownIcon, XIcon } from "../icons";

export type ExperienceCardProps = {
  skillsSelected?: Skill[];
} & ExperiencesQuery['experiences'][number]

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  jobTitle,
  founder,
  contract,
  company,
  dateRange,
  responsibilities,
  brandColor,
  technicalSkills,
  designSkills,
  businessSkills
}) => {
  const { skillsSelected } = useFilters();
  const hasSkillsSelected = useMemo(
    () =>
      skillsSelected?.some((selectedSkill) => {
        if (Object.values(TechnicalSkills).includes(selectedSkill as TechnicalSkills)) {
          return technicalSkills?.includes(selectedSkill as TechnicalSkills);
        } else if (Object.values(DesignSkills).includes(selectedSkill as DesignSkills)) {
          return designSkills?.includes(selectedSkill as DesignSkills);
        } else if (Object.values(BusinessSkills).includes(selectedSkill as BusinessSkills)) {
          return businessSkills?.includes(selectedSkill as BusinessSkills);
        }
        return false;
      }),
    [skillsSelected, technicalSkills, designSkills, businessSkills]
  );

  return (
    <Card>
      <div className='flex items-center'>
        <div
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg mr-3`}
          style={{ backgroundColor: brandColor.hex }}
        >
          {logo ? <Image
            alt={company + " logo"}
            src={logo.url}
            width={16}
            height={16}
          /> : <div className="h-4 w-4" />}
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h3 className='font-semibold'>
              {jobTitle} @ {company}
            </h3>
            {founder && (
              <Badge color='gray' variant='surface'>
                founder
              </Badge>
            )}
            {contract && (
              <Badge color='mint' highContrast variant='surface'>
                contract
              </Badge>
            )}
          </div>
          <p className='text-xs text-sage-9'>{dateRange}</p>
        </div>
      </div>
      <div className='ml-[45px]'>
        <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
          {responsibilities?.map((desc, index) => (
            <li key={index} className='text-sage-10 text-sm'>
              {desc}
            </li>
          ))}
        </ul>
        {hasSkillsSelected && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {technicalSkills
              ?.filter((skill) => skillsSelected?.includes(skill))
              .map((skill) => (
                <Badge key={skill} size='1' color='gray'>
                  {`#` + splitAtUppercase(skill).join("-").toLocaleLowerCase()}
                </Badge>
              ))}
            {designSkills
              ?.filter((skill) => skillsSelected?.includes(skill))
              .map((skill) => (
                <Badge key={skill} size='1' color='gray'>
                  {`#` + splitAtUppercase(skill).join("-").toLocaleLowerCase()}
                </Badge>
              ))}
            {businessSkills
              ?.filter((skill) => skillsSelected?.includes(skill))
              .map((skill) => (
                <Badge key={skill} size='1' color='gray'>
                  {`#` + splitAtUppercase(skill).join("-").toLocaleLowerCase()}
                </Badge>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export const CareerExperience = ({ rawExperiences }: { rawExperiences: ExperiencesQuery['experiences'] }) => {
  const { skillsSelected, setSkillsSelected, handleSkillSelect } = useFilters();
  const [showMore, setShowMore] = useState(false);

  const experiences = useMemo(() => {
    if (skillsSelected === null || skillsSelected.length === 0) {
      return rawExperiences;
    } else {
      const filteredExperiences = rawExperiences.filter((experience) =>
        skillsSelected.some((selectedSkill) => {
          if (Object.values(TechnicalSkills).includes(selectedSkill as TechnicalSkills)) {
            return experience?.technicalSkills?.includes(selectedSkill as TechnicalSkills);
          } else if (Object.values(DesignSkills).includes(selectedSkill as DesignSkills)) {
            return experience?.designSkills?.includes(selectedSkill as DesignSkills);
          } else if (Object.values(BusinessSkills).includes(selectedSkill as BusinessSkills)) {
            return experience?.businessSkills?.includes(selectedSkill as BusinessSkills);
          }
          return false;
        })
      );
      return filteredExperiences;
    }
  }, [rawExperiences, skillsSelected]);

  const experiencesToDisplay = useMemo(() => {
    return experiences.length > 5 ? experiences.slice(0, 5) : experiences;
  }, [experiences]);
  const moreExperiences = useMemo(() => {
    return experiences.length > 5
      ? experiences.slice(5, experiences.length)
      : [];
  }, [experiences]);
  const hasMoreExperiences = useMemo(
    () => moreExperiences.length > 0,
    [moreExperiences]
  );

  return (
    <section className='mt-24 max-w-screen-sm mx-auto'>
      <div className='flex justify-between item-center gap-4 mb-8 mx-auto flex-wrap'>
        <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap'>
          My Experience
        </h2>

        <div className='flex flex-wrap gap-3 items-center'>
          {(skillsSelected?.length || 0) > 0 && (
            <Button
              size='1'
              variant='ghost'
              color='gray'
              onClick={() => setSkillsSelected(null)}
            >
              <XIcon size={12} />
              Clear filters
            </Button>
          )}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              style={{ width: 300, justifyContent: "space-between" }}
            >
              <Button variant='outline' color='gray' className='px-2'>
                <div className='flex gap-1 max-w-[calc(100%-16px)] overflow-scroll'>
                  {skillsSelected?.length === 0 || skillsSelected === null
                    ? "Filter by skill"
                    : skillsSelected?.map((skill) => (
                      <Badge key={skill}>{`#${splitAtUppercase(skill).join("-").toLocaleLowerCase()}`}</Badge>
                    ))}
                </div>
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant='soft'>
              <DropdownMenu.Group>
                <DropdownMenu.Label>Technical</DropdownMenu.Label>
                {Object.values(TechnicalSkills).map((skill) => {
                  const isChecked = skillsSelected?.includes(skill);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill);
                      }}
                    >
                      {skill}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Design</DropdownMenu.Label>
                {Object.values(DesignSkills).map((skill) => {
                  const isChecked = skillsSelected?.includes(skill);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill);
                      }}
                    >
                      {skill}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Business</DropdownMenu.Label>
                {Object.values(BusinessSkills).map((skill) => {
                  const isChecked = skillsSelected?.includes(skill);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill);
                      }}
                    >
                      {skill}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      <motion.div
        layoutId='primary-experiences'
        className='flex flex-col gap-4'
      >
        {experiencesToDisplay.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </motion.div>

      {hasMoreExperiences && (
        <>
          <div className='w-full flex justify-center py-4'>
            <Button
              size='3'
              variant='ghost'
              color='gray'
              onClick={() => setShowMore(!showMore)}
              className='group/button flex items-center justify-center relative overflow-hidden w-auto h-auto'
            >
              Show
              <div className="relative flex items-center justify-center overflow-hidden h-5 w-10">
                <motion.div
                  key="more"
                  initial={showMore ? { y: -20, opacity: 0 } : {}}
                  animate={showMore ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  more
                </motion.div>
                <motion.div
                  key="less"
                  initial={!showMore ? { y: 20, opacity: 0 } : {}}
                  animate={!showMore ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  less
                </motion.div>
              </div>
              experience
              <ChevronDownIcon
                className={clsx(
                  "ml-2 transition-transform",
                  {
                    "rotate-180": showMore,
                  },
                )}
              />
            </Button>
          </div>

          <Collapse show={showMore}>
            <div className='flex flex-col gap-4'>
              {moreExperiences.map((experience) => (
                <ExperienceCard key={experience.company} {...experience} />
              ))}
            </div>
          </Collapse>
        </>
      )}
    </section>
  );
};
