export { SealHero } from "./SealHero";
export { SealStatus } from "./SealStatus";
export { SealDeposit } from "./SealDeposit";           // ⬅️ TAMBAH
export { SealExplainer } from "./SealExplainer";
export { SealBreakConditions } from "./SealBreakConditions";
export { SealHowToClaim } from "./SealHowToClaim";
export { SealClaimsLog } from "./SealClaimsLog";
export { SealCta } from "./SealCta";

export type {
  BreakCondition,
  ClaimStep,
  ClaimEntry,
  SealStatusData,
} from "./types";

export {
  BOUNTY_AMOUNT_USDG,
  BOUNTY_NETWORK,
  SEAL_STATUS,
  BREAK_CONDITIONS,
  BREAK_CONDITIONS_FOOTNOTE,
  CLAIM_STEPS,
  CLAIM_ENTRIES,
  CLAIM_DISCLAIMER,
} from "./constants";

export { formatDuration, formatUtc, shortenHash } from "./utils";