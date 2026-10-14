import { CLAIM_ENTRIES } from "./constants";
import { shortenHash } from "./utils";

export function SealClaimsLog() {
  const hasClaims = CLAIM_ENTRIES.length > 0;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        Every claim, <em>in public.</em>
      </h2>

      {!hasClaims ? (
        <p className="mt-8 text-lg text-ink-soft">
          No valid claims yet. <em className="text-ink">The seal holds.</em>
        </p>
      ) : (
        <ul className="mt-8 space-y-3">
          {CLAIM_ENTRIES.map((c) => (
            <li
              key={c.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-border bg-card px-5 py-4"
            >
              <div>
                <div className="font-display text-base text-ink">
                  {c.summary}
                </div>
                <div className="mt-0.5 text-xs text-ink-soft">
                  {c.submittedAt}
                  {c.txHash && ` · ${shortenHash(c.txHash)}`}
                </div>
              </div>
              <span
                className={`rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
                  c.status === "valid"
                    ? "border-red-600/50 bg-red-500/5 text-red-400"
                    : c.status === "invalid"
                    ? "border-border bg-card text-ink-soft"
                    : "border-gold/50 bg-gold/5 text-gold"
                }`}
              >
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}