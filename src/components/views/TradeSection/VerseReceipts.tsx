import { Panel } from "./MarketsPanel";
import type { VerseReceipt } from "./types";
import { shortenHash } from "./utils";

type VerseReceiptsProps = {
  items: VerseReceipt[];
};

export function VerseReceipts({ items }: VerseReceiptsProps) {
  return (
    <Panel title="Verse receipts" subtitle="Proofs of settled trades">
      {items.length === 0 ? (
        <p className="text-xs italic text-ink-soft">
          Verse receipts will appear here after your first settlement, each with
          its conservation and screening proofs.
        </p>
      ) : (
        <ul className="space-y-2 text-xs">
          {items.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between gap-3 border-b border-border/40 pb-2 last:border-0"
            >
              <span className="font-mono text-ink">
                {shortenHash(r.tradeHash, 10, 6)}
              </span>
              <span className="text-ink-soft">
                {r.asset} · {r.size}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}