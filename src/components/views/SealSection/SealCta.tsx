import type { View } from "../../layout/Header";

type SealCtaProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function SealCta({ onNavigate }: SealCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        Speak little. <em className="text-maroon">Prove everything.</em>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm italic text-ink-soft">
        Don't trust us. Check the seal.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate?.("trade")}
          className="btn-maroon rounded-sm px-5 py-2.5 text-sm"
        >
          Shield now
        </button>

        <button
          onClick={() => console.log("Open Dark Book")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Dark Book
        </button>

        <button
          onClick={() => onNavigate?.("home")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Back to Tartaglia
        </button>
      </div>
    </section>
  );
}