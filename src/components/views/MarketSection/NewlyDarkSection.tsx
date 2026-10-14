const EVENTS = [
  {
    time: "2h ago",
    event: "TSLA admitted to shielded vault",
    detail: "Wave 1 · Pool cap $5M · Chainlink TRV verified",
  },
  {
    time: "1d ago",
    event: "AAPL oracle staleness threshold set",
    detail: "Threshold: 60s · Pauses on NYSE close",
  },
  {
    time: "3d ago",
    event: "NVDA first bilateral batch settled",
    detail: "10s cadence · Midpoint $138.25",
  },
];

export function NewlyDarkSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl tracking-tight">
        Newly <em>dark.</em>
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Verified onchain listing and state transition events from the Tartaglia
        Notary contract.
      </p>

      <div className="mt-10 space-y-3">
        {EVENTS.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-sm border border-border bg-card px-5 py-4"
          >
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px] shadow-emerald-400" />
            <div className="flex-1">
              <div className="font-display text-base text-ink">{e.event}</div>
              <div className="mt-0.5 text-xs text-ink-soft">{e.detail}</div>
            </div>
            <span className="shrink-0 text-xs text-ink-soft">{e.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}