import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#121211" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
