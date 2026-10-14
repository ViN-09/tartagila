import { useState } from "react";
import type { Side, TradingTicketState } from "./types";
import { TRADE_ASSETS } from "./constants";
import { SideSelector } from "./SideSelector";
import { AssetSelector } from "./AssetSelector";
import { SizeInput } from "./SizeInput";
import { LimitInput } from "./LimitInput";
import { OrderPreview } from "./OrderPreview";

type TradingTicketProps = {
  isConnected: boolean;
  onConnectClick: () => void;
};

export function TradingTicket({
  isConnected,
  onConnectClick,
}: TradingTicketProps) {
  const [state, setState] = useState<TradingTicketState>({
    side: "buy",
    asset: "NVDA",
    size: "",
    limit: "",
  });

  const update = <K extends keyof TradingTicketState>(
    key: K,
    value: TradingTicketState[K]
  ) => setState((s) => ({ ...s, [key]: value }));

  const activeAsset = TRADE_ASSETS.find((a) => a.symbol === state.asset)!;
  const sizeNum = parseFloat(state.size) || 0;
  const canSeal = isConnected && sizeNum > 0;

  return (
    <div className="rounded-sm border border-border bg-background/40 p-6 md:p-8">
      {/* HEADER */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl tracking-tight">
            Midpoint ticket
          </h2>
          <p className="mt-1 text-sm italic text-ink-soft">Blind by design</p>
        </div>
        <span className="rounded-sm border border-seal px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-seal">
          Sealed
        </span>
      </div>

      {/* FORM */}
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-ink-soft">Side</label>
          <SideSelector
            value={state.side}
            onChange={(side: Side) => update("side", side)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-ink-soft">Asset</label>
          <AssetSelector
            value={state.asset}
            onChange={(symbol) => update("asset", symbol)}
          />
        </div>

        <SizeInput
          value={state.size}
          onChange={(v) => update("size", v)}
          assetSymbol={state.asset}
          midpoint={activeAsset.midpoint}
          side={state.side}
        />

        <LimitInput
          value={state.limit}
          onChange={(v) => update("limit", v)}
        />

        <OrderPreview state={state} />

        {/* CTA */}
        {!isConnected ? (
          <button
            onClick={onConnectClick}
            className="btn-maroon w-full rounded-sm px-6 py-3 text-sm font-semibold"
          >
            Connect wallet to seal
          </button>
        ) : (
          <button
            disabled={!canSeal}
            className={`w-full rounded-sm px-6 py-3 text-sm font-semibold transition ${
              canSeal
                ? "bg-maroon text-white hover:opacity-90"
                : "cursor-not-allowed border border-border bg-card text-ink-soft/50"
            }`}
          >
            {canSeal ? `Seal ${state.side} ${state.asset}` : "Enter a size"}
          </button>
        )}
      </div>
    </div>
  );
}