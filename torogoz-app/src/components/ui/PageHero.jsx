import { StatCounter } from './StatCounter';
import './page-hero.css';

export function PageHero({ title, subtitle, stats, imageSrc, imageAlt, ctaLabel, ctaHref, variant, glyph = 'UVA' }) {
  return (
    <section className={`page-hero${variant === 'navy' ? ' page-hero--navy' : ''}`}>
      <span className="page-hero__glyph" aria-hidden="true">{glyph}</span>
      <div className="page-hero__grid">
        <div className="page-hero__panel">
          <h1 className="h-display page-hero__title">{title}</h1>
          <p className="page-hero__subtitle">{subtitle}</p>
          {stats && (
            <div className="page-hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="page-hero__stat">
                  <StatCounter value={stat.value} />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
          {ctaLabel && ctaHref && (
            <a className="btn btn--solid btn--condensed" href={ctaHref} style={{ marginTop: '34px', display: 'inline-flex', alignItems: 'center' }}>
              {ctaLabel}
              <svg viewBox="0 -960 960 960" aria-hidden="true" style={{ width: '18px', height: '18px', fill: 'currentColor', marginLeft: '2px', verticalAlign: 'middle' }}>
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
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
