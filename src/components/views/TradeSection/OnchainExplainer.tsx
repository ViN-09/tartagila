import { Panel } from "./MarketsPanel";

export function OnchainExplainer() {
  return (
    <Panel title="What shows onchain?">
      <p className="text-sm leading-relaxed text-ink-soft">
        Your deposit into the Notary is a public transfer, so it appears on the
        explorer. What's hidden is that the balance is yours once it's inside.
        Shielded transfers move between notes inside the pool, so no public
        ERC-20 transfer appears.
      </p>
    </Panel>
  );
}