import { Badge } from "@radix-ui/themes"
import Image from "next/image"
import { Figure } from "../figure"
import { Section } from "../tailwind-sections/section-template"

export const Feedback = () => {
  return (
    <Section id='docs-feedback' title='Docs Feedback'>
      <Badge className='w-fit'>Launched: Wednesday, May 1st 2024</Badge>

      <p className='leading-8'>
        Documentation is product offering for many companies, yet customer
        feedback is often overlooked or an afterthought. I got the
        opportunity to work with a documentation company to think through
        how their customers could receive feedback on their docs sites.
      </p>

      <p className='leading-8'>
        Initially the thought was to have a feedback form at the bottom of every page similar to what you see on documentation sites like Stripe.
      </p>

      <Figure caption='Bottom of page feedback'>
        <div className='relative' style={{ aspectRatio: "1834/1032" }}>
          <Image
            src='https://media.graphassets.com/mowb2qjQ2lzH7WAKFmaQ'
            alt='Bottom of page feedback'
            fill
            className='rounded-xl mx-auto'
          />
        </div>
      </Figure>

      <p className='leading-8'>
        Additionally, some micro-interactions were added to the buttons to encourage a joy in giving feedback, and repeat submitters.
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
        I think this is a great start, but I wanted to take it a step further. My hypothesis is that for most occasions, this feedback is a vanity metric without much substance. Some of the things this misses the mark on are:
      </p>

      <ul className="list-['—_'] marker:text-mint-10 list-inside space-y-px">
        <li className="text-sage-10 leading-6">At the bottom of the page is out of reach in long form content</li>
        <li className="text-sage-10 leading-6">Contextualization is important to feedback. If the feedback page is long, simply having a path doesn&apos;t provide enough context to fix the issue or encourage the right type of content.</li>
        <li className="text-sage-10 leading-6">Biased towards bad experiences. With a bottom-of-the-page form like this, the vast majority of feedback is going to come in the form of overly disgruntled users that are motivated to give you a piece of their mind.</li>
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
        I built an inline feedback widget that would allow users to give feedback on the documentation. This would allow users to give feedback on a specific section of the documentation, and provide a more contextualized feedback experience. The widget was built with Framer Motion, React, and Tailwind.
      </p>

      <p className='leading-8'>
        Additionally a feature that was left off of the launch, was the ability to copy link to highlight, inside of the bubble menu. This is what is possible with Chromium, right clicking and unknown to most. This would allow users to share a link to a specific section of the documentation with a highlight rather than limiting to just anchors.
      </p>
    </Section>
  )
}