import { HandWavingIcon } from "@/components/icons";
import { Section } from "@/components/tailwind-sections/section-template";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  "intro",
  "recent-projects",
  "open-source",
  "parting",
];

const FlexileDesignEngineer = () => {
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
        <title>Flexile Design Engineer</title>
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
                  href={`/flexile-design-engineer#${id}`}
                  className='capitalize'
                >
                  {id.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          {/* content here */}
          <Section id='intro' title='Intro'>
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex items-center gap-2 mb-1'>
                <p>Hey Sahil, I&apos;m Makenna</p>
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
                I&apos;m a well rounded engineer, I&apos;ve solo-built several startups, with experience in Frontend, Backend, Product, and Design. I enjoy to dive deep into the intersection of design and code through{" "}
                <i>
                  <strong>Design Engineering</strong>
                </i>
                .
              </p>
            </div>
          </Section>

          <Section id='recent-projects' title='Intro'>
            <p className='leading-8'>
              I&apos;ve been working on a few projects recently that I&apos;m excited about. Here are a few of them:
            </p>
          </Section>

          {/* Nitro sip
              - I love coffee
              - New York has great roasters, but most of the accessible coffee is commoditized and not my speed
              - My theory is that others in NYC feel the same way
              - Idea -> Design -> Build with Medusa.js & Next.js -> Launch in 2 weeks
          */}
          {/*
            Inline feedback widget
            - Documentation sites are often obscure and difficult to understand consumer's experience
            - Inline feedback widget to allow users to give feedback on the documentation
            - Built with framer motion, react, and tailwind
          */}
          {/* Halite - offer calculator
              - Started as a spread sheet
              - Lacked flexibility to truly play with offers as a people person or hiring manager
              - Comp swaps was the focus
          */}

        </div>
      </div>
    </>
  )
};

export default FlexileDesignEngineer;