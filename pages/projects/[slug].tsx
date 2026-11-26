import { Article, ArticleSpec } from "@/components/sheet/article";
import { countWordsInMDX } from "@/utils/count-words";
import { client } from "@/utils/graphql-client";
import { ProjectDocument, ProjectQuery, ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { getLocalStory, getLocalStorySlugs, StoryMeta } from "@/utils/stories";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

export const getStaticPaths = (async () => {
  const { data } = await client.query<ProjectsQuery>({ query: ProjectsDocument });
  const slugs = [...getLocalStorySlugs(), ...data.projects.map((p) => p.slug)];
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}) satisfies GetStaticPaths;

type Story = {
  title: string;
  description: string | null;
  sku: string | null;
  specs: { label: string; value: string }[];
  cover: { src: string; alt: string; width: number; height: number } | null;
  links: StoryMeta["links"];
};

export const getStaticProps = (async (context) => {
  const slug = String(context.params?.slug);

  if (getLocalStorySlugs().includes(slug)) {
    const { meta, body } = getLocalStory(slug);
    const story: Story = {
      title: meta.title,
      description: meta.description,
      sku: meta.sku,
      specs: [
        { label: "Company", value: meta.company },
        { label: "Role", value: meta.role },
        { label: "Dates", value: meta.dateRange },
        { label: "Read", value: `${countWordsInMDX(body)} words` },
      ],
      cover: { src: meta.cover, alt: meta.coverAlt, width: meta.coverWidth, height: meta.coverHeight },
      links: meta.links ?? [],
    };
    return { props: { story, source: await serialize(body, { blockJS: false }) } };
  }

  const { data } = await client.query<ProjectQuery>({ query: ProjectDocument, variables: { slug } });
  const project = data.project!;
  const content = project.content || "";
  const story: Story = {
    title: project.title,
    description: project.description ?? null,
    sku: null,
    specs: [
      ...(project.experience
        ? [
            { label: "Company", value: project.experience.company },
            { label: "Role", value: project.experience.jobTitle },
            { label: "Dates", value: project.experience.dateRange },
          ]
        : []),
      { label: "Read", value: `${countWordsInMDX(content)} words` },
    ],
    cover: null,
    links: [],
  };
  return { props: { story, source: await serialize(content, { blockJS: false }) } };
}) satisfies GetStaticProps;

const StoryPage = ({ story, source }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{`${story.title} — Makenna Smutz`}</title>
      <meta name="description" content={story.description || "A story from Makenna Smutz"} key="desc" />
    </Head>
    <Article
      back={{ href: "/projects", label: "All stories" }}
      sku={story.sku ?? undefined}
      title={story.title}
      description={story.description}
      specs={story.specs as ArticleSpec[]}
      cover={story.cover ?? undefined}
      links={story.links}
      source={source}
    />
  </>
);

export default StoryPage;
