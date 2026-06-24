import { PHIL_CTA } from '../../../data/philanthropyData';

export function PhilCTASection() {
  return (
    <section className="phil-cta">
      <span className="phil-cta__glyph" aria-hidden="true">ΛΣΥ</span>
      <div className="phil-cta__inner">
        <h2 className="phil-cta__title">{PHIL_CTA.title}</h2>
        <p className="phil-cta__text">{PHIL_CTA.text}</p>
        <a className="btn btn--on-sky btn--condensed" href={`mailto:${PHIL_CTA.email}`}>
          Get Involved →
        </a>
      </div>
    </section>
  );
}
