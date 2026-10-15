import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ConnectWallet } from "../Manual/ConnectWallet";
import { NavDropdown } from "./NavDropdown";

export type View =
  | "home"
  | "market"
  | "trade"
  | "seal"
  | "now"
  | "privacy"
  | "everywhere"
  | "blind"
  | "darkhook";

const VIEW_BADGES: Record<View, { label: string; className: string }> = {
  home:       { label: "Mainnet",    className: "border-seal text-seal" },
  market:     { label: "Market",     className: "border-maroon text-maroon" },
  trade:      { label: "Trade",      className: "border-gold text-gold" },
  seal:       { label: "Bounty",     className: "border-red-500/60 text-red-400" },
  now:        { label: "Now",        className: "border-seal text-seal" },
  privacy:    { label: "Privacy",    className: "border-seal text-seal" },
  everywhere: { label: "Everywhere", className: "border-maroon text-maroon" },
  blind:      { label: "Blind",      className: "border-seal text-seal" },
  darkhook:   { label: "Dark Hook",  className: "border-gold text-gold" },
};

type HeaderProps = {
  currentView: View;
  onNavigate: (view: View) => void;
};

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [walletOpen, setWalletOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnchor = (anchor: string) => {
    if (currentView !== "home") {
      onNavigate("home");
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const badge = VIEW_BADGES[currentView];
  const isResearchActive =
    currentView === "seal" ||
    currentView === "now" ||
    currentView === "blind" ||
    currentView === "darkhook";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          className="flex items-baseline gap-3"
        >
          <span className="font-display text-2xl tracking-tight">
            <span className="text-gold">𝔗</span>artaglia
          </span>

          <span
            className={`hidden rounded-full border px-2.5 py-0.5 text-xs sm:inline ${badge.className}`}
          >
            {badge.label}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="#chapters"
            onClick={() => handleAnchor("#chapters")}
            className="hover:text-maroon"
          >
            Chapters
          </a>

          {/* Market */}
          <button
            onClick={() => onNavigate("market")}
            className={`hover:text-maroon ${
              currentView === "market" ? "text-maroon font-semibold" : ""
            }`}
          >
            Market
          </button>

          {/* Privacy */}
          <button
            onClick={() => onNavigate("privacy")}
            className={`hover:text-maroon ${
              currentView === "privacy" ? "text-maroon font-semibold" : ""
            }`}
          >
            Privacy
          </button>

          {/* Research — dropdown dengan badge */}
          <NavDropdown
            label="Research"
            isActive={isResearchActive}
            items={[
              {
                label: "Now",
                onSelect: () => onNavigate("now"),
                isActive: currentView === "now",
                badge: { label: "live", tone: "live" },
              },
              {
                label: "Blind",
                onSelect: () => onNavigate("blind"),
                isActive: currentView === "blind",
                badge: { label: "research", tone: "research" },
              },
              {
                label: "Dark Hook",
                onSelect: () => onNavigate("darkhook"),
                isActive: currentView === "darkhook",
                badge: { label: "research", tone: "research" },
              },
            ]}
          />

          {/* Seal */}
          <button
            onClick={() => onNavigate("seal")}
            className={`hover:text-maroon ${
              currentView === "seal" ? "text-maroon font-semibold" : ""
            }`}
          >
            Seal
          </button>

          {/* Everywhere */}
          <button
            onClick={() => onNavigate("everywhere")}
            className={`hover:text-maroon ${
              currentView === "everywhere" ? "text-maroon font-semibold" : ""
            }`}
          >
            Everywhere
          </button>

          {/* Everywhere */}
<button
  onClick={() => onNavigate("everywhere")}
  className={`hover:text-maroon ${
    currentView === "everywhere" ? "text-maroon font-semibold" : ""
  }`}
>
  Everywhere
</button>

{/* X — link eksternal (BARU) */}
<a
  href="https://x.com/tartagliatech"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-maroon"
>
  X
</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("trade")}
            className="btn-outline hidden rounded-sm px-4 py-2 text-sm sm:inline-block"
          >
            Open trading UI
          </button>

          <button
            onClick={() => setWalletOpen(true)}
            className="btn-maroon rounded-sm px-4 py-2 text-sm"
          >
            Connect wallet
          </button>
        </div>
      </div>

      {mounted &&
        walletOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setWalletOpen(false)}
          >
            <ConnectWallet />
          </div>,
          document.body
        )}
    </header>
  );
}