import { client } from "@/utils/graphql-client";
import { PostsDocument, PostsQuery } from "@/utils/graphql-generated";
import { Card } from "@radix-ui/themes";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const BlogHome = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <section className='mt-24 max-w-screen-sm mx-auto min-h-[calc(100dvh-328px)]'>
      <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap text-center mx-auto'>
        Written Musings
      </h2>

      <div className="flex flex-col gap-4 mt-8">
        {
          posts.map((post) => (
            <Link key={post.id + 1} href={`/blog/${post.slug}`}>
              <Card variant="surface" size="3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3>{post.title}</h3>
                  <p className="text-sage-10">{post.date}</p>
                </div>
                <p className="text-sm text-justify mt-3 text-sage-10">{post.excerpt}</p>
              </Card>
            </Link>
          ))
        }

      </div>
    </section>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default BlogHome;
