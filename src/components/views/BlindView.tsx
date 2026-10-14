import {
  BlindHero,
  OnePartyStillSees,
  SplitComputeProve,
  BuiltOnStack,
  WhatWereProving,
  StandingOnGiants,
  BlindCta,
} from "./BlindSection";
import type { View } from "../layout/Header";

type BlindViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function BlindView({ onNavigate }: BlindViewProps = {}) {
  return (
    <div className="min-h-screen">
      <BlindHero onNavigate={onNavigate} />
      <OnePartyStillSees />
      <SplitComputeProve />
      <BuiltOnStack />
      <WhatWereProving />
      <StandingOnGiants />
      <BlindCta onNavigate={onNavigate} />
    </div>
  );
}