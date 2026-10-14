import type { Step, ChangeItem, Bullet, ProvingItem, CtaButton } from "./types";

export const DARKHOOK_TAG = "Research · Not live";

export const DARKHOOK_HERO = {
  title: "Dark Hook.",
  subtitle: "Cross in the dark. Settle in the light.",
  body:
    "A Uniswap v4 hook that turns any pool into a dark venue. Sealed orders cross each other first, at the oracle midpoint. Only the unmatched remainder touches AMM liquidity, through the hook, inside the same proof.",
  formula: "fill = cross(u, v) at m + remainder → pool",
  badge: "Research · Not live",
  buttons: [
    { label: "How it works", target: "#how-it-works", variant: "primary" as const },
    { label: "Follow the research", target: "#research", variant: "outline" as const },
  ] as CtaButton[],
};

export const DARK_POOLS = {
  kicker: "Liber V · The Remainder",
  title: "Dark pools run out of counterparties.",
  body1:
    "A dark pool only fills when a buyer meets a seller. When one side is bigger, the rest waits, or leaves for a public venue and leaks its size on the way out.",
  body2:
    "AMMs always have liquidity, but every swap is public. Searchers read it in the mempool and trade around it.",
  body3:
    "One venue hides you but can run dry. The other never runs dry but shows everything.",
  body3Emphasis: "Dark Hook joins them.",
};

export const TWO_VENUES = {
  kicker: "Liber VI · The Hook",
  title: "Two venues. One proof.",
  diagramFootnote:
    "The pool sees one net swap per batch. The chain sees one proof.",
};

export const STEPS: Step[] = [
  {
    numeral: "I",
    title: "Seal",
    body: "Traders seal cartelli into the MARGINALIA pool, as today.",
  },
  {
    numeral: "II",
    title: "Cross",
    body: "At each disfida, matching orders cross each other at the Chainlink midpoint. No AMM involved, no price impact.",
  },
  {
    numeral: "III",
    title: "Route the remainder",
    body: "Whatever stays unmatched routes to a Uniswap v4 pool through the Dark Hook, bounded by each trader's sealed limit.",
  },
  {
    numeral: "IV",
    title: "Prove once",
    body: "One settlement proof covers both the internal cross and the AMM leg: midpoint fills, limits respected, books balanced.",
  },
  {
    numeral: "V",
    title: "Reveal only the net",
    body: "The public sees one net swap against the pool per batch. Not who, not which side, not how many orders were behind it.",
  },
];

export const WHAT_CHANGES = {
  title: "What changes.",
  items: [
    {
      heading: "For traders",
      body: "Dark fills when a counterparty exists. AMM depth when it doesn't. Size never hits the public mempool.",
    },
    {
      heading: "For LPs",
      body: "Flow arrives netted and batched, not as a stream of sniped single swaps.",
    },
    {
      heading: "For the chain",
      body: "One proof and one net swap per batch, instead of hundreds of visible orders.",
    },
  ] as ChangeItem[],
};

export const BUILT_ON = {
  title: "Built on what already works.",
  bullets: [
    {
      label: "Uniswap v4 hooks",
      body: "custom logic around every swap in a pool",
    },
    {
      label: "Robinhood Chain",
      body: "native tokenized equities",
    },
    {
      label: "MARGINALIA",
      body: "Tartaglia's shielded note pool",
    },
    {
      label: "Noir and UltraHonk",
      body: "one proof for the cross and the AMM leg",
    },
    {
      label: "Chainlink Data Streams",
      body: "the midpoint every internal fill uses",
    },
  ] as Bullet[],
  footnote:
    "Third-party names describe technology used. No partnership or endorsement is implied.",
};

export const PROVING = {
  title: "What we're still proving.",
  intro:
    "Dark Hook is research. These are the problems we're working through before it ships:",
  items: [
    {
      body:
        "How to bound the AMM leg so the remainder can't be sandwiched between batches",
    },
    {
      body:
        "How to prove an AMM swap result inside the settlement circuit efficiently",
    },
    {
      body:
        "How the net swap reveals as little as possible about batch direction and size",
    },
    {
      body: "How hook permissions stay minimal and safe",
    },
  ] as ProvingItem[],
  footnote: "It ships when it's proven, audited and safe. Not before.",
};

export const DARKHOOK_CTA = {
  title: ["Cross in the dark.", "Settle in the light."],
  body:
    "Dark Hook is the next step for Tartaglia. Today, the dark pool is live on mainnet.",
  buttons: [
    { label: "Trade on mainnet", target: "trade", variant: "primary" as const },
    { label: "Back to Tartaglia", target: "home", variant: "outline" as const },
  ] as CtaButton[],
  disclaimer: "Research only. Not live. No funds can be used with Dark Hook today.",
};