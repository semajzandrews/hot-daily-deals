const WEEK = [
  { day: "Friday", note: "Fresh truck · top of the cycle", hot: true },
  { day: "Saturday", note: "Prime time" },
  { day: "Sunday", note: "Sweet spot" },
  { day: "Monday", note: "Heating up" },
  { day: "Tuesday", note: "Deep cuts" },
  { day: "Wednesday", note: "Almost there" },
  { day: "Thursday", note: "The steal · floor price", hot: true },
];

const MAP_SRC =
  "https://www.google.com/maps?q=265+Main+St,+Orange,+NJ+07050&output=embed";

export default function Visit() {
  return (
    <section id="visit" className="px-5 py-24 sm:py-32 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="reveal eyebrow mb-5">Come dig in</p>
          <h2 className="reveal font-display tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)", ["--d" as string]: "0.05s" }}>
            On Main Street in <span className="font-display-it" style={{ color: "var(--pine)" }}>Orange.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          {/* The week / rhythm */}
          <div className="reveal stub p-7 sm:p-9" style={{ ["--d" as string]: "0.05s" }}>
            <h3 className="font-display text-2xl mb-1">The week</h3>
            <p className="text-[var(--ink-3)] text-sm mb-6">
              The cycle restocks every Friday and drops toward a dollar by Thursday.
            </p>
            <ul className="divide-y divide-[var(--rule)]">
              {WEEK.map((w) => (
                <li key={w.day} className="flex items-center justify-between py-3">
                  <span className="font-semibold flex items-center gap-2">
                    {w.hot && <span className="h-2 w-2 rounded-full" style={{ background: "var(--clay)" }} aria-hidden />}
                    {w.day}
                  </span>
                  <span className="text-sm text-[var(--ink-2)]">{w.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.8rem] text-[var(--ink-3)] leading-relaxed">
              Daily opening hours are posted at the store and announced on TikTok and Facebook with each
              restock. Give the door a pull, the bins are usually open by mid-morning.
            </p>
          </div>

          {/* Address + map + photo */}
          <div className="reveal flex flex-col gap-6" style={{ ["--d" as string]: "0.12s" }}>
            <div className="stub p-7 sm:p-9">
              <h3 className="font-display text-2xl mb-4">Find the bins</h3>
              <p className="text-[var(--ink)] leading-relaxed">
                Hot Daily Deals
                <br />
                265 Main Street
                <br />
                City of Orange, New Jersey 07050
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=265+Main+St,+Orange,+NJ+07050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pine text-sm"
                >
                  Get directions
                </a>
                <a
                  href="https://www.tiktok.com/@hotdailydealsorange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  See the latest restock
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--rule)] h-64 sm:h-72">
              <iframe
                title="Map to Hot Daily Deals, 265 Main Street, Orange NJ"
                src={MAP_SRC}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.02)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
