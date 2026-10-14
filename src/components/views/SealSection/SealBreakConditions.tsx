import { BREAK_CONDITIONS, BREAK_CONDITIONS_FOOTNOTE } from "./constants";

export function SealBreakConditions() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        What <em className="text-maroon">breaks</em> the seal.
      </h2>

      <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {BREAK_CONDITIONS.map((c) => (
          <div key={c.numeral} className="border-t border-ink pt-4">
            <div className="font-display text-sm text-seal">{c.numeral}</div>
            <h3 className="mt-2 font-display text-xl">{c.title}</h3>
            <p className="mt-2 text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
        {BREAK_CONDITIONS_FOOTNOTE}
      </p>
    </section>
  );
}