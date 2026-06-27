import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PageHero } from "../../components/ui/PageHero";
import { JoinSection } from "../../components/shared/JoinSection";
import { FoundingBrothersSection } from "./sections/FoundingBrothersSection";
import { OnGroundsSection } from "./sections/OnGroundsSection";
import { TorogozMeaningSection } from "./sections/TorogozMeaningSection";
import { CHAPTER_HERO_STATS } from "../../data/chapterHistoryData";
import "./chapter-history.css";

export function ChapterHistory() {
  useScrollReveal();

  return (
    <main>
      <PageHero
        title={
          <>
            The Torogoz
            <br />
            <span className="accent">Chapter</span>
          </>
        }
        subtitle="Established in Spring 2026 by eight founding brothers at the University of Virginia, inspired by the torogoz, the national bird of El Salvador and a symbol of freedom, resilience, and identity."
        stats={CHAPTER_HERO_STATS}
        imageSrc="/assets/images/founding-brothers.webp"
        imageAlt="Founding brothers of the Torogoz Chapter together"
        ctaLabel="Meet the Founders"
        ctaHref="#founders"
      />
      <FoundingBrothersSection />
      <OnGroundsSection />
      <TorogozMeaningSection />
      <JoinSection />
    </main>
  );
}
