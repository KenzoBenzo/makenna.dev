import { Badge } from "@radix-ui/themes"
import { Figure } from "../figure"
import { Section } from "../tailwind-sections/section-template"

export const Feedback = () => {
  return (
    <Section id='docs-feedback' title='Inline Docs Feedback Widget'>
      <Badge className='w-fit'>Launched: Wednesday, May 1st 2024</Badge>

      <p className='leading-8'>
        Documentation is pivotal in dev focused companies, so we wanted to make it interactive and fun.
      </p>

      <p className='leading-8'>
        Initially I added a feedback form at the bottom of every page with an added micro-interaction to the buttons to encourage a <i>joy</i> in giving feedback, and repeat submitters.
      </p>

      <Figure caption='Feedback button interaction'>
        <video
          muted
          autoPlay
          loop
          className='w-full h-auto aspect-[1834/1032] border border-sage-3 rounded-lg'
        >
          <source src='https://media.graphassets.com/ELeFxpFsSzKS5rypOvOQ' type='video/quicktime' />
          <source src='https://media.graphassets.com/smVqTa9SYyyTxBBRcBgF' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Figure>

      <p className='leading-8'>
        I think this is a great start, but it needs to be taken a step further. Some of the things this misses the mark on are:
      </p>

      <ul className="list-['—_'] marker:text-mint-10 list-inside space-y-px">
        <li className="text-sage-10 leading-6">The bottom of the page is out of reach in long form content.</li>
        <li className="text-sage-10 leading-6">Feedback is out of context.</li>
        <li className="text-sage-10 leading-6">Biased towards bad experiences.</li>
      </ul>

      <Figure caption='Inline feedback'>
        <video
          muted
          autoPlay
          loop
          className='w-full h-auto aspect-[2080/1156] border border-sage-3 rounded-lg'
        >
          <source src='https://media.graphassets.com/1DlJGVyS16IuFBxAXwQ4' type='video/quicktime' />
          <source src='https://media.graphassets.com/GstnDvhzQCmBnuBfNm7D' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Figure>

      <p className='leading-8'>
        I built an inline feedback widget that allows users to give feedback on a specific section and provide a more contextualized feedback experience. The widget was built with Framer Motion, React, and Tailwind.
      </p>
    </Section>
  )
}