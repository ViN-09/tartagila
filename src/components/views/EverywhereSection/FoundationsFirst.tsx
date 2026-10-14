import { FOUNDATIONS, FOUNDATIONS_FOOTNOTE } from "./constants";
import type { View } from "../../layout/Header";

type FoundationsFirstProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function FoundationsFirst({ onNavigate }: FoundationsFirstProps = {}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        Foundations <em className="text-maroon">first.</em>
      </h2>

      <ol className="mt-10 space-y-5">
        {FOUNDATIONS.map((step) => (
          <li
            key={step.numeral}
            className="flex items-start gap-4 border-b border-border/60 pb-5 last:border-0"
          >
            <span className="shrink-0 font-display text-lg text-seal">
              {step.numeral}
            </span>
            <div className="flex-1">
              <p className="text-ink-soft">{step.body}</p>
              {step.link && (
                <button
                  onClick={() => onNavigate?.(step.link!.target as View)}
                  className="mt-2 font-display text-sm italic text-maroon underline decoration-maroon/40 underline-offset-4 transition hover:decoration-maroon"
                >
                  {step.link.label}
                </button>
              )}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
        {FOUNDATIONS_FOOTNOTE}
      </p>
    </section>
  );
}