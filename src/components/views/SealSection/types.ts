export type BreakCondition = {
  numeral: string;
  title: string;
  body: string;
};

export type ClaimStep = {
  numeral: string;
  title: string;
  body: string;
};

export type ClaimEntry = {
  id: string;
  submittedAt: string;
  status: "valid" | "invalid" | "pending";
  summary: string;
  payout?: number;
  txHash?: string;
};

export type SealStatusData = {
  isIntact: boolean;
  startedAtIso: string;      // tanggal seal di-seal (untuk hitung durasi)
  lastCheckedUtc: string;
};