import { CONTACT_FORM_URL } from '../../data/homeData';

export function JoinSection() {
  return (
    <section className="join">
      <span className="join__glyph" aria-hidden="true">ΛΣΥ</span>
      <div className="join__inner">
        <h2 className="h-display join__title">
          Join the
          <br />
          Brotherhood
        </h2>
        <p className="join__text">
          Ready to make an impact? Grow, inspire, lead purposefully, and become part of something
          bigger than yourself.
        </p>
        <a
          className="btn btn--on-sky btn--condensed"
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Us
          <svg viewBox="0 -960 960 960" aria-hidden="true" style={{ width: '18px', height: '18px', fill: 'currentColor', marginLeft: '2px' }}>
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
