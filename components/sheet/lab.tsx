import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Pin, Play, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Ask: a question compiler, not a chatbot ---------- */

type Bar = { label: string; value: number; display: string };
type Question = { q: string; plan: string[]; result: Bar[]; unit: string };

// Demo data only. Shop names are invented.
const questions: Question[] = [
  {
    q: "Which shops reordered this quarter?",
    plan: [`from: "orders"`, `where: { kind: "reorder", period: "this_quarter" }`, `group_by: "retailer"`, `metric: "count"`, `sort: "desc", limit: 4`],
    result: [
      { label: "Hudson Sweet Shop", value: 4, display: "4" },
      { label: "Kingston Mercantile", value: 3, display: "3" },
      { label: "Beacon General", value: 2, display: "2" },
      { label: "Catskill Pantry", value: 1, display: "1" },
    ],
    unit: "reorders",
  },
  {
    q: "Revenue by channel this year",
    plan: [`from: "orders"`, `where: { period: "this_year" }`, `group_by: "channel"`, `metric: "sum(total)"`],
    result: [
      { label: "Faire", value: 41, display: "$41.2k" },
      { label: "Direct", value: 28, display: "$28.4k" },
      { label: "Airgoods", value: 17, display: "$17.0k" },
      { label: "Shopify B2B", value: 9, display: "$9.1k" },
    ],
    unit: "revenue",
  },
  {
    q: "Who's waiting on a sample follow-up?",
    plan: [`from: "retailers"`, `where: { stage: "sample_sent", days_since_touch: { gt: 7 } }`, `select: ["name", "days_since_touch"]`],
    result: [
      { label: "Rhinebeck Provisions", value: 12, display: "12 days" },
      { label: "Cold Spring Candy Co.", value: 9, display: "9 days" },
      { label: "New Paltz Market", value: 8, display: "8 days" },
    ],
    unit: "days since last touch",
  },
];

const AskDemo = () => {
  const [active, setActive] = useState<number | null>(0);
  const [run, setRun] = useState(0);
  const [pinned, setPinned] = useState<number[]>([]);
  const prefersReduced = useReducedMotion();
  // the first question is shown settled; animation plays when someone picks one
  const reduce = prefersReduced || run === 0;
  const current = active === null ? null : questions[active];
  const max = current ? Math.max(...current.result.map((r) => r.value)) : 1;

  return (
    <div className="flex flex-col h-full">
      <h3 className="font-head font-bold text-2xl">Ask</h3>
      <p className="mt-2 text-sm text-ink-2 leading-relaxed max-w-[52ch]">
        Not a chatbot: a question compiler. Claude turns a question into a typed query plan, and the
        numbers come from the same stats code as the dashboard, never from the model.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Pick a question">
        {questions.map((item, i) => (
          <button
            key={item.q}
            type="button"
            aria-pressed={active === i}
            onClick={() => {
              setActive(i);
              setRun((r) => r + 1);
            }}
            className={clsx(
              "h-8 px-3.5 rounded-full border text-sm transition-colors cursor-pointer",
              active === i ? "bg-accent text-on-accent border-accent" : "border-hair hover:border-accent"
            )}
          >
            {item.q}
          </button>
        ))}
      </div>

      <div className="mt-5 flex-1 rounded-2xl border border-hair bg-paper p-4 min-h-[19rem]" aria-live="polite">
        {!current ? (
          <p className="h-full min-h-[17rem] grid place-items-center text-sm text-ink-3 text-center">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={16} aria-hidden /> Pick a question to compile it.
            </span>
          </p>
        ) : (
          <div key={run}>
            <p className="font-mono text-[11px] text-ink-3">query plan</p>
            <pre className="mt-1.5 font-mono text-xs leading-relaxed text-code whitespace-pre-wrap">
              {current.plan.map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.12, duration: 0.3, ease } }}
                >
                  {line}
                </motion.span>
              ))}
            </pre>
            <ul className="mt-4 space-y-2.5">
              {current.result.map((r, i) => (
                <li key={r.label} className="grid grid-cols-[minmax(0,10rem)_1fr_auto] items-center gap-3 text-sm">
                  <span className="truncate">{r.label}</span>
                  <span className="h-2.5 rounded-full bg-stock overflow-hidden">
                    <motion.span
                      className="block h-full rounded-full bg-accent origin-left"
                      style={{ width: `${(r.value / max) * 100}%` }}
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1, transition: { delay: current.plan.length * 0.12 + i * 0.08, duration: 0.6, ease } }}
                    />
                  </span>
                  <span className="font-mono text-xs tabular text-ink-2">{r.display}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-ink-3">Demo data</span>
              <button
                type="button"
                onClick={() => setPinned((p) => (p.includes(active!) ? p : [...p, active!]))}
                className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border border-hair text-sm hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {pinned.includes(active!) ? <Check size={15} aria-hidden /> : <Pin size={15} aria-hidden />}
                {pinned.includes(active!) ? "Pinned to dashboard" : "Pin to dashboard"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- Automations: WHEN / IF / THEN ---------- */

const stages = ["Lead", "Contacted", "Sample sent", "On shelf", "Reorder"] as const;

const whenOptions = [
  { label: "a sample is delivered", stage: 2 },
  { label: "an order is placed", stage: 3 },
];
const ifOptions = ["no reply in 7 days", "the channel is Faire"];
const thenOptions = [
  { label: "move to the next stage", kind: "advance" },
  { label: "draft a follow-up", kind: "draft" },
  { label: "tag as wholesale", kind: "tag" },
] as const;

const Select = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  options: string[];
}) => (
  <label className="flex flex-wrap items-center gap-2 text-sm">
    <span className="font-mono text-xs text-code w-12">{label}</span>
    <span className="relative inline-flex">
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="appearance-none h-9 rounded-full border border-hair bg-paper pl-3.5 pr-9 text-sm cursor-pointer transition-colors hover:border-accent"
      >
        {options.map((o, i) => (
          <option key={o} value={i}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown size={15} strokeWidth={1.75} aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-3" />
    </span>
  </label>
);

const AutomationDemo = () => {
  const [when, setWhen] = useState(0);
  const [cond, setCond] = useState(0);
  const [then, setThen] = useState(0);
  const [stage, setStage] = useState(0);
  const [chips, setChips] = useState<string[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const reduce = useReducedMotion();

  const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

  const runRule = async () => {
    if (running) return;
    setRunning(true);
    setChips([]);
    setLog([]);
    setStage(0);
    await wait(250);
    const target = whenOptions[when].stage;
    for (let s = 1; s <= target; s++) {
      setStage(s);
      await wait(380);
    }
    setLog([`WHEN ${whenOptions[when].label}`]);
    await wait(500);
    setLog((l) => [...l, `IF ${ifOptions[cond]}: matched`]);
    await wait(500);
    const action = thenOptions[then];
    if (action.kind === "advance") {
      setStage(Math.min(target + 1, stages.length - 1));
      setLog((l) => [...l, `THEN moved to ${stages[Math.min(target + 1, stages.length - 1)]}`]);
    } else if (action.kind === "draft") {
      setChips(["Follow-up draft"]);
      setLog((l) => [...l, "THEN drafted a follow-up, waiting for your review"]);
    } else {
      setChips(["#wholesale"]);
      setLog((l) => [...l, "THEN tagged #wholesale"]);
    }
    setRunning(false);
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="font-head font-bold text-2xl">Automations</h3>
      <p className="mt-2 text-sm text-ink-2 leading-relaxed max-w-[52ch]">
        Stage moves used to hide in edge-function code. Now they&apos;re rules you can read and
        change. Follow-ups are drafts by default, so nothing sends without a look.
      </p>

      <div className="mt-5 space-y-2.5">
        <Select label="WHEN" value={when} onChange={setWhen} options={whenOptions.map((o) => o.label)} />
        <Select label="IF" value={cond} onChange={setCond} options={ifOptions} />
        <Select label="THEN" value={then} onChange={setThen} options={thenOptions.map((o) => o.label)} />
      </div>

      <div className="mt-5 flex-1 rounded-2xl border border-hair bg-paper p-4 min-h-[19rem] flex flex-col">
        <LayoutGroup id="pipeline">
          <ol className="grid grid-cols-1 sm:grid-cols-5 gap-1.5">
            {stages.map((s, i) => (
              <li key={s} className="min-w-0 grid grid-cols-[5.5rem_1fr] sm:grid-cols-1 items-center sm:items-stretch gap-2 sm:gap-0">
                <p className="font-mono text-[11px] text-ink-3 truncate">{s}</p>
                <div className="sm:mt-1.5 h-14 sm:h-24 rounded-xl bg-stock p-1.5">
                  {stage === i && (
                    <motion.div
                      layoutId="retailer-card"
                      transition={{ duration: reduce ? 0 : 0.45, ease }}
                      className="rounded-lg bg-paper border border-hair p-1.5 shadow-[0_2px_8px_-2px_rgb(29_35_64/0.18)] flex sm:block items-center gap-2 flex-wrap"
                    >
                      <p className="text-xs font-semibold leading-tight">Beacon General</p>
                      <p className="font-mono text-[11px] text-ink-3">Faire</p>
                      <AnimatePresence>
                        {chips.map((c) => (
                          <motion.span
                            key={c}
                            initial={reduce ? false : { opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-1 inline-block rounded-full bg-lilac text-lilac-ink px-1.5 py-0.5 font-mono text-[11px] leading-none"
                          >
                            {c}
                          </motion.span>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </LayoutGroup>

        <ul className="mt-4 min-h-[4.5rem] space-y-1 font-mono text-xs text-code" aria-live="polite">
          {log.length === 0 && !running && <li className="text-ink-3">Press Run to watch the rule fire.</li>}
          {log.map((l) => (
            <motion.li key={l} initial={reduce ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease }}>
              {l}
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-ink-3">Demo data</span>
          <button
            type="button"
            onClick={runRule}
            disabled={running}
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-accent text-on-accent text-sm font-semibold transition-colors hover:bg-accent-ink disabled:opacity-60 cursor-pointer disabled:cursor-wait"
          >
            {log.length && !running ? <RotateCcw size={15} aria-hidden /> : <Play size={15} aria-hidden />}
            {running ? "Running…" : log.length ? "Run again" : "Run rule"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Lab = () => (
  <div>
    <p className="max-w-[62ch] text-ink-2 leading-relaxed -mt-1 mb-8">
      Small, playable versions of features I designed and built in ShelfFlow. Same ideas, same
      motion, made-up shops.
    </p>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-lilac/50 p-5 sm:p-6">
        <AskDemo />
      </div>
      <div className="rounded-3xl bg-sage/60 p-5 sm:p-6">
        <AutomationDemo />
      </div>
    </div>
  </div>
);
