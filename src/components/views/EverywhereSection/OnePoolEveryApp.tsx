import { INTEGRATIONS } from "./constants";
import type { Integration } from "./types";
import { MarginaliaDiagram } from "./MarginaliaDiagram";

export function OnePoolEveryApp() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Kicker */}
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
          Liber XIV · The Expansion
        </p>

        <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
          One pool. <em className="text-maroon">Every app.</em>
        </h2>

        {/* 4 cards — full width 1 kolom */}
        <div className="mt-10 space-y-6">
          {INTEGRATIONS.map((i) => (
            <IntegrationCard key={i.numeral} integration={i} />
          ))}
        </div>

        {/* Diagram MARGINALIA */}
        <div className="mt-12">
          <MarginaliaDiagram />
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <article className="rounded-sm border-2 border-border bg-background/60 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg leading-snug md:text-xl">
          <span className="text-seal">{integration.numeral} · </span>
          {integration.title}
        </h3>
        <span className="inline-flex items-center rounded-sm border border-seal/50 bg-seal/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-seal">
          {integration.tag}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {/* WHAT IT IS */}
        <div className="rounded-sm border border-border bg-card/40 p-3">
          <div className="font-display text-[10px] uppercase tracking-[0.2em] text-ink">
            What it is
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            {integration.whatItIs}
          </p>
        </div>

        {/* WHY IT MATTERS */}
        <div className="rounded-sm border border-border bg-card/40 p-3">
          <div className="font-display text-[10px] uppercase tracking-[0.2em] text-ink">
            Why it matters
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            {integration.whyItMatters}
          </p>
        </div>
      </div>
    </article>
  );
}