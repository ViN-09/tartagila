import { ALREADY_DARK_LAYERS } from "./constants";
import { LayerStatusBadge } from "./LayerStatusBadge";

export function AlreadyDarkLayers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        Already <em>dark.</em>
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {ALREADY_DARK_LAYERS.map((layer) => (
          <div
            key={layer.numeral}
            className="rounded-sm border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-sm text-seal">
                  {layer.numeral}
                </div>
                <h3 className="mt-2 font-display text-xl">{layer.title}</h3>
              </div>
              <LayerStatusBadge status={layer.status} />
            </div>
            <p className="mt-4 text-ink-soft">{layer.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}