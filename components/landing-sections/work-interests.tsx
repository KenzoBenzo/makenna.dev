import { splitAtUppercase } from "@/utils/split-at-uppercase";
import { designSkills, technicalSkills, useFilters } from "@/utils/use-filters";
import { Button } from "@radix-ui/themes";


export const WorkInterests = () => {
  const { skillsSelected, handleSkillSelect } = useFilters();

  return (
    <section className='mt-20'>
      <h2 className='text-lg text-sage-10 mb-4 mx-auto w-fit'>
        Work Stuff I&apos;m Interested In
      </h2>

      <div className='flex flex-wrap justify-center gap-3 mx-auto max-w-xl'>
        {technicalSkills.map((skill) => {
          const isSelected = skillsSelected?.includes(skill.value);
          return (
            <Button
              variant={isSelected ? "soft" : "surface"}
              size='2'
              key={skill.value}
              onClick={() => handleSkillSelect(skill.value)}
            >
              {`#${splitAtUppercase(skill.value).join("-").toLocaleLowerCase()}`}
            </Button>
          );
        })}
        {designSkills.map((skill) => {
          const isSelected = skillsSelected?.includes(skill.value);
          return (
            <Button
              variant={isSelected ? "soft" : "surface"}
              size='2'
              key={skill.value}
              onClick={() => handleSkillSelect(skill.value)}
            >
              {`#${splitAtUppercase(skill.value).join("-").toLocaleLowerCase()}`}
            </Button>
          );
        })}
      </div>
    </section>
  )
}