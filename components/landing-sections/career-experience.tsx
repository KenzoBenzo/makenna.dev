import { experiences } from "@/utils/experiences";
import {
  Skill,
  businessSkills,
  designSkills,
  technicalSkills,
} from "@/utils/skill-filters";
import { useFilters } from "@/utils/use-filters";
import { Badge, Button, Card, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { CaretDownIcon, XIcon } from "../icons";

export interface ExperienceCardProps {
  title: string;
  founder: boolean;
  contract: boolean;
  company: string;
  dateRange: string;
  description: string[];
  brandColor: string;
  logo: React.ReactNode;
  skills: Skill[];
  skillsSelected?: Skill[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  title,
  founder,
  contract,
  company,
  dateRange,
  description,
  brandColor,
  skills,
}) => {
  const { skillsSelected } = useFilters();

  const noSkillsSelected =
    skillsSelected?.length === 0 || skillsSelected === null;
  const hasSkillsSelected = skillsSelected?.some((skill) =>
    skills.includes(skill)
  );

  if (!hasSkillsSelected && !noSkillsSelected) return null;

  return (
    <Card size='2'>
      <div className='flex items-center'>
        <div
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg mr-3`}
          style={{ backgroundColor: brandColor }}
        >
          {logo}
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h3 className='font-semibold'>
              {title} @ {company}
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
          {description.map((desc, index) => (
            <li key={index} className='text-sage-10 text-sm'>
              {desc}
            </li>
          ))}
        </ul>
        {hasSkillsSelected && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {skills
              .filter((skill) => skillsSelected?.includes(skill))
              .map((skill) => (
                <Badge key={skill} size='1' color='gray'>
                  {skill}
                </Badge>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export const CareerExperience = () => {
  const { skillsSelected, setSkillsSelected, handleSkillSelect } = useFilters();

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
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                </div>
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant='soft'>
              <DropdownMenu.Group>
                <DropdownMenu.Label>Technical</DropdownMenu.Label>
                {technicalSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  function handleSkillSelect(value: string) {
                    throw new Error("Function not implemented.");
                  }

                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Design</DropdownMenu.Label>
                {designSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Business</DropdownMenu.Label>
                {businessSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
};
