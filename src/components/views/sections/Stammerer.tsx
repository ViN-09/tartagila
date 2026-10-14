import { Chapter } from "./Chapter";

export function Stammerer() {
  return (
    <Chapter id="stammerer" kicker="Chapter I · 1512" title="Brescia. The Stammerer.">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        <p className="drop-cap">
          War cut a boy across the jaw. He kept the name they gave him.
          Tartaglia.
        </p>
        <p className="font-display text-2xl italic text-ink">
          He spoke little. He proved everything.
        </p>
        <p>
          Shielded notes, hidden orders, a proof that balances. The chain learns
          only that a valid trade happened. Never who. Never which side. Never
          how much.
        </p>
      </div>
    </Chapter>
  );
}