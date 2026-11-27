import { Pigment } from "@/components/pigment";
import { formatRange } from "@/utils/format-range";
import {
  BusinessSkills,
  DesignSkills,
  ExperiencesQuery,
  TechnicalSkills,
} from "@/utils/graphql-generated";
import { businessSkills, designSkills, Skill, technicalSkills, useFilters } from "@/utils/use-filters";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Ref, useId, useMemo, useState } from "react";

type Experience = ExperiencesQuery["experiences"][number];

const ease = [0.16, 1, 0.3, 1] as const;

// CMS uses "Indefinite" for open-source work with no end; read it as ongoing.
// Pick ink or white for text on a brand color.
const onBrand = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55 ? "var(--color-ink)" : "#ffffff";
};

const displayRange = (range: string) => (range === "Indefinite" ? "Ongoing" : range);

const skillGroups = [
  { label: "Technical", skills: technicalSkills },
  { label: "Design", skills: designSkills },
  { label: "Business", skills: businessSkills },
];

const skillsOf = (e: Experience): Skill[] => [
  ...((e.technicalSkills ?? []) as TechnicalSkills[]),
  ...((e.designSkills ?? []) as DesignSkills[]),
  ...((e.businessSkills ?? []) as BusinessSkills[]),
];

const labelOf = (skill: Skill) =>
  [...technicalSkills, ...designSkills, ...businessSkills].find((s) => s.value === skill)?.label ?? skill;

const CatalogRow = ({ experience, ref }: { experience: Experience; ref?: Ref<HTMLLIElement> }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduce = useReducedMotion();
  const { company, jobTitle, dateRange, founder, contract, logo, brandColor, responsibilities, projects } = experience;

  return (
    <motion.li
      ref={ref}
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.35, ease }}
      className="border-b border-hair"
    >
      {/* the whole row toggles for pointer users; the ± button is the accessible control */}
      <div
        onClick={() => setOpen(!open)}
        className="group w-full grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_minmax(0,1fr)_minmax(0,1fr)_12rem_7rem_2.25rem] gap-x-4 gap-y-1 py-3 items-center cursor-pointer"
      >
        <span
          aria-hidden
          className="size-7 rounded-md inline-flex items-center justify-center ring-1 ring-inset ring-ink/10"
          style={{ backgroundColor: brandColor.hex }}
        >
          {logo ? (
            <Image alt="" src={logo.url} width={14} height={14} />
          ) : (
            <span className="font-mono text-[11px] font-bold" style={{ color: onBrand(brandColor.hex) }}>{company.charAt(0)}</span>
          )}
        </span>
        <h3 className="font-semibold group-hover:text-accent transition-colors truncate">{company}</h3>
        <p className="hidden md:block text-sm text-ink-2 truncate">{jobTitle}</p>
        <p className="hidden md:block font-mono text-xs text-ink-2 tabular whitespace-nowrap">{displayRange(dateRange)}</p>
        <p className="hidden md:flex gap-1.5">
          {founder && (
            <span className="font-mono text-[11px] bg-sage text-sage-ink rounded-full px-2 py-1 leading-none">
              {/co-founder/i.test(jobTitle) ? "Co-founder" : "Founder"}
            </span>
          )}
          {contract && <span className="font-mono text-[11px] bg-lilac text-lilac-ink rounded-full px-2 py-1 leading-none">Contract</span>}
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} details for ${company}`}
          className="justify-self-end size-8 rounded-full inline-flex items-center justify-center text-ink-3 transition-colors group-hover:text-ink hover:bg-stock cursor-pointer"
        >
          {open ? <Minus size={16} aria-hidden /> : <Plus size={16} aria-hidden />}
        </button>
        <p className="md:hidden col-start-2 col-span-2 text-sm text-ink-2">
          {jobTitle}
          <span className="block font-mono text-xs tabular whitespace-nowrap">{displayRange(dateRange)}</span>
        </p>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.45, ease } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease } }}
            className="overflow-hidden"
          >
            <div className="md:pl-12 pb-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <ul className="space-y-2 text-sm leading-relaxed text-ink-2 max-w-[65ch]">
                {responsibilities?.map((r, i) => (
                  <li key={i} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent">
                    {r}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                {projects.length > 0 && (
                  <div>
                    <p className="font-mono text-xs uppercase text-ink-3">Stories</p>
                    <ul className="mt-1 text-sm">
                      {projects.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/projects/${p.slug}`} className="text-code hover:text-accent">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-xs text-ink-3 leading-relaxed">
                  {skillsOf(experience).map(labelOf).join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export const Catalog = ({ experiences }: { experiences: ExperiencesQuery["experiences"] }) => {
  const { skillsSelected, setSkillsSelected, handleSkillSelect } = useFilters();
  const selected = useMemo(() => skillsSelected ?? [], [skillsSelected]);

  const visible = useMemo(
    () =>
      selected.length === 0
        ? experiences
        : experiences.filter((e) => selected.some((s) => skillsOf(e).includes(s))),
    [experiences, selected]
  );

  return (
    <div>
      <fieldset className="pb-5">
        <legend className="sr-only">Filter the catalog by skill</legend>
        <div className="flex flex-col gap-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
              <span className="font-mono text-xs uppercase text-ink-3 sm:w-20 shrink-0">{group.label}</span>
              <span className="flex flex-wrap gap-2">
              {group.skills.map((s) => {
                const on = selected.includes(s.value);
                return (
                  <button
                    key={s.value}
                    type="button"
                    aria-pressed={on}
                    onClick={() => handleSkillSelect(s.value)}
                    className={clsx(
                      "h-8 px-3.5 text-sm border rounded-full transition-colors cursor-pointer",
                      on ? "relative isolate overflow-hidden text-ink border-transparent" : "border-hair hover:border-accent"
                    )}
                  >
                    {on && <Pigment mode={0} seed={s.label.length} />}
                    {s.label}
                  </button>
                );
              })}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs uppercase text-ink-3 tabular flex items-center gap-3" aria-live="polite">
          {visible.length} of {experiences.length} roles
          {selected.length > 0 && (
            <button
              type="button"
              onClick={() => setSkillsSelected(null)}
              className="inline-flex items-center gap-1 text-ink hover:text-accent cursor-pointer uppercase"
            >
              <X size={12} aria-hidden /> Clear filters
            </button>
          )}
        </p>
      </fieldset>

      <ul className="border-t-2 border-ink">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((e) => (
            <CatalogRow key={e.id} experience={e} />
          ))}
        </AnimatePresence>
      </ul>
      {visible.length === 0 && (
        <p className="py-8 text-ink-2">
          No roles match those skills. Clear a filter to see more.
        </p>
      )}
    </div>
  );
};
