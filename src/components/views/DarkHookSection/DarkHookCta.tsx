import { DARKHOOK_CTA } from "./constants";
import type { View } from "../../layout/Header";
import type { CtaButton } from "./types";

type DarkHookCtaProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function DarkHookCta({ onNavigate }: DarkHookCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      {/* 2 baris title */}
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-6xl">
        {DARKHOOK_CTA.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      {/* Body */}
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
        {DARKHOOK_CTA.body}
      </p>

      {/* 2 tombol */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {DARKHOOK_CTA.buttons.map((btn: CtaButton) => (
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

      {/* Disclaimer */}
      <p className="mt-8 text-sm italic text-ink-soft">
        {DARKHOOK_CTA.disclaimer}
      </p>
    </section>
  );
}