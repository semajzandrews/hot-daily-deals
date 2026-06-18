"use client";

import { useEffect, useState } from "react";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Hero() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(DAYS[new Date().getDay()]);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-24 pb-16">
      {/* faint stage spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 8%, rgba(44,140,125,0.10), transparent 55%), radial-gradient(80% 60% at 50% 110%, rgba(28,31,29,0.05), transparent 60%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <p className="reveal eyebrow mb-7" style={{ ["--d" as string]: "0s" }}>
          Main Street · Orange, New Jersey
        </p>

        <h1
          className="reveal font-display leading-[0.95] tracking-tight"
          style={{ ["--d" as string]: "0.08s", fontSize: "clamp(2.7rem, 9vw, 6.4rem)" }}
        >
          The price drops
          <br />
          <span className="font-display-it" style={{ color: "var(--pine)" }}>
            every single day.
          </span>
        </h1>

        <p
          className="reveal mx-auto mt-8 max-w-xl text-[1.05rem] sm:text-lg leading-relaxed text-[var(--ink-2)]"
          style={{ ["--d" as string]: "0.16s" }}
        >
          Hot Daily Deals is a bin store. Brand-new overstock and returns land here
          every week, all at one flat price, and that price falls a little lower with
          each day that passes. Come early for the pick. Come late for the steal.
        </p>

        <div
          className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ ["--d" as string]: "0.24s" }}
        >
          <a href="#drop" className="btn-pine">
            See today&rsquo;s price
          </a>
          <a href="#visit" className="btn-ghost">
            How a bin store works
          </a>
        </div>

        <p
          className="reveal mt-9 text-sm text-[var(--ink-3)] tabnum"
          style={{ ["--d" as string]: "0.3s" }}
          suppressHydrationWarning
        >
          {today ? (
            <>
              It&rsquo;s {today}. <span style={{ color: "var(--pine-2)", fontWeight: 600 }}>The bins are open.</span>
            </>
          ) : (
            <>The bins are open.</>
          )}
        </p>
      </div>

      <a
        href="#drop"
        className="reveal absolute bottom-7 left-1/2 -translate-x-1/2 text-[var(--ink-3)] flex flex-col items-center gap-2"
        style={{ ["--d" as string]: "0.4s" }}
        aria-label="Scroll to the daily drop"
      >
        <span className="text-[0.68rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block h-9 w-px bg-[var(--rule-2)]" />
      </a>
    </section>
  );
}
