export type Side = "buy" | "sell";

export type Asset = {
  symbol: string;
  name: string;
  midpoint: number;       // harga midpoint USDG
  matchingInterval: string; // "Every 10s" | "Always 1.00"
  isStable?: boolean;
};

export type NotaryAsset = {
  symbol: string;
  inWallet: number | null;
  shielded: number | null;
};

export type MarketPair = {
  pair: string;
  midpoint: number | string;
  matching: string;
};

export type ActivityItem = {
  id: string;
  type: "settle" | "seal" | "shield";
  label: string;
  timeAgo: string;
};

export type PendingCartello = {
  id: string;
  hash: string;
  side: Side;
  asset: string;
  size: number;
  sealedAt: string;
};

export type VerseReceipt = {
  id: string;
  tradeHash: string;
  asset: string;
  size: number;
  settledAt: string;
};

export type TradingTicketState = {
  side: Side;
  asset: string;
  size: string;
  limit: string;
};