import { Card } from "@/components/card";
import { Text } from "@radix-ui/themes";
import { HandWavingIcon } from "../icons";
import { StyledExternalLink } from "../styled-external-link";

export const AboutMe = () => (
  <section className='flex flex-col sm:flex-row items-center sm:items-start gap-8 text-sage-12'>
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex items-center gap-2 mb-1'>
        <p>Hi, I&apos;m Makenna</p>
        <HandWavingIcon
          size={20}
          className='text-sage-10 hover:animate-wiggle'
        />
      </div>
      <p className='leading-8 max-w-lg'>
        I&apos;m motivated by building products that lean into{" "}
        <i>wicked cool</i> moments via stunning (micro) animations, polished
        design, and deeply thought-through processes. I thrive in
        autonomous, proactive environments, and am stoked to dive deep into
        new tech/tools and concepts.
      </p>
    </div>

    <Card className='w-full sm:w-fit'>
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
);