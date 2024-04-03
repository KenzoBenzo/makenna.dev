import { Card } from "@/components/card";
import { Dialog } from "@/components/dialog";
import { CircleArrowUpIcon, HandWavingIcon } from "@/components/icons";
import { ExperienceCardProps } from "@/components/landing-sections/career-experience";
import { StyledExternalLink } from "@/components/styled-external-link";
import {
  TabGroup,
  TabList,
  TabListItem,
  TabPanel,
  TabPanelGroup,
} from "@/components/tabs";
import shorthand from "@/public/Composable-Shorthand.png";
import verbose from "@/public/Composable-Verbose.png";
import chartGptPromo from "@/public/chart-gpt.png";
import chartGptAfter from "@/public/chartgpt-after.png";
import chartGptBefore from "@/public/chartgpt-before.png";
import heronPieChart from "@/public/heron-pie-chart.png";
import { rawExperiences } from "@/utils/experiences";
import { Code } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

const sections = [
  "intro",
  "projects",
  "open-source",
  "at-tailwind",
  "teaching",
];

const PositionHighlight = ({
  brandColor,
  logo,
  title,
  company,
  dateRange,
  description,
}: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Company = () => (
    <div className='flex items-center'>
      <motion.div
        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl mr-3`}
        style={{ backgroundColor: brandColor }}
        layout
      >
        {logo}
      </motion.div>
      <div>
        <div className='flex items-center gap-2'>
          <motion.h3 className='font-semibold' layout>
            {title} @ {company}
          </motion.h3>
        </div>
        <motion.p className='text-xs text-sage-9' layout>
          {dateRange}
        </motion.p>
      </div>
    </div>
  );
  return (
    <>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        layoutId={company}
        layout={true}
        content={
          <>
            <Company />

            <div className='ml-[45px]'>
              <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
                {description?.map((desc, index) => (
                  <motion.li key={index} className='text-sage-10 text-sm'>
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </div>
          </>
        }
      />
      <div className='cursor-pointer group/card'>
        <Card
          onClick={() => setIsOpen(true)}
          layoutId={company}
          layout={true}
          className='w-full'
        >
          <Company />
        </Card>
        <div
          className='flex items-center mx-auto gap-1.5 mt-2 max-w-fit text-mint-11 group-hover/card:text-sage-11'
          onClick={() => setIsOpen(true)}
        >
          <CircleArrowUpIcon className='group-hover/card:animate-jump transition-all' />
          <p className='transition-color text-sm'>CV details</p>
        </div>
      </div>
    </>
  );
};

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section className='mt-24 first:mt-0'>
    <a href={`#${id}`} className='cursor-default'>
      <h2 id={id} className='text-xl mb-3 text-sage-11'>
        {title}
      </h2>
    </a>
    <div className='flex flex-col gap-4'>{children}</div>
  </section>
);

const Figure = ({
  children,
  caption,
}: {
  children: ReactNode;
  caption: string;
}) => (
  <figure>
    {children}
    <figcaption className='text-sage-10 mt-3 text-sm text-center mx-auto'>
      {caption}
    </figcaption>
    <hr className='border-sage-3 mt-4' />
  </figure>
);

const TailwindLabsDesignEngineer = () => {
  const [progress, setProgress] = useState(0);
  const [chartGptView, setChartGptView] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setProgress(progress);
  };

  const filterVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (filterVideo.current) {
      filterVideo.current.playbackRate = 2.0;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whop = rawExperiences.find(
    (experience) => experience.company === "Whop"
  );
  const heron = rawExperiences.find(
    (experience) => experience.company === "Heron"
  );
  const chartGpt = rawExperiences.find(
    (experience) => experience.company === "ChartGPT"
  );
  const chakraUi = rawExperiences.find(
    (experience) => experience.company === "Chakra UI"
  );
  const saasUi = rawExperiences.find(
    (experience) => experience.company === "Saas UI"
  );

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
                I&apos;m well rounded from building startups several times, with
                experience in Frontend, Backend, Product, Design, and even a bit
                of Marketing. Where I really dive deep though is at the
                intersection of design and code through{" "}
                <i>
                  <strong>Design Engineering</strong>
                </i>
                .
              </p>
            </div>
          </Section>

          <Section id='projects' title="Projects I'm proud of">
            <h3 className='text-lg mt-8 mb-2 text-sage-11'>
              1. Building frosted-ui for Whop
            </h3>
            <PositionHighlight {...(whop as ExperienceCardProps)} />
            <p className='leading-8'>
              I&apos;m really proud of the bespoke design system called{" "}
              <Code>`frosted-ui`</Code> that I built for Whop and later
              open-sourced. It began as a simple 6 component library, with the
              idea that the internal team needed better developer experience.
              When I joined it evolved into:
            </p>
            <ul className="list-['—_'] list-inside marker:text-mint-10 mt-2 space-y-3">
              <li>
                65+ components. The simplest being a straight forward link with
                only anchor tag props passed through - and the most complex was
                a WYSIWYG built around the headless tooling from TipTap.
              </li>
              <li>
                Used across 5 different applications by 10+ developers before
                then being open sourced.{" "}
                <StyledExternalLink href='https://github.com/whopio/frosted-ui-legacy/tree/v0.0.1-canary.22'>
                  Here is where you can find the old version
                </StyledExternalLink>{" "}
                of the repo where I wrote the majority of the code.
              </li>
              <li>
                A well maintained and thoroughly used{" "}
                <strong>documentation</strong> site using Storybook. I
                specifically focused on documenting first the props, then use
                cases I thought were common, and lastly the edge cases.
              </li>
              <li>
                Pixel perfect attention to detail such as incorporating opacity
                values into regularly used color tokens for better contrast on
                the different hierarchies of backgrounds.
              </li>
              <li>4 distinct themes and a custom hook for switching themes.</li>
              <li>
                Micro animations were some of my favorite. This is a place
                I&apos;m working on refining my craft. I really appreciate when
                motion makes an interface feel more alive, but doesn&apos; take
                away from the content.
              </li>
            </ul>

            <Figure
              caption=' A demo of the Rich Text Editor that I built for Whop using
                TipTap and frosted-ui components.'
            >
              <div className='relative pb-[63.084112149532714%] h-0'>
                <iframe
                  title='A demo of the Rich Text Editor that I built for Whop using TipTap and Frosted-UI components.'
                  src='https://www.loom.com/embed/8f8771c9948949babbc1dfce0ce50101?sid=1ca499a6-5fbd-4048-9577-ce1516f18675'
                  allowFullScreen
                  className='absolute top-0 left-0 w-full h-full rounded-lg'
                />
              </div>
            </Figure>

            <h3 className='text-lg mt-8 mb-2 text-sage-11'>
              2. Attention to detail in Heron
            </h3>
            <PositionHighlight {...(heron as ExperienceCardProps)} />

            <Figure caption=' Complex table filters I built for Heron'>
              <video
                ref={filterVideo}
                muted
                autoPlay
                loop
                className='w-full h-auto aspect-[320/107] border border-sage-3 rounded-lg bg-white'
              >
                <source src='/heron-filters.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </Figure>

            <p className='leading-8'>
              Heron was a project where I got to sweat the design details and
              the time to do so. This was a data-heavy application so I spent
              much of my focus regarding the UI/UX on interactive charts and
              tables.
            </p>
            <p className='leading-8'>
              Above, you&apos;re looking at one of the ways that I dug into
              displaying complex data in this case what could be hundreds of
              employees. This is built on-top of the filters API from{" "}
              <Code>`react-table`</Code>. Unseen from this video, I also built
              out customization for column visibility and the ability to save
              custom filter combinations as views.
            </p>

            <Figure caption='A screenshot of an interactive pie chart, built for Heron'>
              <Image
                src={heronPieChart}
                alt='A screenshot of an interactive pie chart, built for Heron'
                sizes='100vw'
                className='w-full h-fit rounded-xl mx-auto max-w-lg'
              />
            </Figure>
          </Section>

          <Section id='open-source' title='Open source contributions'>
            <p className='leading-8'>
              My open source contributions have been a bit scattered, but
              I&apos;ve been working on a few projects that I&apos;m excited
              about and would love to share.
            </p>
            <h3 className='text-lg mt-8 mb-2 text-sage-11'>
              1. ChartGPT redesign
            </h3>

            <Figure caption='ChartGPT promotional image'>
              <Image
                src={chartGptPromo}
                alt='ChartGPT promotional image'
                sizes='100vw'
                className='w-full h-fit rounded-xl mx-auto'
              />
            </Figure>

            <PositionHighlight {...(chartGpt as ExperienceCardProps)} />

            <p className='leading-8'>
              This project came about just as the OpenAI and Google Bard APIs
              were popularized. On a trip to London I made friends with the
              creator of ChartGPT who has a background in Backend and
              infrastructure, had seen some traction and wanted help with the UI
              and UX of the tool.
            </p>

            <p className='leading-8'>
              The biggest thing I wanted to tackle was the tool feeling like a
              workspace rather than a chatbot. Below you can see the before and
              after of the redesign that was shipped.
            </p>

            <p className='text-bold'>Relevant links:</p>

            <ul className="list-['—_'] list-inside marker:text-mint-10 mt-2 space-y-3">
              <li>
                The{" "}
                <StyledExternalLink href='https://chartgpt.dev'>
                  live tool
                </StyledExternalLink>{" "}
                is still possible to use
              </li>
              <li>
                The{" "}
                <StyledExternalLink href='https://github.com/whoiskatrin/chartgpt'>
                  GitHub repo
                </StyledExternalLink>
                , while no longer maintained is still public
              </li>
            </ul>

            <TabGroup
              selectedIndex={chartGptView}
              setSelectedIndex={setChartGptView}
            >
              <TabList className='mx-auto mt-8 mb-3'>
                <TabListItem>Before<span className="hidden sm:inline-block ml-1.5">redesign</span></TabListItem>
                <TabListItem>After<span className="hidden sm:inline-block ml-1.5">redesign</span></TabListItem>
              </TabList>
              <TabPanelGroup>
                <TabPanel>
                  <Figure caption='ChartGPT before redesign'>
                    <Image
                      src={chartGptBefore}
                      alt='ChartGPT before redesign'
                      sizes='100vw'
                      className='w-full h-fit rounded-xl mx-auto max-w-lg'
                    />
                  </Figure>
                </TabPanel>
                <TabPanel>
                  <Figure caption='ChartGPT after redesign'>
                    <Image
                      src={chartGptAfter}
                      alt='ChartGPT after redesign'
                      sizes='100vw'
                      className='w-full h-fit rounded-xl mx-auto'
                    />
                  </Figure>
                </TabPanel>
              </TabPanelGroup>
            </TabGroup>

            <h3 className='text-lg mt-8 mb-2 text-sage-11'>
              2. Chakra UI and Saas UI
            </h3>

            <PositionHighlight {...(chakraUi as ExperienceCardProps)} />
            <PositionHighlight {...(saasUi as ExperienceCardProps)} />

            <p className='leading-8'>
              These projects are both incredibly special to me. Coming from design into engineering, I needed a go-to component library/design system that I could rely on for great default aesthetics, but also deep customization. I found that in Chakra UI and Saas UI, and therefore felt compelled to give back.
            </p>
            <p className='leading-8'>
              <strong>Ways that I&apos;ve contributed over the years:</strong>
            </p>
            <ul className="list-['—_'] list-inside marker:text-mint-10 space-y-3">
              <li>
                I worked with Segun before Chakra V2 was out to iron out the compatibility with Gatsby. The core team&apos; documentation and projects were all on Next.js, so I was able to help with the Gatsby side of things like how to use their MDX API and the root file equivalents for <Code>_app</Code> and <Code>_document</Code> from Next.js. This didn&apos;t age well haha.
              </li>
              <li>
                To both libraries I&apos;ve contributed to the documentation, specifically around theming and how to get the right look and feel for your project.
              </li>
              <li>
                By far my favorite contributions were in Discord, brainstorming with the Chakra core team and with Eelco from Saas UI on component APIs. Like advocating for consistency across the system and brainstorming on naming conventions. There are also a few components I have in the backlog to submit like <Code>`SegmentedControl`</Code> and <Code>`CheckboxTree`</Code>.
              </li>
            </ul>
          </Section>

          <Section id='at-tailwind' title="What I'm excited about at Tailwind">
            <ul>
              <li>Catalyst!!</li>

              <li>
                I&apos;d love to create a converter for the new CSS variable
                first approach that takes in the <Code>`.js`</Code>/
                <Code>`.ts`</Code> configuration file and spits out a copiable
                theme in the new format to make migrating a breeze. This should
                be embedded in the migration docs or blog.
              </li>

              <li>
                I&apos;m a bit obsessed with the intersection of design-to-code.
                I&apos;d love to work on a Figma Dev Mode converter using a
                custom Tailwind theme and Catalyst components. Can we generate
                your Catalyst Figma component library based on your Tailwind
                configuration?
              </li>

              <li>
                Command pallets are super, super fun both to design and use.
                Specifically where I&apos;ve been itching to explore is deeper
                into expanding the input outside of simply text. Think
                compounding filters/actions. I&apos;ve been a heavy Raycast user
                from the beginning and also have worked with the founders over
                at Command bar on these ideas. Framer is breaking molds on how a
                command pallet can work as well.
              </li>
            </ul>
          </Section>

          <Section id='teaching' title='Teaching ability'>
            <p>
              This is two-fold. I&apos;d like to throw my opinion in the ring,
              regarding Catalyst&apos;s component API design. One reason that I
              think Tailwind is loved profoundly is the ease of use and
              therefore DX. We should be shipping both the Verbose with deep
              customization and potentially better readability and the Shorthand
              for quick and easy usage. i.e.
            </p>
            <p>
              What that would look like in practice is modifying your approach
              from only Composable, Verbose but also shipping a Shorthand option
            </p>

            {/* TODO: this actually needs to be a code block with a toggle that animates */}
            <div className='flex flex-row gap-2 w-full'>
              <Image
                src={verbose}
                alt='Composable component API in Verbose usage'
                sizes='45vw'
                className='w-full h-fit rounded-xl max-w-screen-md mx-auto'
              />

              <Image
                src={shorthand}
                alt='Composable component API in Shorthand usage'
                sizes='45vw'
                className='w-full h-fit rounded-xl max-w-screen-md mx-auto'
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default TailwindLabsDesignEngineer;
