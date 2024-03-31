import { formatBlogDate } from "@/utils/blog-date-formatter";
import { mdxComponents } from "@/utils/custom-mdx-components";
import { client } from "@/utils/graphql-client";
import {
  PostDocument,
  PostQuery,
  PostsDocument,
  PostsQuery,
} from "@/utils/graphql-generated";
import { Badge } from "@radix-ui/themes";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
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

  const mdxSource = await serialize(data?.post?.content.markdown || "");

  return {
    props: {
      post: data.post,
      mdxSource,
    },
  };
}) satisfies GetStaticProps<{
  post: PostQuery["post"];
  mdxSource: MDXRemoteSerializeResult;
}>;

const BlogTemplate = ({
  post,
  mdxSource,
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
        <title>{post.title}</title>
        <meta
          name='description'
          content={post.excerpt || "Blog post"}
          key='desc'
        />
      </Head>
      <section className='mt-24 max-w-2xl mx-auto'>
        <h2 className='text-2xl text-sage-10 w-fit whitespace-nowrap'>
          {post.title}
        </h2>
        <div className='flex items-center gap-3 mt-2'>
          <p>{publishedDate}</p>
          <Badge size='1'>Last updated {updatedDate}</Badge>
        </div>
        <hr className='border-sage-3 mt-4 mb-8' />
      </section>

      <section className='mt-12 max-w-2xl mx-auto'>
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </section>
    </>
  );
};

export default BlogTemplate;
