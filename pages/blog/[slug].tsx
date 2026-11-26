import { formatBlogDate } from "@/utils/blog-date-formatter";
import { countWordsInMDX } from "@/utils/count-words";
import { client } from "@/utils/graphql-client";
import {
  PostDocument,
  PostQuery,
  PostsDocument,
  PostsQuery,
} from "@/utils/graphql-generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Article } from "@/components/sheet/article";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useMemo } from "react";

export const getStaticPaths = (async () => {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
  });

  const paths = data.posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { data } = await client.query<PostQuery>({
    query: PostDocument,
    variables: { slug: context?.params?.slug },
  });

  const mdxSource = await serialize(data?.post?.content || "", {
    blockJS: false,
  });

  const wordCount = countWordsInMDX(data?.post?.content || "");

  return {
    props: {
      post: data.post,
      mdxSource,
      wordCount,
    },
  };
}) satisfies GetStaticProps<{
  post: PostQuery["post"];
  mdxSource: MDXRemoteSerializeResult;
  wordCount: number;
}>;

const BlogTemplate = ({
  post,
  mdxSource,
  wordCount,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const publishedDate = useMemo(() => formatBlogDate(post?.date), [post]);
  const updatedDate = useMemo(
    () => formatBlogDate(post?.updatedAt.slice(0, 10)),
    [post]
  );

  if (!post) return null;

  return (
    <>
      <Head>
        <title>{`${post.title} — Makenna Smutz`}</title>
        <meta
          name='description'
          content={post.excerpt || "Blog post"}
          key='desc'
        />
      </Head>
      <Article
        back={{ href: "/blog", label: "All writing" }}
        title={post.title}
        description={post.excerpt}
        specs={[
          { label: "Published", value: publishedDate },
          { label: "Updated", value: updatedDate },
          { label: "Read", value: `${wordCount} words` },
        ]}
        source={mdxSource}
      />
    </>
  );
};

export default BlogTemplate;
