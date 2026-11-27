import { Seo } from "@/components/seo";
import { formatPostDate } from "@/utils/format-range";
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
  const publishedDate = useMemo(() => formatPostDate(post?.date), [post]);
  const updatedDate = useMemo(
    () => formatPostDate(post?.updatedAt),
    [post]
  );

  if (!post) return null;

  return (
    <>
      <Seo title={`${post.title} — Makenna Smutz`} description={post.excerpt || "Writing by Makenna Smutz"} />
      <Article
        back={{ href: "/writing", label: "All writing" }}
        title={post.title}
        description={post.excerpt}
        specs={[
          { label: "Published", value: publishedDate },
          { label: "Updated", value: updatedDate },
          { label: "Length", value: `${Math.max(1, Math.round(wordCount / 230))} min read` },
        ]}
        source={mdxSource}
      />
    </>
  );
};

export default BlogTemplate;
