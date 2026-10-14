import { NOTARY_ASSETS } from "./constants";
import { Panel } from "./MarketsPanel";

type NotaryPanelProps = {
  isConnected: boolean;
  onConnectClick: () => void;
};

export function NotaryPanel({ isConnected, onConnectClick }: NotaryPanelProps) {
  return (
    <Panel
      title="Notary"
      subtitle="The shielded pool where funds rest"
    >
      <div className="overflow-hidden rounded-sm border border-border">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-card/50 text-left text-ink-soft">
              <th className="px-3 py-2 font-medium">Asset</th>
              <th className="px-3 py-2 text-right font-medium">In wallet</th>
              <th className="px-3 py-2 text-right font-medium">Shielded</th>
            </tr>
          </thead>
          <tbody>
            {NOTARY_ASSETS.map((a) => (
              <tr
                key={a.symbol}
                className="border-b border-border/50 last:border-0"
              >
                <td className="px-3 py-2 font-display text-ink">{a.symbol}</td>
                <td className="px-3 py-2 text-right font-mono text-ink-soft">
                  {isConnected && a.inWallet != null ? a.inWallet : "—"}
                </td>
                <td className="px-3 py-2 text-right font-mono text-ink-soft">
                  {isConnected && a.shielded != null ? a.shielded : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isConnected && (
        <button
          onClick={onConnectClick}
          className="mt-4 w-full rounded-sm border border-maroon bg-maroon/10 px-4 py-2 text-xs font-semibold text-maroon hover:bg-maroon/20"
        >
          Connect a wallet to shield funds
        </button>
      )}

      <p className="mt-3 text-xs text-ink-soft">
        Shielding is one onchain transaction. Funds move into the Notary and
        stop appearing as yours on the chain.
      </p>
    </Panel>
  );
}