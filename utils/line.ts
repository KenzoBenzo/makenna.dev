// The current line: what Makenna is building now. Facts here are sourced
// from the ventures' own repos and sites; keep them verifiable.

export type LineLink = { label: string; href: string; external?: boolean };

export type LineItem = {
  sku: string;
  name: string;
  role: string;
  since: string;
  summary: string;
  proof: string;
  image: { src: string; alt: string; width: number; height: number };
  specs: { label: string; value: string }[];
  links: LineLink[];
  storySlug?: string;
  isNew?: boolean;
};

export const line: LineItem[] = [
  {
    sku: "MCS-SF",
    name: "ShelfFlow",
    role: "Founder",
    since: "Feb 2026",
    summary:
      "The wholesale CRM for CPG brands. Finds stores that fit, follows up until they answer, and keeps every order, sample and message from Faire, Airgoods, Shopify and Gmail on one record.",
    proof: "464 commits in 10 months",
    image: {
      src: "/stories/shelfflow/dashboard.jpg",
      alt: "ShelfFlow dashboard with revenue, reorder rate and an Ask bar (demo data)",
      width: 1800,
      height: 1034,
    },
    specs: [
      { label: "Built", value: "CRM, marketing site, Shopify invoices app, two Chrome extensions, pitch deck, MCP server" },
      { label: "Stack", value: "React, Supabase (37 edge functions), Turborepo, Claude" },
      { label: "Integrations", value: "Faire, Airgoods, Shopify, Gmail" },
      { label: "Design", value: "One system (@shelfflow/ui) across app, site and deck" },
    ],
    links: [{ label: "shelfflow.app", href: "https://shelfflow.app", external: true }],
    storySlug: "shelfflow",
    isNew: true,
  },
  {
    sku: "MCS-C9",
    name: "Cirrus 9 Candy",
    role: "Co-founder & tech",
    since: "Jan 2026",
    summary:
      "Organic cotton candy, hand spun in the Hudson Valley with real fruit and maple. I run design, software, Shopify, data and ops.",
    proof: "110+ shops · sofi Awards finalist · seen on GMA",
    image: {
      src: "/stories/cirrus-9-candy/double-strawberry.jpg",
      alt: "A bag of Cirrus 9 Double Strawberry cotton candy",
      width: 1200,
      height: 1200,
    },
    specs: [
      { label: "Built", value: "cirrus9candy.com, wholesale portal, automation hub, AI product-image pipeline" },
      { label: "Stack", value: "Shopify Hydrogen + Next.js 16, Tailwind 4, Vercel" },
      { label: "Launched", value: "Storefront live Oct 6, 2026" },
      { label: "Press", value: "2027 sofi Awards finalist, Good Morning America, Startup CPG Shelfie finalist" },
    ],
    links: [{ label: "cirrus9candy.com", href: "https://cirrus9candy.com", external: true }],
    storySlug: "cirrus-9-candy",
    isNew: true,
  },
  {
    sku: "MCS-DE",
    name: "Design engineering",
    role: "Design engineer",
    since: "2017",
    summary:
      "Design systems, product design, front end and motion for startups: Navattic, Whop, Halite, Hygraph, Chakra UI and more.",
    proof: "Design engineer #1 at Navattic",
    image: {
      src: "/chartgpt-after.png",
      alt: "ChartGPT redesign: query a dataset and get a chart",
      width: 2800,
      height: 1796,
    },
    specs: [
      { label: "Systems", value: "compass-ui at Navattic, frosted-ui at Whop, Roopairs, plus Chakra UI and Saas UI (open source)" },
      { label: "Craft", value: "React, TypeScript, Next.js, Framer Motion, Storybook, Figma" },
    ],
    links: [
      { label: "Full catalog", href: "#catalog" },
      { label: "Download CV", href: "/resume.pdf" },
    ],
  },
];

export const socials: LineLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/makennasmutz", external: true },
  { label: "GitHub", href: "https://github.com/KenzoBenzo", external: true },
  { label: "X (Twitter)", href: "https://twitter.com/KenzSmutz", external: true },
];
