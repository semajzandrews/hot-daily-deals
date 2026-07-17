export default function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="text-center">
          <p className="font-display tracking-tight" style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}>
            Come early for the pick.
            <br />
            <span className="font-display-it" style={{ color: "var(--pine)" }}>Come late for the steal.</span>
          </p>
          <a href="#visit" className="btn-pine mt-8">
            Find the store
          </a>
        </div>

        <div className="center-rule my-12" />

        <div className="grid gap-8 sm:grid-cols-3 text-sm">
          <div>
            <p className="font-display text-lg mb-2">Hot Daily Deals</p>
            <p className="text-[var(--ink-2)] leading-relaxed">
              The bin store where the price
              <br />
              drops every day.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3" style={{ fontSize: "0.62rem" }}>
              Where
            </p>
            <p className="text-[var(--ink-2)] leading-relaxed">
              265 Main Street
              <br />
              City of Orange, NJ 07050
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3" style={{ fontSize: "0.62rem" }}>
              Follow the restocks
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href="https://www.tiktok.com/@hotdailydealsorange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-2)] hover:text-[var(--pine-2)] transition-colors"
              >
                TikTok · @hotdailydealsorange
              </a>
              <a
                href="https://www.facebook.com/p/HOT-Daily-Deals-Orange-61569174397762/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-2)] hover:text-[var(--pine-2)] transition-colors"
              >
                Facebook · HOT Daily Deals Orange
              </a>
            </div>
          </div>
        </div>

        <div className="center-rule my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem] text-[var(--ink-3)]">
          <p>© {new Date().getFullYear()} Hot Daily Deals · Orange, New Jersey</p>
          <p>
            built{" "}
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink-2)] hover:text-[var(--pine-2)] transition-colors"
            >
              bysemaj.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
