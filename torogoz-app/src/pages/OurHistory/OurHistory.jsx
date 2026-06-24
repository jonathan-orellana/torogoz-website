import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PageHero } from '../../components/ui/PageHero';
import { JoinSection } from '../../components/shared/JoinSection';
import { TimelineSection } from './sections/TimelineSection';
import { FoundingFathersSection } from './sections/FoundingFathersSection';
import { QuickFactsSection } from './sections/QuickFactsSection';
import { LSU_HERO_STATS } from '../../data/ourHistoryData';
import './our-history.css';

export function OurHistory() {
  useScrollReveal();

  return (
    <main>
      <PageHero
        title={
          <>
            Rooted in culture,
            <br />
            <span className="accent">driven by purpose</span>
          </>
        }
        subtitle="Since April 5, 1979, Lambda Sigma Upsilon has stood as a home for Latino voices in higher education — built on unity, shaped by sacrifice."
        stats={LSU_HERO_STATS}
        imageSrc="/assets/images/founding.png"
        imageAlt="Brothers of Lambda Sigma Upsilon together at the founding"
      />
      <TimelineSection />
      <FoundingFathersSection />
      <QuickFactsSection />
      <JoinSection />
    </main>
  );
}
