import { RESOURCE_CARDS } from '../../../data/resourcesData';

const ARROW_ICON_PATH =
  'M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z';

function ResourceCard({ card }) {
  return (
    <a className="rcard" href={card.href} target="_blank" rel="noopener noreferrer">
      <span className="rcard__icon">
        <svg viewBox="0 -960 960 960" aria-hidden="true">
          <path d={card.iconPath} />
        </svg>
      </span>
      <span className="rcard__cat">{card.category}</span>
      <h3 className="rcard__title">{card.title}</h3>
      <p className="rcard__desc">{card.description}</p>
      <span className="rcard__link">
        View Resource{' '}
        <svg viewBox="0 -960 960 960" aria-hidden="true">
          <path d={ARROW_ICON_PATH} />
        </svg>
      </span>
    </a>
  );
}

export function ResourceGridSection() {
  return (
    <section className="res" id="resources">
      <div className="res__inner">
        <div className="res__head reveal">
          <h2 className="res__title">
            Find what you <span className="accent">need</span>
          </h2>
          <p className="res__intro">
            A short overview of each topic — click through to the full guide or document.
          </p>
        </div>
        <div className="res__grid reveal">
          {RESOURCE_CARDS.map((card) => (
            <ResourceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
