export type LayerStatus = "Live" | "Building" | "Research";

export type DiagramSide = {
  label: string;              // "BEFORE" atau "AFTER"
  from: string;               // "You"
  via: string;                // "ETH gas links you" | "relayer" | ...
  viaStyle: "solid" | "dashed";
  to: string;                 // "Anyone" | "Receiver"
};

export type Layer = {
  numeral: string;
  title: string;
  status: LayerStatus;
  leak?: string;
  fix?: string;
  body?: string;
  diagram?: {
    before: DiagramSide;
    after: DiagramSide;
  };
};

export type Principle = {
  numeral: string;
  title: string;
  body: string;
};

export type Reference = {
  name: string;
  url: string;
  description: string;
};