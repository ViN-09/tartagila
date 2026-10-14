import { TRADE_STEPS } from "./constants";

export function TradeHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-12">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        Tartaglia / Trade
      </p>

      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Seal a <em className="text-maroon">cartello.</em>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Two hidden orders enter. One public midpoint settles. Your side, asset
        and size stay sealed: the chain learns only that a fair trade happened.
      </p>

      <ol className="mt-10 grid gap-3 border-t border-ink pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRADE_STEPS.map((step) => (
          <li key={step.n} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-seal font-display text-xs text-seal">
              {step.n}
            </span>
            <span className="pt-1 text-sm text-ink">{step.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}