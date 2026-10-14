export function SealExplainer() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
        You can see it go in.{" "}
        <em className="text-maroon">You can't see it after.</em>
      </h2>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          That's the point. Once shielded, the balance no longer shows as
          anyone's. What stays public is proof it entered, and proof it hasn't
          been spent.
        </p>
        <p>
          The nullifier is published in advance. It only shows up onchain if the
          note is spent. As long as it hasn't appeared, the seal holds. Anyone
          can check this, any time, without trusting us.
        </p>
      </div>
    </section>
  );
}