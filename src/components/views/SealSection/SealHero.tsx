import { BOUNTY_AMOUNT_USDG, BOUNTY_NETWORK } from "./constants";

export function SealHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-20">
      {/* Kicker — 2 baris */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        Bounty · {BOUNTY_AMOUNT_USDG} USDG
      </p>
      <p className="mt-1 text-sm text-ink-soft">{BOUNTY_NETWORK}</p>

      {/* Title */}
      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        BREAK THE <em className="text-maroon">SEAL.</em>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {BOUNTY_AMOUNT_USDG} USDG sits sealed in the Notary. Prove our tech
        doesn't work, and it's yours.
      </p>
    </section>
  );
}