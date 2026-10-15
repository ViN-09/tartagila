import {
  MarketHero,
  AlreadyDarkSection,
  ScalingRoadmap,
  FullMarketTable,
  NewlyDarkSection,
  HowItGoesDark,
  MarketCta,                                            // ⬅️ TAMBAH
} from "./MarketSection";
import type { View } from "../layout/Header";

type MarketViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function MarketView({ onNavigate }: MarketViewProps = {}) {
  return (
    <div className="min-h-screen">
      <MarketHero />
      <AlreadyDarkSection onNavigate={onNavigate} />
      <ScalingRoadmap />
      <FullMarketTable />
      <NewlyDarkSection />
      <HowItGoesDark />
      <MarketCta onNavigate={onNavigate} />              {/* ⬅️ TAMBAH */}
    </div>
  );
}