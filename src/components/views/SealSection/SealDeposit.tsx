import { useState } from "react";

// ─────────────────────────────────────────────
// Data (mock — nanti bisa di-fetch onchain)
// ─────────────────────────────────────────────
type DepositRow = {
  label: string;
  value: string;
  copyable?: boolean;
  link?: string;      // kalau ada, tampilkan ikon ↗
};

const DEPOSIT_ROWS: DepositRow[] = [
  {
    label: "Bounty Wallet",
    value: "0x51A8b456…E43B330F",
    copyable: true,
    link: "#",
  },
  {
    label: "Shield Transaction",
    value: "0x8fa97d07…c422F281",
    copyable: true,
    link: "#",
  },
  {
    label: "Amount",
    value: "100 USDG",
  },
  {
    label: "Note Commitment",
    value: "0x2c8fbfff…e4612c31",
    copyable: true,
  },
  {
    label: "Nullifier",
    value: "0x9c3e6598…aac5d24b",
    copyable: true,
  },
  {
    label: "Sealed At",
    value: "2026-10-08T00:00:00Z (UTC)",
    copyable: true,
  },
];

// ─────────────────────────────────────────────
// Ikon kecil
// ─────────────────────────────────────────────
function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 10V3a1 1 0 011-1h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M5 3H3a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V8M7 2h3v3M10 2L5 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Baris tabel
// ─────────────────────────────────────────────
function DepositRowItem({ row }: { row: DepositRow }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(row.value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="grid grid-cols-[180px_1fr] border-b border-border last:border-b-0">
      <div className="border-r border-border bg-card/40 px-4 py-3 font-display text-sm tracking-wide text-ink">
        {row.label}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="truncate font-mono text-xs text-ink-soft">
          {row.value}
        </span>
        <div className="flex shrink-0 items-center gap-2 text-ink-soft">
          {row.copyable && (
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copy ${row.label}`}
              className="rounded-sm border border-border bg-card p-1.5 transition hover:text-maroon"
            >
              {copied ? (
                <span className="text-[10px] font-semibold">✓</span>
              ) : (
                <IconCopy />
              )}
            </button>
          )}
          {row.link && (
            <a
              href={row.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${row.label}`}
              className="rounded-sm border border-border bg-card p-1.5 transition hover:text-maroon"
            >
              <IconExternal />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Diagram alur
// ─────────────────────────────────────────────
function DepositDiagram() {
  return (
    <div className="rounded-sm border border-border bg-background/40 p-6 md:p-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-2">
        {/* BOUNTY WALLET */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-[160px] rounded-sm border border-border bg-card px-4 py-3">
            <div className="font-display text-sm font-semibold text-ink">
              Bounty wallet
            </div>
            <div className="mt-1 text-[10px] italic text-ink-soft">
              public EOA
            </div>
          </div>
        </div>

        {/* ARROW → */}
        <div className="flex flex-col items-center gap-1 text-ink-soft">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path
              d="M0 6H36M32 2L36 6L32 10"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <span className="text-[9px] italic">shield (public)</span>
        </div>

        {/* NOTARY (MARGINALIA) */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-[10px] uppercase tracking-[0.2em] text-seal">
            Notary · MARGINALIA
          </div>
          <div className="w-[180px] rounded-sm border-2 border-maroon/60 bg-card px-4 py-3">
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-maroon text-[10px] font-bold text-white">
                𝔗
              </span>
              <div className="font-display text-sm font-semibold text-ink">
                100 USDG
              </div>
            </div>
            <div className="mt-1 text-[10px] italic text-ink-soft">
              hidden balance
            </div>
          </div>
        </div>

        {/* ARROW ⇢ (dashed) */}
        <div className="flex flex-col items-center gap-1 text-ink-soft">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path
              d="M0 6H36M32 2L36 6L32 10"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </svg>
          <span className="text-[9px] italic">appears onchain only if spent</span>
        </div>

        {/* NULLIFIER */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-[140px] rounded-sm border border-border bg-card px-4 py-3">
            <div className="font-display text-sm font-semibold text-ink">
              Nullifier
            </div>
            <div className="mt-1 text-[10px] italic text-ink-soft">
              published key
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export function SealDeposit() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-16">
      {/* Kicker */}
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        Liber XXI · The Deposit
      </p>

      {/* Title */}
      <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        You can see it go in.{" "}
        <em className="text-maroon">You can't see it after.</em>
      </h2>

      {/* Intro */}
      <p className="mt-6 max-w-2xl font-display text-lg italic leading-relaxed text-ink-soft">
        That's the point. Once shielded, the balance no longer shows as
        anyone's. What stays public is proof it entered, and proof it hasn't
        been spent.
      </p>

      {/* TABEL */}
      <div className="mt-10 overflow-hidden rounded-sm border border-border bg-background/40">
        {DEPOSIT_ROWS.map((row) => (
          <DepositRowItem key={row.label} row={row} />
        ))}
      </div>

      {/* DIAGRAM */}
      <div className="mt-12">
        <DepositDiagram />
      </div>

      {/* FOOTNOTE */}
      <p className="mt-10 max-w-3xl font-display text-sm italic leading-relaxed text-ink-soft">
        The nullifier is published in advance. It only shows up onchain if the
        note is spent. As long as it hasn't appeared, the seal holds. Anyone
        can check this, any time, without trusting us.
      </p>
    </section>
  );
}