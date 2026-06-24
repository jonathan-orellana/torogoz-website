import { PHIL_INTRO } from '../../../data/philanthropyData';

export function IntroSection() {
  return (
    <section className="phil-intro" id="intro">
      <div className="phil-intro__inner">
        <div className="reveal">
          <h2 className="phil-intro__title">
            {PHIL_INTRO.title} <span className="accent">{PHIL_INTRO.titleAccent}</span>
          </h2>
        </div>
        <div className="phil-intro__body reveal">
          {PHIL_INTRO.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
