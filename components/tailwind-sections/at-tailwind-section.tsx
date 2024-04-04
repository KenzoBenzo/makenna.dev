import { Code } from "@radix-ui/themes";
import { Section } from "./section-template";

export const AtTailwindSection = () => (
  <Section id='at-tailwind' title="What I'm excited about at Tailwind">
    <p className='leading-8'>
      Dude, I have not been this excited about a job description in a{" "}
      <strong>while</strong>! Let&apos;s dive into a few things that I&apos;m
      particularly excited about:
    </p>
    <ul className="list-['—_'] list-inside marker:text-mint-10 space-y-3">
      <li className="leading-4">
        <strong>Catalyst!!</strong>It opens up the path for Tailwind as the only
        sane choice, and I&apos;d love to contribute to getting there. In the
        past, when discussing the right CSS framework, the biggest blocker in
        choosing Tailwind was that it&apos;s too base-level without a clear
        starter kit. I love the idea of building Catalyst on top of Tailwind to
        fill that gap and make it an easier choice for more developers.{" "}
        <strong>But specifics matter:</strong>
        <ul className="list-['—_'] list-inside marker:text-mint-10 space-y-3 ml-4 mt-2">
          <li className="leading-4">
            I&apos;d love to create a converter for the new CSS variable first
            approach that takes in the <Code>`.js`</Code>/<Code>`.ts`</Code>{" "}
            configuration file and spits out a copiable theme in the new format
            to make migrating a breeze. This should be embedded in the migration
            docs or blog.
          </li>

          <li className="leading-4">
            I&apos;m a bit obsessed with the intersection of design-to-code.
            I&apos;d love to work on a Figma Dev Mode converter using a custom
            Tailwind theme and Catalyst components. Can we generate your
            Catalyst Figma component library based on your Tailwind
            configuration?
          </li>
        </ul>
      </li>

      <li className="leading-4">
        Command palettes are super, super fun both to design and use.
        Specifically where I&apos;ve been itching to explore is deeper into
        expanding the input outside of simply text. Think compounding
        filters/actions. I&apos;ve been a heavy Raycast user from the beginning
        and also have worked with the founders over at Command bar on these
        ideas. Framer is breaking molds on how a command palettes can work as
        well. I&apos;d love to dig into this at Tailwind.
      </li>
    </ul>
  </Section>
);
