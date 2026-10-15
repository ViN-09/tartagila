import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, type View } from "../components/layout/Header";
import { HomeView } from "../components/views/HomeViews";
import { MarketView } from "../components/views/MarketView";
import { TradeView } from "../components/views/TradeView";
import { SealView } from "../components/views/SealView";
import { NowView } from "../components/views/NowView";
import { PrivacyView } from "../components/views/PrivacyView";
import { DarkHookView } from "../components/views/DarkHookView";
import { EverywhereView } from "../components/views/EverywhereView";
import { BlindView } from "../components/views/BlindView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tartaglia — Speak little. Prove everything." },
      {
        name: "description",
        content:
          "A zero-knowledge dark pool for tokenized stocks. Place orders no one can front-run. Your side, size and limit stay sealed.",
      },
      { property: "og:title", content: "Tartaglia — Speak little. Prove everything." },
      {
        property: "og:description",
        content:
          "A zero-knowledge dark pool for tokenized stocks. The chain sees only proof that a fair trade settled.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [currentView, setCurrentView] = useState<View>("home");

  const renderBody = () => {
    switch (currentView) {
      case "market":
        return <MarketView onNavigate={setCurrentView} />;   // ⬅️ TAMBAH PROP
      case "trade":
        return <TradeView />;
      case "seal":
        return <SealView onNavigate={setCurrentView} />;
      case "now":
        return <NowView />;
      case "privacy":
        return <PrivacyView onNavigate={setCurrentView} />;
      case "everywhere":
        return <EverywhereView onNavigate={setCurrentView} />;
      case "blind":
        return <BlindView onNavigate={setCurrentView} />;
      case "darkhook":
        return <DarkHookView onNavigate={setCurrentView} />;
      case "home":
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main>{renderBody()}</main>
    </div>
  );
}