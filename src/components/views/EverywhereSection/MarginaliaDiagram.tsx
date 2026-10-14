type NodeProps = {
  label: string;
  sublabel?: string;
  variant?: "default" | "highlight" | "danger";
  className?: string;
};

function Node({ label, sublabel, variant = "default", className = "" }: NodeProps) {
  const styles = {
    default: "border-border bg-card text-ink",
    highlight: "border-maroon/60 bg-maroon/10 text-ink",
    danger: "border-red-500/50 bg-red-500/5 text-red-400",
  }[variant];

  return (
    <div
      className={`w-[110px] rounded-sm border ${styles} px-2.5 py-1.5 text-center text-[10px] ${className}`}
    >
      <div className="font-display leading-tight">{label}</div>
      {sublabel && (
        <div className="mt-0.5 text-[9px] italic text-ink-soft">{sublabel}</div>
      )}
    </div>
  );
}

export function MarginaliaDiagram() {
  return (
    <div className="rounded-sm border border-border bg-card p-6 md:p-8">
      <div className="relative mx-auto max-w-3xl">
        {/* GRID 3x3 — node ditaruh di posisi tertentu */}
        <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-4 md:gap-8">
          {/* Row 1 */}
          <Node label="Wallets" />
          <Node label="DEXs" />
          <Node label="Payment apps" />

          {/* Row 2 */}
          <Node label="Launchpads" />
          <Node label="MARGINALIA" variant="highlight" className="!w-[140px] !py-3" />
          <Node label="Dark Hook pools" />

          {/* Row 3 */}
          <Node label="Dark Wallet" />
          <Node label="Lending" />
          <Node label="$TATA burn" variant="danger" />

          {/* GARIS PENGHUBUNG (SVG overlay) */}
        </div>

        {/* SVG untuk garis dashed antar node */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {/* Garis dari tiap node ke center (50,50) */}
          {[
            [17, 17],   // Wallets
            [50, 17],   // DEXs
            [83, 17],   // Payment
            [17, 50],   // Launchpads
            [83, 50],   // Dark Hook
            [17, 83],   // Dark Wallet
            [50, 83],   // Lending
            [83, 83],   // $TATA burn
          ].map(([x, y], i) => (
            <line
              key={i}
              x1={x}
              y1={y}
              x2={50}
              y2={50}
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="1 1"
              className="text-ink-soft/60"
            />
          ))}
        </svg>
      </div>

      {/* FOOTNOTE */}
      <p className="mt-8 text-center font-display text-sm italic text-ink-soft">
        Every app adds to the same crowd.
      </p>
    </div>
  );
}