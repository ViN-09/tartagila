import { BOUNTY_AMOUNT_USDG, BOUNTY_NETWORK, SEAL_STATUS } from "./constants";
import { formatDuration, formatUtc } from "./utils";
import { useEffect, useState } from "react";

export function SealHero() {
  const [duration, setDuration] = useState(
    formatDuration(SEAL_STATUS.startedAtIso)
  );
  const [lastChecked, setLastChecked] = useState(SEAL_STATUS.lastCheckedUtc);

  useEffect(() => {
    const update = () => {
      setDuration(formatDuration(SEAL_STATUS.startedAtIso));
      setLastChecked(formatUtc());
    };
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  const isIntact = SEAL_STATUS.isIntact;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
      {/* Kicker */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {BOUNTY_NETWORK}
      </p>

      {/* Title */}
      <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        BREAK THE <em className="text-maroon">SEAL.</em>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {BOUNTY_AMOUNT_USDG} USDG sits sealed in the Notary. Prove our tech
        doesn't work, and it's yours.
      </p>

      {/* STATUS BOX */}
      <div
        className={`mt-8 max-w-2xl rounded-sm border px-5 py-4 ${
          isIntact
            ? "border-emerald-600/50 bg-emerald-500/5"
            : "border-red-600/50 bg-red-500/5"
        }`}
      >
        {/* Row 1: Intact + duration */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-sm border border-red-600/60 bg-red-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-red-400">
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-sm bg-red-600 text-[8px] text-white">
              ✓
            </span>
            Seal {isIntact ? "Intact" : "Broken"}
          </span>

          <span className="font-display text-sm italic text-ink">
            Unbroken for {duration}
          </span>
        </div>

        {/* Row 2: Last checked */}
        <p className="mt-3 text-xs text-ink-soft">
          Last checked: {lastChecked}
        </p>
      </div>

      {/* 2 TOMBOL */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={() => {
            document
              .querySelector("#proof")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          See the proof
        </button>

        <button
          onClick={() => {
            document
              .querySelector("#rules")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Read the rules
        </button>
      </div>
    </section>
  );
}