import type { LiveStock } from "./types";

type AssetCardProps = LiveStock & {
  onTrade?: () => void;
  isLive?: boolean;
};

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

function formatPrice(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function AssetCard({
  symbol,
  name,
  price,
  changePercent,
  shieldedAmount,
  shieldedValueUsd,
  volume24hUsd,
  onTrade,
  isLive = true,
}: AssetCardProps) {
  const isPositive = changePercent >= 0;

  return (
    <div className="group rounded-sm border border-border bg-card p-6 transition-colors hover:border-maroon/40">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink">
            {symbol}
          </h3>
          <p className="mt-0.5 text-sm text-ink-soft">{name}</p>
        </div>

        {isLive && (
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-600/50 bg-emerald-500/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px] shadow-emerald-400" />
            Live
          </span>
        )}
      </div>

      {/* PRICE */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold text-ink">
          ${formatPrice(price)}
        </span>
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {changePercent.toFixed(2)}%
        </span>
      </div>

      <div className="my-5 border-t border-border" />

      {/* STATS */}
      <div className="space-y-2.5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-ink-soft">Shielded in Tartaglia:</span>
          <span className="text-right text-ink">
            {formatNumber(shieldedAmount)} {symbol}{" "}
            <span className="text-ink-soft">
              (~${shieldedValueUsd.toFixed(2)}M)
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-ink-soft">24h DEX volume:</span>
          <span className="text-right text-ink">
            ${volume24hUsd.toFixed(2)}M
          </span>
        </div>
      </div>

      {/* ACTION */}
      <button
        onClick={onTrade}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-maroon px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:opacity-80"
      >
        Trade {symbol}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
    </div>
  );
}