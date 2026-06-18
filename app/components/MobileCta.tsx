"use client";

import { useEffect, useState } from "react";

/**
 * Fixed mobile action. There is no phone for this business, so the action is
 * "Get directions" to the store. Full pill on small phones is fine; at the very
 * narrow 375px range it collapses to a ~46px round pin icon so it never crowds.
 */
export default function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=265+Main+St,+Orange,+NJ+07050"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get directions to Hot Daily Deals"
      className="md:hidden fixed bottom-4 right-4 z-50 btn-pine shadow-lg transition-all duration-300"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        pointerEvents: show ? "auto" : "none",
        boxShadow: "0 8px 24px rgba(32,102,87,0.32)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <span className="hidden min-[420px]:inline">Get directions</span>
    </a>
  );
}
