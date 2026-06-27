import { useScrollReveal } from "../../hooks/useScrollReveal";
import { CompactHero } from "../../components/ui/CompactHero";
import { IntroSection } from "./sections/IntroSection";
import { FeatureSection } from "./sections/FeatureSection";
import { PhilCTASection } from "./sections/PhilCTASection";
import { PHIL_FEATURES } from "../../data/philanthropyData";
import "./philanthropy.css";

export function Philanthropy() {
  useScrollReveal();

  return (
    <main>
      <CompactHero
        title={
          <>
            Our <span className="accent">Philanthropy</span>
          </>
        }
        subtitle="Service begins with understanding the needs of the community around us, and acting on them with purpose."
      />
      <IntroSection />
      {PHIL_FEATURES.map((feature) => (
        <FeatureSection key={feature.id} feature={feature} />
      ))}
      <PhilCTASection />
    </main>
  );
}
