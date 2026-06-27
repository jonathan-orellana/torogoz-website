export function CrossingSection() {
  return (
    <section className="crossing">
      <span className="crossing__glyph" aria-hidden="true">
        85
      </span>
      <div className="crossing__inner">
        <figure className="crossing__media" style={{ margin: 0 }}>
          <video controls preload="metadata" poster="/assets/images/crossing-thumbnail.webp">
            <source src="/assets/videos/torogoz-lsu.mp4" type="video/mp4" />
          </video>
        </figure>
        <div className="crossing__copy reveal">
          <h2 className="crossing__title">
            When we <span className="accent">crossed</span>
          </h2>
          <p className="crossing__text">
            On March 27th, at <strong>8:08 Post Meridian Time</strong>, eight
            men stepped across the line and into brotherhood — becoming the
            founding brothers of the Torogoz Chapter, the{" "}
            <strong>85th chapter</strong> of Lambda Sigma Upsilon Latina
            Fraternity, Inc.
          </p>
          <div className="crossing__stats">
            <div className="crossing__stat">
              <b>85th</b>
              <span>Chapter in the nation</span>
            </div>
<div className="crossing__stat">
              <b>Mar 27</b>
              <span>Crossing date</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
