export default function Footer() {
  return (
    <footer className="relative border-t border-rule bg-velvet pt-14 pb-10">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-diamond">Edgar</span>
              <span className="font-script text-lg text-champagne -ml-1">Jewelry</span>
            </div>
            <p className="mt-5 max-w-sm text-diamond/65 leading-relaxed">
              A one-bench atelier on Central Avenue, Orange NJ. Heirloom
              craft, hand-set diamonds, custom commissions, and repair
              work the chains can&apos;t touch.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">Visit</div>
            <address className="mt-4 not-italic font-display italic text-xl text-diamond leading-snug">
              Central Avenue<br/>Orange, NJ 07050
            </address>
          </div>
          <div className="col-span-6 md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">Hours</div>
            <div className="mt-4 font-display italic text-xl text-diamond leading-snug">
              Tuesday – Saturday<br/>
              <span className="text-base text-diamond/60">by appointment</span>
            </div>
          </div>
        </div>
        <div className="gold-rule mt-12" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-diamond/50">
          <span>© {new Date().getFullYear()} Edgar Jewelry · Central Ave · Orange, NJ</span>
          <span className="font-script italic normal-case text-base text-champagne"><a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline transition-opacity hover:opacity-80">Built · bysemaj.com</a></span>
        </div>
      </div>
    </footer>
  );
}
