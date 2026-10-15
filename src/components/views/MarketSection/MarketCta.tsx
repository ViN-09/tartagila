import type { View } from "../../layout/Header";

type MarketCtaProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function MarketCta({ onNavigate }: MarketCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      {/* Title 3 baris */}
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        <span className="block">Every stock you can hold,</span>
        <span className="block">you'll trade without</span>
        <span className="block">showing your hand.</span>
      </h2>

      {/* 2 tombol */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate?.("trade")}
          className="btn-maroon rounded-sm px-5 py-2.5 text-sm"
        >
          Trade now
        </button>

        <button
          onClick={() => onNavigate?.("privacy")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Privacy Stack
        </button>
      </div>

      {/* Disclaimer */}
      <p className="mx-auto mt-10 max-w-xl text-xs italic leading-relaxed text-ink-soft">
        Prices from Chainlink. Volume from Robinhood Chain DEX indexer. Onchain
        data only, not investment advice.
      </p>
    </section>
  );
}