"use client";
import { motion } from "motion/react";

// Asymmetric overlap grid — cards intentionally overlap their neighbors
// so the eye reads it as a curated table-top, not a uniform grid.

const PIECES = [
  { n: "01", title: "Solitaire", spec: "1.20ct round brilliant · 18k yellow", chip: "bg-champagne", w: "lg:col-span-5", off: "lg:translate-y-0",  bg: "bg-velvet-2" },
  { n: "02", title: "Eternity",  spec: "Diamond half-band · platinum",       chip: "bg-rose",      w: "lg:col-span-4", off: "lg:translate-y-16", bg: "bg-velvet-3" },
  { n: "03", title: "Signet",    spec: "Custom monogram · 14k yellow",       chip: "bg-diamond",   w: "lg:col-span-3", off: "lg:translate-y-8",  bg: "bg-jet" },
  { n: "04", title: "Riviera",   spec: "Graduated tennis · white gold",       chip: "bg-champagne", w: "lg:col-span-4", off: "lg:translate-y-24", bg: "bg-velvet-3" },
  { n: "05", title: "Heirloom",  spec: "Antique reset · client diamond",     chip: "bg-rose",      w: "lg:col-span-5", off: "lg:translate-y-0",  bg: "bg-velvet-2" },
  { n: "06", title: "Drop",      spec: "Pear sapphire · diamond halo",       chip: "bg-diamond",   w: "lg:col-span-3", off: "lg:translate-y-20", bg: "bg-jet" },
];

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-16 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">I · Selected work</div>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.01em] text-diamond">
              Six pieces. <span className="italic">Six small stories.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-diamond/70 md:col-span-5 md:pb-3">
            Each piece begins as a conversation. Stones we&apos;ve been
            holding, settings we&apos;ve been waiting to use. None
            of it on the shelf.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10">
          {PIECES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className={`relative ${p.w} ${p.off} ${p.bg} group overflow-hidden`}
            >
              <div className="relative aspect-[3/4] p-6 flex flex-col justify-between">
                {/* faceted background shapes */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square ${p.chip} rotate-45`} style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)", opacity: 0.4 }}/>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-diamond/60">No. {p.n}</span>
                  <span className={`h-2 w-2 rotate-45 ${p.chip}`} />
                </div>
                <div className="relative z-10">
                  <div className="font-display text-3xl italic text-diamond">{p.title}</div>
                  <div className="gold-rule mt-3 mb-3 w-12" />
                  <div className="text-[11px] uppercase tracking-[0.2em] text-diamond/70 leading-relaxed">{p.spec}</div>
                </div>
                <div className="absolute inset-x-6 bottom-3 h-px bg-champagne/30" />
                <div className="facet-sweep absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
