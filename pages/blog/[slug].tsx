import { mdxComponents } from "@/utils/custom-mdx-components";
import { client } from "@/utils/graphql-client";
import { PostDocument, PostQuery, PostsDocument, PostsQuery } from "@/utils/graphql-generated";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";


export const getStaticPaths = (async () => {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
  });

  const paths = data.posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { data } = await client.query<PostQuery>({
    query: PostDocument,
    variables: { slug: context?.params?.slug },
  });

  const mdxSource = await serialize(data?.post?.content.markdown || '')

  return {
    props: {
      post: data.post,
      mdxSource
    }
  }
}) satisfies GetStaticProps<{
  post: PostQuery['post']
  mdxSource: MDXRemoteSerializeResult
}>


const BlogTemplate = ({
  post,
  mdxSource
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;

  return (
    <>
      <section className='mt-24 max-w-screen-sm mx-auto'>
        <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap'>
          {post.title}
        </h2>
        <p>{post.date}</p>
      </section>

      <section className='mt-12 max-w-screen-sm mx-auto'>
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </section>
    </>
  );
}

export default BlogTemplate;