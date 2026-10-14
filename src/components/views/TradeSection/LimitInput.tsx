type LimitInputProps = {
  value: string;
  onChange: (v: string) => void;
};

export function LimitInput({ value, onChange }: LimitInputProps) {
  return (
    <div>
      <label className="mb-2 flex items-baseline justify-between text-sm">
        <span className="text-ink-soft">Limit</span>
        <span className="text-xs italic text-ink-soft">optional</span>
      </label>

      <div className="flex items-center rounded-sm border border-border bg-card px-3">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
          placeholder="—"
          className="w-full bg-transparent py-2.5 font-display text-lg text-ink outline-none placeholder:text-ink-soft/50"
        />
        <span className="font-display text-sm text-ink-soft">USDG</span>
      </div>

      <p className="mt-2 text-xs text-ink-soft">
        Leave empty to fill at whatever the midpoint is.
      </p>
    </div>
  );
}