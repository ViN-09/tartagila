import type {
  BreakCondition,
  ClaimStep,
  ClaimEntry,
  SealStatusData,
} from "./types";

export const BOUNTY_AMOUNT_USDG = 100;
export const BOUNTY_NETWORK = "Bounty · Robinhood Chain mainnet";

export const SEAL_STATUS: SealStatusData = {
  isIntact: true,
  // Mock: seal dimulai 6 hari 15 jam lalu
  startedAtIso: new Date(
    Date.now() - (6 * 24 + 15) * 60 * 60 * 1000
  ).toISOString(),
  lastCheckedUtc: "2026-10-14 15:46:03 UTC",
};

export const BREAK_CONDITIONS: BreakCondition[] = [
  {
    numeral: "I",
    title: "Deposit, withdrawal, or transfer failure",
    body: "A shield, unshield or shielded transfer fails in a way you can reproduce on mainnet.",
  },
  {
    numeral: "II",
    title: "Trapped capital",
    body: "Funds get stuck. A user can't withdraw their own shielded balance.",
  },
  {
    numeral: "III",
    title: "Onchain balance deanonymization",
    body: "A balance is linked to its owner using onchain data alone, beyond what's disclosed on /privacy as still building.",
  },
  {
    numeral: "IV",
    title: "Soundness or verification breach",
    body: "A forged proof is accepted, or a note is spent twice.",
  },
  {
    numeral: "V",
    title: "Disproved truth",
    body: "Any claim on this site is false and you can show it onchain.",
  },
];

export const BREAK_CONDITIONS_FOOTNOTE =
  "Layers still marked “Building” on /privacy are known gaps and don't count.";

export const CLAIM_STEPS: ClaimStep[] = [
  {
    numeral: "I",
    title: "Responsible disclosure",
    body: "Report privately. DM us on X or email us. Never post a working exploit publicly.",
  },
  {
    numeral: "II",
    title: "Verifiable evidence",
    body: "Show the proof. Include transaction hashes on Robinhood Chain mainnet and the exact steps to reproduce.",
  },
  {
    numeral: "III",
    title: "Containment",
    body: "Don't drain anything. Demonstrate the issue with the smallest possible amount of your own funds. Do not take or move funds that aren't yours, including the bounty note.",
  },
  {
    numeral: "IV",
    title: "Priority",
    body: "First valid report wins. We verify, then pay 100 USDG to the address you choose.",
  },
  {
    numeral: "V",
    title: "Transparency",
    body: "We publish the result. Every claim goes into the log below, valid or not.",
  },
];

export const CLAIM_ENTRIES: ClaimEntry[] = [
  // Kosong — belum ada klaim valid
];

export const CLAIM_DISCLAIMER =
  "Good-faith research that follows these rules won't be treated as an attack. Taking or moving funds that aren't yours is not research and is not covered. The bounty is paid by the team after verification; it is not something to be taken from the pool directly. One payout per issue.";