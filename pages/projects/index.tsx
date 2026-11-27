import { Seo } from "@/components/seo";
import { IndexTable, IndexRow } from "@/components/sheet/index-table";
import { SectionHead } from "@/components/sheet/section-head";
import { client } from "@/utils/graphql-client";
import { ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { getLocalStories } from "@/utils/stories";
import { formatRange } from "@/utils/format-range";
import { InferGetStaticPropsType } from "next";

const cmsThumbs: Record<string, string> = {
  "chartgpt-redesign": "/chartgpt-after.png",
  "heron-mvp": "/heron-pie-chart.png",
  "frosted-ui-design-system": "https://us-east-1-shared-usea1-02.graphassets.com/AGa9dLftvRaiWblNZuxI6z/2tpoybwnRAybJaEgT5H0",
};
const localOrder = ["shelfflow", "cirrus-9-candy"];
const cmsCodes: Record<string, string> = {
  "frosted-ui-design-system": "MCS-FU",
  "heron-mvp": "MCS-HN",
  "chartgpt-redesign": "MCS-CG",
};

const StoriesHome = ({ rows }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title="Stories — Makenna Smutz" description="Curated stories behind what Makenna Smutz has built, with the decks, screenshots and press around them." />
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
    meta: `${s.company}\n${formatRange(s.dateRange)}`,
    thumb: { src: s.cover },
  }));

  const cms: IndexRow[] = data.projects.map((p, i) => ({
    href: `/projects/${p.slug}`,
    code: cmsCodes[p.slug] ?? `MCS-${String(i + 1).padStart(2, "0")}`,
    title: p.title,
    description: p.description,
    meta: p.experience ? `${p.experience.company}\n${formatRange(p.experience.dateRange)}` : "",
    ...(cmsThumbs[p.slug] ? { thumb: { src: cmsThumbs[p.slug] } } : {}),
  }));

  return { props: { rows: [...local, ...cms] } };
}

export default StoriesHome;
