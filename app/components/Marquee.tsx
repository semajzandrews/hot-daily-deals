const WORDS = [
  "Electronics",
  "Home goods",
  "Toys",
  "Beauty",
  "Tools",
  "Kitchen",
  "Headphones",
  "Decor",
  "Gadgets",
  "Brand new",
  "Overstock",
  "Restocked weekly",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="border-y border-[var(--rule)] bg-[var(--paper-2)] overflow-hidden">
      <div className="hdd-marquee-track py-4" aria-hidden>
        {row.map((w, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-[1.35rem] sm:text-[1.6rem] px-6 text-[var(--ink-2)]">{w}</span>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--pine)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
