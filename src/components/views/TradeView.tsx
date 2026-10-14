import { useState } from "react";
import {
  TradeStatusBar,
  TradeHero,
  TradingTicket,
  MarketsPanel,
  NotaryPanel,
  OnchainExplainer,
  ActivityPanel,
  PendingCartelli,
  VerseReceipts,
  MainnetLimits,
} from "./TradeSection";
import type {
  ActivityItem,
  PendingCartello,
  VerseReceipt,
} from "./TradeSection";

export function TradeView() {
  // ─────────────────────────────────────────
  // Mock state — bisa di-swap nanti dengan wallet beneran
  // ─────────────────────────────────────────
  const [isConnected, setIsConnected] = useState(false);

  // Empty states dulu — bisa diisi nanti dari API/backend
  const [activity] = useState<ActivityItem[]>([]);
  const [pending] = useState<PendingCartello[]>([]);
  const [receipts] = useState<VerseReceipt[]>([]);

  const handleConnect = () => {
    // Toggle buat testing — nanti diganti dengan wallet beneran
    setIsConnected((v) => !v);
  };

  return (
    <div className="min-h-screen">
      {/* ── 1. STATUS BAR ── */}
      <TradeStatusBar isConnected={isConnected} />

      {/* ── 2. HERO ── */}
      <TradeHero />

      {/* ── 3. MAIN GRID ── */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1.2fr_1fr]">
        {/* KIRI — Trading Ticket (form) */}
        <div>
          <TradingTicket
            isConnected={isConnected}
            onConnectClick={handleConnect}
          />
        </div>

        {/* KANAN — Status Panels */}
        <div className="space-y-6">
          <MarketsPanel />
          <NotaryPanel
            isConnected={isConnected}
            onConnectClick={handleConnect}
          />
          <OnchainExplainer />
          <ActivityPanel items={activity} />
          <PendingCartelli items={pending} />
          <VerseReceipts items={receipts} />
          <MainnetLimits />
        </div>
      </div>
    </div>
  );
}