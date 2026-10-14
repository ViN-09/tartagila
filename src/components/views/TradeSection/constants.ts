import type { Asset, MarketPair, NotaryAsset } from "./types";

export const DISFIDA_INTERVAL_SECONDS = 10;
export const DISFIDA_ID = 1284;

export const TRADE_ASSETS: Asset[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    midpoint: 229.25,
    matchingInterval: "Every 10s",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    midpoint: 375.50,
    matchingInterval: "Every 10s",
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    midpoint: 342.98,
    matchingInterval: "Every 10s",
  },
];

export const MARKET_PAIRS: MarketPair[] = [
  { pair: "NVDA / USDG", midpoint: 229.25, matching: "Every 10s" },
  { pair: "TSLA / USDG", midpoint: 375.50, matching: "Every 10s" },
  { pair: "AAPL / USDG", midpoint: 342.98, matching: "Every 10s" },
  { pair: "USDG / USD",  midpoint: 1.00,   matching: "Always 1.00" },
];

export const NOTARY_ASSETS: NotaryAsset[] = [
  { symbol: "USDG", inWallet: null, shielded: null },
  { symbol: "NVDA", inWallet: null, shielded: null },
  { symbol: "TSLA", inWallet: null, shielded: null },
  { symbol: "AAPL", inWallet: null, shielded: null },
];

export const TRADE_STEPS = [
  { n: 1, label: "Connect wallet" },
  { n: 2, label: "Shield funds" },
  { n: 3, label: "Seal an order" },
  { n: 4, label: "Settle at the disfida" },
];

export const MAINNET_LIMITS = [
  "Guarded mainnet pool. Capital at risk.",
  "The MVP matcher can see orders so it can cross them. It never holds funds, and nothing it sees reaches the chain.",
  "If the Chainlink feed goes stale or stock-token markets are closed, matching pauses and funds stay shielded.",
  "Details marked “only you see this” are kept in your browser session. The chain only stores hashes and proofs.",
];