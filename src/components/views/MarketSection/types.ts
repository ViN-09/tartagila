export type StockStatus = "Live" | "Next wave" | "Not listed" | "Not eligible";

export type StockType = "STOCK" | "ETF" | "PRIVATE";

export type Stock = {
  rank: number;
  symbol: string;
  name: string;
  type: StockType;
  price: number;
  changePercent: number;
  volume24hUsd: number;       // dalam juta
  marketValueUsd: number;     // dalam miliar/triliun — di-format helper
  status: StockStatus;
  wave?: string;              // misal "Wave 1"
  notEligibleReason?: string;
};

export type LiveStock = {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  shieldedAmount: number;
  shieldedValueUsd: number;   // dalam juta
  volume24hUsd: number;       // dalam juta
};