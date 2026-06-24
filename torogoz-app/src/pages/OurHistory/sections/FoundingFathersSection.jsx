import { FOUNDING_FATHERS } from '../../../data/ourHistoryData';

function FounderItem({ name }) {
  return (
    <div className="founder-item">
      <span className="founder-item__dot" aria-hidden="true" />
      <span className="founder-item__name">{name}</span>
    </div>
  );
}

export function FoundingFathersSection() {
  return (
    <section className="founding-fathers" id="founders">
      <div className="founding-fathers__inner">
        <div className="founding-fathers__head reveal">
          <h2 className="founding-fathers__title">
            Our twenty <span className="accent">founding fathers</span>
          </h2>
          <p className="founding-fathers__intro">
            Lambda Sigma Upsilon was built on the vision, leadership, and commitment of these
            founding members.
          </p>
        </div>
        <div className="founding-fathers__grid reveal">
          {FOUNDING_FATHERS.map((name) => (
            <FounderItem key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
