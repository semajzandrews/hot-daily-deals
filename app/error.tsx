"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-5">Hold on</p>
      <h1 className="font-display tracking-tight leading-tight" style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)" }}>
        Something tipped over.
      </h1>
      <p className="mt-4 text-[var(--ink-2)] max-w-sm">Give it a second and we will set the bins right.</p>
      <button onClick={reset} className="btn-pine mt-8">
        Try again
      </button>
    </main>
  );
}
