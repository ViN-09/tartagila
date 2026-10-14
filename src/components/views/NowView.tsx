export function NowView() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
          Tartaglia / Now
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          What's <em className="text-maroon">live now.</em>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Coming soon — real-time status of the pool, the matcher, and the
          ongoing disfide.
        </p>
      </section>
    </div>
  );
}