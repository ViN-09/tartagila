import { useEffect, useState } from "react";
import { DISFIDA_ID, DISFIDA_INTERVAL_SECONDS } from "./constants";

type TradeStatusBarProps = {
  isConnected: boolean;
  matcherOnline?: boolean;
  chainlinkFresh?: boolean;
};

export function TradeStatusBar({
  isConnected,
  matcherOnline = true,
  chainlinkFresh = true,
}: TradeStatusBarProps) {
  const [secondsLeft, setSecondsLeft] = useState(DISFIDA_INTERVAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) =>
        prev <= 1 ? DISFIDA_INTERVAL_SECONDS : prev - 1
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs">
        <div className="flex items-center gap-2 font-display tracking-wide text-ink">
          <span className="italic text-ink-soft">
            Disfida #{DISFIDA_ID}
          </span>
          <span className="text-ink-soft">·</span>
          <span className="text-ink-soft">
            every {DISFIDA_INTERVAL_SECONDS}s
          </span>
          <span className="text-ink-soft">·</span>
          <span className="text-maroon">
            closes in {secondsLeft}s
          </span>
        </div>

        <div className="flex items-center gap-4 text-ink-soft">
          <StatusDot active={matcherOnline} label="Matcher online" />
          <StatusDot active={chainlinkFresh} label="Chainlink midpoint fresh" />
          <StatusDot
            active={isConnected}
            label={isConnected ? "Wallet connected" : "Wallet not connected"}
            activeColor="emerald"
          />
        </div>
      </div>
    </div>
  );
}

function StatusDot({
  active,
  label,
  activeColor = "emerald",
}: {
  active: boolean;
  label: string;
  activeColor?: "emerald" | "gold";
}) {
  const colorClass = active
    ? activeColor === "gold"
      ? "bg-gold shadow-gold"
      : "bg-emerald-400 shadow-emerald-400"
    : "bg-ink-soft/40";

  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${colorClass}`}
      />
      <span>{label}</span>
    </span>
  );
}