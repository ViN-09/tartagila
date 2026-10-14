export type Step = {
  numeral: string;
  title: string;
  body: string;
};

export type ChangeItem = {
  heading: string;
  body: string;
};

export type Bullet = {
  label: string;
  body: string;
};

export type ProvingItem = {
  body: string;
};

export type CtaButton = {
  label: string;
  target: string;
  variant: "primary" | "outline";
};