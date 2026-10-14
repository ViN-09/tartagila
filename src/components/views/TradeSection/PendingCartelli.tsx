import { Panel } from "./MarketsPanel";
import type { PendingCartello } from "./types";
import { shortenHash } from "./utils";

type PendingCartelliProps = {
  items: PendingCartello[];
};

export function PendingCartelli({ items }: PendingCartelliProps) {
  return (
    <Panel
      title="Pending cartelli"
      subtitle="Sealed, awaiting the disfida"
    >
      {items.length === 0 ? (
        <p className="text-xs italic text-ink-soft">
          No pending cartelli. Sealed orders appear here as hashes only.
        </p>
      ) : (
        <ul className="space-y-2 font-mono text-xs">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 border-b border-border/40 pb-2 last:border-0"
            >
              <span className="truncate text-ink" title={item.hash}>
                {shortenHash(item.hash, 10, 6)}
              </span>
              <span className="shrink-0 text-ink-soft">{item.sealedAt}</span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}