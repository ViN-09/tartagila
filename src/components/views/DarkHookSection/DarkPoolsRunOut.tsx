import { DARK_POOLS } from "./constants";

export function DarkPoolsRunOut() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        {/* KICKER KIRI */}
        <p className="font-display text-sm uppercase tracking-[0.3em] text-seal md:text-right">
          {DARK_POOLS.kicker}
        </p>

        {/* KONTEN KANAN */}
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
            {DARK_POOLS.title}
          </h2>

          {/* Drop cap */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            <span className="float-left mr-3 font-display text-6xl leading-[0.85] text-maroon md:text-7xl">
              {DARK_POOLS.body1.charAt(0)}
            </span>
            {DARK_POOLS.body1.slice(1)}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {DARK_POOLS.body2}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {DARK_POOLS.body3}{" "}
            <em className="text-ink">{DARK_POOLS.body3Emphasis}</em>
          </p>
        </div>
      </div>
    </section>
  );
}