---
name: makenna.dev
description: Makenna Smutz's personal site, printed as a CPG wholesale line sheet.
colors:
  paper: "#ffffff"
  stock: "#f4f4f2"
  ink: "#111111"
  ink-2: "#4d4d4d"
  ink-3: "#767676"
  hair: "#d9d9d6"
  spot: "#d7262e"
  spot-ink: "#b51d24"
  cyan: "#00739f"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "min(13.8vw, 14rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: "'wdth' 80"
  lede:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    fontVariation: "'wdth' 80"
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
spacing:
  gutter-mobile: "16px"
  gutter: "40px"
  container: "1360px"
  row-y: "16px"
  row-y-compact: "12px"
  column-gap: "24px"
  section: "96px"
components:
  button-order:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "36px"
  button-order-hover:
    backgroundColor: "{colors.spot-ink}"
    textColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  button-ink-hover:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "32px"
  chip-filter-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag-new:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  sku-code:
    textColor: "{colors.cyan}"
    typography: "{typography.code}"
  spec-label:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  thumbnail:
    backgroundColor: "{colors.stock}"
    rounded: "{rounded.none}"
    width: "160px"
---

# Design System: makenna.dev

## Overview

**Creative North Star: "The Wholesale Line Sheet"**

The site is a printed CPG line sheet: white offset stock, black ink, one spot red, and process cyan for codes and links. Every venture is a SKU in a ruled table, with its code, thumbnail, description, proof and role in columns, and each row opens in place into its full spec. Hierarchy comes from rule weight and from the width axis of one family, Archivo, squeezed to 62% for display and 80% for row names, not from cards, shadows or color fields.

Density is that of a trade document: tight rows, mono labels on definition lists, tabular figures wherever numbers line up. The page breathes between sections (96px), never inside a table. The one full-bleed color moment is the spot-red order form at the foot of the home page; everywhere else red is a printer's spot, used on the name, the order action, "New" tags and the hover state.

There is no dark theme, on purpose: it is a printed sheet. The world refuses the dark mono dev portfolio with a hero and a row of equal floating cards.

**Key Characteristics:**
- White paper, black ink, one spot red, process cyan; no gradients, no tints beyond the stock gray.
- Square corners everywhere (0px).
- Rules carry the structure: 6px masthead and footer, 3px section and table heads, 2px line rows, 1px hairline spec rows.
- Archivo on its width axis for every voice except data; JetBrains Mono only for SKUs, dates, labels and captions.
- Thumbnails sit inside rows, never in floating cards.

## Colors

A two-ink print palette with one spot color and one process color, on white offset stock.

### Primary
- **Spot Red** (spot): the order action, the surname in the masthead-scale name, "New" tags, the em-dash bullets in lists, text selection, and the universal hover color for links and row titles. Also the full-bleed field of the order form.
- **Pressed Spot** (spot-ink): hover state of the red order button only.

### Secondary
- **Process Cyan** (cyan): SKU codes, in-prose links and story links, and the focus ring. It marks things you can look up or follow.

### Neutral
- **Offset White** (paper): the page and the masthead (at 95% with a slight blur), and text reversed out of ink or red.
- **Stock Gray** (stock): image wells behind thumbnails and covers, inline code background, scrollbar track. The only tint in the system.
- **Press Black** (ink): all body text, every structural rule, filled buttons, active filter chips, code blocks.
- **Second Ink** (ink-2): descriptions, job titles, secondary row copy.
- **Third Ink** (ink-3): mono labels, column heads, captions, meta lines. Use on paper only; it sits right at AA (about 4.5:1) on white.
- **Hairline** (hair): 1px rules between spec rows and catalog rows, idle chip borders.

### Named Rules
**The Spot Color Rule.** Red is a printer's spot: the order action, "New", the surname and hover. It fills a whole area exactly once, the order form. Never use red for decoration, errors or a second accent.

**The Cyan Means Lookup Rule.** Cyan is reserved for SKU codes, followed links and focus. Body text and headings are never cyan.

## Typography

**Display Font:** Archivo, variable width axis (`wdth` 62, "condensed"), with ui-sans-serif, system-ui
**Body Font:** Archivo at normal width, `ss01` on
**Label/Mono Font:** JetBrains Mono, with ui-monospace

**Character:** One grotesque stretched across its width axis does all the talking, from poster-condensed black to semi-condensed bold to normal text; the mono is a clerk's voice that only states codes, dates and field names.

### Hierarchy
- **Display** (900, wdth 62, `min(13.8vw, 14rem)` at sm and up, `clamp(4.25rem, 21vw, 7rem)` on mobile, line-height 0.82, -0.02em, uppercase): the name, once per page. Story titles use the same voice at `clamp(3rem, 8vw, 6.5rem)`, line-height 0.86. The order-form heading uses it at 6rem.
- **Headline** (900, wdth 62, 3rem / 2.25rem mobile, line-height 0.9, -0.025em, uppercase): section heads ("The line", "Full catalog") and MDX h1/h2 inside stories, always sitting on a 3px rule.
- **Title** (800, wdth 80, 1.875rem / 1.5rem mobile, line-height 1 to 1.05): row names in the line table and story/writing indexes; MDX h3 at 1.5rem.
- **Lede** (700, wdth 80, 1.875rem / 1.5rem, line-height 1.25): the one-line claim, story descriptions, pull quotes, proof cells (1.125rem) and order lines (1.25rem).
- **Body** (400, 1rem, line-height 1.625): row descriptions at 15px capped at 60ch, catalog detail at 14px capped at 65ch.
- **Prose** (400, 17px, line-height 1.7): story and post bodies in a 68ch column.
- **Label** (JetBrains Mono 400, 0.75rem, uppercase, tabular): column heads, `dt` labels, meta lines, captions, tags (11px).
- **Code** (JetBrains Mono 400, 0.875rem, tabular): SKU codes in cyan.

### Named Rules
**The Width Axis Rule.** Hierarchy is set by width and weight of Archivo (62 for headlines, 80 for names and ledes, 100 for reading), never by adding a second display family.

**The Clerk's Mono Rule.** JetBrains Mono appears only for SKUs, dates, field labels, captions and code. Never for headings, sentences or buttons.

**The Tabular Figures Rule.** Any number that sits in a column or meta line gets `tabular-nums`.

## Layout

A single 1360px sheet, centered, with 16px gutters on mobile and 40px from `sm`. The masthead is sticky, 56px tall, sharing the same container. Sections stack with 96px between them; each opens with a SectionHead on a 3px ink rule (12px above the title, 20px below).

The line table is a six-column grid at `md`: SKU (6rem), thumbnail (10rem), description (fluid), proof (13rem), role (9rem), toggle (2.5rem), with 24px column gaps and 16px row padding. Story and writing indexes use the same skeleton with four columns (6.5rem / 10rem / fluid / 12rem). Under `md` the columns collapse to name plus toggle, and SKU, role and date fold into a mono meta line under the description; thumbnails hide in collapsed rows and appear in the opened spec.

Definition lists (spec rows, maker facts, story headers) use a fixed 6.5–7rem label column and a fluid value column, 10–12px vertical padding per row. Opened specs sit image-left (1.15fr) and specs-right (1fr) behind the 6rem SKU gutter. Story pages pair the title (1.5fr) with a spec list (1fr), then a full-width cover, then a 68ch prose column; `Shot` figures may break out 96px each side on large screens.

The order form is the one full-bleed band, escaping the container with negative viewport margins, 48–80px vertical padding.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is printed: rule weight separates levels (6px > 3px > 2px > 1px ink > 1px hairline), stock gray wells sit behind imagery, and the masthead stays above content as a 95% paper band with a 2px blur over a 6px ink rule.

### Named Rules
**The Rules Not Shadows Rule.** Structure is drawn with ink rules of four weights. If something needs to stand apart, give it a heavier rule or a stock well, never a shadow or a raised card.

## Shapes

Every corner is square (0px): buttons, chips, tags, thumbnails, covers, code blocks, the order band. Borders are either structural ink rules (horizontal, full width) or 1px ink frames around images in specs, covers and prose shots. Images crop with `object-cover`, anchored top for screenshots. The only non-rectangular marks are the em-dash bullets (in spot red) and lucide line icons at 1.75 stroke.

## Components

### Buttons
Blunt, square print-shop actions.
- **Shape:** square (0px), 36–48px tall, semibold 14px.
- **Order (primary):** spot red fill, paper text; hover deepens to pressed spot. Lives at the masthead's right ("Place an order", "Order" on mobile).
- **Ink:** press-black fill, paper text, 40px; hover turns spot red. Used for "Read the story".
- **Outline:** 1px ink border, ink text, 40px (36px in story headers); hover inverts to ink fill. External links carry a 15–16px up-right arrow.
- **Reversed (on red):** paper fill, ink text, 48px ("Download the CV"); hover to ink fill.
- **Focus:** a 2px cyan outline at 3px offset, globally.

### Chips
- **Style:** skill filters are 32px square-cornered buttons, 1px hairline border at rest, ink border on hover.
- **State:** pressed state fills ink with paper text (`aria-pressed`). A mono count line ("15 of 15 roles") and "Clear filters" sit beneath.
- **Tags:** "New" is mono 11px uppercase reversed out of spot red; "Founder" is outlined in ink, "Contract" outlined in hairline with second ink text.

### Navigation
The masthead: MCS monogram in condensed black 24px, the full name in 14px second ink from `md`, a mono uppercase edition line ("F/W 2026 · Westchester, NY") from `lg`, then text links (14px medium). The active page is underlined 2px at 6px offset; hover turns spot red. A 6px ink rule closes it. The footer mirrors it with a 6px rule above, the monogram at 36px, and a mono imprint line.

### Line Table (signature component)
The home page's line: a mono column-head row between 3px ink rules, then one 2px-ruled row per venture with cyan SKU, 16:10 thumbnail in a stock well, condensed name with optional "New" tag, description, proof in lede type, role and "since" date. A 36px outlined plus/minus square at the right toggles the row; hover inverts it to ink and turns the name red, and the thumbnail scales to 1.04 over 500ms.

Opening a row is the system's one motion moment: height grows from 0 over 550ms on ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`), the framed image reveals top-down by clip-path over 700ms, and the spec list fades up 8px over 450ms with a 150ms delay. Closing takes 350ms. Only one row is open at a time.

### Catalog
The same row language at a smaller size: 1px hairline rows under a 3px ink head, a 28px brand-color logo square, company, title, mono date range, tags and a plus/minus glyph. Rows open with height plus opacity (450ms in, 250ms out) into responsibilities (red em-dash bullets) and cyan story links. Filtering animates rows with position layout and a 350ms fade.

### Spec List
A definition list on a 1px ink top rule with 1px hairline row rules: mono uppercase label in third ink, value in body. Reused in opened line rows, the maker section and story headers, where the SKU row's value is cyan code.

### Order Form
A full-bleed spot-red band: condensed "Place an order" headline in paper, a short lede, the reversed CV button, and a table of contact lines with a 3px paper head rule and 50% paper row rules; links are paper text with a 50% paper underline that firms on hover.

### Prose (stories and writing)
MDX headings reuse the section-head voice on 3px rules; h3 is semi-condensed extrabold. Lists use red em-dashes; ordered lists use mono markers in third ink. Pull quotes are lede type between 1px ink rules. Inline code sits on stock; code blocks are ink panels with paper text, mono, a spot-red bar on highlighted lines. Links are cyan with a 40% cyan underline, red on hover, with an arrow when external. Figures and shots are framed in 1px ink with a mono uppercase caption below.

## Do's and Don'ts

### Do:
- **Do** separate levels with the four rule weights (6px masthead/footer, 3px section and table heads, 2px line rows, 1px ink or hairline spec rows).
- **Do** set every display and section title in Archivo condensed (`wdth` 62) black, uppercase, line-height 0.82–0.95.
- **Do** put SKU codes in cyan JetBrains Mono and every columned number in tabular figures.
- **Do** keep imagery inside rows and frames: 16:10 thumbnails in stock wells, 1px ink frames on opened specs, covers and shots.
- **Do** use spot red only for the order action, "New", the surname, em-dash bullets, selection and hover.
- **Do** use ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals, with framer-motion's `reducedMotion="user"` in place.

### Don't:
- **Don't** round corners or add shadows; the sheet is square and flat (0px, no `box-shadow`).
- **Don't** put ventures or roles in floating cards or a row of equal cards; they are table rows.
- **Don't** add a dark theme or tint fields other than stock gray; the one color field is the order form.
- **Don't** use JetBrains Mono for headings, sentences or button labels.
- **Don't** use third ink on stock gray or smaller than 12px; it only clears AA on white.
