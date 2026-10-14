type AssetCardProps = {
  /** Ticker simbol, misal "NVDA" */
  symbol: string;
  /** Nama lengkap perusahaan, misal "NVIDIA Corporation" */
  name: string;
  /** Harga saat ini dalam USD, misal 138.25 */
  price: number;
  /** Persentase perubahan harga, misal 2.84 atau -2.84 */
  changePercent: number;
  /** Jumlah token yang di-shield, misal 14850 */
  shieldedAmount: number;
  /** Nilai USD dari jumlah yang di-shield, misal 2.05 (dalam juta) */
  shieldedValueUsd: number;
  /** Volume 24 jam DEX, misal 38.42 (dalam juta) */
  volume24hUsd: number;
  /** Klik tombol trade */
  onTrade?: () => void;
  /** Status live (default: true) */
  isLive?: boolean;
};

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

  // Format angka: 14850 → "14,850"
  const formatNumber = (n: number) => n.toLocaleString("en-US");

  // Format harga: 138.25 → "138.25"
  const formatPrice = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="rounded-sm border border-border bg-card p-6 font-sans text-ink">
      {/* ── HEADER ── */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-2xl tracking-tight">{symbol}</h3>
          <p className="mt-1 text-sm text-ink-soft">{name}</p>
        </div>

        {isLive && (
          <div className="flex items-center gap-1.5 rounded-sm border border-emerald-700/60 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </div>
        )}
      </div>

      {/* ── PRICE ── */}
      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold">
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

      {/* ── DIVIDER ── */}
      <div className="my-5 border-t border-border" />

      {/* ── STATS ── */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink-soft">Shielded in Tartaglia:</span>
          <span className="text-right">
            {formatNumber(shieldedAmount)} {symbol}{" "}
            <span className="text-ink-soft">
              (~${shieldedValueUsd.toFixed(2)}M)
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-soft">24h DEX volume:</span>
          <span className="text-right">${volume24hUsd.toFixed(2)}M</span>
        </div>
      </div>

      {/* ── ACTION ── */}
      <button
        onClick={onTrade}
        className="mt-6 w-full rounded-sm bg-maroon px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:opacity-80"
      >
        Trade {symbol}
      </button>
    </div>
  );
}