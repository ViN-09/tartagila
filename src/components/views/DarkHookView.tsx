import {
  DarkHookHero,
  DarkPoolsRunOut,
  TwoVenuesOneProof,
  WhatChanges,
  BuiltOnWhatWorks,
  WhatWereProving,
  DarkHookCta,
} from "./DarkHookSection";
import type { View } from "../layout/Header";

type DarkHookViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function DarkHookView({ onNavigate }: DarkHookViewProps = {}) {
  return (
    <div className="min-h-screen">
      <DarkHookHero onNavigate={onNavigate} />
      <DarkPoolsRunOut />
      <TwoVenuesOneProof />
      <WhatChanges />
      <BuiltOnWhatWorks />
      <WhatWereProving />
      <DarkHookCta onNavigate={onNavigate} />
    </div>
  );
}