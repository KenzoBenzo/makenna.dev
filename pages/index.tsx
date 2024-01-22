import {
  CareerExperience,
  Skill,
  designSkills,
  technicalSkills,
} from "@/components/career-experience";
import { HandWavingIcon } from "@/components/icons";
import { StyledExternalLink } from "@/components/styled-external-link";
import { Button, Card, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [skillsSelected, setSkillsSelected] = useState<Skill[] | undefined>();

  const handleSkillSelect = (skill: Skill) => {
    if (skillsSelected?.includes(skill)) {
      setSkillsSelected(skillsSelected.filter((s) => s !== skill));
    } else {
      setSkillsSelected([...(skillsSelected ?? []), skill]);
    }
  };

  return (
    <>
      <section className='flex flex-col sm:flex-row items-start gap-8 text-sage-12'>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex items-center gap-2 mb-1'>
            <p>Hi, I&apos;m Makenna</p>
            <HandWavingIcon
              size={20}
              className='text-sage-10 hover:animate-wiggle'
            />
          </div>
          <p className='leading-8 max-w-96'>
            I&apos;m motivated by building professional products that still have
            joy, and the gap between design and code.
          </p>
        </div>

        <Card size='2' className='w-fit'>
          <Text className='whitespace-nowrap'>Find me elsewhere</Text>
          <ul className='mt-2 space-y-px'>
            <li>
              <StyledExternalLink href='https://github.com/KenzoBenzo'>
                GitHub
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href='https://linkedin.com/in/makennasmutz'>
                LinkedIn
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href='https://twitter.com/KenzSmutz'>
                X (Twitter)
              </StyledExternalLink>
            </li>
          </ul>
        </Card>
      </section>

      <section className='mt-20'>
        <h2 className='text-lg text-sage-10 mb-4 mx-auto w-fit'>
          Work Stuff I&apos;m Interested In
        </h2>

        <div className='flex flex-wrap justify-center gap-3 mx-auto max-w-[500px]'>
          {technicalSkills.map((skill) => {
            const isSelected = skillsSelected?.includes(skill.value);
            return (
              <Button
                variant={isSelected ? "soft" : "surface"}
                size='2'
                key={skill.value}
                onClick={() => handleSkillSelect(skill.value)}
              >
                {`#${skill.value}`}
              </Button>
            )
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
                {`#${skill.value}`}
              </Button>
            )
          })}
        </div>
      </section>

      <CareerExperience skillsSelected={skillsSelected} setSkillsSelected={setSkillsSelected} />

      <section className='mt-24'>
        <h2 className='text-lg text-sage-10 mb-6 mx-auto w-fit'>Personal</h2>

        <div className='flex items-center gap-12 mb-8 flex-col md:flex-row'>
          <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 w-full'>
            <Image
              src='https://media.graphassets.com/YFmxDKHeRRWWlWZ0WAMl'
              alt='Spela and Eini'
              className='col-span-1 h-full bg-sage-8 rounded-md md:max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[15deg] transition-all ease-in-out object-cover'
              width={200}
              height={200}
            />
            <Image
              src='https://media.graphassets.com/tQ7ReiREiv12mI6qz0iA'
              alt='Makenna on Via Ferrata'
              className='col-span-1 row-span-2 h-full bg-mint-8 rounded-md w-full max-h-96 md:max-h-80 bg-cover hover:scale-125 hover:rotate-[-15deg] transition-all ease-in-out object-cover'
              width={200}
              height={200}
            />
            <Image
              src='https://media.graphassets.com/JSXw8u5DTuCy6OGV0Nxt'
              alt='Ljubljana airport'
              className='col-span-1 h-full bg-sage-8 rounded-md md:max-h-36 w-full bg-cover hover:scale-105 hover:rotate-[5deg] transition-all ease-in-out object-cover'
              width={200}
              height={200}
            />
          </div>
          <ul className="list-inside list-['—_'] marker:text-mint-10  space-y-3">
            <li>Earth-day Birth-day (I&apos;m 26)</li>
            <li>Grew up in the Midwest USA</li>
            <li>
              I lived with my wife, Špela, and cat, Einštien, in Slovenia for 8
              years
            </li>
          </ul>
        </div>

        <div className='flex gap-12 flex-col md:flex-row'>
          <ul className="list-inside list-['—_'] marker:text-mint-10 space-y-3">
            <li>
              Beverages make me tick! Ask me about Filter Coffee, Maté(!!!) or
              Croatian White Wine.
            </li>
            <li>
              Friends would describe my hobbies with likeness to &rdquo;an old
              white guy&ldquo;. I dig Golf, Squash, Padel, Sailing, and Via
              Ferrata.
            </li>
          </ul>

          <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 w-full'>
            <Image
              src='https://media.graphassets.com/La4nqrZPTcuackVAld3l'
              alt='Spela and Eini'
              className='col-span-1 row-span-2 h-full bg-sage-8 rounded-md max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[15deg] transition-all ease-in-out object-cover'
              width={200}
              height={200}
            />
            <Image
              src='https://media.graphassets.com/l17LeRn7SGWJ9P4BnCxa'
              alt='Spela and Eini'
              className='col-span-1 row-span-2 h-full bg-sage-8 rounded-md max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[-30deg] transition-all ease-in-out object-cover'
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  );
}
