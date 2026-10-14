import { GIANTS } from "./constants";

export function StandingOnGiants() {
  return (
    <section className="border-y border-border bg-background/50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">
          Standing on <em className="text-maroon">giants.</em>
        </h2>

        <p className="mt-6 max-w-2xl text-sm italic text-ink-soft">
          {GIANTS.body}
        </p>
      </div>
    </section>
  );
}