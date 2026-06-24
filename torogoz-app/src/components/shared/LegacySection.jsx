import { Link } from 'react-router-dom';
import { StatCounter } from '../ui/StatCounter';
import './legacy-section.css';

function StatItem({ stat }) {
  return (
    <div className="history__stat">
      <StatCounter value={stat.value} />
      <span>{stat.label}</span>
    </div>
  );
}

export function LegacySection({ title, text, stats, imageSrc, imageAlt, ctaLabel, ctaHref }) {
  return (
    <section className="section section--paper2" id="history">
      <div className="wrap history">
        <div className="history__copy reveal">
          <h2 className="h-display history__title">{title}</h2>
          <p className="history__text">{text}</p>
          <div className="history__stats">
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
          <Link className="btn btn--solid btn--condensed" to={ctaHref} style={{ marginTop: '30px' }}>
            {ctaLabel}
          </Link>
        </div>
        <figure className="history__media reveal" style={{ margin: 0 }}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      </div>
    </section>
  );
}
