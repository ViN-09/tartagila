import { DARK_CRITERIA } from "./constants";

export function HowItGoesDark() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          How a stock goes <em>dark.</em>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Six strict requirements protect the integrity of the shielded dark
          pool before any equity token is admitted.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {DARK_CRITERIA.map((c) => (
            <div key={c.numeral} className="border-t border-ink pt-4">
              <div className="font-display text-sm text-seal">{c.numeral}</div>
              <h3 className="mt-2 font-display text-xl">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}