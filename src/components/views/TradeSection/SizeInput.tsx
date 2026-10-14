type SizeInputProps = {
  value: string;
  onChange: (v: string) => void;
  assetSymbol: string;
  midpoint: number;
  side: "buy" | "sell";
};

export function SizeInput({
  value,
  onChange,
  assetSymbol,
  midpoint,
  side,
}: SizeInputProps) {
  const numeric = parseFloat(value) || 0;
  const requiredUsdg = numeric * midpoint;

  return (
    <div>
      <label className="mb-2 flex items-baseline justify-between text-sm">
        <span className="text-ink-soft">Size</span>
        <span className="text-xs text-ink-soft">
          {side === "buy" ? "You pay USDG" : "You receive USDG"}
        </span>
      </label>

      <div className="flex items-center rounded-sm border border-border bg-card px-3">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
          placeholder="0.00"
          className="w-full bg-transparent py-2.5 font-display text-lg text-ink outline-none placeholder:text-ink-soft/50"
        />
        <span className="font-display text-sm text-ink-soft">{assetSymbol}</span>
      </div>

      {numeric > 0 && (
        <p className="mt-2 text-xs text-ink-soft">
          {side === "buy" ? "Needs up to" : "Returns"} $
          {requiredUsdg.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          USDG {side === "buy" ? "shielded" : "at midpoint"}.
        </p>
      )}

      {numeric > 0 && (
        <p className="mt-1 text-xs italic text-ink-soft">
          Smaller fills are skipped.
        </p>
      )}
    </div>
  );
}