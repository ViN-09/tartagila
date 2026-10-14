const STATS = [
  { value: "3", label: "Stocks live on Tartaglia" },
  { value: "27", label: "Tokenized stocks on Robinhood Chain" },
  { value: "Wave 1", label: "In progress", isWave: true },
];

export function MarketHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
          Tartaglia Markets
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Robinhood Chain · Tokenized stocks
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          THE WHOLE MARKET, <em className="text-maroon">GOING DARK.</em>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Every tokenized stock on Robinhood Chain, tracked live. See what's
          already dark on Tartaglia and what's next.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-ink pt-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className={`font-display text-4xl ${
                  stat.isWave ? "italic text-maroon" : "text-ink"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}