import { FEED_STEPS, FEED_DISCLAIMER } from "./constants";

export function EveryAppFeedsFire() {
  return (
    <section id="build"  className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Every app <em className="text-maroon">feeds the fire.</em>
        </h2>

        <ol className="mt-10 space-y-5">
          {FEED_STEPS.map((step) => (
            <li
              key={step.numeral}
              className="flex items-start gap-4 border-b border-border/60 pb-5 last:border-0"
            >
              <span className="shrink-0 font-display text-lg text-seal">
                {step.numeral}
              </span>
              <p className="flex-1 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
          {FEED_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}