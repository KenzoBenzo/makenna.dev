import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8f8fc" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#13162a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
