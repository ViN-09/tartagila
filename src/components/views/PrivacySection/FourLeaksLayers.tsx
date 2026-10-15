import { FOUR_LEAKS_LAYERS } from "./constants";
import type { DiagramSide, Layer } from "./types";
import { LayerStatusBadge } from "./LayerStatusBadge";

export function FourLeaksLayers() {
  return (
    <section
      id="stack"
      className="border-y border-border bg-background/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Kicker + Title */}
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
          Liber XII · The Leaks
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
          Four leaks. <em className="text-maroon">Four layers.</em>
        </h2>

        {/* Cards — stack 1 kolom */}
        <div className="mt-10 space-y-8">
          {FOUR_LEAKS_LAYERS.map((layer) => (
            <LeakCard key={layer.numeral} layer={layer} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Individual card
// ─────────────────────────────────────────────
function LeakCard({ layer }: { layer: Layer }) {
  return (
    <article className="overflow-hidden rounded-sm border-2 border-border bg-background/60 p-6 md:p-8">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl leading-snug md:text-2xl">
          <span className="text-seal">{layer.numeral} · </span>
          {layer.title}
        </h3>
        <LayerStatusBadge status={layer.status} />
      </div>

      {/* LEAK / FIX — 2 kolom */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* THE LEAK */}
        <div className="rounded-sm border border-red-900/40 bg-red-950/10 p-4">
          <div className="font-display text-xs uppercase tracking-[0.2em] text-red-400">
            The leak
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {layer.leak}
          </p>
        </div>

        {/* THE FIX */}
        <div className="rounded-sm border border-border bg-card/40 p-4">
          <div className="font-display text-xs uppercase tracking-[0.2em] text-ink">
            The fix
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {layer.fix}
          </p>
        </div>
      </div>

      {/* DIAGRAM */}
      {layer.diagram && (
        <div className="mt-6 rounded-sm border border-border bg-card/30 p-4 md:p-6">
          <div className="space-y-4">
            <DiagramRow side={layer.diagram.before} />
            <DiagramRow side={layer.diagram.after} />
          </div>
        </div>
      )}
    </article>
  );
}

// ─────────────────────────────────────────────
// Diagram row
// ─────────────────────────────────────────────
function DiagramRow({ side }: { side: DiagramSide }) {
  const isBefore = side.label === "BEFORE";

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Label BEFORE / AFTER */}
      <div
        className={`w-[60px] shrink-0 font-display text-[10px] font-semibold uppercase tracking-[0.2em] ${
          isBefore ? "text-red-400" : "text-ink-soft"
        }`}
      >
        {side.label}
      </div>

      {/* Box: From */}
      <div className="shrink-0 rounded-sm border border-border bg-card px-3 py-1.5 text-xs text-ink">
        {side.from}
      </div>

      {/* Arrow + via label */}
      <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
        {/* Label via */}
        <span
          className={`text-center text-[10px] italic ${
            isBefore ? "text-red-400/80" : "text-ink-soft"
          }`}
        >
          {side.via}
        </span>

        {/* Arrow */}
        <svg
          width="100%"
          height="8"
          viewBox="0 0 200 8"
          preserveAspectRatio="none"
          className="text-ink-soft"
        >
          {isBefore ? (
            // Solid arrow (leak)
            <>
              <line
                x1="0"
                y1="4"
                x2="192"
                y2="4"
                stroke="currentColor"
                strokeWidth="1"
              />
              <polyline
                points="190,1 194,4 190,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </>
          ) : (
            // Dashed arrow (fix)
            <>
              <line
                x1="0"
                y1="4"
                x2="192"
                y2="4"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <polyline
                points="190,1 194,4 190,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </>
          )}
        </svg>
      </div>

      {/* Box: To */}
      <div className="shrink-0 rounded-sm border border-border bg-card px-3 py-1.5 text-xs text-ink">
        {side.to}
      </div>
    </div>
  );
}