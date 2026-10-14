import {
  SealHero,
  SealStatus,
  SealDeposit,
  SealBreakConditions,
  SealHowToClaim,
  SealClaimsLog,
  SealCta,
} from "./SealSection";
import type { View } from "../layout/Header";

type SealViewProps = {
  onNavigate?: (view: View) => void;
};

export function SealView({ onNavigate }: SealViewProps = {}) {
  return (
    <div className="min-h-screen">
      <SealHero />
      <SealStatus />
      <SealDeposit />
      <SealBreakConditions />
      <SealHowToClaim />
      <SealClaimsLog />
      <SealCta onNavigate={onNavigate} />
    </div>
  );
}