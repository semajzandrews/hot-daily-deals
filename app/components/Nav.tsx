"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#drop", label: "The Daily Drop" },
  { href: "#hunt", label: "The Hunt" },
  { href: "#finds", label: "Finds" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(244,240,231,0.86)" : "transparent",
        backdropFilter: scrolled ? "blur(10px) saturate(1.1)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group" aria-label="Hot Daily Deals home">
          <span className="font-display text-xl sm:text-2xl tracking-tight">Hot Daily Deals</span>
          <span
            className="hidden sm:inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--pine)" }}
            aria-hidden
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-[var(--ink-2)] hover:text-[var(--pine-2)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#visit" className="btn-pine text-sm">
            Find the store
          </a>
        </div>

        <button
          className="md:hidden inline-flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block h-[2px] w-6 bg-[var(--ink)] transition-transform"
            style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span className="block h-[2px] w-6 bg-[var(--ink)] transition-opacity" style={{ opacity: open ? 0 : 1 }} />
          <span
            className="block h-[2px] w-6 bg-[var(--ink)] transition-transform"
            style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--rule)] bg-[var(--paper)]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold border-b border-[var(--rule)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#visit" onClick={() => setOpen(false)} className="btn-pine mt-4 justify-center">
              Find the store
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
