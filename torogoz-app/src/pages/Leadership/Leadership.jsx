import { useScrollReveal } from "../../hooks/useScrollReveal";
import { CompactHero } from "../../components/ui/CompactHero";
import { BoardSection } from "./sections/BoardSection";
import "./leadership.css";

export function Leadership() {
  useScrollReveal();

  return (
    <main>
      <CompactHero
        title={
          <>
            Our <span className="accent">Leadership</span>
          </>
        }
        subtitle="Meet the executive board guiding the Torogoz Chapter, the founding brothers leading with purpose, scholarship, and service."
      />
      <BoardSection />
    </main>
  );
}
