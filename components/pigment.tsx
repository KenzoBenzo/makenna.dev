import { getPigmentRenderer, PigmentMode, Surface } from "@/utils/pigment-gl";
import { useEffect, useRef } from "react";

const FALLBACK: Record<PigmentMode, string> = {
  0: "radial-gradient(60% 110% at 15% 25%, rgb(31 91 208 / 0.55), transparent 70%), radial-gradient(60% 110% at 90% 80%, rgb(201 189 243 / 0.8), transparent 70%), #eef2fc",
  1: "radial-gradient(80% 140% at 20% 20%, rgb(174 199 246 / 0.45), transparent 70%), #181e42",
  2: "radial-gradient(60% 110% at 20% 30%, rgb(31 91 208 / 0.5), transparent 70%), #eef2fc",
  3: "radial-gradient(180px 160px at calc(100% - 70px) 150px, rgb(140 164 232 / 0.45), transparent 70%)",
};

/**
 * A live painted surface: drop inside any `relative overflow-hidden` element.
 * It listens to its parent for the pointer, so the pigment follows the cursor.
 */
export const Pigment = ({
  mode = 0,
  seed = 1,
  className = "",
  maxDpr,
  layout,
  style,
}: {
  mode?: PigmentMode;
  seed?: number;
  className?: string;
  maxDpr?: number;
  layout?: number;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const renderer = getPigmentRenderer();
    if (!canvas || !host) return;
    if (!renderer) {
      canvas.style.background = FALLBACK[mode];
      return;
    }

    const surface: Surface = { canvas, mode, seed, pointer: [0.25, 0.5], hover: 0, hoverTarget: 0, visible: true, maxDpr, layout };
    renderer.add(surface);

    const io = new IntersectionObserver(([entry]) => {
      surface.visible = entry.isIntersecting;
      if (surface.visible) renderer.kick();
    });
    io.observe(canvas);

    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      surface.pointer = [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height];
      renderer.kick();
    };
    const enter = () => {
      surface.hoverTarget = 1;
      renderer.kick();
    };
    const leave = () => {
      surface.hoverTarget = 0;
      renderer.kick();
    };
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerenter", enter);
    host.addEventListener("pointerleave", leave);
    host.addEventListener("focusin", enter);
    host.addEventListener("focusout", leave);

    return () => {
      renderer.remove(surface);
      io.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerenter", enter);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("focusin", enter);
      host.removeEventListener("focusout", leave);
    };
  }, [mode, seed, maxDpr, layout]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 -z-10 size-full ${className}`} style={style} />;
};
