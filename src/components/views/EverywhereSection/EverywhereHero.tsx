import { VISION_TAG, VISION_NOTE } from "./constants";

export function EverywhereHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-20">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        Vision
      </p>
      <p className="mt-1 text-sm text-ink-soft">{VISION_TAG}</p>

      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        TARTAGLIA <em className="text-maroon">EVERYWHERE.</em>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        We're not building one private app. We're building the privacy layer for
        all of Robinhood Chain.
      </p>

      <p className="mt-6 max-w-2xl text-sm italic text-ink-soft">
        {VISION_NOTE}
      </p>
    </section>
  );
}