import {
  EverywhereHero,
  PrivacyLaw,
  OnePoolEveryApp,
  FoundationsFirst,
  EveryAppFeedsFire,
  BuildingCta,                          // ⬅️ TAMBAH
  EverywhereCta,
} from "./EverywhereSection";
import type { View } from "../layout/Header";

type EverywhereViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function EverywhereView({ onNavigate }: EverywhereViewProps = {}) {
  return (
    <div className="min-h-screen">
      <EverywhereHero onNavigate={onNavigate} />
      <PrivacyLaw />
      <OnePoolEveryApp />
      <FoundationsFirst onNavigate={onNavigate} />
      <EveryAppFeedsFire />
      <BuildingCta />                    {/* ⬅️ TAMBAH */}
      <EverywhereCta onNavigate={onNavigate} />
    </div>
  );
}