import { CLAIM_STEPS, CLAIM_DISCLAIMER } from "./constants";

export function SealHowToClaim() {
  return (
    <section id="rules"  className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          How to <em className="text-maroon">claim.</em>
        </h2>

        <ol className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {CLAIM_STEPS.map((s) => (
            <li key={s.numeral} className="border-t border-ink pt-4">
              <div className="font-display text-sm text-seal">{s.numeral}</div>
              <h3 className="mt-2 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl text-sm italic leading-relaxed text-ink-soft">
          {CLAIM_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}