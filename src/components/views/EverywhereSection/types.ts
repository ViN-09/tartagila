export type Integration = {
  numeral: string;
  title: string;
  tag: string;
  whatItIs: string;
  whyItMatters: string;
};

export type FoundationStep = {
  numeral: string;
  body: string;
  link?: { label: string; target: string };
};

export type FeedStep = {
  numeral: string;
  body: string;
};

export type DiagramNode = {
  id: string;
  label: string;
  sublabel?: string;
  variant?: "default" | "highlight" | "danger";
  position: "left" | "right" | "top" | "bottom" | "center";
};