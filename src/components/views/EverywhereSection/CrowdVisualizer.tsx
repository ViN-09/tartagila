import { useState, useMemo } from "react";
import { CROWD_LEVELS } from "./constants";

const DOTS_BY_LEVEL: Record<number, number> = {
  50: 50,
  500: 500,
  5_000: 1_500,
  50_000: 2_500,
};

export function CrowdVisualizer() {
  const [levelIndex, setLevelIndex] = useState(2);
  const level = CROWD_LEVELS[levelIndex]!;      // ⬅️ TAMBAH "!" di sini
  const totalDots = DOTS_BY_LEVEL[level] ?? 100;
  const chance = `1 in ${level.toLocaleString("en-US")}`;

  const dots = useMemo<{ x: number; y: number }[]>(() => {
    const seed = level;
    const out: { x: number; y: number }[] = [];

    for (let i = 0; i < totalDots; i++) {
      const n1 = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
      const n2 = Math.cos(seed * 12.9898 + i * 78.233) * 43758.5453;

      const x = (n1 - Math.floor(n1)) * 100;
      const y = (n2 - Math.floor(n2)) * 100;

      out.push({ x, y });
    }

    return out;
  }, [level, totalDots]);

  const highlightIdx = Math.floor(dots.length / 2);

  return (
    <div className="rounded-sm border border-border bg-card p-4 md:p-6">
      <div className="mb-3 flex items-center justify-between gap-4 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
          <span className="text-ink-soft">You</span>
        </span>
        <span className="text-ink-soft">
          Pool size: <span className="text-ink">{level.toLocaleString("en-US")}</span>
        </span>
      </div>

      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-sm bg-black">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={i === highlightIdx ? 0.6 : 0.35}
              fill={i === highlightIdx ? "#ef4444" : "#f5f0e8"}
              opacity={i === highlightIdx ? 1 : 0.75}
            />
          ))}
        </svg>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-display uppercase tracking-[0.2em] text-ink-soft">
            People in the pool
          </span>
          <span className="font-display text-ink">
            {level.toLocaleString("en-US")}
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={CROWD_LEVELS.length - 1}
          step={1}
          value={levelIndex}
          onChange={(e) => setLevelIndex(parseInt(e.target.value))}
          className="w-full accent-maroon"
        />

        <div className="mt-1 flex items-center justify-between text-[10px] text-ink-soft">
          {CROWD_LEVELS.map((n) => (
            <span key={n}>{n.toLocaleString("en-US")}</span>
          ))}
        </div>
      </div>

      <div className="mt-5 border-l-2 border-maroon pl-4">
        <div className="text-xs text-ink-soft">Chance a random guess finds you:</div>
        <div className="mt-1 font-display text-lg text-ink">{chance}</div>
      </div>
    </div>
  );
}