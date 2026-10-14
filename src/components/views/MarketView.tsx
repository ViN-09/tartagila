import {
  MarketHero,
  AlreadyDarkSection,
  ScalingRoadmap,
  FullMarketTable,
  NewlyDarkSection,
  HowItGoesDark,
} from "./MarketSection";

export function MarketView() {
  return (
    <div className="min-h-screen">
      <MarketHero />
      <AlreadyDarkSection />
      <ScalingRoadmap />
      <FullMarketTable />
      <NewlyDarkSection />
      <HowItGoesDark />
    </div>
  );
}