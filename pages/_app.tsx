import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor="mint" grayColor="sage" radius="large" >
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Theme>
  );
}
