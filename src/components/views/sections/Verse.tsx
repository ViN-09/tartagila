import { useState } from "react";
import { Chapter } from "./Chapter";

export function Verse() {
  const [x, setX] = useState(0.908);
  const p = 1.6;
  const q = 2.2;
  const delta = (q / 2) ** 2 + (p / 3) ** 3;
  const u = Math.cbrt(q / 2 + Math.sqrt(delta));
  const v = Math.cbrt(-q / 2 + Math.sqrt(delta));
  const root = u - v;

  return (
    <Chapter id="verse" kicker="Chapter III · 1539" title="Milan. The Verse.">
      <blockquote className="max-w-2xl border-l-2 border-maroon pl-6 font-display text-2xl italic leading-relaxed text-ink">
        “When the cube and the things together are equal to some discrete
        number, find two other numbers differing by it.”
      </blockquote>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        The solution was never stated plainly. It was encoded as a poem. Two
        hidden numbers, <em>u</em> and <em>v</em>, combine to produce exactly
        one public root. Move the challenge and watch the duel resolve.
      </p>

      <div className="seal-card mt-10 rounded-sm p-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-display text-2xl italic">
            x = {x.toFixed(3)}
          </span>
          <input
            type="range"
            min={0.5}
            max={1.3}
            step={0.001}
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full max-w-xs accent-[oklch(0.42_0.11_30)]"
            aria-label="Challenge value"
          />
        </div>
        <p className="mt-6 font-display text-xl italic">
          x = ∛(q/2 + √Δ) − ∛(−q/2 + √Δ),&nbsp;&nbsp;Δ = (q/2)² + (p/3)³
        </p>
        <div className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["p", p.toFixed(2)],
            ["q", q.toFixed(2)],
            ["hidden u (buyer)", u.toFixed(4)],
            ["hidden v (seller)", v.toFixed(4)],
            ["public x = u − v", root.toFixed(4)],
          ].map(([label, val]) => (
            <div key={label}>
              <div className="text-sm italic text-ink-soft">{label}</div>
              <div className="font-display text-2xl">{val}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm italic text-ink-soft">
          Δ = {delta.toFixed(4)} · check: x³ + px ={" "}
          {(root ** 3 + p * root).toFixed(4)} ≈ q = {q.toFixed(2)}
        </p>
      </div>

      <p className="mt-8 max-w-2xl font-display text-2xl italic text-ink">
        Two hidden numbers. One public truth.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Buyer and seller orders are the two hidden numbers, private witnesses in
        the settlement circuit. The single public fact is settlement at the
        oracle midpoint: price equals midpoint, and <em>minFill</em> ≤{" "}
        <em>qty</em> ≤ <em>maxQty</em> for both sides.
      </p>
    </Chapter>
  );
}