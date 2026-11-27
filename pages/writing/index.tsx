import { Seo } from "@/components/seo";
import { IndexTable, IndexRow } from "@/components/sheet/index-table";
import { SectionHead } from "@/components/sheet/section-head";
import { client } from "@/utils/graphql-client";
import { PostsDocument, PostsQuery, ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { getLocalStories } from "@/utils/stories";
import { formatPostDate, formatRange } from "@/utils/format-range";
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

const WritingHome = ({ rows }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo
      title="Writing — Makenna Smutz"
      description="Stories behind what Makenna Smutz has built, with the decks, screenshots and press around them, plus notes on design, code and process."
    />
    <section className="pt-10">
      <SectionHead title="Writing" meta={`${rows.length} pieces`} />
      <p className="max-w-[60ch] text-lg leading-relaxed text-ink-2 -mt-1 mb-8">
        Stories are the longer version of what I&apos;ve built: why it exists, the calls I made and the
        assets around it. Posts are shorter notes on design, code and process.
      </p>
      <IndexTable rows={rows} columns={["No.", "Piece", "From"]} />
    </section>
  </>
);

export async function getStaticProps() {
  const [{ data }, { data: postData }] = await Promise.all([
    client.query<ProjectsQuery>({ query: ProjectsDocument }),
    client.query<PostsQuery>({ query: PostsDocument }),
  ]);

  const local: IndexRow[] = getLocalStories()
    .sort((a, b) => localOrder.indexOf(a.slug) - localOrder.indexOf(b.slug))
    .map((s) => ({
    href: `/projects/${s.slug}`,
    code: s.sku,
    title: s.title,
    description: s.description,
    meta: `${s.company}\n${formatRange(s.dateRange)}`,
    thumb: { src: s.cover },
    tag: "Story",
  }));

  const cms: IndexRow[] = data.projects.map((p, i) => ({
    href: `/projects/${p.slug}`,
    code: cmsCodes[p.slug] ?? `MCS-${String(i + 1).padStart(2, "0")}`,
    title: p.title,
    description: p.description,
    meta: p.experience ? `${p.experience.company}\n${formatRange(p.experience.dateRange)}` : "",
    ...(cmsThumbs[p.slug] ? { thumb: { src: cmsThumbs[p.slug] } } : {}),
    tag: "Story",
  }));

  const posts: IndexRow[] = postData.posts.map((post, i) => ({
    href: `/blog/${post.slug}`,
    code: `W-${String(postData.posts.length - i).padStart(2, "0")}`,
    title: post.title,
    description: post.excerpt,
    meta: formatPostDate(post.date),
    tag: "Post",
  }));

  // newest first: this year's stories, then posts, then earlier stories
  return { props: { rows: [...local, ...posts, ...cms] } };
}

export default WritingHome;
