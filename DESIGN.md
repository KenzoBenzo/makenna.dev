---
name: makenna.dev
description: Makenna Smutz's personal site, set as a soft, mono-voiced wholesale line sheet in the Hydrangea palette.
colors:
  accent: "#445fe2"
  accent-ink: "#3a52cf"
  on-accent: "#ffffff"
  code: "#3d6b47"
  sage: "#d7e8d6"
  sage-ink: "#2f5537"
  lilac: "#d9ccf5"
  lilac-ink: "#4b3a80"
  paper: "#f8f8fc"
  stock: "#eceef7"
  ink: "#1d2340"
  ink-2: "#4a5070"
  ink-3: "#676d8c"
  hair: "#d9dcea"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "min(11.6vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.045em"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
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
  section: "96px"
components:
  button-order:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-order-hover:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.on-accent}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-ink-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-cv:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-icon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "36px"
  button-icon-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "32px"
  chip-filter-on:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
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
    backgroundColor: "{colors.stock}"
    rounded: "{rounded.lg}"
    width: "160px"
  shelf-tile:
    backgroundColor: "{colors.lilac}"
    rounded: "{rounded.2xl}"
  lab-panel:
    backgroundColor: "{colors.lilac}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.panel}"
  order-band:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-ink}"
    padding: "80px 40px"
---

# Design System: makenna.dev

## Overview

**Creative North Star: "The Wholesale Line Sheet"**

The site is still a CPG line sheet: every venture is a SKU in a ruled table, with its code, thumbnail, description, proof and role in columns, and each row opens in place into its full spec. This rendition is the Hydrangea edition, softer and mono-voiced. The stock is a lavender white, the ink is navy, cornflower carries every action and the one colored word in the name, and two pastel fields, sage and lilac, hold the calm areas: shelf tiles, the Lab panels, tags and the order band. JetBrains Mono at extrabold now speaks the headlines; Archivo reads the paragraphs.

Density is still that of a trade document: tight rows, mono labels on definition lists, tabular figures wherever numbers line up. Structure comes from thin rules, not boxes: a 2px navy rule opens each section, 1px hairlines divide rows. What softened is the hardware: every action and chip is a pill, every image sits in a rounded well, and the page breathes between sections (96px), never inside a table.

Dark mode is the same sheet at night (navy stock with periwinkle ink), set by token swap only. It follows the device by default, with a system/light/dark switch in the masthead. The world refuses a hero over a row of equal floating cards: ventures are rows, and the only tiles are the products on the shelf.

**Key Characteristics:**
- Lavender-white paper, navy ink, one cornflower accent, sage and lilac fields; no gradients.
- Mono-forward voice: JetBrains Mono 800/700 in normal case for display, section heads, row names and ledes; Archivo for reading.
- Thin rules carry the structure: 1px hair masthead and footer, 2px ink section rules, 1px ink table heads, 1px hair row rules.
- Pills for every action, chip and tag; rounded wells (8–24px) for every image and panel.
- Thumbnails sit inside rows; tiles appear only on the shelf and in the Lab.

## Colors

Hydrangea: a navy-and-cornflower ink set on lavender-white stock, with sage and lilac as the two soft fields.

### Primary
- **Cornflower** (accent): the order action, the CV button, the pressed filter chip, the Lab's selected question and Run button, the Ask demo's bars, the surname "Smutz", em-dash bullets, the focus ring, and the hover color for links, nav and row names. On paper it reads about 4.3:1, so at rest it only colors large type; small text turns cornflower on hover only.
- **Pressed Cornflower** (accent-ink): hover for cornflower fills.
- **White on Cornflower** (on-accent): text and icons on cornflower fills.

### Secondary
- **Sage Code** (code): SKU codes, in-prose and story links (with a 40% underline), the Ask query plan, the Automations WHEN/IF/THEN keys and run log. It marks things you can look up or follow.
- **Sage Field** (sage) with **Sage Ink** (sage-ink): the full-bleed order band, alternate shelf tiles, the Automations panel (at 60%), "Founder" tags.

### Tertiary
- **Lilac Field** (lilac) with **Lilac Ink** (lilac-ink): "New" and "Contract" tags, alternate shelf tiles, the Ask panel (at 50%), Lab result chips, and text selection.

### Neutral
- **Lavender Paper** (paper): the page, the masthead (at 90% with a blur), the inner demo surfaces, text reversed out of ink.
- **Cool Stock** (stock): image wells behind thumbnails and covers, bar tracks, pipeline stage wells, inline code, scrollbar track.
- **Navy Ink** (ink): body text, section and table-head rules, the ink button, outline button borders, the hero rule.
- **Second Ink** (ink-2): descriptions, job titles, section intros, secondary row copy.
- **Third Ink** (ink-3): mono labels, column heads, captions, meta lines. Paper only: about 4.8:1 on paper, under 4.5:1 on stock.
- **Hairline** (hair): row rules, masthead and footer rules, idle pill borders, image-well borders.

### Dark
Same roles, swapped values on `:root.dark`: paper #13162a, stock #1c2038, ink #eceefb, ink-2 #b8bdd8, ink-3 #9096b6, hair #2e3352, accent #8fa2ff, accent-ink #b1beff, on-accent #13162a (navy text on periwinkle), code #a6d6ad, sage #22392a / sage-ink #c4e3c8, lilac #2f2752 / lilac-ink #d9ccf5.

### Named Rules
**The One Accent Rule.** Cornflower means "act" or "you are here": actions, the pressed state, the focus ring, hover, the surname and data bars. It never fills a field or a panel.

**The Two Fields Rule.** Areas get color only from sage or lilac, each paired with its own ink. Shelf tiles alternate lilac and sage; the Lab pairs a lilac Ask panel with a sage Automations panel; the order band is sage.

**The Code Is Green Rule.** Sage code marks lookups and machine output: SKUs, links, query plans, rule logs. Headings and sentences are never code-colored.

## Typography

**Display Font:** JetBrains Mono, through the `font-display` utility (-0.045em), with ui-monospace
**Head Font:** JetBrains Mono, through the `font-head` utility (-0.03em)
**Body Font:** Archivo at normal width, `ss01` on, with ui-sans-serif, system-ui
**Label/Mono Font:** JetBrains Mono at 400

**Character:** One mono family speaks at two volumes: extrabold and tightly tracked for everything you scan, regular and uppercase for the field labels. Archivo stays out of the way for anything you read in sentences.

### Hierarchy
- **Display** (800, `min(11.6vw, 10.5rem)` from `sm`, `clamp(3rem, 21vw, 6rem)` on mobile, line-height 0.9, -0.045em, normal case): the name, once per page, on one line from `sm`. Story titles use it at `clamp(2.5rem, 6vw, 5rem)`, 0.95; the order heading at 4.5rem (3rem mobile), 0.9; the MCS monogram at 24px in the masthead and 36px in the footer.
- **Headline** (800, 2.25rem / 1.875rem mobile, line-height 1, -0.045em): section heads ("The line", "On the shelf", "Lab") and MDX h1/h2 (one step smaller for h2), always on a 2px ink rule.
- **Title** (800, 1.875rem / 1.5rem mobile, line-height 1 to 1.05, -0.03em): row names in the line table and story/writing indexes; MDX h3 at 1.5rem. The Lab demo titles use 700 at 1.5rem; shelf flavor names 700 at 1.125rem.
- **Lede** (700, 1.875rem / 1.5rem, line-height 1.25, -0.03em): the one-line claim, story descriptions (1.5rem), pull quotes (1.5rem), proof cells (1.125rem) and order lines (1.25rem).
- **Body** (Archivo 400, 1rem, line-height 1.625): section intros capped at 62ch, row descriptions at 15px capped at 60ch, catalog detail at 14px capped at 65ch.
- **Prose** (Archivo 400, 17px, line-height 1.7): story and post bodies in a 68ch column.
- **Label** (JetBrains Mono 400, 0.75rem, uppercase, tabular): column heads, `dt` labels, meta lines, captions. Tags, pills on photos and demo captions use 11px in normal case.
- **Code** (JetBrains Mono 400, 0.875rem, tabular): SKU codes in sage code; the query plan at 12.5px.

### Named Rules
**The Mono Voice Rule.** Anything you scan (the name, section heads, row names, ledes, proof, order lines) is JetBrains Mono at 700–800 in normal case. Anything you read in sentences is Archivo. There is no third family and no condensed display.

**The Normal Case Rule.** Display and head type is never uppercased; uppercase belongs to the 12px mono labels only.

**The Tabular Figures Rule.** Any number that sits in a column, meta line or bar readout gets `tabular-nums`.

## Layout

A single 1360px sheet, centered, with 16px gutters on mobile and 40px from `sm`. The masthead is sticky, 56px tall, sharing the same container. Sections stack with 96px between them; each opens with a section head on a 2px ink rule (12px above the title, 20px below) with an optional mono meta line beside it. The hero sets the name, then a 1px ink rule, then the claim (1.4fr) beside a three-column definition list (1fr).

The line table is a six-column grid at `md`: SKU (6rem), thumbnail (10rem), description (fluid), proof (13rem), role (9rem), toggle (2.5rem), with 24px column gaps and 16px row padding. Story and writing indexes use the same skeleton with four columns (6.5rem / 10rem / fluid / 12rem). Under `md` the columns collapse to name plus toggle, and SKU, role and date fold into a mono meta line under the description.

"On the shelf" is a 2-column grid of square tiles, 4 columns from `lg`, 16px apart with 32px between rows. The Lab is two equal panels side by side from `lg`, stacked below. Inside Automations, the five pipeline stages sit in a row from `sm` and stack as labeled lanes below it.

Definition lists (spec rows, maker facts, story headers) use a fixed 6.5–7rem label column and a fluid value column, 10–12px vertical padding per row. Opened specs sit image-left (1.15fr) and specs-right (1fr) behind the 6rem SKU gutter. Story pages pair the title (1.5fr) with a spec list (1fr), then a full-width cover, then a 68ch prose column; `Shot` figures may break out 96px each side on large screens.

The order band is the one full-bleed field, escaping the container with negative viewport margins, 48–80px vertical padding, its content held to 1280px.

## Elevation & Depth

Flat by default. Depth comes from tone, not shadow: stock wells behind imagery, pastel panels behind the Lab, paper surfaces inside them, and a masthead of 90% paper with a medium backdrop blur over a 1px hairline. The one shadow in the system sits on the moving object in the Automations demo, the retailer card, which lifts so it reads as a thing in motion between stage wells.

### Shadow Vocabulary
- **Moving card** (`box-shadow: 0 2px 8px -2px rgb(29 35 64 / 0.18)`): only on an object that travels between containers (the Automations retailer card).

### Named Rules
**The Tone Not Shadow Rule.** To set something apart, put it in a stock well or on a sage or lilac field. A shadow is reserved for an object that moves.

## Shapes

Two shapes do all the work. Interactive things are pills (rounded-full): buttons, filter chips, tags, the theme switch, the row toggle, the Lab selects, the photo captions and proof badges. Containers are rounded wells that grow with their size: row thumbnails 8px, opened spec images, prose shots, maker photos and pipeline stages 12px, story covers, shelf tiles and the demo surfaces 16px, the Lab panels 24px. Image wells that hold screenshots carry a 1px hairline border; product photos on pastel tiles do not.

Rules stay straight and full width. A few marks stay square on purpose: inline code chips, the catalog's brand-color logo squares and the skip link. Lucide line icons are drawn at 1.75 stroke.

## Components

### Buttons
Soft, confident pills.
- **Shape:** fully rounded, semibold 14px (16px on the CV button).
- **Order (primary):** cornflower fill, white text, 36px tall, 16px sides; hover deepens to pressed cornflower. Lives at the masthead's right ("Place an order", "Order" on mobile).
- **CV:** the same fill at 48px with a download icon, on the order band.
- **Ink:** navy fill, paper text, 40px, 20px sides; hover turns cornflower. Used for "Read the story".
- **Outline:** 1px ink border, ink text, 40px (36px in story headers); hover inverts to ink fill. External links carry a 15–16px up-right arrow.
- **Icon (theme switch, row toggle):** 36px circle, 1px hairline border; the theme switch turns its border and icon cornflower on hover, the row toggle fills cornflower on row hover.
- **Focus:** a 2px cornflower outline at 3px offset, globally.

### Chips
- **Style:** 32px pills, 14px sides, 1px hairline border at rest, cornflower border on hover.
- **State:** pressed fills cornflower with white text (`aria-pressed`). The catalog prints a mono count ("15 of 15 roles") and "Clear filters" beneath; the Ask demo uses the same chips as its question picker.
- **Tags:** 11px mono pills. "New" is lilac with lilac ink, "Founder" sage with sage ink, "Contract" lilac with lilac ink. Captions and proof badges on photos are paper-at-90% pills.

### Navigation
The masthead: MCS monogram in mono extrabold 24px, the full name in 14px second ink from `md`, a mono uppercase edition line ("F/W 2026 · Westchester, NY") from `lg`, text links (14px medium), the theme switch and the order pill. The active page is underlined 2px at 6px offset; hover turns cornflower. A 1px hairline closes it. The footer mirrors it with a 1px hairline above, the monogram at 36px, a mono imprint line and links.

### Line Table (signature component)
The home page's line: a mono column-head row between 1px ink rules, then one hairline-ruled row per venture with sage SKU code, 16:10 thumbnail in an 8px stock well, mono row name with an optional lilac "New" pill, description, proof in head type, role and "since" date. A 36px pill toggle with plus/minus sits at the right; on row hover it fills cornflower, the name turns cornflower and the thumbnail scales to 1.04 over 500ms.

Opening a row is the system's signature motion: height grows from 0 over 550ms on ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`), the 12px-rounded image reveals top-down by clip-path over 700ms, and the spec list fades up 8px over 450ms with a 150ms delay. Closing takes 350ms. Only one row is open at a time.

### Shelf
Product tiles for the Cirrus 9 core line: square 16px-rounded wells alternating lilac and sage, the bag photo multiplied onto the field in light mode (normal blend in dark), a paper pill with the flavor's proof at top left. Below: the flavor name in head type, a mono "3 oz" at right, and the brand line in second ink. On hover the bag rises 6px and scales to 1.03 over 500ms and the name turns cornflower. An outline pill links to the store.

### Lab
Two playable ShelfFlow demos on pastel panels (24px radius, 20–24px padding), each with a title, a short intro, controls, and a 16px-rounded paper surface marked "Demo data" with invented shop names.
- **Ask (lilac panel):** question chips compile into a typed query plan in sage code, lines staggered in 120ms apart; then cornflower bars on stock tracks grow from the left (scaleX over 600ms, 80ms stagger), with tabular readouts and a "Pin to dashboard" outline pill.
- **Automations (sage panel):** WHEN / IF / THEN pill selects keyed in sage code, a five-stage pipeline of 12px stock wells, and a retailer card that travels stage to stage with a shared `layoutId` (450ms on ease-out-expo, 380ms per step). Results land as lilac chips on the card and as a sage-code log; "Run rule" is a cornflower pill.

### Catalog
The same row language at a smaller size: hairline rows under a 2px ink rule, a 28px brand-color logo square, company, title, mono date range, sage and lilac tags and a plus/minus glyph. Rows open with height plus opacity (450ms in, 250ms out) into responsibilities (cornflower em-dash bullets) and sage-code story links. Filtering animates rows with position layout and a 350ms fade.

### Spec List
A definition list on a 1px ink top rule with 1px hairline row rules: mono uppercase label in third ink, value in body. Reused in opened line rows, the maker section and story headers, where the SKU row's value is sage code.

### Order Band
A full-bleed sage field with sage-ink text: mono extrabold "Place an order", a short lede, the cornflower CV pill, and a table of contact lines with a 1px sage-ink head rule and 25% sage-ink row rules. Line names are in head type; links are semibold with a 40% sage-ink underline that firms on hover.

### Prose (stories and writing)
MDX h1/h2 reuse the section-head voice on 2px ink rules; h3 is mono extrabold. Lists use cornflower em-dashes; ordered lists use mono markers in third ink. Pull quotes are lede type between 1px ink rules. Inline code sits on stock. Links are sage code with a 40% underline, cornflower on hover, with an arrow when external. Shots and inline images sit in 12px-rounded wells with a hairline border and a mono uppercase caption below.

## Do's and Don'ts

### Do:
- **Do** set the name, section heads, row names, ledes and proof in JetBrains Mono at 800/700, normal case, with the `font-display` (-0.045em) or `font-head` (-0.03em) tracking.
- **Do** separate levels with thin rules: 2px ink to open a section, 1px ink for table heads and spec lists, 1px hairline between rows and around the masthead and footer.
- **Do** make every button, chip, tag and icon control a pill (rounded-full), and put every image in a rounded well (8px thumbnails, 12px frames, 16px covers and tiles, 24px Lab panels).
- **Do** give areas color only from sage or lilac, each with its own ink; alternate them on the shelf and pair them in the Lab.
- **Do** put SKU codes, links and machine output in sage code, and every columned number in tabular figures.
- **Do** label demo data as "Demo data" and use invented shop names in demos.
- **Do** use ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals and travel, with framer-motion's reduced-motion checks in place.

### Don't:
- **Don't** fill a field or panel with cornflower; it is for actions, the pressed state, focus, hover, the surname and data bars.
- **Don't** put ventures or roles in floating cards or a row of equal cards; they are table rows. Tiles belong to products on the shelf.
- **Don't** add shadows to static surfaces; the only shadow is on an object in motion.
- **Don't** uppercase display or head type, or bring back a condensed display face.
- **Don't** set third ink on stock or smaller than 12px; it only clears AA on paper.
- **Don't** change layout or rule weights in dark mode; it swaps token values only.
