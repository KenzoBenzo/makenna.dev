import { HandWavingIcon } from "../icons";
import { Section } from "./section-template";

export const IntroSection = () => (
  <Section id='intro' title='Intro'>
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex items-center gap-2 mb-1'>
        <p>Hi Adam, I&apos;m Makenna</p>
        <HandWavingIcon
          size={20}
          className='text-sage-10 hover:animate-wiggle'
        />
      </div>
      <p className='leading-8'>
        I&apos;m motivated by building products that lean into{" "}
        <i>wicked cool</i> moments via stunning (micro) animations,
        polished design, and deeply thought-through processes. I thrive
        in autonomous, proactive environments, and am stoked to dive
        deep into new tech/tools and concepts.
      </p>

      <p className='leading-8 mt-6'>
        I&apos;m a well rounded engineer, Ive solo-built several startups, with experience in Frontend, Backend, Product, and Design. I enjoy to dive deep into the intersection of design and code through{" "}
        <i>
          <strong>Design Engineering</strong>
        </i>
        .
      </p>
    </div>
  </Section>
)