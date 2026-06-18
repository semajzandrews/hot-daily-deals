"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * THE SIGNATURE: a scrubbable seven-day price dial. The visitor drags across the
 * week (Friday -> Thursday) and watches the live store price tick down, the day's
 * character change, and the real "today" marker glow. This IS the pitch: a bin
 * store where one flat price drops a little lower every day.
 *
 * The cycle is the common bin-store rhythm: fresh truck Friday, then it decays to
 * a dollar by Thursday. Prices here are illustrative of the format, kept generic.
 */

type Step = {
  short: string;
  day: string;
  price: number;
  mood: string;
  line: string;
};

// Ordered as the week actually runs in a bin store: restock Friday, decay to Thursday.
const STEPS: Step[] = [
  { short: "FRI", day: "Friday", price: 6, mood: "Fresh truck", line: "A new truck lands and the bins are full to the brim. First pick of everything, top of the cycle." },
  { short: "SAT", day: "Saturday", price: 5, mood: "Prime time", line: "Still loaded, still loud. The best Saturday of treasure hunting on Main Street." },
  { short: "SUN", day: "Sunday", price: 4, mood: "Sweet spot", line: "The crowd thins, the price softens, and the good stuff is still in the bins." },
  { short: "MON", day: "Monday", price: 3, mood: "Heating up", line: "Halfway down the slope. Plenty left, and every dollar you skip is a dollar saved." },
  { short: "TUE", day: "Tuesday", price: 2, mood: "Deep cuts", line: "Two dollars a piece. This is where the patient shoppers clean up." },
  { short: "WED", day: "Wednesday", price: 1.5, mood: "Almost there", line: "Last full day before the floor. Whatever is left is nearly being given away." },
  { short: "THU", day: "Thursday", price: 1, mood: "The steal", line: "Everything left in the bins is a single dollar. The bottom of the cycle, right before the next truck." },
];

const JS_DAY_TO_INDEX: Record<number, number> = {
  5: 0, // Fri
  6: 1, // Sat
  0: 2, // Sun
  1: 3, // Mon
  2: 4, // Tue
  3: 5, // Wed
  4: 6, // Thu
};

function fmt(p: number) {
  return p % 1 === 0 ? `$${p}` : `$${p.toFixed(2)}`;
}

export default function DailyDrop() {
  const [active, setActive] = useState(0);
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const idx = JS_DAY_TO_INDEX[new Date().getDay()];
    if (idx !== undefined) {
      setTodayIndex(idx);
      setActive(idx);
    }
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const idx = Math.round(ratio * (STEPS.length - 1));
    setActive(idx);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging, setFromClientX]);

  const step = STEPS[active];
  const thumbPct = (active / (STEPS.length - 1)) * 100;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.min(STEPS.length - 1, a + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    }
  };

  const fillGradient = useMemo(
    () => `linear-gradient(90deg, var(--pine) 0%, var(--pine) ${thumbPct}%, var(--rule) ${thumbPct}%, var(--rule) 100%)`,
    [thumbPct]
  );

  return (
    <section id="drop" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal eyebrow mb-5">The Daily Drop</p>
        <h2 className="reveal font-display tracking-tight leading-[1.02]" style={{ fontSize: "clamp(2rem, 5.5vw, 3.4rem)", ["--d" as string]: "0.05s" }}>
          One price for the whole store.
          <br />
          <span className="font-display-it">Drag the week and watch it fall.</span>
        </h2>

        {/* The price stage */}
        <div className="reveal mt-14 sm:mt-16" style={{ ["--d" as string]: "0.1s" }}>
          <div className="flex items-end justify-center gap-3">
            <span
              className="price-ink select-none"
              style={{ fontSize: "clamp(5rem, 22vw, 11rem)", color: "var(--ink)" }}
              suppressHydrationWarning
            >
              {fmt(step.price)}
            </span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-3 text-sm">
            <span className="font-semibold tracking-wide" style={{ color: "var(--pine-2)" }}>
              {step.day}
            </span>
            <span className="h-1 w-1 rounded-full" style={{ background: "var(--ink-3)" }} aria-hidden />
            <span className="uppercase tracking-[0.2em] text-[0.72rem] text-[var(--ink-3)]">{step.mood}</span>
          </div>
          <p className="mx-auto mt-5 max-w-md text-[var(--ink-2)] leading-relaxed min-h-[3.5rem]">{step.line}</p>
        </div>

        {/* The dial */}
        <div className="reveal mt-12 sm:mt-14 select-none" style={{ ["--d" as string]: "0.15s" }}>
          <div
            ref={trackRef}
            className="dial-track relative mx-auto h-14 max-w-2xl cursor-pointer touch-none"
            role="slider"
            aria-label="Day of the week price dial"
            aria-valuemin={0}
            aria-valuemax={STEPS.length - 1}
            aria-valuenow={active}
            aria-valuetext={`${step.day}, ${fmt(step.price)}`}
            tabIndex={0}
            onKeyDown={onKey}
            onPointerDown={(e) => {
              setDragging(true);
              setFromClientX(e.clientX);
            }}
          >
            {/* baseline */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] rounded-full" style={{ background: fillGradient }} />

            {/* day ticks */}
            <div className="absolute inset-0 flex items-center justify-between">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                const isToday = i === todayIndex;
                return (
                  <button
                    key={s.short}
                    onClick={() => setActive(i)}
                    className="relative flex flex-col items-center gap-2 group"
                    style={{ width: 34 }}
                    aria-label={`${s.day}, ${fmt(s.price)}`}
                  >
                    <span
                      className="block rounded-full transition-all duration-300"
                      style={{
                        width: isActive ? 16 : 9,
                        height: isActive ? 16 : 9,
                        background: i <= active ? "var(--pine)" : "var(--paper)",
                        border: `2px solid ${i <= active ? "var(--pine)" : "var(--rule-2)"}`,
                        boxShadow: isActive ? "0 0 0 5px rgba(44,140,125,0.15)" : "none",
                      }}
                    />
                    <span
                      className="absolute top-7 text-[0.6rem] sm:text-[0.68rem] font-semibold tracking-wide tabnum transition-colors"
                      style={{ color: isActive ? "var(--pine-2)" : "var(--ink-3)" }}
                    >
                      {s.short}
                    </span>
                    {isToday && (
                      <span
                        className="absolute -top-6 whitespace-nowrap text-[0.58rem] font-bold tracking-[0.18em] uppercase px-2 py-[2px] rounded-full"
                        style={{ background: "var(--pine)", color: "var(--paper)" }}
                      >
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-12 text-[0.8rem] text-[var(--ink-3)]">
            Drag across the week, or tap a day. Prices shown reflect how the bin-store cycle works; the
            real flat price is posted in store and resets with each restock.
          </p>
        </div>
      </div>
    </section>
  );
}
