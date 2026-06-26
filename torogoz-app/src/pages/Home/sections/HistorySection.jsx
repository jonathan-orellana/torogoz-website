import { LegacySection } from "../../../components/shared/LegacySection";
import { CHAPTER_STATS } from "../../../data/homeData";

export function HistorySection() {
  return (
    <LegacySection
      title={
        <>
          A lasting <span className="accent">legacy</span>
        </>
      }
      text="What began as a vision grew into a brotherhood built on purpose, resilience, and unity, coming together to lay the foundation for a lasting legacy at the University of Virginia."
      stats={CHAPTER_STATS}
      imageSrc="/assets/images/history-brothers.jpg"
      imageAlt="The Torogoz Chapter together at the University of Virginia"
      ctaLabel="Explore Our Chapter History"
      ctaHref="/chapter-history"
    />
  );
}
