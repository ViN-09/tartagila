import type { Layer, Principle, Reference } from "./types";

export const PRIVACY_STATS = {
  live: 4,
  building: 2,
  research: 2,
};

// Layer I & II — "Already dark."
export const ALREADY_DARK_LAYERS: Layer[] = [
  {
    numeral: "I",
    title: "Balance privacy",
    status: "Live",
    body: "Shield into the Notary and your funds no longer show as yours onchain. Unshield any time, to your wallet or a fresh address.",
  },
  {
    numeral: "II",
    title: "Order privacy",
    status: "Live",
    body: "Every cartello is a Poseidon commitment. Side, size and limit stay sealed. The chain sees one hash.",
  },
];

// Layer III–VI — "Four leaks. Four layers."
export const FOUR_LEAKS_LAYERS: Layer[] = [
  {
    numeral: "III",
    title: "Network privacy — Gasless relayer",
    status: "Live",
    leak: "You unshield to a fresh address, but it needs ETH for gas. Whoever funds it links it straight back to you.",
    fix: "A relayer pays the gas and takes its fee from the withdrawal. Your fresh address never needs funding. The trail stays broken.",
    diagram: {
      before: {
        label: "BEFORE",
        from: "You",
        via: "ETH gas links you",
        viaStyle: "solid",
        to: "Anyone",
      },
      after: {
        label: "AFTER",
        from: "You",
        via: "relayer",
        viaStyle: "dashed",
        to: "Anyone",
      },
    },
  },
  {
    numeral: "IV",
    title: "Transfer privacy — Shielded transfers",
    status: "Live",
    leak: "To pay someone today, you unshield, send, and they shield again. Two public hops.",
    fix: "Send USDG from your shielded balance straight to theirs. It never leaves the pool. The chain sees a valid proof. No sender, no receiver, no amount.",
    diagram: {
      before: {
        label: "BEFORE",
        from: "You",
        via: "2 public hops",
        viaStyle: "solid",
        to: "Receiver",
      },
      after: {
        label: "AFTER",
        from: "You",
        via: "in-pool transfer",
        viaStyle: "dashed",
        to: "Receiver",
      },
    },
  },
  {
    numeral: "V",
    title: "Receiver privacy — Stealth addresses",
    status: "Building",
    leak: "One public address shows every payment you ever received.",
    fix: "Every payment lands on a fresh one-time address only you can detect and spend. Built on the ERC-5564 standard.",
    diagram: {
      before: {
        label: "BEFORE",
        from: "Sender",
        via: "public address",
        viaStyle: "solid",
        to: "Anyone",
      },
      after: {
        label: "AFTER",
        from: "Sender",
        via: "one-time address",
        viaStyle: "dashed",
        to: "Anyone",
      },
    },
  },
  {
    numeral: "VI",
    title: "Amount privacy — Split notes and staged withdrawals",
    status: "Building",
    leak: "Shield exactly 5, unshield exactly 5, and in a young pool anyone can match them.",
    fix: "Deposits split into notes of different sizes. Withdrawals leave in parts, at different times, to different addresses. What goes in can't be matched to what comes out.",
    diagram: {
      before: {
        label: "BEFORE",
        from: "In pool",
        via: "matched by size",
        viaStyle: "solid",
        to: "Out pool",
      },
      after: {
        label: "AFTER",
        from: "In pool",
        via: "split + staged",
        viaStyle: "dashed",
        to: "Out pool",
      },
    },
  },
];

// Layer VII & VIII — "Further into the dark."
export const FURTHER_DARK_LAYERS: Layer[] = [
  {
    numeral: "VII",
    title: "Compute privacy",
    status: "Research",
    body: "Blind matching: a matcher that crosses orders it can't read. We're evaluating co-SNARKs, fully homomorphic encryption and attested enclaves.",
  },
  {
    numeral: "VIII",
    title: "Selective disclosure",
    status: "Research",
    body: "View keys let you open your own history to an auditor or tax office, and only yours. Privacy by default, disclosure by choice.",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    numeral: "I",
    title: "Privacy breaks at its weakest layer.",
    body: "One leak undoes everything else.",
  },
  {
    numeral: "II",
    title: "Real positions need real privacy.",
    body: "Tokenized stocks bring real holdings onchain.",
  },
  {
    numeral: "III",
    title: "Compliance stays intact.",
    body: "Every deposit still passes association-set screening.",
  },
];

export const REFERENCES: Reference[] = [
  {
    name: "Railgun",
    url: "https://railgun.org",
    description:
      "proved shielded transfers and relayers work on EVM.",
  },
  {
    name: "Umbra",
    url: "https://umbra.cash",
    description:
      "pushed stealth addresses into a finalized standard (ERC-5564).",
  },
  {
    name: "Privacy Pools by 0xbow",
    url: "https://0xbow.io",
    description:
      "proved privacy and compliance can share one pool.",
  },
];

export const GIANTS_FOOTNOTE =
  "What Tartaglia does differently: all four layers in one pool, built for tokenized stocks, native to Robinhood Chain, and wired directly into a dark pool. Shield, trade, transfer and withdraw without ever stepping into the light.";

export const GIANTS_DISCLAIMER =
  "Third-party names describe prior work. No partnership or endorsement is implied.";