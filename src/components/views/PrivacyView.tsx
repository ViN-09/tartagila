import {
  PrivacyHero,
  PrivacyStats,          // ⬅️ mungkin gak dipake lagi (stat udah di hero)
  AlreadyDarkLayers,
  FourLeaksLayers,
  FurtherDarkLayers,
  WhyEveryLayerCounts,
  StandingOnGiants,
  PrivacyCta,
} from "./PrivacySection";
import type { View } from "../layout/Header";

type PrivacyViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function PrivacyView({ onNavigate }: PrivacyViewProps = {}) {
  return (
    <div className="min-h-screen">
      <PrivacyHero onNavigate={onNavigate} />              {/* ⬅️ PASS */}
      {/* <PrivacyStats /> */}                              {/* ⬅️ COMMENT dulu, karena stat udah di hero */}
      <AlreadyDarkLayers />
      <FourLeaksLayers />
      <FurtherDarkLayers />
      <WhyEveryLayerCounts />
      <StandingOnGiants />
      <PrivacyCta onNavigate={onNavigate} />
    </div>
  );
}