import { C9Work } from "@/components/sheet/c9-work";
import { Catalog } from "@/components/sheet/catalog";
import { Hero } from "@/components/sheet/hero";
import { Lab } from "@/components/sheet/lab";
import { LineTable } from "@/components/sheet/line-table";
import { Maker } from "@/components/sheet/maker";
import { OrderForm } from "@/components/sheet/order-form";
import { SectionHead } from "@/components/sheet/section-head";
import { client } from "@/utils/graphql-client";
import { ExperiencesDocument, ExperiencesQuery, ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { line } from "@/utils/line";
import { getLocalStorySlugs } from "@/utils/stories";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const startOf = (range: string) => {
  const m = range.toLowerCase().match(/^([a-z]+)\s+(\d{4})/);
  return m ? Number(m[2]) * 12 + months.indexOf(m[1]) : 0;
};
const isCurrent = (range: string) => /present/i.test(range);

const description =
  "Makenna Smutz is a design engineer and founder. She helps run Cirrus 9 Candy, an organic cotton candy company, and is building ShelfFlow, a wholesale CRM for CPG brands.";

const Home = ({ experiences, storySlugs }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Makenna Smutz — Design engineer & founder</title>
      <meta name="description" content={description} key="desc" />
    </Head>

    <Hero />

    <section aria-labelledby="line" className="mt-4">
      <SectionHead id="line" title="The line" meta="F/W 2026 · 3 items" />
      <LineTable items={line} storySlugs={storySlugs} />
    </section>

    <section aria-labelledby="c9" className="mt-24">
      <SectionHead id="c9" title="Making Cirrus 9" meta="Co-founder & tech" />
      <C9Work />
    </section>

    <section aria-labelledby="lab" className="mt-24">
      <SectionHead id="lab" title="Lab" meta="ShelfFlow features · playable" />
      <Lab />
    </section>

    <section aria-labelledby="catalog" className="mt-24" id="catalog-section">
      <SectionHead id="catalog" title="Full catalog" meta="Every role since 2017" />
      <Catalog experiences={experiences} />
    </section>

    <section aria-labelledby="maker" className="mt-24">
      <SectionHead id="maker" title="The maker" meta="Spec sheet" />
      <Maker />
    </section>

    <OrderForm />
  </>
);

export async function getStaticProps() {
  const [{ data }, { data: projectData }] = await Promise.all([
    client.query<ExperiencesQuery>({ query: ExperiencesDocument }),
    client.query<ProjectsQuery>({ query: ProjectsDocument }),
  ]);

  return {
    props: {
      experiences: [...data.experiences].sort((a, b) => {
        const ca = isCurrent(a.dateRange), cb = isCurrent(b.dateRange);
        if (ca && cb) return startOf(b.dateRange) - startOf(a.dateRange);
        if (ca !== cb) return ca ? -1 : 1;
        return 0;
      }),
      storySlugs: [...getLocalStorySlugs(), ...projectData.projects.map((p) => p.slug)],
    },
  };
}

export default Home;
