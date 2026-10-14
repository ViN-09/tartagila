import { DARKHOOK_TAG, DARKHOOK_HERO } from "./constants";
import type { View } from "../../layout/Header";
import type { CtaButton } from "./types";

type DarkHookHeroProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function DarkHookHero({ onNavigate }: DarkHookHeroProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-20">
      {/* Badge RESEARCH · NOT LIVE */}
      <span className="inline-flex items-center rounded-sm border border-maroon/60 bg-maroon/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-maroon">
        {DARKHOOK_HERO.badge}
      </span>

      {/* Grid: kiri teks, kanan diagram */}
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
        {/* KIRI */}
        <div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {DARKHOOK_HERO.title}
          </h1>
          <p className="mt-2 font-display text-2xl italic leading-snug text-ink md:text-3xl">
            {DARKHOOK_HERO.subtitle}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            {DARKHOOK_HERO.body}
          </p>

          {/* 2 tombol */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {DARKHOOK_HERO.buttons.map((btn: CtaButton) => (
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
        </div>

        {/* KANAN: diagram visual */}
        <div className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-sm border border-border">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="h-full w-full"
          >
            {/* KIRI: kotak hitam */}
            <rect x="0" y="0" width="55" height="100" fill="#1a1614" />

            {/* KURVA pembatas */}
            <path
              d="M55 0 Q50 50 55 100"
              fill="#1a1614"
              stroke="none"
            />

            {/* TITIK u di kiri atas */}
            <circle cx="20" cy="25" r="1.5" fill="#e8d0b0" />
            <text x="14" y="22" fontSize="3" fill="#e8d0b0" fontStyle="italic">
              u
            </text>

            {/* TITIK v di kiri bawah */}
            <circle cx="20" cy="70" r="1.5" fill="#e8d0b0" />
            <text x="14" y="67" fontSize="3" fill="#e8d0b0" fontStyle="italic">
              v
            </text>

            {/* TITIK m di tengah */}
            <circle cx="40" cy="47" r="2" fill="#e8d0b0" />
            <text x="36" y="44" fontSize="3" fill="#e8d0b0" fontStyle="italic">
              m
            </text>

            {/* GARIS u→m */}
            <line x1="20" y1="25" x2="40" y2="47" stroke="#e8d0b0" strokeWidth="0.4" />
            {/* GARIS v→m */}
            <line x1="20" y1="70" x2="40" y2="47" stroke="#e8d0b0" strokeWidth="0.4" />

            {/* KURVA m → pool */}
            <path
              d="M40 47 Q70 47 70 65 Q70 80 75 80"
              fill="none"
              stroke="#c9a97a"
              strokeWidth="0.6"
            />

            {/* TITIK pool */}
            <circle cx="75" cy="80" r="2" fill="#8b2d1f" />
            <text
              x="75"
              y="90"
              fontSize="3"
              fill="#c9a97a"
              textAnchor="middle"
              fontStyle="italic"
            >
              pool
            </text>
          </svg>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-10 max-w-xl border-y border-border py-4">
        <span className="font-display text-sm italic text-ink-soft">
          {DARKHOOK_HERO.formula}
        </span>
      </div>
    </section>
  );
}