export function TorogozMeaningSection() {
  return (
    <section className="torogoz-meaning" id="meaning">
      <div className="torogoz-meaning__grid">
        <figure className="torogoz-meaning__media reveal" style={{ margin: 0 }}>
          <img
            src="/assets/logos/torogoz-seal-blend.png"
            alt="Torogoz Chapter seal — Lambda Sigma Upsilon, University of Virginia"
          />
        </figure>
        <div className="torogoz-meaning__copy reveal">
          <h2 className="torogoz-meaning__title">
            The meaning of <span className="accent">Torogoz</span>
          </h2>
          <blockquote className="torogoz-meaning__quote">
            <p>
              The torogoz symbolizes freedom, resilience, and cultural identity. Known for its
              inability to live in captivity, it represents the importance of living authentically
              and without limits.
            </p>
            <p>
              Its adaptability and strength reflect the journey of the founding brothers, while its
              deep cultural roots connect the chapter to heritage and unity.
            </p>
          </blockquote>
          <hr className="torogoz-meaning__rule" />
        </div>
      </div>
    </section>
  );
}
