export function HookDiagram() {
  return (
    <div className="rounded-sm border border-border">
      {/* AREA GELAP (IN THE DARK) */}
      <div className="relative bg-[#1a1614] p-6 md:p-10">
        <div className="flex flex-col items-center gap-6">
          {/* Row 1: Sealed cartelli → Disfida */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="w-[140px] rounded-sm border border-border/60 bg-card/20 px-4 py-3 text-center">
              <div className="font-display text-xs text-ink">Sealed cartelli</div>
            </div>

            <Arrow />

            <div className="w-[240px] rounded-sm border border-border/60 bg-card/20 px-4 py-3 text-center">
              <div className="font-display text-sm text-ink">Disfida</div>
              <div className="text-[10px] italic text-ink-soft">
                cross at midpoint m
              </div>
            </div>
          </div>

          {/* Row 2: Dua arrow ke Internal fill / Dark Hook */}
          <div className="flex w-full max-w-md items-start justify-between gap-8">
            <div className="flex flex-col items-center gap-2">
              <ArrowDown />
              <span className="text-[10px] italic text-ink-soft">
                matched pairs
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ArrowDown />
              <span className="text-[10px] italic text-ink-soft">
                unmatched remainder
              </span>
            </div>
          </div>

          {/* Row 3: Internal fill / Dark Hook → Uniswap v4 pool */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="w-[150px] rounded-sm border border-border/60 bg-card/20 px-4 py-3 text-center">
              <div className="font-display text-xs text-ink">Internal fill</div>
            </div>

            <div className="w-[130px] rounded-sm border border-maroon/60 bg-maroon/10 px-4 py-3 text-center">
              <div className="font-display text-xs text-maroon">Dark Hook</div>
            </div>

            <Arrow />

            <div className="w-[120px] rounded-sm border border-border/60 bg-card/20 px-4 py-3 text-center">
              <div className="font-display text-xs text-ink">
                Uniswap v4
                <br />
                pool
              </div>
            </div>
          </div>

          {/* Row 4: Merge arrows → One Verse */}
          <div className="flex flex-col items-center gap-3">
            <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
              <path
                d="M60 0 L60 15 Q60 25 100 25 Q140 25 140 15 L140 0"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-ink-soft"
              />
              <line
                x1="100"
                y1="25"
                x2="100"
                y2="30"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-ink-soft"
              />
            </svg>

            <div className="w-[300px] rounded-sm border-2 border-gold/60 bg-card/20 px-6 py-4 text-center">
              <div className="font-display text-lg text-ink">One Verse</div>
              <div className="text-[10px] italic text-ink-soft">
                UltraHonk proof
              </div>
            </div>
          </div>
        </div>

        {/* Label IN THE DARK (pojok kiri bawah) */}
        <div className="absolute bottom-3 left-4 font-display text-[9px] uppercase tracking-[0.3em] text-ink-soft">
          In the dark
        </div>
      </div>

      {/* AREA TERANG (IN THE LIGHT) */}
      <div className="relative bg-[#f5f0e8] p-6 md:p-10">
        <div className="flex flex-col items-center gap-3">
          <ArrowDown className="text-[#1a1614]" />

          <div className="w-full max-w-md rounded-sm border border-[#1a1614] bg-transparent px-6 py-4 text-center">
            <div className="font-display text-sm text-[#1a1614]">
              Chain sees: proof + one net swap
            </div>
          </div>
        </div>

        {/* Label IN THE LIGHT (pojok kiri bawah) */}
        <div className="absolute bottom-3 left-4 font-display text-[9px] uppercase tracking-[0.3em] text-[#1a1614]/60">
          In the light
        </div>
      </div>
    </div>
  );
}

// Helper komponen arrow
function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="10"
      viewBox="0 0 30 10"
      fill="none"
      className={className}
    >
      <line x1="0" y1="5" x2="26" y2="5" stroke="currentColor" strokeWidth="0.6" />
      <polyline points="23,2 27,5 23,8" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="20"
      viewBox="0 0 10 20"
      fill="none"
      className={className}
    >
      <line x1="5" y1="0" x2="5" y2="16" stroke="currentColor" strokeWidth="0.6" />
      <polyline points="2,13 5,17 8,13" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}