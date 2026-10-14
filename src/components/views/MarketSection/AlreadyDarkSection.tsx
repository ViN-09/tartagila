import { AssetCard } from "./AssetCard";
import { LIVE_STOCKS } from "./constants";

export function AlreadyDarkSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl tracking-tight">
        Already <em>dark.</em>
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Active in the Tartaglia shielded vault today. Bilateral batch crossing
        at the live Chainlink midpoint every 10 seconds.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LIVE_STOCKS.map((stock) => (
          <AssetCard
            key={stock.symbol}
            {...stock}
            onTrade={() => console.log(`Trade ${stock.symbol}`)}
          />
        ))}
      </div>
    </section>
  );
}