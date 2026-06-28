export function PurposeSection() {
  return (
    <section className="section section--paper" id="purpose">
      <div className="wrap purpose">
        <div className="purpose__copy reveal">
          <h2 className="h-display purpose__title">
            A diverse,
            <br />
            committed <span className="accent">brotherhood</span>
          </h2>
          <p className="purpose__text">
            We, the brothers of Lambda Sigma Upsilon Latino Fraternity, Inc.
            believe that success comes through a diverse and committed
            brotherhood grounded in honesty, respect, and trust. Through this
            foundation, we promote brotherhood, personal growth, justice,
            opportunity, and excellence in education.
          </p>
          <a className="btn btn--solid btn--condensed" href="/our-history">
            Our History
          </a>
        </div>

        <figure className="purpose__media reveal" style={{ margin: 0 }}>
          <img
            src="/assets/images/brothers-together.webp"
            alt="Brothers of the Torogoz Chapter together"
          />
        </figure>
      </div>
    </section>
  );
}
