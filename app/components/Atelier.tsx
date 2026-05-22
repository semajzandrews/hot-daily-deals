"use client";
import { motion } from "motion/react";

const FACTS = [
  { k: "Established", v: "Quietly" },
  { k: "Pieces a year", v: "≤ 60" },
  { k: "Clients", v: "Mostly returning" },
  { k: "Apprenticeship", v: "Old country" },
];

export default function Atelier() {
  return (
    <section id="atelier" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">III · The atelier</div>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] text-diamond">
              A bench. <br/>
              <span className="italic">A loupe.</span> <br/>
              <span className="text-champagne">A handful of clients a year.</span>
            </h2>
            <div className="gold-rule mt-10 w-32"/>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {FACTS.map((f) => (
                <div key={f.k} className="border-l border-champagne/40 pl-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-diamond/50">{f.k}</div>
                  <div className="mt-2 font-display italic text-2xl text-diamond">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="col-span-12 md:col-span-7 space-y-6 text-lg leading-relaxed text-diamond/80"
          >
            <p>
              Edgar Jewelry is a one-bench atelier on Central Avenue. The
              door does not say much. The window holds a single piece at
              a time, lit from above, changed weekly.
            </p>
            <p>
              The work is repair, custom commissions, and a small private
              collection. Stones are bought from people who&apos;ve
              earned the right to be quoted. Settings are set by hand,
              never by mass-production lasers. Polishing is the last
              human touch.
            </p>
            <p>
              We don&apos;t advertise. Most clients arrive by
              introduction. We&apos;d like that to continue, but if you
              found us another way, that&apos;s fine too — call to
              schedule.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
