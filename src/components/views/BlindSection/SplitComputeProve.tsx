import { STEPS_SECTION, STEPS, DIAGRAM_FOOTNOTE } from "./constants";
import { BlindDiagram } from "./BlindDiagram";

export function SplitComputeProve() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16"
    >
      {/* Kicker */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {STEPS_SECTION.kicker}
      </p>

      {/* Title */}
      <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
        {STEPS_SECTION.title}
      </h2>

      {/* 4 step — format "I. Split — body" */}
      <ol className="mt-10 space-y-6">
        {STEPS.map((step) => (
          <li key={step.numeral} className="flex items-start gap-2">
            <span className="font-display text-ink">
              {step.numeral} <strong>{step.label}</strong> —{" "}
            </span>
            <span className="text-ink-soft">{step.body}</span>
          </li>
        ))}
      </ol>

      {/* Diagram */}
      <div className="mt-16">
        <BlindDiagram />
      </div>

      {/* Footnote */}
      <p className="mt-8 max-w-2xl font-display text-sm italic text-ink-soft">
        {DIAGRAM_FOOTNOTE}
      </p>
    </section>
  );
}