import { useEffect, useState } from "react";
import { SEAL_STATUS } from "./constants";
import { formatDuration, formatUtc } from "./utils";

export function SealStatus() {
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
    const timer = setInterval(update, 60_000); // tiap 1 menit
    return () => clearInterval(timer);
  }, []);

  const isIntact = SEAL_STATUS.isIntact;

  return (
    <section className="mx-auto max-w-6xl px-6">
      <div
        className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-sm border px-5 py-4 ${
          isIntact
            ? "border-emerald-600/50 bg-emerald-500/5"
            : "border-red-600/50 bg-red-500/5"
        }`}
      >
        {/* KIRI — Status + durasi */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              isIntact
                ? "bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400"
                : "bg-red-400 shadow-[0_0_8px] shadow-red-400"
            }`}
          />
          <span
            className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${
              isIntact ? "text-emerald-400" : "text-red-400"
            }`}
          >
            Seal {isIntact ? "Intact" : "Broken"}
          </span>
          <span className="text-sm text-ink-soft">
            Unbroken for {duration}
          </span>
        </div>

        {/* KANAN — Last checked */}
        <span className="text-xs text-ink-soft">
          Last checked: {lastChecked}
        </span>
      </div>
    </section>
  );
}