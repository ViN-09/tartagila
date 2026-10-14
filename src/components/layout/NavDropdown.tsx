import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  label: string;
  onSelect: () => void;
  isActive?: boolean;
  badge?: {
    label: string;
    tone?: "live" | "research" | "building";
  };
};

type NavDropdownProps = {
  label: string;
  items: DropdownItem[];
  isActive?: boolean;
};

export function NavDropdown({ label, items, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Klik di luar → tutup
  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    // ⚠️ Pakai "click", bukan "mousedown"
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1.5 transition hover:text-maroon ${
          isActive ? "text-maroon font-semibold" : ""
        }`}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 4L5 7L8 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-sm border border-border bg-background/95 py-1 shadow-lg backdrop-blur-sm"
        >
          {items.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                item.onSelect();
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition hover:bg-card hover:text-maroon ${
                item.isActive ? "text-maroon font-semibold" : "text-ink"
              }`}
            >
              <span>{item.label}</span>

              {item.badge && (
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest ${badgeTone(
                    item.badge.tone
                  )}`}
                >
                  {item.badge.label}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function badgeTone(tone: "live" | "research" | "building" = "research"): string {
  switch (tone) {
    case "live":
      return "border-emerald-600/50 bg-emerald-500/5 text-emerald-400";
    case "building":
      return "border-gold/50 bg-gold/5 text-gold";
    case "research":
    default:
      return "border-seal/50 bg-seal/5 text-seal";
  }
}