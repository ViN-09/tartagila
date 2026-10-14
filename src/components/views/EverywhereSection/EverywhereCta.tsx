import { EVERYWHERE_CTA } from "./constants";
import type { View } from "../../layout/Header";

type EverywhereCtaProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function EverywhereCta({ onNavigate }: EverywhereCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      {/* 3 baris title */}
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        {EVERYWHERE_CTA.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="mt-6 font-display text-sm italic text-ink-soft">
        {EVERYWHERE_CTA.sub}
      </p>

      {/* 3 tombol */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate?.("trade")}
          className="btn-maroon rounded-sm px-5 py-2.5 text-sm"
        >
          Shield now
        </button>

        <button
          onClick={() => onNavigate?.("privacy")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Privacy Stack
        </button>

        <button
          onClick={() => onNavigate?.("market")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Dark Hook
        </button>
      </div>
    </section>
  );
}