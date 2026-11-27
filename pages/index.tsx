import { Catalog } from "@/components/sheet/catalog";
import { Lab } from "@/components/sheet/lab";
import { LineTable } from "@/components/sheet/line-table";
import { Maker } from "@/components/sheet/maker";
import { OrderForm } from "@/components/sheet/order-form";
import { SectionHead } from "@/components/sheet/section-head";
import { Shelf } from "@/components/sheet/shelf";
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
  "Makenna Smutz builds whole businesses: founder of ShelfFlow, co-founder of Cirrus 9 Candy, and a design engineer who designs, codes, sells and ships.";

const Home = ({ experiences, storySlugs }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Makenna Smutz — Founder & design engineer</title>
      <meta name="description" content={description} key="desc" />
    </Head>

    <section aria-labelledby="name" className="pt-8 sm:pt-12 pb-10">
      <h1 id="name" className="font-display font-extrabold leading-[0.9] text-[clamp(3rem,21vw,6rem)] sm:whitespace-nowrap sm:text-[min(11.6vw,10.5rem)]">
        Makenna <span className="text-accent">Smutz</span>
      </h1>
      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-end border-t border-ink pt-5">
        <p className="font-head font-bold text-2xl sm:text-3xl leading-tight max-w-[30ch]">
          I build the whole business, candy brand to SaaS. I design it, code it, sell it and ship it.
        </p>
        <dl className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase text-ink-3">Now</dt>
            <dd className="mt-1">ShelfFlow, Cirrus 9 Candy</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-ink-3">Trade</dt>
            <dd className="mt-1">Design engineer since 2017</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-ink-3">Based</dt>
            <dd className="mt-1">Westchester, NY</dd>
          </div>
        </dl>
      </div>
    </section>

    <section aria-labelledby="line" className="mt-4">
      <SectionHead id="line" title="The line" meta="F/W 2026 · 3 items" />
      <LineTable items={line} storySlugs={storySlugs} />
    </section>

    <section aria-labelledby="shelf" className="mt-24">
      <SectionHead id="shelf" title="On the shelf" meta="Cirrus 9 Candy · core line" />
      <Shelf />
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
