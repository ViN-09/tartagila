export function BlindDiagram() {
  return (
    <div className="rounded-sm border border-border bg-card/30 p-6 md:p-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-0">
        {/* YOUR ORDER */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[110px] rounded-sm border border-border bg-card px-3 py-4 text-center text-xs">
            <div className="font-display text-ink">Your order</div>
          </div>
        </div>

        {/* ARROWS TO NODES */}
        <div className="flex flex-col items-center justify-center px-2">
          <svg width="40" height="100" viewBox="0 0 40 100" fill="none">
            {/* share 1 */}
            <line x1="0" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            <polyline points="32,17 36,20 32,23" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            {/* share 2 */}
            <line x1="0" y1="50" x2="36" y2="50" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            <polyline points="32,47 36,50 32,53" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            {/* share 3 */}
            <line x1="0" y1="80" x2="36" y2="80" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            <polyline points="32,77 36,80 32,83" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
          </svg>
          <div className="absolute hidden flex-col text-[9px] text-ink-soft md:flex">
            <span className="mt-[-8px]">share 1</span>
            <span className="mt-[18px]">share 2</span>
            <span className="mt-[20px]">share 3</span>
          </div>
        </div>

        {/* NODES A/B/C */}
        <div className="flex flex-col gap-2">
          {["A", "B", "C"].map((n) => (
            <div
              key={n}
              className="w-[140px] rounded-sm border border-border bg-card px-3 py-2 text-center text-xs"
            >
              <div className="flex items-center justify-center gap-1.5 font-display text-ink">
                Node {n}
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect x="0.5" y="0.5" width="7" height="7" rx="1" stroke="currentColor" />
                </svg>
              </div>
              <div className="mt-0.5 text-[9px] italic text-ink-soft">
                never sees
              </div>
            </div>
          ))}
        </div>

        {/* MPC ARROW */}
        <div className="flex flex-col items-center justify-center px-3">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <line x1="0" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-ink-soft" />
            <polyline points="32,7 36,10 32,13" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
          </svg>
          <span className="mt-1 text-[9px] italic text-ink-soft">MPC</span>
        </div>

        {/* ONE PROOF */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[90px] rounded-sm border border-border bg-card px-3 py-4 text-center text-xs">
            <div className="font-display text-ink">One proof</div>
          </div>
        </div>

        {/* ARROW */}
        <div className="flex flex-col items-center justify-center px-3">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
            <line x1="0" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
            <polyline points="32,7 36,10 32,13" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-soft" />
          </svg>
        </div>

        {/* CHAIN VERIFIES */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[110px] rounded-sm border border-border bg-card px-3 py-4 text-center text-xs">
            <div className="font-display text-ink">Chain verifies</div>
          </div>
        </div>
      </div>
    </div>
  );
}