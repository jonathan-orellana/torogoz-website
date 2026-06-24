import { FOUNDING_BROTHERS } from '../../../data/chapterHistoryData';

function BrotherItem({ brother }) {
  return (
    <div className="brother-item">
      <span className="brother-item__number">{brother.number}</span>
      <span className="brother-item__name">{brother.name}</span>
    </div>
  );
}

export function FoundingBrothersSection() {
  return (
    <section className="founding-brothers" id="founders">
      <span className="founding-brothers__watermark" aria-hidden="true">ΛΣΥ</span>
      <div className="founding-brothers__inner">
        <div className="founding-brothers__head reveal">
          <div>
            <h2 className="founding-brothers__title">
              Our eight <span className="accent">founding brothers</span>
            </h2>
          </div>
          <p className="founding-brothers__intro">
            Eight men set the foundation for the Torogoz Chapter, carrying the values of Lambda
            Sigma Upsilon to Grounds for the first time. Through shared purpose and the trials of
            the founding process, they forged a bond that became the chapter's cornerstone and its
            lasting legacy.
          </p>
        </div>
        <div className="founding-brothers__grid reveal">
          {FOUNDING_BROTHERS.map((brother) => (
            <BrotherItem key={brother.number} brother={brother} />
          ))}
        </div>
      </div>
    </section>
  );
}
