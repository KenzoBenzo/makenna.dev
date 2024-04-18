import { countWordsInMDX } from "@/utils/count-words";
import { mdxComponents } from "@/utils/custom-mdx-components";
import { client } from "@/utils/graphql-client";
import {
  ProjectDocument,
  ProjectQuery,
  ProjectsDocument,
  ProjectsQuery,
} from "@/utils/graphql-generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

export const getStaticPaths = (async () => {
  const { data } = await client.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  const paths = data.projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { data } = await client.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: context?.params?.slug },
  });

  const mdxSource = await serialize(data?.project?.content || "");

  const wordCount = countWordsInMDX(data?.project?.content || "");

  return {
    props: {
      project: data.project,
      mdxSource,
      wordCount,
    },
  };
}) satisfies GetStaticProps<{
  project: ProjectQuery["project"];
  mdxSource: MDXRemoteSerializeResult;
  wordCount: number;
}>;

const ProjectTemplate = ({
  project,
  mdxSource,
  wordCount,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta
          name='description'
          content={project.description || "Project breakdown"}
          key='desc'
        />
      </Head>
      <section className='mt-24 max-w-2xl mx-auto'>
        <h2 className='text-2xl text-sage-10 w-fit'>{project.title}</h2>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-3 mt-2'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-3'>
            {/* TODO: Add company here */}
            {/* <p>{publishedDate}</p>
            <Badge size='1' className='max-w-fit'>
              Last updated {updatedDate}
            </Badge> */}
          </div>
          <p className='text-sage-11'>{wordCount} words</p>
        </div>
        <hr className='border-sage-3 mt-4 mb-8' />
      </section>

      <section className='mt-12 max-w-2xl mx-auto'>
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </section>
    </>
  );
};

export default ProjectTemplate;
