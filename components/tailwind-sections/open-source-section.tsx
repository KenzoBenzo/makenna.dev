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
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAAGgIAGgEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAANA9AJ0BKhsCGwE+7XawU7ozryKj82s7QB2JaW7gC4geChSOVSXjj5dk8gEF4pJ1zIXUZtoUun1+u2YKMXbRmVJBO3IFg+Na6Us1actox4TRTDTULiLT2c2JOUOl3D0uiUHBsokzAWD5I5kwnErGaIug1m0kO0UzV0SgmsankpmrbA8QA1RMWfJ6QVY1N/BAPWAtMaIGsankpmhFoti1P2/EzKacgQNmflhDsSgmsank7WfzHBUkE/U0u91PyrxMwJl20vzHBUkFSQVJBUj5PDJFR1nmQ+z5JPyv65pMGkwaTBpMGkdUjRD1uf/9M7Ptmi5joXAmQp6oxbbWKlKOIiP+2+3I+O852wtoX1ZfVl9WX1ZUrJvEzALhEMA/P0UJ+YzgLJg0mDSTHWuiUE1jU7PCqLooNNh14RiP3RSTyzF/pQ4iBq6J5KZq6JQTRxcIvpzlegiQayBOkPjFtEoJrGpqqZq6JMWNTfuhGhckR5rRiBFF8gRqEhY6Ez9lMstEoHk9Iv3QoFwhv0Fi7n6uc5XmtFzyxg0JvIdRNQH1ScywzQHlDqQeqHjNo5JtlekX5+6X7mMswaDokvRkh6c8oXCG/YbTTwT86vf+6X7mNVZ15xdL9zGqs69G3S/jKMH+6X7mNVZ15xdL9zGqs689Zul+5jVWdeaAAP7tAt6WtTO47cPsNR7cjHt6urhW06W0DG+WHT3Ch+OBe1xauzaSRFQGS9DqzewFCFNq4Jt8VNXsDlHREMVBLSFWC3y+3U+OdmVBpiGe3tHfGY2wzyL/HKIDoKTnFR7aXgqkPEQm769bSowju1YUbTZ7njNxDZ+KG2ujbLdC5XowV7SMai76xCW2USGOMyoeYV/XfXI2AK422BCvLLIRfKOjs/3q8KIuNdQ6M4zv0bhd/mGLZxwijr8k+IomsVUNRPYAiY+/MmAGVz8JqF1vKDoRkRH1ZFgrmJGX+plwz/7xEnJG6y11zCu2SkqzVAsNVK+k64o5RUl8dZqKY8S+K717bDUKfWGBcikSXhZ43yH1CQNAD9j5s91FTseQVxpyXzuITil1gPQHYTZj2szZqsxfEmAMEM6lGPK0xSRaFXVTTVwTrbOLTB8oogNpVkiND8XxytXn36WuEuHVib5KBdOK5s4kuA85rT0M+TblV1L/TL4LieeDci3KAAAAAAAAAAAAAAA="
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
        <li className="leading-8">
          The{" "}
          <StyledExternalLink href='https://chartgpt.dev'>
            live tool
          </StyledExternalLink>{" "}
          is still possible to use
        </li>
        <li className="leading-8">
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
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRkYCAABXRUJQVlA4WAoAAAAgAAAATAAAUQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggWAAAAPAEAJ0BKk0AUgA+7Xa2VamnJKMhKAEwHYlpANW4A2IrWD7XAXrXm6AzPvla3J6sAAD+76wwizcFpCY6OIlvJyUQAubze+n5hvl0UtKg1cOGskrINmQAAAA="
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,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data:image/webp;base64,UklGRkAFAABXRUJQVlA4WAoAAAAgAAAAGgIAWQEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggUgMAANA1AJ0BKhsCWgE+7Xa3VqmnJSOgCAEwHYlpbt+yMxSX6hRdFO4x6ABPYB77ZOQ99snIe+2TkPfbLOyjYG+3KQQnfe4mlQLJdsFLHhfI+zpWLXzY8bXnqKn7z4nkV4eu+eosTNbXQYK5JsR1eA0RDGSobvPk86Nk8BoCQumAI6ybbAUw8Ayw/RHWTbYCxEInZho3H97R9197SAMsP0R1k39HqgVJn+Ffyw/28UvEOss541E6tscPG3JmQT5eCIqZslRaP0R7A3qfvBNcp+89P+i5dACF+iMwJTRbNpMRfb1FT956insjcho/SUc9Rf6rJd5LM2u0zvneealYCrJtsCB7ttWuQ+Mk/+XZQLUrAVZNsuuq7dN4uToyXq3e6zzGOeLcqFr2r6HCC7Ti3pUos7od1oifoI+Cb7ZOQ991zjJCxJwhF5E8zMKYA99snIe/F9WRdGP93IdrUogWS7Xi5ORBTqxjw7zhutJg2jc2vFych78WH06tbKGTyxXcwWZ5OQ99snLoHbofGPYUadFLIe+2TkPf3jIY0po3FHlFfsiLk5D32yjSISMdWEcLxlurIl9LteLkxAAA/uvfdSX6beMPjrVsHWI3714nhGo8cc7wmHK9X0MEwf6miItUp1iXiceEuhzUgt2iUag0z5zHRKN6rM//4mSUvkeLqOB5uZr1DhWJJbgRwgGDLK+NXnKro6l1clwTCOymT2QP15xOxVygxEKqt5ezBf3s+pYLNJfZTrRlSAF3utv0U99XNhaunWBGmS0QIiXTjucNhtH5XIFacYNUdT6HddyM/PvdVYgaXbdV/An8LCt3abZ9sNzgVQQ19lt/EUcVSkWOPXczSaUbMIxAol3QXTA/OWOW4BmKh/TMp/oW15xDcoHsBaQhUy7H4VkHhwAIxO3AKzn2cByxj61fzFFOOXIywEL5BLO+aTWyvv2xtshfaSVgeRL2wAEtkP5tAvrIIdTrbLYD1ir5IABNuUFsbReFdO9FuHn0WYP5MCKIWXWw8AAJXyj1mjcPeaw1J3xPyXqQAEQs7Dfm8bHS2sNqwfAgAFZRfEkEBYhqVDlClJwALJws5k3nIM6iHHneEETbgAAz9DnE3guTgAAAUsVAxG/cs5IAAAAAAAA="
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
