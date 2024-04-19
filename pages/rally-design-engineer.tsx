import { HandWavingIcon } from "@/components/icons";
import { OpenSourceSection } from "@/components/tailwind-sections/open-source-section";
import { ProjectsSection } from "@/components/tailwind-sections/projects-section";
import { Section } from "@/components/tailwind-sections/section-template";
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
];

const RallyDesignEngineer = ({
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
        <title>Rally Design Engineer - My Work</title>
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
                  href={`/rally-design-engineer#${id}`}
                  className='capitalize'
                >
                  {id.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <Section title="Intro" id="intro">
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex items-center gap-2 mb-1'>
                <p className="flex">Hi Micah and Sam
                  <HandWavingIcon
                    size={20}
                    className='text-sage-10 hover:animate-wiggle ml-1.5'
                  />,</p>
              </div>
              <p className='leading-8'>
                I&apos;m motivated by building products that lean into{" "}
                <i>wicked cool</i> moments via stunning (micro) animations,
                polished design, and deeply thought-through processes. I thrive
                in autonomous, proactive environments, and am stoked to dive
                deep into new tech/tools and concepts.
              </p>

              <p className='leading-8 mt-6'>
                My work is uniquely both high level with vision and in the weeds, detail oriented. I&apos;d love to take you through some of my work to get a grasp for this.
              </p>
            </div>
          </Section>
          <ProjectsSection experiences={experiences} />
          <OpenSourceSection experiences={experiences} />
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

export default RallyDesignEngineer;
