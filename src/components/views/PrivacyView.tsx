import {
  PrivacyHero,
  PrivacyStats,
  AlreadyDarkLayers,
  FourLeaksLayers,
  FurtherDarkLayers,
  WhyEveryLayerCounts,
  StandingOnGiants,
  PrivacyCta,
} from "./PrivacySection";

export function PrivacyView() {
  return (
    <div className="min-h-screen">
      <PrivacyHero />
      <PrivacyStats />
      <AlreadyDarkLayers />
      <FourLeaksLayers />
      <FurtherDarkLayers />
      <WhyEveryLayerCounts />
      <StandingOnGiants />
      <PrivacyCta />
    </div>
  );
}