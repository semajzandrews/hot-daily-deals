import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-5">Empty bin</p>
      <h1 className="font-display tracking-tight leading-tight" style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)" }}>
        Nothing in this one.
      </h1>
      <p className="mt-4 text-[var(--ink-2)] max-w-sm">
        That page got picked over. The good stuff is back on the main floor.
      </p>
      <Link href="/" className="btn-pine mt-8">
        Back to the bins
      </Link>
    </main>
  );
}
