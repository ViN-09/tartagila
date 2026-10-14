import {
  EverywhereHero,
  PrivacyLaw,
  OnePoolEveryApp,
  FoundationsFirst,
  EveryAppFeedsFire,
  EverywhereCta,
} from "./EverywhereSection";
import type { View } from "../layout/Header";

type EverywhereViewProps = {
  onNavigate?: ((view: View) => void) | undefined;
};

export function EverywhereView({ onNavigate }: EverywhereViewProps = {}) {
  return (
    <div className="min-h-screen">
      <EverywhereHero />
      <PrivacyLaw />
      <OnePoolEveryApp />
      <FoundationsFirst onNavigate={onNavigate} />
      <EveryAppFeedsFire />
      <EverywhereCta onNavigate={onNavigate} />
    </div>
  );
}