import type { LayerStatus } from "./types";

export function LayerStatusBadge({ status }: { status: LayerStatus }) {
  const styles: Record<LayerStatus, string> = {
    Live: "border-emerald-600/50 bg-emerald-500/5 text-emerald-400",
    Building: "border-gold/50 bg-gold/5 text-gold",
    Research: "border-seal/50 bg-seal/5 text-seal",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${styles[status]}`}
    >
      {status === "Live" && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px] shadow-emerald-400" />
      )}
      {status}
    </span>
  );
}