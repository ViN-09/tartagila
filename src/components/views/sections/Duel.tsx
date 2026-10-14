import { Chapter } from "./Chapter";

export function Duel() {
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