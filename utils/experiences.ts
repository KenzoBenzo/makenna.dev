import { ExperiencesQuery } from "./graphql-generated";

type Experience = ExperiencesQuery["experiences"][number];

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const startOf = (range: string) => {
  const m = range.toLowerCase().match(/^([a-z]+)\s+(\d{4})/);
  return m ? Number(m[2]) * 12 + months.indexOf(m[1]) : 0;
};
const isCurrent = (range: string) => /present/i.test(range);

/** Current roles first (newest start first), then the CMS order. Shared by the page and the CV. */
export const sortExperiences = (list: readonly Experience[]) =>
  [...list].sort((a, b) => {
    const ca = isCurrent(a.dateRange), cb = isCurrent(b.dateRange);
    if (ca && cb) return startOf(b.dateRange) - startOf(a.dateRange);
    if (ca !== cb) return ca ? -1 : 1;
    return 0;
  });
