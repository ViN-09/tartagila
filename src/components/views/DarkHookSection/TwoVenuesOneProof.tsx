import { TWO_VENUES, STEPS } from "./constants";
import { HookDiagram } from "./HookDiagram";

export function TwoVenuesOneProof() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16"
    >
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        {/* KICKER KIRI */}
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal md:text-right">
          {TWO_VENUES.kicker}
        </p>

        {/* KONTEN KANAN */}
        <div>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
            {TWO_VENUES.title}
          </h2>

          {/* 5 step — tabel vertikal */}
          <ol className="mt-10 divide-y divide-border">
            {STEPS.map((step) => (
              <li key={step.numeral} className="grid grid-cols-[40px_1fr] gap-4 py-5">
                <span className="font-display text-lg text-seal">
                  {step.numeral}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">{step.title}</h3>
                  <p className="mt-1 text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* DIAGRAM FULL WIDTH */}
      <div className="mt-16">
        <HookDiagram />
      </div>

      <p className="mt-8 max-w-2xl font-display text-sm italic text-ink-soft">
        {TWO_VENUES.diagramFootnote}
      </p>
    </section>
  );
}