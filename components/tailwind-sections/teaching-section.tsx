import shorthand from "@/public/Composable-Shorthand.png";
import verbose from "@/public/Composable-Verbose.png";
import Image from "next/image";
import { CodeBlock } from "../codeblock";
import { Section } from "./section-template";

const beforeCode = `
async function sayHello(name) {
  console.log('Hello', name);
}
`;

export const TeachingSection = () => (
  <Section id='teaching' title='Teaching ability'>
    <p className='leading-8'>
      My most common form of teaching to date has been mentorship. This
      is difficult to display publicly, but anecdotally, every person
      that I have in mind that I&apos;ve mentored has gone on to new
      jobs to work with the technologies and strategies that I brought
      to them.
    </p>

    <hr className='border-sage-3 my-4' />

    <h3 className='text-md mt-8 text-sage-11'>
      Let me break down feedback for Catalyst
    </h3>

    <p className='leading-8'>
      One reason that I think Tailwind is loved profoundly is the
      ease-of-use and therefore the DX. I think we could be missing some
      low hanging fruit if we don&apos;t modify our approach to the
      component APIs.
    </p>

    <p className='leading-8'>
      We should be shipping both the Verbose with deep customization and
      potentially better readability and the Shorthand for quick and
      easy usage. i.e. What that would look like in practice is
      modifying your approach from only Composable, Verbose but also
      shipping a Shorthand option
    </p>

    <CodeBlock code={beforeCode} language="ts" />

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
)