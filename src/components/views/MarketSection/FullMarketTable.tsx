import { ALL_STOCKS } from "./constants";
import type { Stock, StockStatus } from "./types";

function formatUsdShort(n: number): string {
  if (n >= 1_000_000_000_000) return `$${(n / 1_000_000_000_000).toFixed(2)}T`;
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function StatusBadge({ status }: { status: StockStatus }) {
  const styles: Record<StockStatus, string> = {
    "Live": "border-emerald-600/50 bg-emerald-500/5 text-emerald-400",
    "Next wave": "border-gold/50 bg-gold/5 text-gold",
    "Not listed": "border-border bg-card text-ink-soft",
    "Not eligible": "border-border bg-card text-ink-soft/70",
  };
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function ActionCell({ stock }: { stock: Stock }) {
  if (stock.status === "Live") {
    return (
      <button className="text-xs font-semibold text-maroon hover:underline">
        Trade →
      </button>
    );
  }
  if (stock.status === "Next wave") {
    return <span className="text-xs text-gold">{stock.wave}</span>;
  }
  if (stock.status === "Not eligible") {
    return (
      <span
        className="text-xs italic text-ink-soft/70"
        title={stock.notEligibleReason}
      >
        {stock.notEligibleReason}
      </span>
    );
  }
  return <span className="text-xs text-ink-soft">—</span>;
}

export function FullMarketTable() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        Every stock on <em>Robinhood Chain.</em>
      </h2>
      <p className="mt-3 max-w-3xl text-ink-soft">
        Complete monitor of tokenized equities, onchain DEX volumes, and dark
        pool listing eligibility.
      </p>

      <div className="mt-10 overflow-x-auto rounded-sm border border-border">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-card/50 text-left text-xs uppercase tracking-wider text-ink-soft">
              <th className="px-4 py-3 font-medium">Rank ▲</th>
              <th className="px-4 py-3 font-medium">Ticker / Name</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 text-right font-medium">Price (TRV)</th>
              <th className="px-4 py-3 text-right font-medium">24h %</th>
              <th className="px-4 py-3 text-right font-medium">24h Volume</th>
              <th className="px-4 py-3 text-right font-medium">Market Value</th>
              <th className="px-4 py-3 font-medium">Tartaglia Status</th>
              <th className="px-4 py-3 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {ALL_STOCKS.map((s) => {
              const isPositive = s.changePercent >= 0;
              return (
                <tr
                  key={s.symbol}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-card/40"
                >
                  <td className="px-4 py-3 text-ink-soft">#{s.rank}</td>
                  <td className="px-4 py-3">
                    <div className="font-display text-base tracking-tight text-ink">
                      {s.symbol}
                    </div>
                    <div className="text-xs text-ink-soft">{s.name}</div>
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-soft">{s.type}</td>
                  <td className="px-4 py-3 text-right font-medium text-ink">
                    {formatPrice(s.price)}
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-medium ${
                      isPositive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {s.changePercent.toFixed(2)}%
                  </td>
                  <td className="px-4 py-3 text-right text-ink">
                    ${s.volume24hUsd.toFixed(2)}M
                  </td>
                  <td className="px-4 py-3 text-right text-ink">
                    {formatUsdShort(s.marketValueUsd)}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={s.status} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <ActionCell stock={s} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}