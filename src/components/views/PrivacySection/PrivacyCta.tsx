type PrivacyCtaProps = {
  onNavigate?: (view: string) => void;
};

export function PrivacyCta({ onNavigate }: PrivacyCtaProps = {}) {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-center">
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
        Speak little.{" "}
        <em className="text-maroon">Prove everything.</em>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm italic text-ink-soft">
        Every layer ships when it's proven and audited.
      </p>

      {/* 3 tombol */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {/* 1. Shield now — primary (maroon solid) */}
        <button
          onClick={() => onNavigate?.("trade")}
          className="btn-maroon rounded-sm px-5 py-2.5 text-sm"
        >
          Shield now
        </button>

        {/* 2. Dark Book — secondary (outline) */}
        <button
          onClick={() => {
            // TODO: arahkan ke Dark Book
            console.log("Open Dark Book");
          }}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Dark Book
        </button>

        {/* 3. Back to Tartaglia — secondary (outline) */}
        <button
          onClick={() => onNavigate?.("home")}
          className="btn-outline rounded-sm px-5 py-2.5 text-sm"
        >
          Back to Tartaglia
        </button>
      </div>
    </section>
  );
}