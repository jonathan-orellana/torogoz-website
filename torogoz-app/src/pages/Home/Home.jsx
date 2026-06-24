import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HeroSection } from './sections/HeroSection';
import { PurposeSection } from './sections/PurposeSection';
import { PillarsSection } from './sections/PillarsSection';
import { HistorySection } from './sections/HistorySection';
import { NamesakeSect } from './sections/NamesakeSect';
import { EventsSection } from './sections/EventsSection';
import { JoinSection } from '../../components/shared/JoinSection';
import './home.css';

export function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <PurposeSection />
      <PillarsSection />
      <HistorySection />
      <NamesakeSect />
      <EventsSection />
      <JoinSection />
    </main>
  );
}
