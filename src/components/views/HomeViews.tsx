import { Hero } from "./sections/Hero";
import { Stammerer } from "./sections/Stammerer";
import { Duel } from "./sections/Duel";
import { Verse } from "./sections/Verse";
import { Breach } from "./sections/Breach";
import { Settlement } from "./sections/Settlement";
import { Vocabulary } from "./sections/Vocabulary";
import { Cta } from "./sections/Cta";

export function HomeView() {
  return (
    <>
      <Hero />
      <Stammerer />
      <Duel />
      <Verse />
      <Breach />
      <Settlement />
      <Vocabulary />
      <Cta />
    </>
  );
}