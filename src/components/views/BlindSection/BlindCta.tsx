import { BLIND_CTA } from "./constants";
import type { View } from "../../layout/Header";

type BlindCtaProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function BlindCta({ onNavigate }: BlindCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      {/* 3 baris title */}
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        {BLIND_CTA.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="mt-6 font-display text-sm italic text-ink-soft">
        {BLIND_CTA.sub}
      </p>

      {/* 3 tombol */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {BLIND_CTA.buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => onNavigate?.(btn.target as View)}
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