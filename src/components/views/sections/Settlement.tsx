import { Chapter } from "./Chapter";

const ROMAN = ["I", "II", "III", "IV", "V"];

export function Settlement() {
  const proofs: Array<[string, string]> = [
    ["Existence", "Both orders are backed by real, unspent funds in the pool."],
    [
      "Fair price",
      "Every match fills at the signed Chainlink midpoint, verified onchain. If the feed is stale or markets are closed, the round pauses.",
    ],
    ["Respect", "Each side fills within its sealed bounds: minFill ≤ qty ≤ maxQty."],
    ["Conservation", "Per asset, inputs equal outputs plus fee."],
    ["Clean funds", "Both deposits pass ASP screening."],
  ];
  const axioms: Array<[string, string]> = [
    ["Soundness", "No trade settles unless the books balance."],
    ["Silence", "An order reveals nothing onchain: before, during, or after the match."],
    ["Fairness", "Everyone in a round fills at the same midpoint."],
  ];

  return (
    <Chapter
      id="settlement"
      kicker="The Ledger"
      title="The settlement, entered in the ledger."
    >
      <p className="max-w-2xl text-lg text-ink-soft">
        For every match, the Verse proves the following five things.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proofs.map(([title, body], i) => (
          <div key={title} className="seal-card rounded-sm p-6">
            <div className="font-display text-sm text-seal">{ROMAN[i]}</div>
            <h3 className="mt-2 font-display text-xl">{title}</h3>
            <p className="mt-2 text-ink-soft">{body}</p>
          </div>
        ))}
        <div className="oval-frame flex items-center justify-center p-6">
          <span className="font-display text-xl italic">
            Σin = Σout + fee, per asset
          </span>
        </div>
      </div>

      <h3 className="mt-16 font-display text-3xl">Three axioms</h3>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {axioms.map(([title, body], i) => (
          <div key={title} className="border-t border-ink pt-4">
            <div className="font-display text-sm text-seal">{ROMAN[i]}</div>
            <h4 className="mt-2 font-display text-xl">{title}</h4>
            <p className="mt-2 text-ink-soft">{body}</p>
          </div>
        ))}
      </div>
    </Chapter>
  );
}