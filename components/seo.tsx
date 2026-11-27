import Head from "next/head";
import { useRouter } from "next/router";

const SITE = "https://www.makenna.dev";

/** Title, description and share cards for a page. */
export const Seo = ({ title, description, image = "/og.png" }: { title: string; description: string; image?: string }) => {
  const { asPath } = useRouter();
  const url = `${SITE}${asPath.split(/[?#]/)[0]}`;
  const img = image.startsWith("http") ? image : `${SITE}${image}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Makenna Smutz" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Head>
  );
};
