import { useState } from "react";

const CONTRACT = "0x96003d7d4f6b8d7466ce423fcecc916f7f901c90";

export function Hero() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-6xl leading-[1.05] tracking-tight md:text-7xl">
            Speak little.
            <br />
            <em className="pl-10">Prove everything.</em>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            A zero-knowledge dark pool for tokenized stocks on Robinhood Chain.
            Place orders no one can front-run. Your side, size and limit stay
            sealed.
          </p>
          <p className="mt-4 text-lg text-ink-soft">
            The chain sees only proof that a fair trade settled.
          </p>
          <p className="mt-8 border-y border-border py-4 font-display italic text-ink">
            orderCm = Poseidon(side, asset, maxQty, minFill, limit, nullifier,
            salt)
          </p>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(CONTRACT).catch(() => {});
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-ink-soft hover:text-ink"
          >
            <span className="font-display italic">$TATA</span>
            <span className="font-mono text-xs">
              {CONTRACT.slice(0, 10)}…{CONTRACT.slice(-4)}
            </span>
            <span className="text-xs">{copied ? "Copied" : "⧉"}</span>
          </button>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#trade" className="btn-maroon rounded-sm px-5 py-2.5">
              Open trading UI
            </a>
            <a href="#settlement" className="btn-outline rounded-sm px-5 py-2.5">
              How settlement works
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="oval-frame flex h-64 w-full max-w-md flex-col items-center justify-center md:h-80">
            <span className="font-display text-5xl italic md:text-6xl">
              x³ + px = q
            </span>
            <span className="mt-4 font-display text-sm italic text-ink-soft">
              The depressed cubic. Solved in secret, 1535.
            </span>
          </div>
        </div>
      </div>

      <div
        id="chapters"
        className="mt-20 grid grid-cols-2 gap-6 border-t border-ink pt-8 md:grid-cols-4"
      >
        {[
          ["1512", "Brescia · The Stammerer", "#stammerer"],
          ["1535", "Venice · The Duel", "#duel"],
          ["1539", "Milan · The Verse", "#verse"],
          ["1545", "Nuremberg · The Breach", "#breach"],
        ].map(([year, label, href]) => (
          <a key={year} href={href} className="group">
            <div className="font-display text-3xl group-hover:text-maroon">
              {year}
            </div>
            <div className="mt-1 text-sm text-ink-soft">{label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}