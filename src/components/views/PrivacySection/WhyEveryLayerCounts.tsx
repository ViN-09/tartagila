import { PRINCIPLES } from "./constants";

export function WhyEveryLayerCounts() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Why every layer <em>counts.</em>
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.numeral} className="border-t border-ink pt-4">
              <div className="font-display text-sm text-seal">{p.numeral}</div>
              <h3 className="mt-2 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}