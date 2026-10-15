import { BUILDING_CTA } from "./constants";

export function BuildingCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Grid: kicker kiri + konten kanan (mirip style "Dark pools run out" di DarkHook) */}
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        {/* KICKER KIRI */}
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal md:text-right">
          {BUILDING_CTA.kicker}
        </p>

        {/* KONTEN KANAN */}
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
            {BUILDING_CTA.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {BUILDING_CTA.body}
          </p>

          {/* Tombol — link ke X */}
          <a
            href={BUILDING_CTA.button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-maroon mt-8 inline-block rounded-sm px-5 py-2.5 text-sm"
          >
            {BUILDING_CTA.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}