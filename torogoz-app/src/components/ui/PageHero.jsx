import { StatCounter } from './StatCounter';
import './page-hero.css';

function HeroStat({ stat }) {
  return (
    <div className="page-hero__stat">
      <StatCounter value={stat.value} />
      <span>{stat.label}</span>
    </div>
  );
}

export function PageHero({ title, subtitle, stats, imageSrc, imageAlt, ctaLabel, ctaHref }) {
  return (
    <section className="page-hero">
      <span className="page-hero__glyph" aria-hidden="true">ΛΣΥ</span>
      <div className="page-hero__grid">
        <div className="page-hero__panel">
          <h1 className="h-display page-hero__title">{title}</h1>
          <p className="page-hero__subtitle">{subtitle}</p>
          {stats && (
            <div className="page-hero__stats">
              {stats.map((stat) => (
                <HeroStat key={stat.label} stat={stat} />
              ))}
            </div>
          )}
          {ctaLabel && ctaHref && (
            <a className="btn btn--solid btn--condensed" href={ctaHref} style={{ marginTop: '34px' }}>
              {ctaLabel}
            </a>
          )}
        </div>
        <figure className="page-hero__media" style={{ margin: 0 }}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      </div>
    </section>
  );
}
