import type { TradingTicketState } from "./types";
import { mockOrderCommitment, shortenHash } from "./utils";

type OrderPreviewProps = {
  state: TradingTicketState;
};

export function OrderPreview({ state }: OrderPreviewProps) {
  const hash = mockOrderCommitment(state);
  const hasOrder = state.size !== "" && parseFloat(state.size) > 0;

  return (
    <div className="mt-6 rounded-sm border border-border bg-card/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          What the chain will see
        </span>
        <span className="text-xs italic text-ink-soft">One hash. Nothing else.</span>
      </div>

      <dl className="space-y-2 font-mono text-xs">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">orderCm</dt>
          <dd
            className="truncate text-right text-ink"
            title={hasOrder ? hash : "—"}
          >
            {hasOrder ? shortenHash(hash, 12, 8) : "—"}
          </dd>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">side</dt>
          <dd className="text-right text-ink-soft/70 italic">
            hidden
          </dd>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">asset</dt>
          <dd className="text-right text-ink-soft/70 italic">
            hidden
          </dd>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">size</dt>
          <dd className="text-right text-ink-soft/70 italic">
            hidden
          </dd>
        </div>
      </dl>
    </div>
  );
}