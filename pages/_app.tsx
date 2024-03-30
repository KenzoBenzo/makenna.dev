import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";
import { client } from "../utils/graphql-client";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Theme accentColor="mint" grayColor="sage" radius="large" >
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </Theme>
      </ThemeProvider>
    </ApolloProvider>
  );
}
