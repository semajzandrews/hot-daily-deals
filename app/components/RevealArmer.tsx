"use client";

import { useEffect } from "react";

/**
 * Arms scroll-reveal animations ONLY when the document is actually visible,
 * and force-reveals everything after 2.5s no matter what (timers fire even in
 * backgrounded tabs). Content is visible-by-default in CSS; this only adds the
 * additive entrance motion. See DESIGN_LESSONS 2026-06-08.
 */
export default function RevealArmer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduce && document.visibilityState === "visible") {
      root.classList.add("reveal-armed");
    }

    const done = setTimeout(() => root.classList.add("reveal-done"), 2500);
    return () => clearTimeout(done);
  }, []);

  return null;
}
