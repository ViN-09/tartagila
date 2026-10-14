import { MARKET_PAIRS } from "./constants";

export function MarketsPanel() {
  return (
    <Panel
      title="Markets"
      subtitle="Chainlink · Robinhood Feed"
    >
      <div className="overflow-hidden rounded-sm border border-border">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-card/50 text-left text-ink-soft">
              <th className="px-3 py-2 font-medium">Pair</th>
              <th className="px-3 py-2 text-right font-medium">Midpoint</th>
              <th className="px-3 py-2 text-right font-medium">Matching</th>
            </tr>
          </thead>
          <tbody>
            {MARKET_PAIRS.map((p) => (
              <tr
                key={p.pair}
                className="border-b border-border/50 last:border-0"
              >
                <td className="px-3 py-2 font-display text-ink">{p.pair}</td>
                <td className="px-3 py-2 text-right font-mono text-ink">
                  {typeof p.midpoint === "number"
                    ? p.midpoint.toFixed(2)
                    : p.midpoint}
                </td>
                <td className="px-3 py-2 text-right text-ink-soft">
                  {p.matching}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs italic text-ink-soft">
        Live Chainlink midpoints. No order book depth is shown because none
        exists: every match fills at the midpoint.
      </p>
    </Panel>
  );
}

export function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-sm border border-border bg-background/40 p-5">
      <header className="mb-4">
        <h3 className="font-display text-lg tracking-tight text-ink">{title}</h3>
        {subtitle && (
          <p className="mt-0.5 text-xs text-ink-soft">{subtitle}</p>
        )}
      </header>
      {children}
    </section>
  );
}