import { BUILT_ON_STACK, BULLETS } from "./constants";

export function BuiltOnStack() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
          Built on the stack <em className="text-maroon">we already run.</em>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {BUILT_ON_STACK.body}
        </p>

        <ul className="mt-10 space-y-4">
          {BULLETS.map((bullet) => (
            <li
              key={bullet.title}
              className="flex items-start gap-3 border-b border-border/60 pb-4 last:border-0"
            >
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
              <div>
                <span className="font-display text-ink">{bullet.title}</span>
                <span className="text-ink-soft"> — {bullet.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}