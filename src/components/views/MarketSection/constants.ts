import type { Stock, LiveStock } from "./types";

export const LIVE_STOCKS: LiveStock[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 138.25,
    changePercent: 2.84,
    shieldedAmount: 14850,
    shieldedValueUsd: 2.05,
    volume24hUsd: 38.42,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 227.65,
    changePercent: 0.92,
    shieldedAmount: 11300,
    shieldedValueUsd: 2.57,
    volume24hUsd: 24.68,
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 258.40,
    changePercent: -1.15,
    shieldedAmount: 8420,
    shieldedValueUsd: 2.18,
    volume24hUsd: 29.15,
  },
];

export const ALL_STOCKS: Stock[] = [
  { rank: 1,  symbol: "NVDA",      name: "NVIDIA Corporation",                 type: "STOCK",   price: 138.25, changePercent:  2.84, volume24hUsd: 38.42, marketValueUsd: 3_390_000_000_000, status: "Live" },
  { rank: 2,  symbol: "AAPL",      name: "Apple Inc.",                         type: "STOCK",   price: 227.65, changePercent:  0.92, volume24hUsd: 24.68, marketValueUsd: 3_460_000_000_000, status: "Live" },
  { rank: 3,  symbol: "TSLA",      name: "Tesla, Inc.",                        type: "STOCK",   price: 258.40, changePercent: -1.15, volume24hUsd: 29.15, marketValueUsd:   824_000_000_000, status: "Live" },
  { rank: 4,  symbol: "MSFT",      name: "Microsoft Corporation",              type: "STOCK",   price: 418.10, changePercent:  1.45, volume24hUsd: 21.84, marketValueUsd: 3_110_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 5,  symbol: "SPY",       name: "SPDR S&P 500 ETF Trust",             type: "ETF",     price: 574.90, changePercent:  0.65, volume24hUsd: 25.40, marketValueUsd:   580_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 6,  symbol: "AMZN",      name: "Amazon.com, Inc.",                   type: "STOCK",   price: 186.40, changePercent:  1.78, volume24hUsd: 19.52, marketValueUsd: 1_940_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 7,  symbol: "QQQ",       name: "Invesco QQQ Trust",                  type: "ETF",     price: 488.35, changePercent:  0.88, volume24hUsd: 23.10, marketValueUsd:   285_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 8,  symbol: "META",      name: "Meta Platforms, Inc.",               type: "STOCK",   price: 584.20, changePercent:  3.12, volume24hUsd: 18.94, marketValueUsd: 1_480_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 9,  symbol: "GOOGL",     name: "Alphabet Inc. (Class A)",            type: "STOCK",   price: 166.85, changePercent: -0.42, volume24hUsd: 16.73, marketValueUsd: 2_070_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 10, symbol: "AMD",       name: "Advanced Micro Devices, Inc.",       type: "STOCK",   price: 154.60, changePercent:  4.25, volume24hUsd: 15.40, marketValueUsd:   250_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 11, symbol: "COIN",      name: "Coinbase Global, Inc.",              type: "STOCK",   price: 215.30, changePercent:  6.85, volume24hUsd: 22.15, marketValueUsd:    52_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 12, symbol: "NFLX",      name: "Netflix, Inc.",                      type: "STOCK",   price: 712.80, changePercent:  1.15, volume24hUsd: 12.65, marketValueUsd:   306_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 13, symbol: "AVGO",      name: "Broadcom Inc.",                      type: "STOCK",   price: 180.25, changePercent:  2.15, volume24hUsd: 11.80, marketValueUsd:   845_000_000_000, status: "Not listed" },
  { rank: 14, symbol: "MSTR",      name: "MicroStrategy Incorporated",         type: "STOCK",   price: 212.50, changePercent:  8.92, volume24hUsd: 21.30, marketValueUsd:    43_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 15, symbol: "PLTR",      name: "Palantir Technologies Inc.",         type: "STOCK",   price:  43.15, changePercent:  5.40, volume24hUsd: 17.80, marketValueUsd:    96_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 16, symbol: "BABA",      name: "Alibaba Group Holding Limited",      type: "STOCK",   price:  99.40, changePercent:  3.45, volume24hUsd: 11.20, marketValueUsd:   238_000_000_000, status: "Next wave", wave: "Wave 1" },
  { rank: 17, symbol: "ARM",       name: "Arm Holdings plc",                   type: "STOCK",   price: 142.10, changePercent:  3.65, volume24hUsd:  9.20, marketValueUsd:   148_000_000_000, status: "Not listed" },
  { rank: 18, symbol: "SMCI",      name: "Super Micro Computer, Inc.",         type: "STOCK",   price:  48.70, changePercent: -3.20, volume24hUsd: 14.90, marketValueUsd:    28_000_000_000, status: "Not listed" },
  { rank: 19, symbol: "UBER",      name: "Uber Technologies, Inc.",            type: "STOCK",   price:  76.50, changePercent:  1.35, volume24hUsd:  7.80, marketValueUsd:   159_000_000_000, status: "Not listed" },
  { rank: 20, symbol: "DIS",       name: "The Walt Disney Company",            type: "STOCK",   price:  95.30, changePercent:  0.42, volume24hUsd:  7.40, marketValueUsd:   173_000_000_000, status: "Not listed" },
  { rank: 21, symbol: "INTC",      name: "Intel Corporation",                  type: "STOCK",   price:  22.85, changePercent: -0.65, volume24hUsd:  8.70, marketValueUsd:    98_000_000_000, status: "Not listed" },
  { rank: 22, symbol: "HOOD",      name: "Robinhood Markets, Inc.",            type: "STOCK",   price:  26.40, changePercent:  4.80, volume24hUsd: 12.40, marketValueUsd:    23_000_000_000, status: "Not listed" },
  { rank: 23, symbol: "SPACEX",    name: "Space Exploration Technologies Corp.", type: "PRIVATE", price: 112.50, changePercent: 0.00, volume24hUsd:  0.89, marketValueUsd: 210_000_000_000, status: "Not eligible", notEligibleReason: "Private company token without public oracle pricing." },
  { rank: 24, symbol: "OPENAI",    name: "OpenAI Inc. (Tokenized Private Equity)", type: "PRIVATE", price: 157.00, changePercent: 0.00, volume24hUsd: 1.20, marketValueUsd: 157_000_000_000, status: "Not eligible", notEligibleReason: "Private company token without public oracle pricing." },
  { rank: 25, symbol: "CRWD",      name: "CrowdStrike Holdings, Inc.",         type: "STOCK",   price: 312.40, changePercent:  2.70, volume24hUsd:  6.90, marketValueUsd:    76_000_000_000, status: "Not listed" },
  { rank: 26, symbol: "STRIPE",    name: "Stripe, Inc. (Tokenized Private)",   type: "PRIVATE", price:  32.50, changePercent:  0.00, volume24hUsd:  0.31, marketValueUsd:    70_000_000_000, status: "Not eligible", notEligibleReason: "Private company token without public oracle pricing." },
  { rank: 27, symbol: "ANTHROPIC", name: "Anthropic PBC (Tokenized Private)",  type: "PRIVATE", price:  45.00, changePercent:  0.00, volume24hUsd:  0.42, marketValueUsd:    40_000_000_000, status: "Not eligible", notEligibleReason: "Private company token without public oracle pricing." },
];

export const DARK_CRITERIA = [
  {
    numeral: "I",
    title: "Official sources only",
    body: "Token contract and Chainlink Total Return Value feed must be verified directly from official Robinhood and Chainlink documentation. No third-party wrappers or unofficial proxies.",
  },
  {
    numeral: "II",
    title: "Biggest first",
    body: "Listing waves are ranked by 30-day onchain volume (60%) and onchain market value (40%) on Robinhood Chain. Liquidity depth comes first.",
  },
  {
    numeral: "III",
    title: "Safe pricing",
    body: "Every stock enforces its own staleness threshold and automatically pauses matching when the underlying stock market is closed or the feed is stale.",
  },
  {
    numeral: "IV",
    title: "Splits handled",
    body: "Corporate actions and token uiMultiplier updates pause trading automatically until oracle prices and note commitments realign.",
  },
  {
    numeral: "V",
    title: "Caps first",
    body: "New listings begin with conservative deposit and pool caps that scale upward through timelocked governance after proven incident-free trading.",
  },
  {
    numeral: "VI",
    title: "Public companies only, for now",
    body: "Private-company tokens (e.g. OpenAI, SpaceX) are excluded from Waves 1 & 2 until secondary market depth provides verifiable pricing feeds.",
  },
];