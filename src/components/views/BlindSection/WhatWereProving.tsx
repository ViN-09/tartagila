import { PROVING_ITEMS, PROVING_FOOTNOTE } from "./constants";

export function WhatWereProving() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        What we're still <em className="text-maroon">proving.</em>
      </h2>

      <ul className="mt-10 space-y-5">
        {PROVING_ITEMS.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 border-b border-border/60 pb-5 last:border-0"
          >
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
            <p className="text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl font-display text-sm italic text-ink-soft">
        {PROVING_FOOTNOTE}
      </p>
    </section>
  );
}