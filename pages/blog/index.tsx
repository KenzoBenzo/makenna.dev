import { Seo } from "@/components/seo";
import { IndexTable } from "@/components/sheet/index-table";
import { SectionHead } from "@/components/sheet/section-head";
import { formatPostDate } from "@/utils/format-range";
import { client } from "@/utils/graphql-client";
import { PostsDocument, PostsQuery } from "@/utils/graphql-generated";
import { InferGetStaticPropsType } from "next";

const BlogHome = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title="Writing — Makenna Smutz" description="Written musings by Makenna Smutz on design, code and process." />
    <section className="pt-10">
      <SectionHead title="Writing" meta={`${posts.length} pieces`} />
      <IndexTable
        columns={["No.", "Piece", "Published"]}
        rows={posts.map((post, i) => ({
          href: `/blog/${post.slug}`,
          code: `W-${String(posts.length - i).padStart(2, "0")}`,
          title: post.title,
          description: post.excerpt,
          meta: formatPostDate(post.date),
        }))}
      />
    </section>
  </>
);

export async function getStaticProps() {
  const { data } = await client.query<PostsQuery>({ query: PostsDocument });
  return { props: { posts: data.posts } };
}

export default BlogHome;
