import { PRIVACY_STATS } from "./constants";

export function PrivacyStats() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-center gap-6 rounded-sm border border-border bg-background/40 px-5 py-4 text-sm">
        <StatItem count={PRIVACY_STATS.live} label="layers live" tone="emerald" />
        <Divider />
        <StatItem count={PRIVACY_STATS.building} label="building" tone="gold" />
        <Divider />
        <StatItem count={PRIVACY_STATS.research} label="in research" tone="seal" />
      </div>
    </section>
  );
}

function Divider() {
  return <span className="hidden h-4 w-px bg-border sm:inline-block" />;
}

function StatItem({
  count,
  label,
  tone,
}: {
  count: number;
  label: string;
  tone: "emerald" | "gold" | "seal";
}) {
  const toneClass =
    tone === "emerald"
      ? "text-emerald-400"
      : tone === "gold"
      ? "text-gold"
      : "text-seal";

  return (
    <span className="inline-flex items-baseline gap-2">
      <span className={`font-display text-2xl ${toneClass}`}>{count}</span>
      <span className="text-ink-soft">{label}</span>
    </span>
  );
}