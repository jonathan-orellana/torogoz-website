import { PILLARS } from "../../../data/homeData";

function PillarIcon({ viewBox, path }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function PillarCard({ pillar }) {
  return (
    <article className="pillar">
      <span className="pillar__icon">
        <PillarIcon viewBox={pillar.svgViewBox} path={pillar.svgPath} />
      </span>
      <h3 className="pillar__name">{pillar.name}</h3>
      <p className="pillar__text">{pillar.description}</p>
    </article>
  );
}

export function PillarsSection() {
  return (
    <section className="section section--navy" id="pillars">
      <div className="wrap">
        <div className="pillars__head reveal">
          <div>
            <h2 className="h-display pillars__title">
              Our four <span className="accent">goals</span>
            </h2>
          </div>
          <p className="pillars__lede">
            The values that shape every brother, in the classroom, on Grounds,
            and in the community.
          </p>
        </div>

        <div className="pillars__grid reveal">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
