import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        <meta name="theme-color" content="#f8f8fc" />
        <link rel="icon" href="/floret.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
