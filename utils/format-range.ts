const months: Record<string, string> = {
  january: "Jan", february: "Feb", march: "Mar", april: "Apr", may: "May", june: "Jun",
  july: "Jul", august: "Aug", september: "Sep", october: "Oct", november: "Nov", december: "Dec",
};

/**
 * One date style everywhere: "Feb 2026 – present". CMS ranges come in as
 * "February 2026 - Present"; "Indefinite" (open-source work) reads as "Ongoing".
 */
export const formatRange = (range: string) => {
  if (/^indefinite$/i.test(range.trim())) return "Ongoing";
  return range
    .replace(/[A-Za-z]+/g, (w) => months[w.toLowerCase()] ?? (/^present$/i.test(w) ? "present" : w))
    .replace(/\s*[-–]\s*/g, " – ");
};

/** Posts: "Apr 7, 2024", parsed as a calendar date so no timezone can shift the day. */
export const formatPostDate = (iso?: string | null) => {
  if (!iso) return "";
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};
