import { ONE_PARTY } from "./constants";

export function OnePartyStillSees() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
        One party still <em className="text-maroon">sees.</em>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {ONE_PARTY.body}
      </p>
    </section>
  );
}