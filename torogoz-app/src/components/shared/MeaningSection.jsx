import './meaning-section.css';

export function MeaningSection({ title, imageSrc, imageAlt, paragraphs, variant = 'navy' }) {
  return (
    <section className={`meaning-section meaning-section--${variant}`}>
      <div className="meaning-section__grid">
        <figure className="meaning-section__media reveal" style={{ margin: 0 }}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>
        <div className="meaning-section__copy reveal">
          <h2 className="meaning-section__title">{title}</h2>
          <blockquote className="meaning-section__quote">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
