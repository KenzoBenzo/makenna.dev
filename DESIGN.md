---
name: makenna.dev
description: Makenna Smutz's personal site, set as a soft, mono-voiced wholesale line sheet in the Hydrangea palette, with live painted pigment on its actions.
colors:
  accent: "#1f5bd0"
  accent-ink: "#1848ad"
  on-accent: "#ffffff"
  pigment-navy: "#181e42"
  pigment-deep: "#162c8c"
  pigment-sky: "#aec7f6"
  pigment-lilac: "#c9bdf3"
  pigment-paper: "#eef2fc"
  code: "#3d6b47"
  sage: "#d7e8d6"
  sage-ink: "#2f5537"
  lilac: "#d9ccf5"
  lilac-ink: "#4b3a80"
  paper: "#f8f8fc"
  well: "#ffffff"
  stock: "#eceef7"
  ink: "#1d2340"
  ink-2: "#4a5070"
  ink-3: "#676d8c"
  hair: "#d9dcea"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  subhead:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01'"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01'"
  prose:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "'ss01'"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    fontFeature: "'tnum'"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "'tnum'"
rounded:
  none: "0px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "40px"
  container: "1360px"
  row-y: "16px"
  row-y-compact: "12px"
  column-gap: "24px"
  panel: "24px"
  work-row: "40px"
  section: "96px"
components:
  button-bloom:
    backgroundColor: "{colors.pigment-navy}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-bloom-md:
    backgroundColor: "{colors.pigment-navy}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-bloom-lg:
    backgroundColor: "{colors.pigment-navy}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "32px"
  toggle-flow:
    backgroundColor: "{colors.pigment-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "36px"
  toggle-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.full}"
    size: "32px"
  toggle-quiet-hover:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "32px"
  chip-filter-on:
    backgroundColor: "{colors.pigment-paper}"
    textColor: "{colors.ink}"
  data-bar:
    backgroundColor: "{colors.pigment-paper}"
    rounded: "{rounded.full}"
    height: "10px"
  data-track:
    backgroundColor: "{colors.stock}"
    rounded: "{rounded.full}"
    height: "10px"
  tag-new:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.lilac-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
  tag-founder:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
  sku-code:
    textColor: "{colors.code}"
    typography: "{typography.code}"
  spec-label:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  thumbnail:
    backgroundColor: "{colors.well}"
    rounded: "{rounded.lg}"
    width: "160px"
  image-well:
    backgroundColor: "{colors.well}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  press-strip:
    backgroundColor: "{colors.lilac}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.panel}"
  lab-panel:
    backgroundColor: "{colors.lilac}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.panel}"
  demo-surface:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.2xl}"
    padding: "16px"
  order-band:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-ink}"
    padding: "80px 40px"
---

# Design System: makenna.dev

## Overview

**Creative North Star: "The Wholesale Line Sheet"**

The site is a CPG line sheet: every venture is a SKU in a ruled table, with its code, thumbnail, description, proof and role in columns, and each row opens in place into its full spec. This is the Hydrangea edition, softer and mono-voiced. The stock is a lavender white, the ink is navy, cobalt marks links, focus and hover, and two pastel fields, sage and lilac, hold the calm areas: the press strip, the Lab panels, tags and the order band. JetBrains Mono at extrabold speaks the headlines; Archivo reads the paragraphs.

The actions are painted. Instead of flat color, every primary button, the line's toggles, every pressed chip and every data bar is a live WebGL surface: marbled pigment that drifts slowly, blooms toward the cursor and pools darker at its wet edges, in the same cobalt, sky and lilac as the hydrangeas. Flat indigo fills were removed on purpose: flat purple-blue reads as AI-generated, and painted pigment reads as made by hand. Everything that is not an action stays still and flat.

Density is that of a trade document: tight rows, mono labels on definition lists, tabular figures wherever numbers line up. Structure comes from thin rules, not boxes: a 2px navy rule opens each section, 1px hairlines divide rows. The hardware is soft: every action and chip is a pill, every image sits in a rounded well, and the page breathes between sections (96px), never inside a table. Hydrangeas are the motif: soft painted heads drawn live behind the hero, and a single floret as the mark in the masthead, the footer and the favicon, nowhere else. Light only. The world refuses a hero over a row of equal floating cards: ventures are rows, and the Cirrus 9 work is shown as real artifacts: bags, a dieline, a live margin ladder, marketplace listings.

**Key Characteristics:**
- Lavender-white paper, navy ink, cobalt for links, focus and hover; sage and lilac fields.
- Live painted pigment on actions, pressed states and data bars only; no flat accent fills and no gradients on surfaces.
- Mono-forward voice: JetBrains Mono 800/700 in normal case for display, section heads, row names and proof; Archivo for reading.
- Thin rules carry the structure: 1px hair masthead and footer, 2px ink section rules, 1px ink table heads, 1px hair row rules.
- Pills for every action, chip and tag; rounded wells (8–24px) for every image and panel.

## Colors

Hydrangea: a navy-and-cobalt ink set on lavender-white stock, sage and lilac as the two soft fields, and a pigment set that only ever appears as paint.

### Primary
- **Cobalt** (accent): links on hover, nav and row-name hover, the focus ring, the hover border on idle chips and pills, em-dash list bullets, the round spec bullets in "Making Cirrus 9" (at 70%) and the code block's line marker. It clears AA on paper as small text. It is also the pigment's cobalt, so painted surfaces and the flat UI share one blue.
- **Pressed Cobalt** (accent-ink): the darker step of cobalt, kept as a token for flat cobalt states.
- **White on Pigment** (on-accent): labels and icons on Deep bloom surfaces.

### Secondary
- **Sage Code** (code): SKU codes, in-prose and story links at rest (with a 40% underline), the Ask query plan, the Automations WHEN/IF/THEN keys and run log, and the margin ladder's "Shop keeps" figure. It marks things you can look up or follow.
- **Sage Field** (sage) with **Sage Ink** (sage-ink): the full-bleed order band, the Automations panel (at 60%), "Founder" and "Co-founder" tags.

### Tertiary
- **Lilac Field** (lilac) with **Lilac Ink** (lilac-ink): "New" and "Contract" tags, the press strip (at 45%), the Ask panel (at 50%), Lab result chips, and text selection.

### Pigment
These five exist only inside the shader and its CSS fallbacks. They are never set as a flat fill.
- **Pigment Navy** (pigment-navy) and **Pigment Deep** (pigment-deep): the ground of Deep bloom, marbled between the two.
- **Pigment Sky** (pigment-sky) and **Pigment Lilac** (pigment-lilac): the light pigment that drifts through both modes.
- **Pigment Paper** (pigment-paper): the ground of Pigment flow, a cooler paper than the page.

### Neutral
- **Lavender Paper** (paper): the page, the masthead (at 90% with a blur), the demo surfaces and margin ladder, logo cells in the press strip, text reversed out of ink.
- **Well White** (well): image wells behind row thumbnails, index thumbnails and the Cirrus 9 artwork, each inside a 1px inset hairline.
- **Cool Stock** (stock): photo wells (maker photos, story covers, prose shots), bar tracks, pipeline stage wells, inline code, the catalog toggle's hover, scrollbar track.
- **Navy Ink** (ink): body text, section and table-head rules, outline button borders, the margin ladder's 40% floor tick.
- **Second Ink** (ink-2): descriptions, intros, job titles, secondary row copy, bar readouts.
- **Third Ink** (ink-3): mono labels, column heads, captions, meta lines. Paper only: about 4.8:1 on paper, under 4.5:1 on stock.
- **Hairline** (hair): row rules, masthead and footer rules, idle pill borders, image-well rings.

### Named Rules
**The Painted Action Rule.** Pigment is for actions and the pressed state only: primary buttons, the line's ± toggles, selected chips, and data bars. It never fills a panel, field, card or section. The one exception is the hero, where the hydrangea heads (mode 3) are pigment painted as florets, not a flat wash.

**The No Flat Indigo Rule.** No action is a flat blue, indigo or purple fill. A primary action is Deep bloom; a pressed state is Pigment flow; at rest, chips and secondary buttons are outlines. Cobalt as a flat color is for text, rules, bullets and the focus ring.

**The Two Fields Rule.** Areas get color only from sage or lilac, each paired with its own ink: the lilac press strip, the lilac Ask panel beside the sage Automations panel, the sage order band.

**The Code Is Green Rule.** Sage code marks lookups and machine output: SKUs, links, query plans, rule logs. Headings and sentences are never code-colored.

## Typography

**Display Font:** JetBrains Mono, through the `font-display` utility (-0.035em), with ui-monospace
**Head Font:** JetBrains Mono, through the `font-head` utility (-0.03em)
**Body Font:** Archivo at normal width, `ss01` on, with ui-sans-serif, system-ui
**Label/Mono Font:** JetBrains Mono at 400

**Character:** One mono family speaks at two volumes: extrabold and tightly tracked for everything you scan, regular for labels and codes. Archivo carries everything you read in sentences, including the intros under the big type.

### Hierarchy
- **Display** (800, 3.75rem / 3rem mobile, line-height 1.02, -0.035em, normal case): the greeting ("Hi, I'm Makenna."). The order heading uses it at 4.5rem (3rem mobile), 0.9; story titles at `clamp(2.5rem, 6vw, 5rem)`, 0.95, or `clamp(2rem, 3.6vw, 3.25rem)` for titles over 28 characters.
- **Headline** (800, 2.25rem / 1.875rem mobile, line-height 1, -0.035em): section heads ("The line", "Making Cirrus 9", "Lab", "Full catalog", "The maker") and MDX h1/h2 (one step smaller for h2), always on a 2px ink rule.
- **Title** (800, 1.875rem / 1.5rem mobile, line-height 1 to 1.05, -0.03em): row names in the line table and the story and writing indexes; MDX h3 at 1.5rem.
- **Subhead** (700, 1.5rem, -0.03em): Cirrus 9 work titles, Lab demo titles, pull quotes, the margin ladder's figures. Smaller steps of the same voice: proof cells at 1.125rem, order lines at 1.25rem, the masthead name at 15px.
- **Lede** (Archivo 400, 1.25rem / 1.125rem mobile, line-height 1.625, second ink): the hero introduction and story descriptions, capped at 38–46ch.
- **Body** (Archivo 400, 1rem, line-height 1.625): section intros capped at 62ch, row descriptions at 15px capped at 60ch, work summaries at 52ch, catalog detail at 14px capped at 65ch. Buttons are Archivo semibold 14px (16px on the CV button).
- **Prose** (Archivo 400, 17px, line-height 1.7): story and post bodies in a 68ch column.
- **Label** (JetBrains Mono 400, 0.75rem, uppercase, tabular): column heads, `dt` labels, meta lines, the footer imprint. Tags, demo captions, stage names and bar ticks use 11px in normal case; the margin ladder's labels use 12px in normal case.
- **Code** (JetBrains Mono 400, 0.875rem, tabular): SKU codes in sage code; the query plan and run log at 12px.

### Named Rules
**The Mono Voice Rule.** Anything you scan (the name, section heads, row names, work titles, proof, order lines) is JetBrains Mono at 700–800 in normal case. Anything you read in sentences is Archivo. There is no third family and no condensed display.

**The Normal Case Rule.** Display and head type is never uppercased; uppercase belongs to the 12px mono labels only.

**The Tabular Figures Rule.** Any number that sits in a column, meta line, price or bar readout gets `tabular-nums`.

## Layout

A single 1360px sheet, centered, with 16px gutters on mobile and 40px from `sm`. The masthead is sticky, 56px tall, sharing the same container. Sections stack with 96px between them; each opens with a section head on a 2px ink rule (12px above the title, 20px below) with an optional mono meta line beside it. The hero is a 38rem text column (greeting, then lede) with the painted cluster behind it: bleeding off the right edge from `lg`, a band above the greeting below that.

The line table is a six-column grid at `md`: SKU (6rem), thumbnail (10rem), description (fluid), proof (13rem), role (9rem), toggle (2.5rem), with 24px column gaps and 16px row padding. Story and writing indexes use the same skeleton with four columns (6.5rem / 10rem / fluid / 15rem). Under `md` the columns collapse to name plus toggle, and SKU, role and date fold into a mono meta line under the description.

"Making Cirrus 9" opens with an intro and a three-up press strip, then four work rows divided by 1px hairlines with 40px vertical padding. Each row pairs text (0.85fr) with a visual (1.15fr) from `lg`, and the rows alternate sides. The Lab is two equal panels side by side from `lg`, stacked below; inside Automations the five pipeline stages sit in a row from `sm` and stack as labeled lanes below it.

Definition lists (spec rows, maker facts, story headers) use a fixed 6.5–7rem label column and a fluid value column, 10–12px vertical padding per row. Opened specs sit image-left (1.15fr) and specs-right (1fr) behind the 6rem SKU gutter. Story pages pair the title (1.5fr) with a spec list (1fr), then a full-width cover, then a 68ch prose column; wide `Shot` figures break out 96px each side on large screens.

The order band is the one full-bleed field, escaping the container with negative viewport margins, 48–80px vertical padding, its content held to 1280px.

## Elevation & Depth

Flat by default. Depth comes from tone, not shadow: white and stock wells behind imagery, pastel panels behind the Lab and the press strip, paper surfaces inside them, and a masthead of 90% paper with a medium backdrop blur over a 1px hairline. Pigment surfaces have texture (marbling, wet-edge veins, paper fiber and grain) but no shadow and no lift. The one shadow in the system sits on the moving object in the Automations demo, the retailer card, so it reads as a thing in motion between stage wells.

### Shadow Vocabulary
- **Moving card** (`box-shadow: 0 2px 8px -2px rgb(29 35 64 / 0.18)`): only on an object that travels between containers (the Automations retailer card).

### Named Rules
**The Tone Not Shadow Rule.** To set something apart, put it in a well or on a sage or lilac field. A shadow is reserved for an object that moves.

## Shapes

Two shapes do all the work. Interactive things are pills (rounded-full): buttons, filter chips, tags, row toggles, the Lab selects, data bars and their tracks, photo captions. Containers are rounded wells that grow with their size: row and index thumbnails 8px; opened spec images, prose shots, maker photos, press logo cells and pipeline stages 12px; Cirrus 9 artwork wells, story covers, demo surfaces and the margin ladder 16px; the Lab panels and the press strip 24px. Wells that hold artwork or screenshots carry a 1px hairline (inset ring on white wells, border on stock ones); photos do not.

Rules stay straight and full width. A few marks stay small and nearly square on purpose: inline code chips, the catalog's 28px brand-color logo cells (6px radius) and the skip link. Lucide line icons are drawn at 1.75 stroke.

## Components

### Pigment surfaces (signature)
`components/pigment.tsx` over `utils/pigment-gl.ts`. A `<Pigment mode seed />` canvas sits absolutely inside any `relative isolate overflow-hidden` pill, behind its label. One shared WebGL context paints every surface on the page into an offscreen canvas and copies each frame across, so the page never holds more than one GL context. `seed` shifts the pattern so neighboring pills never match.
- **Deep bloom (mode 1):** navy and deep-cobalt marbling with sky and lilac pigment drifting through it, under white text. For primary actions only: the masthead "Place an order" ("Contact" on mobile), "Read the story", "Download the CV" and "Run rule".
- **Pigment flow (mode 0):** pale marbled watercolor, sky and lilac washes with cobalt pigment and darker veins where it pools at the wet edge, under navy text. For the pressed state and data: the line's ± toggles, selected chips (catalog skill filters, Ask questions, the margin ladder's products) and data bars (Ask results, the margin bar).
- **Motion:** both modes drift slowly through layered noise, and bloom toward the cursor (or brighten on keyboard focus) with an eased hover. They render at 30fps, pause when off-screen, cap device pixel ratio at 2, and show a single still frame under reduced motion.
- **Fallback:** without WebGL, each mode becomes a static CSS radial gradient in the same colors, painted on the canvas.

### Buttons
Soft, confident pills.
- **Shape:** fully rounded, Archivo semibold 14px (16px on the CV button).
- **Bloom (primary):** Deep bloom with white label. 36px tall with 16px sides in the masthead and on "Run rule"; 40px with 20px sides for "Read the story"; 48px with 24px sides and a download icon for "Download the CV". There is no color change on hover; the paint follows the cursor instead.
- **Outline:** 1px ink border, ink text, 40px (36px in story headers); hover inverts to ink fill. External links carry a 15–16px up-right arrow; "Read the Cirrus 9 story" carries a right arrow.
- **Ghost:** 32px, 1px hairline border, ink text, hover turns the border and text cobalt. Used for "Pin to dashboard".
- **Focus:** a 2px cobalt outline at 3px offset, globally.

### Toggles
- **Line toggle:** 36px Pigment-flow circle with a 10% ink inset ring and a plus or minus icon. The whole row also toggles on click; the button is the accessible control.
- **Catalog toggle:** quieter, 32px, no fill, third-ink icon that turns ink on row hover, stock fill on its own hover.

### Chips
- **Style:** 32px pills, 14px sides, 1px hairline border at rest, cobalt border on hover.
- **State:** pressed (`aria-pressed`) drops the border and paints Pigment flow behind navy text. The catalog prints a mono count ("15 of 15 roles") and "Clear filters" beneath; the Ask demo and the margin ladder use the same chips.
- **Tags:** 11px mono pills. "New" and "Contract" are lilac with lilac ink, "Founder" sage with sage ink. Photo captions are paper-at-90% pills.

### Navigation
The masthead: the floret mark (22px, turns 45° on hover) beside "Makenna Smutz" in mono bold 15px, then text links (14px medium: Line sheet from `md`, Stories, Writing, and CV from `sm`) and the Deep bloom order pill. The active page is underlined 2px at 6px offset; hover turns cobalt. No location line. A 1px hairline closes it. The footer mirrors it with a 1px hairline above, the 24px floret and name, a mono imprint line ("Based in Westchester, NY · Terms: net 30, coffee preferred") and links.

### Section Head
A 2px ink rule, the title in mono extrabold, and an optional mono uppercase meta line beside it. No floret, no icon, no kicker.

### Hydrangea heads (hero background)
Pigment mode 3 (`<Pigment mode={3} maxDpr={1.5} />` in `components/sheet/hero.tsx`), drawn by the shared renderer. Six heads of whole four-petal florets on a cellular field (15px cells), placed in CSS px from the top-right corner and scaled with the viewport, so on desktop they sit right of the greeting and bleed off the edge, and on phones they form a band above it that dissolves at its bottom edge. Florets have broad notched sepals, pale periwinkle through blue with a few lilac, lit from the top left, darker where pigment pools at petal edges, and fade translucent toward each head's rim over a faint wash. They breathe slowly and open a little near the cursor. Low contrast on purpose: character, not an image. A still frame under reduced motion, a soft gradient without WebGL. Keep it quiet; it is never the subject of the page.

### Line Table
The home page's line: a mono column-head row between 1px ink rules, then one hairline-ruled row per venture with sage SKU code, a 16:10 thumbnail in an 8px white well, mono row name with an optional lilac "New" pill, description, proof in head type, role and "since" date, and the Pigment-flow toggle. On row hover the name turns cobalt and the thumbnail scales to 1.03 over 500ms.

Opening a row is the system's signature motion: height grows from 0 over 550ms on ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`), the 12px-rounded image reveals top-down by clip-path over 700ms, and the spec list fades up 8px over 450ms with a 150ms delay. Closing takes 350ms. Only one row is open at a time. Inside, a Deep bloom "Read the story" pill sits beside outline pills.

### Making Cirrus 9
`components/sheet/c9-work.tsx`. The candy company's design work shown as artifacts, not cards.
- **Press strip:** a lilac (45%) band, 24px radius, three logos in 12px paper cells beside one-line wins; a third-ink note below.
- **Work rows:** packaging system, Mini Caddy, pricing and unit economics, wholesale listings. Each has a subhead title, a summary in second ink, a list with small cobalt dot bullets, and a visual. Artwork sits in 16px white wells with an inset hairline and 12–20px padding, captions in 12px third ink below.
- **Margin ladder:** a 16px paper surface with a hairline border. Product chips (Pigment flow when pressed), three mono figures (shelf price, wholesale, and the shop's margin in sage code), and a 12px stock track with a Pigment-flow bar that eases to the margin over 500ms, a 1px ink tick at the 40% floor and a 40% ink tick at the 50% goal.
- An outline pill links to the full story.

### Lab
Two playable ShelfFlow demos on pastel panels (24px radius, 20–24px padding), each with a subhead title, a short intro, controls, and a 16px-rounded paper surface marked "Demo data" with invented shop names.
- **Ask (lilac panel):** question chips compile into a typed query plan in sage code, lines staggered in 120ms apart; then Pigment-flow bars on stock tracks grow from the left (scaleX over 600ms, 80ms stagger), with tabular readouts and a ghost "Pin to dashboard" pill.
- **Automations (sage panel):** WHEN / IF / THEN pill selects keyed in sage code, a five-stage pipeline of 12px stock wells, and a retailer card that travels stage to stage with a shared `layoutId` (450ms on ease-out-expo, 380ms per step). Results land as lilac chips on the card and as a sage-code log; "Run rule" is a Deep bloom pill.

### Catalog
The same row language at a smaller size: hairline rows under a 2px ink rule, a 28px brand-color logo cell, company, title, mono date range, sage and lilac tags and the quiet toggle. Skill filters sit above in three labeled groups. Rows open with height plus opacity (450ms in, 250ms out) into responsibilities (cobalt em-dash bullets) and sage-code story links. Filtering animates rows with position layout and a 350ms fade.

### Spec List
A definition list on a 1px ink top rule with 1px hairline row rules: mono uppercase label in third ink, value in body. Reused in opened line rows, the maker section and story headers, where the SKU row's value is sage code.

### Order Band
A full-bleed sage field with sage-ink text: mono extrabold "Place an order", a short lede, the Deep bloom CV pill, and a table of contact lines with a 1px sage-ink head rule and 25% sage-ink row rules. Line names are in head type; links are semibold with a 40% sage-ink underline that firms on hover.

### Prose (stories and writing)
MDX h1/h2 reuse the section-head voice on 2px ink rules; h3 is mono extrabold. Lists use cobalt em-dashes; ordered lists use mono markers in third ink. Pull quotes are subhead type between 1px ink rules. Inline code sits on stock. Links are sage code with a 40% underline, cobalt on hover, with an arrow when external. Shots and inline images sit in 12px-rounded stock wells with a hairline border and a 12px third-ink caption below.

## Do's and Don'ts

### Do:
- **Do** set the name, section heads, row names, work titles and proof in JetBrains Mono at 800/700, normal case, with the `font-display` (-0.035em) or `font-head` (-0.03em) tracking.
- **Do** separate levels with thin rules: 2px ink to open a section, 1px ink for table heads and spec lists, 1px hairline between rows and around the masthead and footer.
- **Do** make every button, chip, tag and icon control a pill (rounded-full), and put every image in a rounded well (8px thumbnails, 12px frames, 16px artwork and covers, 24px panels).
- **Do** paint a primary action with `<Pigment mode={1} />` and a pressed chip, line toggle or data bar with `<Pigment mode={0} />`, inside a `relative isolate overflow-hidden` pill, with its own seed.
- **Do** give areas color only from sage or lilac, each with its own ink.
- **Do** put SKU codes, links and machine output in sage code, and every columned number in tabular figures.
- **Do** label demo data as "Demo data" and use invented shop names in demos.
- **Do** use ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals and travel, with framer-motion's reduced-motion checks in place.

### Don't:
- **Don't** fill a panel, field, card, section or background with pigment; it is for actions, the pressed state and data bars.
- **Don't** use a flat blue, indigo or purple fill for a button, chip or toggle; flat purple-blue reads as AI-generated.
- **Don't** add a second WebGL context or a per-component shader; every surface goes through the shared renderer.
- **Don't** put ventures or roles in floating cards or a row of equal cards; they are table rows.
- **Don't** add shadows to static surfaces; the only shadow is on an object in motion.
- **Don't** uppercase display or head type, or bring back a condensed display face.
- **Don't** set third ink on stock or smaller than 12px; it only clears AA on paper.
- **Don't** add a dark theme; the sheet is light only.
- **Don't** put the floret in section heads or repeat it as decoration; it lives in the masthead, the footer and the favicon.
- **Don't** add stems, leaves or ribbons to the painted heads, or a second cluster elsewhere.
- **Don't** set prose, captions or photo labels in mono; mono is for SKUs, prices, dates and data.
