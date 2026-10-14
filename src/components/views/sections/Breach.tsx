import { Chapter } from "./Chapter";

export function Breach() {
  return (
    <Chapter id="breach" kicker="Chapter IV · 1545" title="Nuremberg. The Breach.">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        <p className="font-display text-2xl italic text-ink">
          An oath was the only protection of a secret. It broke.
        </p>
        <p className="font-display text-2xl italic text-maroon">
          No oath. Only proof.
        </p>
        <p>
          Tartaglia exists to stop front-running, MEV and order leakage. The
          chain will never print your order.
        </p>
      </div>
      <div className="seal-card mt-10 max-w-2xl rounded-sm p-8">
        <h3 className="font-display text-2xl">Trust and limits</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-soft">
          <li>
            <strong className="text-ink">Mainnet live.</strong> Guarded pool
            with real assets.
          </li>
          <li>
            <strong className="text-ink">The MVP matcher can see orders</strong>{" "}
            so it can cross them. It never holds funds, and nothing it sees
            reaches the chain.
          </li>
          <li>
            <strong className="text-ink">Safety pauses.</strong> If the oracle
            goes stale or stock-token markets are closed, matching pauses and
            funds stay shielded.
          </li>
          <li>
            <strong className="text-ink">Compliance first.</strong> Deposits are
            screened against an approved set from an Association Set Provider
            (ASP).
          </li>
        </ul>
      </div>
    </Chapter>
  );
}