import { BLIND_TAG, BLIND_HERO } from "./constants";
import type { View } from "../../layout/Header";

type BlindHeroProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function BlindHero({ onNavigate }: BlindHeroProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-20">
      {/* Kicker */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {BLIND_TAG}
      </p>

      {/* Title 3 baris */}
      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        {BLIND_HERO.title.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>

      {/* Body */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {BLIND_HERO.body}
      </p>

      {/* Badge Research */}
      <div className="mt-8">
        <span className="inline-flex items-center rounded-full border border-seal/50 bg-seal/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-seal">
          {BLIND_HERO.badge}
        </span>
      </div>

      {/* 2 tombol */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {BLIND_HERO.buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => {
              if (btn.target.startsWith("#")) {
                document
                  .querySelector(btn.target)
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                onNavigate?.(btn.target as View);
              }
            }}
            className={
              btn.variant === "primary"
                ? "btn-maroon rounded-sm px-5 py-2.5 text-sm"
                : "btn-outline rounded-sm px-5 py-2.5 text-sm"
            }
          >
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  );
}