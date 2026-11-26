// Server-only: local story files in content/stories/*.mdx.
// Frontmatter: title, description, sku, company, role, dateRange, cover, coverAlt, links[{label, href}].
import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

export type StoryLink = { label: string; href: string };
export type StoryMeta = {
  slug: string;
  title: string;
  description: string;
  sku: string;
  company: string;
  role: string;
  dateRange: string;
  cover: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  links: StoryLink[];
};

const dir = path.join(process.cwd(), "content/stories");

const parseFrontmatter = (raw: string) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, unknown>, body: raw };
  return { data: parse(match[1]) as Record<string, unknown>, body: match[2] };
};

export const getLocalStorySlugs = () =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""))
    : [];

export const getLocalStory = (slug: string) => {
  const raw = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf8");
  const { data, body } = parseFrontmatter(raw);
  return { meta: { slug, ...data } as StoryMeta, body };
};

export const getLocalStories = () => getLocalStorySlugs().map((s) => getLocalStory(s).meta);
