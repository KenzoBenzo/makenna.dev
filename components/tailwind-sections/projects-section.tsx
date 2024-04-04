import heronPieChart from "@/public/heron-pie-chart.png";
import { rawExperiences } from "@/utils/experiences";
import { Code } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Figure } from "../figure";
import { ExperienceCardProps } from "../landing-sections/career-experience";
import { StyledExternalLink } from "../styled-external-link";
import { PositionHighlight } from "./position-highlight";
import { Section } from "./section-template";

export const ProjectsSection = () => {
  const whop = rawExperiences.find(
    (experience) => experience.company === "Whop"
  );
  const heron = rawExperiences.find(
    (experience) => experience.company === "Heron"
  );

  const filterVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (filterVideo.current) {
      filterVideo.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <Section id='projects' title="Projects I'm proud of">
      <h3 className='text-lg mt-8 mb-2 text-sage-11'>
        1. Building frosted-ui for Whop
      </h3>
      <PositionHighlight {...(whop as ExperienceCardProps)} />
      <p className='leading-8'>
        I&apos;m really proud of the bespoke design system called{" "}
        <Code>`frosted-ui`</Code> that I built for Whop and later open-sourced.
        It began as a simple 6 component library, with the idea that the
        internal team needed better developer experience. When I joined it
        evolved into:
      </p>
      <ul className="list-['—_'] list-inside marker:text-mint-10 mt-2 space-y-3">
        <li>
          65+ components. The simplest being a straight forward link with only
          anchor tag props passed through - and the most complex was a WYSIWYG
          built around the headless tooling from TipTap.
        </li>
        <li>
          Used across 5 different applications by 10+ developers before then
          being open sourced.{" "}
          <StyledExternalLink href='https://github.com/whopio/frosted-ui-legacy/tree/v0.0.1-canary.22'>
            Here is where you can find the old version
          </StyledExternalLink>{" "}
          of the repo where I wrote the majority of the code.
        </li>
        <li>
          A well maintained and thoroughly used <strong>documentation</strong>{" "}
          site using Storybook. I specifically focused on documenting first the
          props, then use cases I thought were common, and lastly the edge
          cases.
        </li>
        <li>
          Pixel perfect attention to detail such as incorporating opacity values
          into regularly used color tokens for better contrast on the different
          hierarchies of backgrounds.
        </li>
        <li>4 distinct themes and a custom hook for switching themes.</li>
        <li>
          Micro animations were some of my favorite. I really appreciate when
          motion makes an interface feel more alive, but doesn&apos; take away
          from the content.
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
        Heron was a project where I got to sweat the design details and had the
        time to do so. This was a data-heavy application so I spent much of my
        focus regarding the UI/UX on interactive charts and tables.
      </p>
      <p className='leading-8'>
        Above, you&apos;re looking at one of the ways that I dug into displaying
        complex data in this case what could be hundreds of employees. This is
        built on-top of the filters API from <Code>`react-table`</Code>. Unseen
        from this video, I also built out customization for column visibility
        and the ability to save custom filter combinations as views.
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
  );
};
