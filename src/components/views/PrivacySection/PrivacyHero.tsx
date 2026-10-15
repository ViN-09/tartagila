import type { View } from "../../layout/Header";

type PrivacyHeroProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function PrivacyHero({ onNavigate }: PrivacyHeroProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
      {/* Kicker — 1 baris */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        Privacy Stack · Robinhood Chain mainnet
      </p>

      {/* Title 3 baris */}
      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        <span className="block">WE GO</span>
        <span className="block">FULLY</span>
        <span className="block">
          <em className="text-maroon">DARK.</em>
        </span>
      </h1>

      {/* Body */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Shielding is live. Your balance no longer shows as yours. But four leaks
        still follow you around the pool: your gas, your transfers, your
        addresses, your amounts. We're closing all four.
      </p>

      {/* 2 tombol */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {/* ⬇️ UBAH INI — scroll ke #stack */}
        <button
          onClick={() => {
            document
              .querySelector("#stack")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          See the stack
        </button>

        {/* Ini tetap pindah view ke trade */}
        <button
          onClick={() => onNavigate?.("trade")}
          className="btn-maroon rounded-sm px-5 py-2.5 text-sm"
        >
          Shield now
        </button>
      </div>

      {/* Stat line dengan border-top */}
      <div className="mt-10 border-t border-border pt-5">
        <p className="text-xs text-ink-soft">
          <span className="text-emerald-400">4</span> layers live
          {" · "}
          <span className="text-gold">2</span> building
          {" · "}
          <span className="text-seal">2</span> in research
        </p>
      </div>
    </section>
  );
}