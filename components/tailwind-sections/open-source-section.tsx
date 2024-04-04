import chartGptPromo from "@/public/chart-gpt.png";
import chartGptAfter from "@/public/chartgpt-after.png";
import chartGptBefore from "@/public/chartgpt-before.png";
import { rawExperiences } from "@/utils/experiences";
import { Code } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { Figure } from "../figure";
import { ExperienceCardProps } from "../landing-sections/career-experience";
import { StyledExternalLink } from "../styled-external-link";
import {
  TabGroup,
  TabList,
  TabListItem,
  TabPanel,
  TabPanelGroup,
} from "../tabs";
import { PositionHighlight } from "./position-highlight";
import { Section } from "./section-template";

export const OpenSourceSection = () => {
  const [chartGptView, setChartGptView] = useState(0);

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
    <Section id='open-source' title='Open source contributions'>
      <p className='leading-8'>
        I&apos;ve been working on a few projects that I&apos;m excited about and
        would love to share.
      </p>
      <h3 className='text-lg mt-8 mb-2 text-sage-11'>1. ChartGPT redesign</h3>

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
        This project came about just as the OpenAI and Google Bard APIs were
        popularized. On a trip to London I made friends with the creator of
        ChartGPT who has a background in Backend and infrastructure, had seen
        some traction and wanted help with the UI and UX of the tool.
      </p>

      <p className='leading-8'>
        The biggest thing I wanted to tackle was the tool feeling like a
        workspace rather than a chatbot. Below you can see the before and after
        of the redesign that was shipped.
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

      <TabGroup selectedIndex={chartGptView} setSelectedIndex={setChartGptView}>
        <TabList className='mx-auto mt-8 mb-3'>
          <TabListItem>
            Before
            <span className='hidden sm:inline-block ml-1.5'>redesign</span>
          </TabListItem>
          <TabListItem>
            After
            <span className='hidden sm:inline-block ml-1.5'>redesign</span>
          </TabListItem>
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
        These projects are both incredibly special to me. Coming from design
        into engineering, I needed a go-to component library/design system that
        I could rely on for great default aesthetics, but also deep
        customization. I found that in Chakra UI and Saas UI, and therefore felt
        compelled to give back.
      </p>
      <p className='leading-8'>
        <strong>Ways that I&apos;ve contributed over the years:</strong>
      </p>
      <ul className="list-['—_'] list-inside marker:text-mint-10 space-y-3">
        <li className='leading-8'>
          I worked with Segun before Chakra V2 was out to iron out the
          compatibility with Gatsby. The core team&apos; documentation and
          projects were all on Next.js, so I was able to help with the Gatsby
          side of things like how to use their MDX API and the root file
          equivalents for <Code>_app</Code> and <Code>_document</Code> from
          Next.js. This didn&apos;t age well haha.
        </li>
        <li className='leading-8'>
          To both libraries I&apos;ve contributed to the documentation,
          specifically around theming and how to get the right look and feel for
          your project.
        </li>
        <li className='leading-8'>
          By far my favorite contributions were in Discord, brainstorming with
          the Chakra core team and with Eelco from Saas UI on component APIs.
          Like advocating for consistency across the system and brainstorming on
          naming conventions. There are also a few components I have in the
          backlog to submit like <Code>`SegmentedControl`</Code> and{" "}
          <Code>`CheckboxTree`</Code>.
        </li>
      </ul>
    </Section>
  );
};
