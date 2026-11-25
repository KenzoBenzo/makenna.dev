import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import { client } from "../utils/graphql-client";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NuqsAdapter>
        <MotionConfig reducedMotion="user">
        <ThemeProvider enableSystem={true} defaultTheme="dark" attribute="class">
          <Theme accentColor="mint" grayColor="sage" radius="large" >
            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </Theme>
        </ThemeProvider>
        </MotionConfig>
      </NuqsAdapter>
    </ApolloProvider>
  );
}
