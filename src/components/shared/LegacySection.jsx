import { Link } from 'react-router-dom';
import { StatCounter } from '../ui/StatCounter';
import './legacy-section.css';

export function LegacySection({ title, text, stats, imageSrc, imageAlt, ctaLabel, ctaHref, isExternal }) {
  const Cta = isExternal ? 'a' : Link;
  const ctaLinkProps = isExternal
    ? { href: ctaHref, target: '_blank', rel: 'noopener noreferrer' }
    : { to: ctaHref };

  return (
    <section className="section section--paper2" id="history">
      <div className="wrap history">
        <div className="history__copy reveal">
          <h2 className="h-display history__title">{title}</h2>
          <p className="history__text">{text}</p>
          <div className="history__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="history__stat">
                <StatCounter value={stat.value} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <Cta className="btn btn--solid btn--condensed" style={{ marginTop: '30px' }} {...ctaLinkProps}>
            {ctaLabel}
          </Cta>
        </div>
        <figure className="history__media reveal" style={{ margin: 0 }}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      </div>
    </section>
  );
}
