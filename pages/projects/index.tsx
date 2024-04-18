import { Card } from "@/components/card";
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
            <Link key={project.id + 1} href={`/blog/${project.slug}`}>
              <Card>
                <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-start'>
                  <h3>{project.title}</h3>
                  {/* <p className='text-sage-10 whitespace-nowrap'>{formatBlogDate(project.date)}</p> */}
                </div>
                <p className='text-sm text-justify mt-3 text-sage-10'>
                  {project.description}
                </p>
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
