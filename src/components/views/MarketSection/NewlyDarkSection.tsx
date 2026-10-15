import { LISTING_EVENTS } from "./constants";

export function NewlyDarkSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="font-display text-3xl tracking-tight">
        Newly <em>dark.</em>
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Verified onchain listing and state transition events from the Tartaglia
        Notary contract.
      </p>

      <div className="mt-10 space-y-4">
        {LISTING_EVENTS.map((e, i) => (
          <article
            key={i}
            className="rounded-sm border-2 border-border bg-background/40 p-5"
          >
            {/* DOT + TITLE */}
            <div className="flex items-start gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />

              <div className="flex-1">
                <h3 className="font-display text-base leading-snug text-ink">
                  <span className="text-ink-soft">{e.date}</span>{" "}
                  <strong className="text-ink">
                    {e.symbol} ({e.name})
                  </strong>{" "}
                  <span className="text-ink-soft">
                    listed on Tartaglia
                  </span>
                </h3>

                <p className="mt-2 text-sm text-ink-soft">
                  {e.description}
                </p>

                {/* LISTING TX */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-soft">
                  <span className="italic">Listing tx:</span>
                  <a
                    href={e.txUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono underline decoration-border underline-offset-2 transition hover:text-maroon hover:decoration-maroon"
                  >
                    {e.txHash}
                  </a>
                  <span className="text-ink-soft">↗</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}