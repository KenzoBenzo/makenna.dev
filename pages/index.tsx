import { AboutMe } from "@/components/landing-sections/about-me";
import {
  CareerExperience
} from "@/components/landing-sections/career-experience";
import { Personal } from "@/components/landing-sections/personal";
import { WorkInterests } from "@/components/landing-sections/work-interests";
import { client } from "@/utils/graphql-client";
import { ExperiencesDocument, ExperiencesQuery } from "@/utils/graphql-generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

const Home = ({
  experiences,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <CareerExperience rawExperiences={experiences} />
      <Personal />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query<ExperiencesQuery>({
    query: ExperiencesDocument,
  });

  return {
    props: {
      experiences: data.experiences,
    },
  };
}

export default Home;
