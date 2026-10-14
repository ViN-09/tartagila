import type { Side } from "./types";

type SideSelectorProps = {
  value: Side;
  onChange: (side: Side) => void;
};

export function SideSelector({ value, onChange }: SideSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {(["buy", "sell"] as const).map((side) => {
        const active = value === side;
        const label = side === "buy" ? "Buy" : "Sell";
        const activeClass =
          side === "buy"
            ? "border-emerald-600 bg-emerald-500/10 text-emerald-400"
            : "border-red-600 bg-red-500/10 text-red-400";

        return (
          <button
            key={side}
            type="button"
            onClick={() => onChange(side)}
            className={`rounded-sm border px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition ${
              active
                ? activeClass
                : "border-border bg-card text-ink-soft hover:text-ink"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}