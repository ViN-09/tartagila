import type { Step, Bullet, ProvingItem } from "./types";

// Tipe untuk button
export type CtaButton = {
  label: string;
  target: string;
  variant: "primary" | "outline";
};

export const BLIND_TAG = "Research · Co-Noir";

export const BLIND_HERO: {
  title: string[];
  body: string;
  badge: string;
  buttons: CtaButton[];
} = {
  title: ["NO ONE CAN READ", "YOUR ORDER.", "NOT EVEN US."],
  body: "Today our matcher sees orders so it can cross them. It never holds funds, and nothing it sees reaches the chain. Blind matching removes even that.",
  badge: "Research",
  buttons: [
    { label: "How it works", target: "#how-it-works", variant: "outline" },
    { label: "Privacy Stack", target: "privacy", variant: "outline" },
  ],
};

export const ONE_PARTY = {
  title: "One party still sees.",
  body: "A dark pool has to compare orders to cross them. Today, one matcher does that comparison in plaintext. It's the last place in Tartaglia where you have to trust someone instead of checking a proof.",
};

export const STEPS_SECTION = {
  kicker: "Liber XXVI · The Shares",
  title: "Split it. Compute it. Prove it.",
};

export const STEPS: Step[] = [
  {
    numeral: "I.",
    label: "Split",
    body: "Your order is split into secret shares. Each independent node gets one share. One share alone is random noise.",
  },
  {
    numeral: "II.",
    label: "Compute",
    body: "The nodes run the matching together on the shares, using multiparty computation. No node ever reconstructs your order.",
  },
  {
    numeral: "III.",
    label: "Prove",
    body: "Together they produce one UltraHonk proof, written in Noir, that the match was fair: midpoint price, limits respected, books balanced.",
  },
  {
    numeral: "IV.",
    label: "Settle",
    body: "The chain verifies the proof, exactly like today. Nothing else changes for you.",
  },
];

export const DIAGRAM_FOOTNOTE =
  "To read an order, every node would have to collude.";

export const BUILT_ON_STACK = {
  title: "Built on the stack we already run.",
  body: "Tartaglia settles every trade with Noir and UltraHonk. Co-Noir extends that same stack into multiparty computation, adapting the UltraHonk prover so several parties can build one proof together. Same circuits, same verifier, no single party in control.",
};

export const BULLETS: Bullet[] = [
  {
    title: "Same proof",
    body: "The chain verifies a standard UltraHonk proof.",
  },
  {
    title: "No single reader",
    body: "Orders exist only as shares across independent nodes.",
  },
  {
    title: "Composes with the stack",
    body: "Works alongside shielded notes, sealed orders and shielded transfers.",
  },
];

export const PROVING_ITEMS: ProvingItem[] = [
  { body: "Co-Noir is early technology. We're testing what runs today under real network conditions." },
  { body: "Matching under MPC is heavier than proving alone. We're measuring how large a batch can be." },
  { body: "Nodes must be truly independent: different operators, different infrastructure." },
  { body: "MPC hides the order, not your timing or your deposits. Layers III and VI of the Privacy Stack handle those." },
];

export const PROVING_FOOTNOTE =
  "It ships when it's proven and audited. Not before.";

export const GIANTS = {
  title: "Standing on giants.",
  body: "Third-party names describe technology we're researching. No partnership or endorsement is implied.",
};

export const BLIND_CTA: {
  title: string[];
  sub: string;
  buttons: CtaButton[];
} = {
  title: ["Seal the money.", "Seal the matching.", "Seal everything."],
  sub: "Speak little. Prove everything.",
  buttons: [
    { label: "Shield now", target: "trade", variant: "primary" },
    { label: "Break the Seal", target: "seal", variant: "outline" },
    { label: "Privacy Stack", target: "privacy", variant: "outline" },
  ],
};