import { PROVING } from "./constants";

export function WhatWereProving() {
  return (
    <section
      id="research"
      className="border-y border-border bg-background/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          {PROVING.title}
        </h2>

        <p className="mt-6 max-w-2xl text-ink-soft">{PROVING.intro}</p>

        <ul className="mt-8 space-y-4">
          {PROVING.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border-b border-border/60 pb-4 last:border-0"
            >
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
              <p className="text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl font-display text-sm italic text-ink-soft">
          {PROVING.footnote}
        </p>
      </div>
    </section>
  );
}