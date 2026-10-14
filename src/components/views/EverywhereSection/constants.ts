import type { Integration, FoundationStep, FeedStep } from "./types";

export const VISION_TAG = "Vision · Robinhood Chain";

export const VISION_NOTE =
  "Vision page. Nothing here is live yet except the shielded pool and sealed orders.";

// ─────────────────────────────────────────────
// Privacy Law — sekarang pakai slider
// ─────────────────────────────────────────────
export const PRIVACY_LAW = {
  kicker: "Liber XVI · The Crowd",
  title: "Privacy has one law.",
  law: "The bigger the crowd, the harder you are to find.",
  body1:
    "A shielded pool hides you among everyone else inside it. A pool of 50 hides no one: one deposit, one withdrawal, and anyone can match them. A pool of 50,000 hides everyone.",
  body2:
    "Privacy pools split across many apps make every user weaker. One shared pool makes every user stronger.",
  footnote:
    "Simplified illustration. Real privacy also depends on timing, amounts and addresses. See the Privacy Stack.",
};

// Level slider — 4 pilihan preset
export const CROWD_LEVELS = [50, 500, 5_000, 50_000] as const;

// ─────────────────────────────────────────────
// Integrations
// ─────────────────────────────────────────────
export const INTEGRATIONS: Integration[] = [
  {
    numeral: "I",
    title: "Shield SDK",
    tag: "Vision",
    whatItIs:
      'One library any wallet, DEX, payment app or launchpad on Robinhood Chain can plug in. Adds "Shield" and "Send privately" in a few lines of code.',
    whyItMatters:
      "Every app that integrates deposits into the same shielded pool. Every new user makes every existing user more private.",
  },
  {
    numeral: "II",
    title: "Dark Hook for everyone",
    tag: "Vision",
    whatItIs:
      "Any project can open a Uniswap v4 pool with Dark Hook for its own pair. Sealed orders cross at the midpoint; only the remainder touches the AMM.",
    whyItMatters:
      "More pools, more private volume, one shared settlement layer. 100% of hook protocol fees buy back and burn $TATA.",
  },
  {
    numeral: "III",
    title: "Dark Wallet",
    tag: "Vision",
    whatItIs:
      "A wallet where your balance is shielded by default. Stealth addresses and private transfers built in.",
    whyItMatters:
      "Privacy stops being something you opt into and becomes the starting point.",
  },
  {
    numeral: "IV",
    title: "Private lending",
    tag: "Vision",
    whatItIs:
      "Borrow USDG against shielded tokenized stocks without revealing your position.",
    whyItMatters:
      "Real holdings, real credit, no public liquidation target painted on your back.",
  },
];

// ─────────────────────────────────────────────
// Foundations
// ─────────────────────────────────────────────
export const FOUNDATIONS: FoundationStep[] = [
  {
    numeral: "I.",
    body: "Finish the Privacy Stack — relayer, shielded transfers, stealth addresses, amount privacy.",
    link: { label: "See the Privacy Stack →", target: "privacy" },
  },
  {
    numeral: "II.",
    body: "Shield SDK — open the pool to every app on Robinhood Chain.",
  },
  {
    numeral: "III.",
    body: "Dark Hook for everyone — open pool creation to any project.",
  },
  {
    numeral: "IV.",
    body: "Dark Wallet — private by default.",
  },
  {
    numeral: "V.",
    body: "Private lending — credit without exposure.",
  },
];

export const FOUNDATIONS_FOOTNOTE =
  "Each step ships when it's proven and audited. Not before.";

// ─────────────────────────────────────────────
// Every App Feeds the Fire
// ─────────────────────────────────────────────
export const FEED_STEPS: FeedStep[] = [
  {
    numeral: "I.",
    body: "More apps, more volume. Every integration routes private flow through Tartaglia.",
  },
  {
    numeral: "II.",
    body: "More volume, more fees. Dark Hook protocol fees grow with every pool.",
  },
  {
    numeral: "III.",
    body: "More fees, more burn. 100% of hook protocol fees buy back and burn $TATA, onchain and public.",
  },
];

export const FEED_DISCLAIMER =
  "$TATA is not a share or a claim on revenue. Burns reduce supply; they are not payments to holders.";

// ─────────────────────────────────────────────
// CTA — 3 baris + sub
// ─────────────────────────────────────────────
export const EVERYWHERE_CTA = {
  lines: ["ONE CHAIN.", "ONE CROWD.", "ONE SHADOW."],
  sub: "Speak little. Prove everything.",
};