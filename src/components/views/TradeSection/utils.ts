import type { TradingTicketState } from "./types";

/**
 * Mock hash generator — deterministic dari state.
 * Di produksi, ini harus pakai Poseidon hash beneran.
 */
export function mockOrderCommitment(state: TradingTicketState): string {
  const seed = `${state.side}|${state.asset}|${state.size}|${state.limit}`;
  let hash = 0n;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31n + BigInt(seed.charCodeAt(i))) & ((1n << 256n) - 1n);
  }
  return "0x" + hash.toString(16).padStart(64, "0");
}

export function formatUsd(n: number, digits = 2): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function shortenHash(hash: string, head = 10, tail = 6): string {
  if (hash.length <= head + tail + 3) return hash;
  return `${hash.slice(0, head)}…${hash.slice(-tail)}`;
}