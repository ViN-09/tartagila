import { PRIVACY_LAW } from "./constants";
import { CrowdVisualizer } from "./CrowdVisualizer";

export function PrivacyLaw() {
  return (
    <section id="law"  className="mx-auto max-w-6xl px-6 py-16">
      {/* Kicker */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {PRIVACY_LAW.kicker}
      </p>

      <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
        Privacy has <em className="text-maroon">one law.</em>
      </h2>

      <p className="mt-6 max-w-2xl font-display text-xl italic text-ink">
        {PRIVACY_LAW.law}
      </p>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>{PRIVACY_LAW.body1}</p>
        <p>{PRIVACY_LAW.body2}</p>
      </div>

      {/* Interactive crowd visualizer */}
      <div className="mt-10">
        <CrowdVisualizer />
      </div>

      <p className="mt-4 max-w-2xl text-sm italic text-ink-soft">
        {PRIVACY_LAW.footnote}
      </p>
    </section>
  );
}