import { AboutMe } from "@/components/landing-sections/about-me";
import {
  CareerExperience
} from "@/components/landing-sections/career-experience";
import { Personal } from "@/components/landing-sections/personal";
import { WorkInterests } from "@/components/landing-sections/work-interests";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MCS — Design Engineer</title>
        <meta
          name='description'
          content="I&apos;m motivated by building products that lean into wicked cool moments via stunning (micro) animations, polished design, and deeply thought-through processes. I thrive in autonomous, proactive environments, and am stoked to dive deep into new tech/tools and concepts."
          key='desc'
        />
      </Head>
      <AboutMe />
      <WorkInterests />
      <CareerExperience />
      <Personal />
    </>
  );
}
