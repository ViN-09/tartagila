import { BUILT_ON } from "./constants";

export function BuiltOnWhatWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        {BUILT_ON.title}
      </h2>

      <ul className="mt-10 space-y-4">
        {BUILT_ON.bullets.map((bullet) => (
          <li
            key={bullet.label}
            className="flex items-start gap-3 border-b border-border/60 pb-4 last:border-0"
          >
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
            <div>
              <span className="font-display text-ink">{bullet.label}</span>
              <span className="text-ink-soft"> — {bullet.body}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl text-sm italic text-ink-soft">
        {BUILT_ON.footnote}
      </p>
    </section>
  );
}