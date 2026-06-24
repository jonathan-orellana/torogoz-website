import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PageHero } from '../../components/ui/PageHero';
import { MeaningSection } from '../../components/shared/MeaningSection';
import { LegacySection } from '../../components/shared/LegacySection';
import { JoinSection } from '../../components/shared/JoinSection';
import { FoundingFathersSection } from './sections/FoundingFathersSection';
import { QuickFactsSection } from './sections/QuickFactsSection';
import { LSU_HERO_STATS, LSU_LEGACY_STATS } from '../../data/ourHistoryData';
import './our-history.css';

const LSU_SPIRIT_PARAGRAPHS = [
  'Lambda Sigma Upsilon was founded on a simple but powerful conviction: that Latino students deserved a brotherhood that honored their culture, their struggles, and their identity.',
  'The motto Latinos Siempre Unidos — Latinos Always United — was not just a phrase. It was a promise made by twenty men at Rutgers University who chose to stand together, and a commitment carried forward by every brother who has since worn the letters.',
];

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
        imageSrc="/assets/images/lsu-founders.png"
        imageAlt="Brothers of Lambda Sigma Upsilon together at the founding"
      />
      <MeaningSection
        title={<>The spirit of <span className="accent">Latinos Siempre Unidos</span></>}
        imageSrc="/assets/logos/lsu-logo.png"
        imageAlt="Lambda Sigma Upsilon fraternity logo"
        paragraphs={LSU_SPIRIT_PARAGRAPHS}
        variant="paper"
      />
      <LegacySection
        title={<>Built on <span className="accent">brotherhood</span></>}
        text="Founded in 1979 at Rutgers University by twenty men who believed Latino students deserved more, Lambda Sigma Upsilon has grown from a single chapter into a national brotherhood spanning nearly fifty universities — united by culture, driven by purpose."
        stats={LSU_LEGACY_STATS}
        imageSrc="/assets/images/lsu-founders.png"
        imageAlt="Founding brothers of Lambda Sigma Upsilon at Rutgers University"
        ctaLabel="Read the Full History"
        ctaHref="https://www.lsu79.org/history"
        isExternal
      />
      <FoundingFathersSection />
      <QuickFactsSection />
      <JoinSection />
    </main>
  );
}
