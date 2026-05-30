"use client";

import { motion } from "motion/react";

// Signature: a large faceted gem SVG with a slow rotation and a
// passing facet-light sweep. Asymmetric layout — gem floats on the
// right offset above the headline.
function Diamond() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="facet-bright" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F2EE" />
          <stop offset="100%" stopColor="#C9A961" />
        </linearGradient>
        <linearGradient id="facet-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C28999" />
          <stop offset="100%" stopColor="#1A0F1E" />
        </linearGradient>
        <linearGradient id="facet-dark" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#382439" />
          <stop offset="100%" stopColor="#A88842" />
        </linearGradient>
      </defs>
      <g className="spin-slow" style={{ transformOrigin: "200px 200px" }}>
        {/* table */}
        <polygon points="200,80 280,140 200,170 120,140" fill="url(#facet-bright)" stroke="#C9A961" strokeWidth="1.5" />
        {/* upper crown */}
        <polygon points="120,140 200,170 200,80" fill="url(#facet-mid)" opacity="0.8" />
        <polygon points="280,140 200,80 200,170" fill="url(#facet-dark)" opacity="0.9" />
        {/* girdle */}
        <polygon points="120,140 280,140 290,160 110,160" fill="#1A0F1E" stroke="#C9A961" strokeWidth="1" />
        {/* pavilion */}
        <polygon points="110,160 200,320 290,160" fill="url(#facet-mid)" stroke="#C9A961" strokeWidth="1.5" />
        <polygon points="200,170 200,320 110,160" fill="url(#facet-dark)" opacity="0.75" />
        <polygon points="200,170 200,320 290,160" fill="url(#facet-bright)" opacity="0.55" />
        {/* highlights */}
        <polygon points="150,110 200,80 200,140" fill="#F5F2EE" opacity="0.85" />
        <polygon points="220,200 240,250 200,260" fill="#F5F2EE" opacity="0.4" />
      </g>
      {/* sparkle stars */}
      {[
        [80,100,0.6],[330,180,0.7],[100,300,0.5],[320,310,0.55],[180,360,0.5]
      ].map(([x,y,o],i)=>(
        <g key={i} className="shimmer" style={{ animationDelay: `${i*0.6}s` }}>
          <path d={`M ${x} ${(y as number)-6} L ${(x as number)+1} ${y} L ${(x as number)+7} ${(y as number)+1} L ${(x as number)+1} ${(y as number)+2} L ${x} ${(y as number)+8} L ${(x as number)-1} ${(y as number)+2} L ${(x as number)-7} ${(y as number)+1} L ${(x as number)-1} ${y} Z`} fill="#C9A961" opacity={o as number} />
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-20 md:pt-52 md:pb-32">
      {/* atmospheric backdrop */}
      <div className="absolute -top-32 left-1/3 -z-10 h-[600px] w-[800px] rounded-full bg-champagne/[0.08] blur-[120px]" />
      <div className="absolute -bottom-32 right-0 -z-10 h-[400px] w-[600px] rounded-full bg-rose/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-diamond/60">
          <span className="h-px w-12 bg-rule-2" />
          <span className="text-champagne">A</span> jeweler in Orange · est. quietly excellent
          <span className="h-px w-12 bg-rule-2" />
        </div>

        {/* Asymmetric layout — diamond floats on the right offset above */}
        <div className="relative grid grid-cols-1 gap-x-6 gap-y-12 items-start lg:grid-cols-12">
          {/* Headline — left column, drops below */}
          <div className="lg:col-span-7 lg:pt-32 relative z-10">
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-[-0.015em] text-diamond">
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.05 }} className="block">
                Heirloom craft.
              </motion.span>
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.22 }} className="block italic text-champagne">
                Quietly kept.
              </motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }} className="mt-9 max-w-md text-lg leading-relaxed text-diamond/75">
              A neighborhood jeweler on Central Avenue, Orange, NJ.
              Hand-set diamonds, considered settings, repair work the
              chains can&apos;t touch. Appointments preferred so the case
              comes out for you alone.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7 }} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#visit" className="group inline-flex items-center gap-2 bg-champagne px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-velvet transition-colors hover:bg-diamond">
                Book a viewing
                <span>→</span>
              </a>
              <a href="#collection" className="group inline-flex items-center gap-2 border border-diamond/30 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-diamond hover:border-champagne hover:text-champagne transition-colors">
                The collection
              </a>
            </motion.div>
          </div>

          {/* Diamond — right, overlapping/floating */}
          <div className="lg:col-span-5 lg:absolute lg:top-0 lg:right-0 lg:w-[40%]">
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.1 }} className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-champagne/30 via-velvet-3/40 to-velvet blur-2xl" />
              <Diamond />
              <div className="facet-sweep absolute inset-0 mix-blend-screen rounded-full overflow-hidden" />
            </motion.div>
          </div>
        </div>

        <div className="gold-rule mt-20"/>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95 }} className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {[
            { k: "On Central", v: "Orange, NJ" },
            { k: "By", v: "Appointment" },
            { k: "Service", v: "Repair · Custom · Appraisal" },
            { k: "Standing", v: "99 reviews · 4.7 ★" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-diamond/50">{s.k}</div>
              <div className="mt-2 font-display italic text-xl text-diamond">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
