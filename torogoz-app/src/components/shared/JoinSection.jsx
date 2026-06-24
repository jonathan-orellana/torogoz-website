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
          Connect With Us →
        </a>
      </div>
    </section>
  );
}
