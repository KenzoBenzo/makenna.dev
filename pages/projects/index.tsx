import { Card } from "@/components/card";
import { ExperienceHeadline, ExperienceHeadlineProps } from "@/components/experience-headline";
import { client } from "@/utils/graphql-client";
import { ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

const ProjectsHome = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Projects home page</title>
        <meta
          name='description'
          content="A collection of project breakdowns by Makenna Smutz."
          key='desc'
        />
      </Head>
      <section className='mt-24 max-w-screen-sm mx-auto min-h-[calc(100dvh-328px)]'>
        <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap text-center mx-auto'>
          Projects
        </h2>

        <div className='flex flex-col gap-4 mt-8'>
          {projects.map((project) => (
            <Link key={project.id + 1} href={`/projects/${project.slug}`}>
              <Card>
                <div className='flex flex-col gap-2'>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h3 className="text-sm md:whitespace-nowrap">{project.title}</h3>
                    <p className='text-sm text-sage-10 md:whitespace-nowrap'>{project.description}</p>
                  </div>
                  <ExperienceHeadline size="sm" {...project.experience as ExperienceHeadlineProps} />

                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
}

export default ProjectsHome;
