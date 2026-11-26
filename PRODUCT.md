# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Investors and partners** sizing Makenna up as a founder (Cirrus 9 Candy, ShelfFlow). They should reach out.
- **Hiring managers and clients** looking for a design engineer for contract or full-time work. They should get in touch.
- **Peers and community** (designers, engineers, CPG founders) following her work. They should read the stories and follow her.

## Product Purpose

makenna.dev is Makenna Smutz's personal site: who she is, what she has built, and curated stories behind each venture, with the assets and resources around them (decks, screenshots, press, write-ups). Success: a visitor leaves knowing she builds whole businesses, not just interfaces, and has an obvious way to contact or follow her.

## Positioning

She builds the whole business. Design engineer by trade (design systems, product design, front end, motion), now co-founder of Cirrus 9 Candy (organic cotton candy, Jan 2026 to present) where she owns design, software, Shopify, data and ops, and founder of ShelfFlow (Feb 2026 to present), the wholesale CRM for CPG brands that grew out of selling Cirrus 9 into retail. Candy brand to SaaS, she designs, codes, sells and ships.

## Operating Context

- Next.js 16 pages router, Tailwind 4, Radix Themes, framer-motion; deployed on Vercel from `main`.
- Job history, projects (stories) and blog posts come from Hygraph CMS and are edited in the Hygraph app; story images can live in this repo under `public/`.
- Résumé PDF at `public/resume.pdf`.

## Capabilities and Constraints

- Pages: home, `/projects` + `/projects/[slug]` (stories), `/blog` + `/blog/[slug]`.
- Story bodies are MDX strings in Hygraph rendered with `utils/custom-mdx-components.tsx`.
- The user opened every element of the current site to change ("open to all changes"): theme toggle, skill filter, personal section and blog are not binding.
- Location: Westchester, NY. Do not show a street-level home location.

## Brand Commitments

- Name: Makenna Smutz, monogram "MCS".
- Voice: casual, enthusiastic, first person ("wicked cool", "stoked").
- Mono type kept as an accent voice.

## Evidence on Hand

- **Cirrus 9 Candy:** cirrus9candy.com (headless Hydrogen + Next 16 storefront, launched Oct 6 2026), wholesale portal, c9-orchestrator automation hub. Press: 2027 sofi Awards finalist, Good Morning America (Jul 25 2026), Startup CPG Shelfie finalist, Taste NY; 110+ retail shops; 4.8 stars across 85 reviews. Assets in `../cirrus-9-storefront/public/{brand,press}` and `../c9-orchestrator/assets/wholesale`.
- **ShelfFlow:** shelfflow.app, 464 commits Feb to Nov 2026; Faire, Airgoods, Gmail and Shopify integrations, automations, Ask, MCP server. Screenshots in `../c9-crm/apps/website/public/screenshots`, pitch deck in `../c9-crm/packages/pitch-deck`. Website stats are pre-launch value props and pitch-deck market numbers are unverified: do not present either as traction.
- **Earlier work:** Navattic (design engineer, Jun 2024 to May 2026), Halite, Roopairs, Whop (frosted-ui), Heron, ChartGPT, Hygraph, Chakra UI, Saas UI and more, in Hygraph.
- Personal photos in `public/` (Slovenia, sailing in Croatia, via ferrata, wife Špela and cat Einštein).
- No testimonials from third parties exist; do not invent any.

## Product Principles

1. Show the work doing its job: real screenshots, real products, real press, before any adjective.
2. Each venture reads as a story with a beginning, decisions and outcome, not a feature list.
3. Founder and design engineer carry equal weight; neither is a footnote.
4. Every claim is one she can back up.
