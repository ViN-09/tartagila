import type { ReactNode } from "react";
import { Chapter } from "./Chapter";

export function Vocabulary() {
  const terms: Array<[string, ReactNode]> = [
    [
      "Cartello",
      <>
        The sealed order.{" "}
        <code className="text-sm">
          orderCm = Poseidon(side, asset, maxQty, minFill, limit, nullifier,
          salt)
        </code>
      </>,
    ],
    ["Disfida", "One batch round, every N seconds, crossed at the midpoint."],
    ["Notary", "The MARGINALIA shielded pool where funds rest."],
    [
      "Verse",
      "The proof. Checked by all, read by none. Built with Noir and UltraHonk.",
    ],
    ["Midpoint", "The single public price, from Chainlink Data Streams."],
  ];

  return (
    <Chapter id="vocabulary" kicker="Reference" title="Vocabulary of the house.">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {terms.map(([term, def]) => (
          <div key={term} className="border-t border-border pt-4">
            <div className="font-display text-xl italic">{term}</div>
            <p className="mt-2 text-ink-soft">{def}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
        Assets at launch: USDG, NVDA, TSLA, AAPL. Midpoint-only orders. Batch
        cadence N seconds. No customers, no prices, no benchmarks are claimed.
        The mechanism is the demonstration.
      </p>
    </Chapter>
  );
}