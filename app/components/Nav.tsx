"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Custom", href: "#custom" },
  { label: "Atelier", href: "#atelier" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-velvet/85 backdrop-blur-xl border-b border-rule" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-diamond">Edgar</span>
          <span className="font-script text-base text-champagne -ml-1">Jewelry</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] font-medium uppercase tracking-[0.22em] text-diamond/70 hover:text-champagne transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#visit" className="group inline-flex items-center gap-2 rounded-none border border-champagne px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.24em] text-champagne hover:bg-champagne hover:text-velvet transition-colors">
          By appointment
        </a>
      </div>
    </header>
  );
}
