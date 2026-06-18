const STEPS = [
  {
    n: "I",
    title: "A truck lands",
    body: "Every week, a fresh load of brand-new overstock and returns arrives and fills the bins. Nobody, including us, knows exactly what is in it. That is the whole fun.",
  },
  {
    n: "II",
    title: "One flat price",
    body: "Everything in the store carries the same price on the same day. No tags to hunt, no math at the register. You dig, you find, you pay the price of the day.",
  },
  {
    n: "III",
    title: "It drops, daily",
    body: "Each day that passes, the flat price falls again, all the way down to a dollar before the next truck. Early for the pick, late for the steal. Then it starts over.",
  },
];

export default function Hunt() {
  return (
    <section id="hunt" className="px-5 py-24 sm:py-32 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal eyebrow mb-5">How a bin store works</p>
          <h2 className="reveal font-display tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)", ["--d" as string]: "0.05s" }}>
            A treasure hunt with <span className="font-display-it" style={{ color: "var(--pine)" }}>simple rules.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px sm:grid-cols-3 bg-[var(--rule)] rounded-2xl overflow-hidden">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal bg-[var(--paper)] p-8 sm:p-9 flex flex-col"
              style={{ ["--d" as string]: `${0.08 * i}s` }}
            >
              <span className="font-display text-[var(--pine)] text-2xl mb-5">{s.n}</span>
              <h3 className="font-display text-2xl tracking-tight mb-3">{s.title}</h3>
              <p className="text-[var(--ink-2)] leading-relaxed text-[0.97rem]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
