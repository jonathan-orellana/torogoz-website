import { QUICK_FACTS } from '../../../data/ourHistoryData';
import { StatCounter } from '../../../components/ui/StatCounter';

export function QuickFactsSection() {
  return (
    <section className="quick-facts" id="facts">
      <div className="quick-facts__inner">
        <p className="quick-facts__eyebrow reveal">Quick Facts</p>
        <div className="quick-facts__grid">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="quick-fact reveal">
              <StatCounter value={fact.value} className="quick-fact__value" />
              <span className="quick-fact__label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
