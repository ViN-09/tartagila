import type { ReactNode } from "react";

type ChapterProps = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
};

export function Chapter({ id, kicker, title, children }: ChapterProps) {
  return (
    <section
      id={id}
      className="chapter-rule mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <p className="font-display text-sm uppercase tracking-[0.3em] text-seal">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}