export type Step = {
  numeral: string;    // "I.", "II.", "III.", "IV."
  label: string;      // "Split", "Compute", "Prove", "Settle"
  body: string;
};

export type Bullet = {
  title: string;
  body: string;
};

export type ProvingItem = {
  body: string;
};

export type DiagramNode = {
  id: string;
  label: string;
  sublabel?: string;
  variant?: "default" | "highlight";
};

export type ResearchStatus = "Live" | "Building" | "Research" | "Vision";