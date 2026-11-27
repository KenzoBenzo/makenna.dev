import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const order = ["system", "light", "dark"] as const;
const label = { system: "Theme: matches your device", light: "Theme: light", dark: "Theme: dark" };

const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

/** Cycles system → light → dark. System follows the device setting. */
export const ThemeSwitch = ({ className = "" }: { className?: string }) => {
  const { theme = "system", setTheme } = useTheme();
  const mounted = useMounted();
  const current = (mounted ? theme : "system") as (typeof order)[number];
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`${label[current]}. Switch to ${next}.`}
      title={label[current]}
      className={`size-9 rounded-full inline-flex items-center justify-center border border-hair transition-colors hover:border-accent hover:text-accent cursor-pointer ${className}`}
    >
      <Icon size={17} strokeWidth={1.75} aria-hidden />
    </button>
  );
};
