"use client";
import { motion } from "motion/react";

const STEPS = [
  { n: "I", t: "Consult", d: "We talk about the piece. The stone you have, the stone you want, the hand it goes on." },
  { n: "II", t: "Sketch", d: "Hand-drawn proposals. As many revisions as it takes to feel right." },
  { n: "III", t: "Stone", d: "We source the stone if you don't have one. GIA-graded options to compare in person." },
  { n: "IV", t: "Wax", d: "Wax model carved by hand for you to wear and live with before we cast." },
  { n: "V", t: "Cast", d: "Lost-wax casting in gold or platinum. Then hand-finished, hand-polished." },
  { n: "VI", t: "Set", d: "The stone goes in last. You're invited to watch." },
];

export default function Custom() {
  return (
    <section id="custom" className="relative bg-velvet-2 py-24 md:py-36 border-y border-rule">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">II · Custom commissions</div>
          <h2 className="mt-3 font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] text-diamond">
            From sketch to <span className="italic">setting.</span>
          </h2>
          <p className="mt-6 text-diamond/70">
            A custom piece takes six to twelve weeks. The first three
            are conversation. The next three are wax and casting. The
            last is patience.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-velvet/60 md:grid-cols-2 lg:grid-cols-3 border border-rule">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.07 }}
              className="relative bg-velvet-2 p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl italic text-champagne">{s.n}.</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-diamond/50">stage</span>
              </div>
              <div className="mt-4 font-display text-2xl italic text-diamond">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-diamond/70">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
