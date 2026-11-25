import React, {
  Ref,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/card';
import {
  BusinessSkills,
  DesignSkills,
  ExperiencesQuery,
  TechnicalSkills,
} from '@/utils/graphql-generated';
import { splitAtUppercase } from '@/utils/split-at-uppercase';
import {
  Skill,
  useFilters,
} from '@/utils/use-filters';
import {
  Badge,
  Button,
  DropdownMenu,
} from '@radix-ui/themes';

import { Collapse } from '../collapse';
import {
  CaretDownIcon,
  ChevronDownIcon,
  XIcon,
} from '../icons';

export type ExperienceCardProps = {
  skillsSelected?: Skill[];
  ref?: Ref<HTMLDivElement>;
} & ExperiencesQuery['experiences'][number]

const ease = [0.22, 1, 0.36, 1] as const;

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
  businessSkills,
  projects,
  ref,
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
    <Card
      ref={ref}
      layout='position'
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3, ease }}
    >
      <div className='flex items-center'>
        <div
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg mr-3`}
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
        <p className="mt-3 text-sm font-medium">Responsibilities</p>
        <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
          {responsibilities?.map((desc, index) => (
            <li key={index} className='text-sage-10 text-sm'>
              {desc}
            </li>
          ))}
        </ul>
        {projects.length > 0 ? (
          <>
            <p className="mt-3 text-sm font-medium">Projects</p>
            <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
              {projects?.map((project, index) => (
                <li key={index} className='text-sage-10 text-sm'>
                  <Link href={`/projects/${project.slug}`} className='transition-colors hover:text-mint-11'>
                    {project.title} <span>{project.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : undefined}
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
    <section className='mt-24 max-w-(--breakpoint-sm) mx-auto'>
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
                <div className='flex gap-1 max-w-[calc(100%-16px)] overflow-x-auto no-scrollbar'>
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

      <div className='flex flex-col gap-4'>
        <AnimatePresence initial={false} mode='popLayout'>
          {experiencesToDisplay.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </AnimatePresence>
      </div>

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
              <span className='relative inline-flex h-5 w-10 items-center justify-center overflow-hidden'>
                <AnimatePresence initial={false} mode='popLayout'>
                  <motion.span
                    key={showMore ? 'less' : 'more'}
                    initial={{ y: showMore ? 12 : -12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: showMore ? -12 : 12, opacity: 0 }}
                    transition={{ duration: 0.2, ease }}
                  >
                    {showMore ? 'less' : 'more'}
                  </motion.span>
                </AnimatePresence>
              </span>
              experience
              <ChevronDownIcon
                className={clsx(
                  "ml-2 transition-transform duration-300",
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
