import { Pigment } from "@/components/pigment";
import { Seo } from "@/components/seo";
import { Catalog } from "@/components/sheet/catalog";
import { Hero } from "@/components/sheet/hero";
import { LineTable } from "@/components/sheet/line-table";
import { Maker } from "@/components/sheet/maker";
import { OrderForm } from "@/components/sheet/order-form";
import { SectionHead } from "@/components/sheet/section-head";
import { client } from "@/utils/graphql-client";
import { ExperiencesDocument, ExperiencesQuery, ProjectsDocument, ProjectsQuery } from "@/utils/graphql-generated";
import { sortExperiences } from "@/utils/experiences";
import { line } from "@/utils/line";
import { getLocalStorySlugs } from "@/utils/stories";
import { InferGetStaticPropsType } from "next";


const description =
  "Makenna Smutz is a design engineer and founder. She helps run Cirrus 9 Candy, an organic cotton candy company, and is building ShelfFlow, a wholesale CRM for CPG brands.";

const Home = ({ experiences, storySlugs }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title="Makenna Smutz — Design engineer & founder" description={description} />

    <Hero />

    <section aria-labelledby="line" className="mt-4">
      <SectionHead id="line" title="Now" meta="F/W 2026 · 3 items" />
      <LineTable items={line} storySlugs={storySlugs} />
    </section>


    <section aria-labelledby="catalog" className="relative mt-24" id="catalog-section">
      {/* a few faint hydrangea heads beside the heading */}
      <div aria-hidden className="pointer-events-none absolute right-0 -top-16 h-44 w-60 isolate hidden sm:block">
        <Pigment mode={3} layout={1} maxDpr={1.5} />
      </div>
      <SectionHead id="catalog" title="Experience" meta={`${experiences.length} roles since 2017`}>
        <a
          href="/cv.pdf"
          download="makenna-smutz-cv.pdf"
          className="relative isolate overflow-hidden rounded-full text-white text-sm font-semibold px-4 h-9 inline-flex items-center no-underline"
        >
          <Pigment mode={1} seed={12} />
          Download CV
        </a>
      </SectionHead>
      <Catalog experiences={experiences} />
    </section>

    <section aria-labelledby="maker" className="mt-24">
      <SectionHead id="maker" title="The maker" />
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
      experiences: sortExperiences(data.experiences),
      storySlugs: [...getLocalStorySlugs(), ...projectData.projects.map((p) => p.slug)],
    },
  };
}

export default Home;
