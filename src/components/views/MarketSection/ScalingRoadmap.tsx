const SELECTED = [
  "MSFT", "AMZN", "GOOGL", "META",
  "AMD", "COIN", "PLTR", "NFLX",
  "SPY", "QQQ", "MSTR", "BABA",
];

export function ScalingRoadmap() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          3 → 15 → 50 → <em>every stock.</em>
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Gradual scaling across verified equities. We list by onchain volume
          and market value, starting with the biggest. Each stock goes live only
          after it's tested and its oracle is verified.
        </p>

        <div className="mt-10">
          <p className="text-sm italic text-ink-soft">Selected:</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SELECTED.map((ticker) => (
              <span
                key={ticker}
                className="rounded-sm border border-border bg-card px-3 py-1.5 font-display text-sm tracking-wide text-ink"
              >
                {ticker}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-ink-soft">
          We list by onchain volume and market value, starting with the biggest.
          Each stock goes live only after it's tested and its oracle is verified.
        </p>
      </div>
    </section>
  );
}