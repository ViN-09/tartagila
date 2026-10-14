import { WHAT_CHANGES } from "./constants";

export function WhatChanges() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          {WHAT_CHANGES.title}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {WHAT_CHANGES.items.map((item) => (
            <div key={item.heading} className="border-t border-ink pt-4">
              <h3 className="font-display text-xl">{item.heading}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}