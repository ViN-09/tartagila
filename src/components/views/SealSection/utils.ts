/**
 * Hitung durasi "unbroken" dari timestamp.
 * Return format: "6 days, 15 hours"
 */
export function formatDuration(fromIso: string, now: Date = new Date()): string {
  const from = new Date(fromIso);
  const diffMs = now.getTime() - from.getTime();
  if (diffMs < 0) return "0 hours";

  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  if (days === 0) return `${hours} hour${hours === 1 ? "" : "s"}`;
  return `${days} day${days === 1 ? "" : "s"}, ${hours} hour${hours === 1 ? "" : "s"}`;
}

/**
 * Format tanggal jadi string UTC yang enak dibaca.
 * Contoh: "2026-10-14 15:46:03 UTC"
 */
export function formatUtc(d: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ` +
    `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
  );
}

/**
 * Shorten hash biar gak kepanjangan di UI.
 * Contoh: "0x069734c1a75b24f07becabb3b390cf1ab99764c5f5fb6d34f09e1d07b3aba49e"
 *      → "0x069734c1a7…aba49e"
 */
export function shortenHash(hash: string, head = 10, tail = 6): string {
  if (hash.length <= head + tail + 3) return hash;
  return `${hash.slice(0, head)}…${hash.slice(-tail)}`;
}