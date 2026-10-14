import { Panel } from "./MarketsPanel";
import { MAINNET_LIMITS } from "./constants";

export function MainnetLimits() {
  return (
    <Panel title="Mainnet limits">
      <ul className="list-disc space-y-2 pl-5 text-xs text-ink-soft">
        {MAINNET_LIMITS.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </Panel>
  );
}