import { StyledExternalLink } from "@/components/styled-external-link";
import { AtTailwindSection } from "@/components/tailwind-sections/at-tailwind-section";
import { IntroSection } from "@/components/tailwind-sections/intro-section";
import { OpenSourceSection } from "@/components/tailwind-sections/open-source-section";
import { ProjectsSection } from "@/components/tailwind-sections/projects-section";
import { Section } from "@/components/tailwind-sections/section-template";
import { TeachingSection } from "@/components/tailwind-sections/teaching-section";
import { client } from "@/utils/graphql-client";
import { ExperiencesDocument, ExperiencesQuery } from "@/utils/graphql-generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  "intro",
  "projects",
  "open-source",
  "at-tailwind",
  "teaching",
  "parting",
];

const TailwindLabsDesignEngineer = ({
  experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Tailwind Labs Design Engineer Cover Letter</title>
        <meta
          name='description'
          content="I'm motivated by building products that lean into wicked cool moments via stunning (micro) animations, polished design, and deeply thought-through processes. I thrive in autonomous, proactive environments, and am stoked to dive deep into new tech/tools and concepts."
          key='desc'
        />
      </Head>

      <div className='flex gap-8'>
        <aside
          className='hidden md:flex sticky top-8 left-0 right-0 md:gap-2 h-fit max-w-44 text-sm'
          aria-label='Table of contents links'
        >
          <div className='w-0.5 rounded bg-sage-3 my-1.5 overflow-hidden'>
            <div className='bg-mint-10' style={{ height: `${progress}%` }} />
          </div>

          <ul className='space-y-2'>
            {sections.map((id) => (
              <li key={id} className='whitespace-nowrap text-sage-10'>
                <Link
                  href={`/tailwind-labs-design-engineer#${id}`}
                  className='capitalize'
                >
                  {id.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <IntroSection />
          <ProjectsSection experiences={experiences} />
          <OpenSourceSection experiences={experiences} />
          <AtTailwindSection />
          <TeachingSection />

          <Section title="Parting" id="parting">

            <p className='leading-8'>
              I&apos;m excited about the opportunity to bring my unique perspective to the Tailwind Labs team and would really love to chat more about what you&apos;ve got in store.
            </p>

            <p>Find me elsewhere:</p>
            <ul className='space-y-px'>
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

          </Section>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<ExperiencesQuery>({
    query: ExperiencesDocument,
  });

  return {
    props: {
      experiences: data.experiences,
    },
  };
}

export default TailwindLabsDesignEngineer;
