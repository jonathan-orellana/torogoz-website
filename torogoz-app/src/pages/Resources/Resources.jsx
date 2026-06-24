import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CompactHero } from '../../components/ui/CompactHero';
import { ResourceGridSection } from './sections/ResourceGridSection';
import { EmergencyBandSection } from './sections/EmergencyBandSection';
import './resources.css';

export function Resources() {
  useScrollReveal();

  return (
    <main>
      <CompactHero
        title={<>Chapter <span className="accent">Resources</span></>}
        subtitle="Guides and tools to keep our brothers safe, healthy, and supported — on Grounds and beyond. Open any card to read the full resource."
      />
      <ResourceGridSection />
      <EmergencyBandSection />
    </main>
  );
}
