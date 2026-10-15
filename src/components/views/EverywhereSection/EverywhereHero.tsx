import { VISION_TAG, VISION_NOTE } from "./constants";
import type { View } from "../../layout/Header";

type EverywhereHeroProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function EverywhereHero({ onNavigate }: EverywhereHeroProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
      {/* Kicker — 1 baris */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {VISION_TAG}
      </p>

      {/* Title 2 baris */}
      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        <span className="block">TARTAGLIA</span>
        <span className="block">
          <em className="text-maroon">EVERYWHERE.</em>
        </span>
      </h1>

      {/* Body */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        We're not building one private app. We're building the privacy layer for
        all of Robinhood Chain.
      </p>

      {/* 2 tombol */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {/* ⬇️ UBAH — scroll ke #law */}
        <button
          onClick={() => {
            document
              .querySelector("#law")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Read the law
        </button>

        {/* ⬇️ UBAH — scroll ke #build */}
        <button
          onClick={() => {
            document
              .querySelector("#build")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Build with us
        </button>
      </div>

      {/* Stat line dengan border-top */}
      <div className="mt-10 max-w-2xl border-t border-border pt-5">
        <p className="text-xs italic text-ink-soft">{VISION_NOTE}</p>
      </div>
    </section>
  );
}