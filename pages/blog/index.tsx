import { IndexTable } from "@/components/sheet/index-table";
import { SectionHead } from "@/components/sheet/section-head";
import { formatBlogDate } from "@/utils/blog-date-formatter";
import { client } from "@/utils/graphql-client";
import { PostsDocument, PostsQuery } from "@/utils/graphql-generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

const BlogHome = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Writing — Makenna Smutz</title>
      <meta name="description" content="Written musings by Makenna Smutz on design, code and process." key="desc" />
    </Head>
    <section className="pt-10">
      <SectionHead title="Writing" meta={`${posts.length} pieces`} />
      <IndexTable
        columns={["No.", "Piece", "Published"]}
        rows={posts.map((post, i) => ({
          href: `/blog/${post.slug}`,
          code: `W-${String(posts.length - i).padStart(2, "0")}`,
          title: post.title,
          description: post.excerpt,
          meta: formatBlogDate(post.date),
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
