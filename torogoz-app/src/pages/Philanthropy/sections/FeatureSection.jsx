export function FeatureSection({ feature }) {
  const { variant, flipped, eyebrow, title, titleAccent, imageSrc, imageAlt, isLogo, paragraphs, link } =
    feature;

  const sectionClass = [
    'phil-feature',
    `phil-feature--${variant}`,
    flipped && 'phil-feature--flip',
  ]
    .filter(Boolean)
    .join(' ');

  const mediaClass = [
    'phil-feature__media',
    isLogo && 'phil-feature__media--logo',
    'reveal',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass} id={feature.id}>
      <div className="phil-feature__inner">
        <figure className={mediaClass} style={{ margin: 0 }}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>
        <div className="phil-feature__copy reveal">
          <p className="phil-feature__eyebrow">{eyebrow}</p>
          <h2 className="phil-feature__title">
            {title} <span className="accent">{titleAccent}</span>
          </h2>
          <div className="phil-feature__text">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          {link && (
            <a
              className="phil-feature__link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              {link.label}
              <svg viewBox="0 -960 960 960" aria-hidden="true" style={{ width: '18px', height: '18px', fill: 'currentColor', marginLeft: '2px', verticalAlign: 'middle' }}>
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
