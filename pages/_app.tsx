import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import { client } from "../utils/graphql-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NuqsAdapter>
        <MotionConfig reducedMotion="user">
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </MotionConfig>
      </NuqsAdapter>
    </ApolloProvider>
  );
}
