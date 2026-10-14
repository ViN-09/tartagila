import { Panel } from "./MarketsPanel";
import type { ActivityItem } from "./types";

type ActivityPanelProps = {
  items: ActivityItem[];
};

export function ActivityPanel({ items }: ActivityPanelProps) {
  return (
    <Panel title="Activity" subtitle="Settles every 10s">
      {items.length === 0 ? (
        <p className="text-xs italic text-ink-soft">
          No activity yet. Actions settle at each disfida, every 10s.
        </p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-3 border-b border-border/40 pb-2 text-xs last:border-0"
            >
              <div>
                <div className="text-ink">{item.label}</div>
                <div className="mt-0.5 text-ink-soft">{item.type}</div>
              </div>
              <span className="shrink-0 text-ink-soft">{item.timeAgo}</span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}