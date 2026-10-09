import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tartaglia — Speak little. Prove everything." },
      {
        name: "description",
        content:
          "A zero-knowledge dark pool for tokenized stocks. Place orders no one can front-run. Your side, size and limit stay sealed.",
      },
      { property: "og:title", content: "Tartaglia — Speak little. Prove everything." },
      {
        property: "og:description",
        content:
          "A zero-knowledge dark pool for tokenized stocks. The chain sees only proof that a fair trade settled.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CONTRACT = "0x96003d7d4f6b8d7466ce423fcecc916f7f901c90";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight">
            <span className="text-gold">𝔗</span>artaglia
          </span>
          <span className="hidden rounded-full border border-seal px-2.5 py-0.5 text-xs text-seal sm:inline">
            Mainnet
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#chapters" className="hover:text-maroon">Chapters</a>
          <a href="#settlement" className="hover:text-maroon">Settlement</a>
          <a href="#verse" className="hover:text-maroon">Verse</a>
          <a href="#vocabulary" className="hover:text-maroon">Vocabulary</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#trade"
            className="btn-outline hidden rounded-sm px-4 py-2 text-sm sm:inline-block"
          >
            Open trading UI
          </a>
          <button className="btn-maroon rounded-sm px-4 py-2 text-sm">
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
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

      <div id="chapters" className="mt-20 grid grid-cols-2 gap-6 border-t border-ink pt-8 md:grid-cols-4">
        {[
          ["1512", "Brescia · The Stammerer", "#stammerer"],
          ["1535", "Venice · The Duel", "#duel"],
          ["1539", "Milan · The Verse", "#verse"],
          ["1545", "Nuremberg · The Breach", "#breach"],
        ].map(([year, label, href]) => (
          <a key={year} href={href} className="group">
            <div className="font-display text-3xl group-hover:text-maroon">{year}</div>
            <div className="mt-1 text-sm text-ink-soft">{label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Chapter({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="chapter-rule mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Stammerer() {
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

function Duel() {
  return (
    <Chapter id="duel" kicker="Chapter II · 1535" title="Venice. The Duel.">
      <div className="max-w-2xl text-lg leading-relaxed text-ink-soft">
        <p>
          Rivals staked money with a notary and traded sealed challenge letters,
          the <em>cartelli</em>. Each side lodged its stake before a witness.
          The letters stayed sealed until the round closed. Answers were public.
          Method stayed secret.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {["Cartello u", "Cartello v"].map((name) => (
          <div key={name} className="seal-card rounded-sm p-8">
            <div className="flex items-start justify-between">
              <h3 className="font-display text-2xl">
                {name.split(" ")[0]} <em>{name.split(" ")[1]}</em>
              </h3>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold font-display text-xl text-maroon">
                𝔗
              </span>
            </div>
            <p className="mt-4 text-ink-soft">
              Side sealed. Asset sealed. Size sealed.
            </p>
            <button className="btn-outline mt-6 rounded-sm px-4 py-1.5 text-sm">
              Verify proof
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {[
          ["Letter", "The order commitment."],
          ["Notary", "The MARGINALIA pool, holding both stakes."],
          ["Disfida", "The batch, crossed every N seconds at the Chainlink midpoint."],
        ].map(([term, def]) => (
          <div key={term}>
            <div className="font-display text-xl italic">{term}</div>
            <p className="mt-2 text-ink-soft">{def}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm italic text-ink-soft">
        Example duel: buy up to 500 NVDA at midpoint, minimum fill 50.
      </p>
    </Chapter>
  );
}

function Verse() {
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
          <span className="font-display text-2xl italic">x = {x.toFixed(3)}</span>
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

function Breach() {
  return (
    <Chapter id="breach" kicker="Chapter IV · 1545" title="Nuremberg. The Breach.">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        <p className="font-display text-2xl italic text-ink">
          An oath was the only protection of a secret. It broke.
        </p>
        <p className="font-display text-2xl italic text-maroon">
          No oath. Only proof.
        </p>
        <p>
          Tartaglia exists to stop front-running, MEV and order leakage. The
          chain will never print your order.
        </p>
      </div>
      <div className="seal-card mt-10 max-w-2xl rounded-sm p-8">
        <h3 className="font-display text-2xl">Trust and limits</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-soft">
          <li><strong className="text-ink">Mainnet live.</strong> Guarded pool with real assets.</li>
          <li>
            <strong className="text-ink">The MVP matcher can see orders</strong>{" "}
            so it can cross them. It never holds funds, and nothing it sees
            reaches the chain.
          </li>
          <li>
            <strong className="text-ink">Safety pauses.</strong> If the oracle
            goes stale or stock-token markets are closed, matching pauses and
            funds stay shielded.
          </li>
          <li>
            <strong className="text-ink">Compliance first.</strong> Deposits are
            screened against an approved set from an Association Set Provider
            (ASP).
          </li>
        </ul>
      </div>
    </Chapter>
  );
}

const ROMAN = ["I", "II", "III", "IV", "V"];

function Settlement() {
  const proofs: Array<[string, string]> = [
    ["Existence", "Both orders are backed by real, unspent funds in the pool."],
    [
      "Fair price",
      "Every match fills at the signed Chainlink midpoint, verified onchain. If the feed is stale or markets are closed, the round pauses.",
    ],
    ["Respect", "Each side fills within its sealed bounds: minFill ≤ qty ≤ maxQty."],
    ["Conservation", "Per asset, inputs equal outputs plus fee."],
    ["Clean funds", "Both deposits pass ASP screening."],
  ];
  const axioms: Array<[string, string]> = [
    ["Soundness", "No trade settles unless the books balance."],
    ["Silence", "An order reveals nothing onchain: before, during, or after the match."],
    ["Fairness", "Everyone in a round fills at the same midpoint."],
  ];
  return (
    <Chapter id="settlement" kicker="The Ledger" title="The settlement, entered in the ledger.">
      <p className="max-w-2xl text-lg text-ink-soft">
        For every match, the Verse proves the following five things.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proofs.map(([title, body], i) => (
          <div key={title} className="seal-card rounded-sm p-6">
            <div className="font-display text-sm text-seal">{ROMAN[i]}</div>
            <h3 className="mt-2 font-display text-xl">{title}</h3>
            <p className="mt-2 text-ink-soft">{body}</p>
          </div>
        ))}
        <div className="oval-frame flex items-center justify-center p-6">
          <span className="font-display text-xl italic">Σin = Σout + fee, per asset</span>
        </div>
      </div>

      <h3 className="mt-16 font-display text-3xl">Three axioms</h3>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {axioms.map(([title, body], i) => (
          <div key={title} className="border-t border-ink pt-4">
            <div className="font-display text-sm text-seal">{ROMAN[i]}</div>
            <h4 className="mt-2 font-display text-xl">{title}</h4>
            <p className="mt-2 text-ink-soft">{body}</p>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

function Vocabulary() {
  const terms: Array<[string, React.ReactNode]> = [
    [
      "Cartello",
      <>
        The sealed order.{" "}
        <code className="text-sm">orderCm = Poseidon(side, asset, maxQty, minFill, limit, nullifier, salt)</code>
      </>,
    ],
    ["Disfida", "One batch round, every N seconds, crossed at the midpoint."],
    ["Notary", "The MARGINALIA shielded pool where funds rest."],
    ["Verse", "The proof. Checked by all, read by none. Built with Noir and UltraHonk."],
    ["Midpoint", "The single public price, from Chainlink Data Streams."],
  ];
  return (
    <Chapter id="vocabulary" kicker="Reference" title="Vocabulary of the house.">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {terms.map(([term, def]) => (
          <div key={term} className="border-t border-border pt-4">
            <div className="font-display text-xl italic">{term}</div>
            <p className="mt-2 text-ink-soft">{def}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
        Assets at launch: USDG, NVDA, TSLA, AAPL. Midpoint-only orders. Batch
        cadence N seconds. No customers, no prices, no benchmarks are claimed.
        The mechanism is the demonstration.
      </p>
    </Chapter>
  );
}

function Cta() {
  return (
    <section id="trade" className="chapter-rule mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      <h2 className="font-display text-4xl tracking-tight md:text-5xl">
        The disfida is open. <em>Take your side.</em>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
        Assets at launch: USDG, NVDA, TSLA, AAPL. Seal an order, take a side,
        and watch it settle without revealing a thing.
      </p>
      <a href="#top" className="btn-maroon mt-8 inline-block rounded-sm px-6 py-3">
        Open trading UI
      </a>
      <p className="mt-6 text-sm italic text-ink-soft">
        Mainnet live. Capital at risk.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-soft">
        <span className="font-display text-lg text-ink">
          <span className="text-gold">𝔗</span>artaglia
        </span>
        <span className="italic">Speak little. Prove everything.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stammerer />
        <Duel />
        <Verse />
        <Breach />
        <Settlement />
        <Vocabulary />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
