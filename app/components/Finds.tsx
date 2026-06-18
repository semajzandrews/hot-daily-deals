/* One warm wash unifies every photo so a mixed stock set reads as one brand. */
const grade =
  "saturate(0.86) contrast(1.04) brightness(1.02) sepia(0.10) hue-rotate(-6deg)";

const TILES = [
  {
    src: "/img/gadgets.jpg",
    label: "Electronics",
    note: "Headphones, keyboards, chargers, speakers. The bins are full of brand-new tech that someone clicked return on.",
    span: "sm:col-span-2 sm:row-span-2",
    h: "h-72 sm:h-full",
  },
  {
    src: "/img/flea.jpg",
    label: "Home & decor",
    note: "Kitchen, storage, small furniture, decor.",
    span: "",
    h: "h-64",
  },
  {
    src: "/img/hands.jpg",
    label: "The dig",
    note: "Half the joy is the search.",
    span: "",
    h: "h-64",
  },
];

export default function Finds() {
  return (
    <section id="finds" className="px-5 py-24 sm:py-32 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal eyebrow mb-5">What lands in the bins</p>
          <h2 className="reveal font-display tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)", ["--d" as string]: "0.05s" }}>
            Different every <span className="font-display-it" style={{ color: "var(--pine)" }}>single week.</span>
          </h2>
          <p className="reveal mt-5 text-[var(--ink-2)] leading-relaxed" style={{ ["--d" as string]: "0.1s" }}>
            One restock might be all electronics and tools. The next, toys, beauty, and kitchen. You
            never know, so you come back. Photos show the kind of thing the bins turn up.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 sm:auto-rows-[15rem] gap-4">
          {TILES.map((t, i) => (
            <figure
              key={t.label}
              className={`reveal relative overflow-hidden rounded-2xl group ${t.span} ${t.h}`}
              style={{ ["--d" as string]: `${0.08 * i}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.src}
                alt={t.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ filter: grade }}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(28,31,29,0) 35%, rgba(28,31,29,0.82) 100%)" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col gap-2">
                <span className="inline-flex w-fit text-[0.62rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full" style={{ background: "var(--pine)", color: "var(--paper)" }}>
                  {t.label}
                </span>
                <p className="text-[var(--paper)] text-sm leading-snug max-w-sm">{t.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
