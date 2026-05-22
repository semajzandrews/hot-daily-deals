"use client";
import { motion } from "motion/react";

export default function Visit() {
  return (
    <section id="visit" className="relative isolate overflow-hidden bg-jet py-28 md:py-40">
      <div className="absolute -top-32 left-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-champagne/[0.10] blur-[140px]" />
      <div className="absolute -bottom-32 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-rose/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-[1380px] px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">IV · Visit</div>
          <h2 className="mt-3 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] text-diamond">
            By <span className="italic text-champagne">appointment.</span>
          </h2>
          <p className="mt-7 mx-auto max-w-xl text-lg leading-relaxed text-diamond/70">
            Call ahead so the case can come out for you, and so we can
            close to walk-ins. A first visit is unhurried — usually
            forty-five minutes, sometimes longer.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-px md:grid-cols-3 max-w-3xl mx-auto border border-rule">
          <div className="bg-velvet-2 p-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">Where</div>
            <div className="mt-3 font-display italic text-2xl text-diamond">Central Ave</div>
            <div className="text-[12px] text-diamond/60 tracking-wide uppercase">Orange, NJ 07050</div>
          </div>
          <div className="bg-velvet-2 p-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">When</div>
            <div className="mt-3 font-display italic text-2xl text-diamond">Tue – Sat</div>
            <div className="text-[12px] text-diamond/60 tracking-wide uppercase">by appointment</div>
          </div>
          <div className="bg-velvet-2 p-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">Standing</div>
            <div className="mt-3 font-display italic text-2xl text-diamond">99 reviews</div>
            <div className="text-[12px] text-diamond/60 tracking-wide uppercase">4.7 ★ google</div>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://maps.google.com/?q=Edgar+Jewelry+Orange+NJ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-champagne px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-velvet hover:bg-diamond transition-colors">
            Schedule a viewing
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
