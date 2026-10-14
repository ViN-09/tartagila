import { TRADE_ASSETS } from "./constants";

type AssetSelectorProps = {
  value: string;
  onChange: (symbol: string) => void;
};

export function AssetSelector({ value, onChange }: AssetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {TRADE_ASSETS.map((asset) => {
        const active = value === asset.symbol;
        return (
          <button
            key={asset.symbol}
            type="button"
            onClick={() => onChange(asset.symbol)}
            className={`flex items-center gap-2 rounded-sm border px-3 py-2 text-sm transition ${
              active
                ? "border-maroon bg-maroon/10 text-maroon"
                : "border-border bg-card text-ink-soft hover:text-ink"
            }`}
          >
            <span className="font-display tracking-wide">{asset.symbol}</span>
            <span className="text-xs text-ink-soft">
              ${asset.midpoint.toFixed(2)}
            </span>
          </button>
        );
      })}
    </div>
  );
}