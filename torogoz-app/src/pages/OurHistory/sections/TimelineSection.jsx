import { LSU_TIMELINE } from '../../../data/ourHistoryData';

function TimelineRow({ entry }) {
  return (
    <div className="timeline__row">
      <div className="timeline__year">{entry.year}</div>
      <div className="timeline__desc">
        <h3>{entry.heading}</h3>
        {entry.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section className="timeline" id="timeline">
      <div className="timeline__card reveal">
        <span className="timeline__watermark" aria-hidden="true">ΛΣΥ</span>
        <div className="timeline__head">
          <h2 className="timeline__heading">How it all began</h2>
        </div>
        <div className="timeline__rows">
          {LSU_TIMELINE.map((entry) => (
            <TimelineRow key={entry.heading} entry={entry} />
          ))}
        </div>
        <div className="timeline__cta">
          <a
            className="btn btn--solid btn--condensed"
            href="https://www.lsu79.org/history"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Full History →
          </a>
        </div>
      </div>
    </section>
  );
}
