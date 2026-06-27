import { assetUrl } from '../../../utils/assetUrl';
import { CONTACT_FORM_URL } from '../../../data/homeData';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__bg"
        aria-hidden="true"
        style={{ backgroundImage: `url("${assetUrl('/assets/images/university-of-virginia.jpg')}")` }}
      />
      <span className="hero__watermark" aria-hidden="true">ΛΣΥ</span>

      <div className="hero__inner">
        <img
          className="hero__crest"
          src={assetUrl("/assets/logos/lsu-logo.png")}
          alt="Lambda Sigma Upsilon shield"
        />
        <p className="hero__eyebrow">TOROGOZ CHAPTER · UNIVERSITY OF VIRGINIA</p>
        <h1 className="h-display hero__title">
          Lambda Sigma
          <br />
          <span style={{ color: '#ffffff' }}>Upsilon</span>
        </h1>
        <p className="hero__tag">Latino Fraternity, Inc.</p>
        <p className="hero__lede">
          A brotherhood built on culture, scholarship, and service —{' '}
          <em>Latinos Siempre Unidos.</em>
        </p>
        <div className="hero__actions">
          <a className="btn btn--on-sky btn--condensed" href="#purpose">
            Discover Our Story
          </a>
          <a
            className="btn btn--ghost-sky btn--condensed"
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>

    </section>
  );
}
