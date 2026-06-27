import { PHIL_CTA } from '../../../data/philanthropyData';

export function PhilCTASection() {
  return (
    <section className="phil-cta">
      <span className="phil-cta__glyph" aria-hidden="true">ΛΣΥ</span>
      <div className="phil-cta__inner">
        <h2 className="phil-cta__title">{PHIL_CTA.title}</h2>
        <p className="phil-cta__text">{PHIL_CTA.text}</p>
        <a className="btn btn--on-sky btn--condensed" href={`mailto:${PHIL_CTA.email}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
          Get Involved
          <svg viewBox="0 -960 960 960" aria-hidden="true" style={{ width: '18px', height: '18px', fill: 'currentColor', marginLeft: '2px', verticalAlign: 'middle' }}>
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
