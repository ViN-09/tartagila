import { REFERENCES, GIANTS_FOOTNOTE, GIANTS_DISCLAIMER } from "./constants";

export function StandingOnGiants() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
        Standing on <em>giants.</em>
      </h2>

      <ul className="mt-10 space-y-4">
        {REFERENCES.map((ref) => (
          <li
            key={ref.name}
            className="flex items-start gap-3 text-ink-soft"
          >
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
            <span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-ink underline decoration-border underline-offset-4 transition hover:text-maroon hover:decoration-maroon"
              >
                {ref.name}
              </a>{" "}
              <span className="text-sm">— {ref.description}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-3xl font-display text-lg italic leading-relaxed text-ink">
        {GIANTS_FOOTNOTE}
      </p>

      <p className="mt-6 max-w-3xl text-sm italic text-ink-soft">
        {GIANTS_DISCLAIMER}
      </p>
    </section>
  );
}