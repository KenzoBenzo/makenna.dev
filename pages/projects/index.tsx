import { IndexTable, IndexRow } from "@/components/sheet/index-table";
import { SectionHead } from "@/components/sheet/section-head";
import { client } from "@/utils/graphql-client";
import { ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { getLocalStories } from "@/utils/stories";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

const cmsThumbs: Record<string, string> = {
  "chartgpt-redesign": "/chartgpt-after.png",
  "heron-mvp": "/heron-pie-chart.png",
};
const localOrder = ["shelfflow", "cirrus-9-candy"];

const StoriesHome = ({ rows }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Stories — Makenna Smutz</title>
      <meta name="description" content="Curated stories behind what Makenna Smutz has built, with the decks, screenshots and press around them." key="desc" />
    </Head>
    <section className="pt-10">
      <SectionHead title="Stories" meta={`${rows.length} items`} />
      <p className="max-w-[60ch] text-lg leading-relaxed text-ink-2 -mt-1 mb-8">
        The longer version of each line: why it exists, the calls I made building it, and the assets around it.
      </p>
      <IndexTable rows={rows} columns={["SKU", "Story", "From"]} />
    </section>
  </>
);

export async function getStaticProps() {
  const { data } = await client.query<ProjectsQuery>({ query: ProjectsDocument });

  const local: IndexRow[] = getLocalStories()
    .sort((a, b) => localOrder.indexOf(a.slug) - localOrder.indexOf(b.slug))
    .map((s) => ({
    href: `/projects/${s.slug}`,
    code: s.sku,
    title: s.title,
    description: s.description,
    meta: `${s.company} · ${s.dateRange}`,
    thumb: { src: s.cover },
  }));

  const cms: IndexRow[] = data.projects.map((p, i) => ({
    href: `/projects/${p.slug}`,
    code: `MCS-A${String(i + 1).padStart(2, "0")}`,
    title: p.title,
    description: p.description,
    meta: p.experience ? `${p.experience.company} · ${p.experience.dateRange}` : "",
    ...(cmsThumbs[p.slug] ? { thumb: { src: cmsThumbs[p.slug] } } : {}),
  }));

  return { props: { rows: [...local, ...cms] } };
}

export default StoriesHome;
