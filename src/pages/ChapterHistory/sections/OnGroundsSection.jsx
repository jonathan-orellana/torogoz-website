import { UVA_STATS } from "../../../data/chapterHistoryData";
import { StatCounter } from "../../../components/ui/StatCounter";

export function OnGroundsSection() {
  return (
    <section className="on-grounds" id="on-grounds">
      <span className="on-grounds__glyph" aria-hidden="true">
        UVA
      </span>
      <div className="on-grounds__inner">
        <div className="on-grounds__copy reveal">
          <h2 className="on-grounds__title">
            Built at the <span className="accent">University of Virginia</span>
          </h2>
          <p className="on-grounds__text">
            From the first interest meetings to our chartering, the Torogoz
            Chapter was built by Latino students determined to create a home for
            culture, brotherhood, and excellence on Grounds, the first chapter
            of Lambda Sigma Upsilon at the University of Virginia.
          </p>
          <div className="on-grounds__stats">
            {UVA_STATS.map((stat) => (
              <div key={stat.label} className="on-grounds__stat">
                <StatCounter value={stat.value} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <figure className="on-grounds__media reveal" style={{ margin: 0 }}>
          <img
            src=""
            alt="The Torogoz Chapter on Grounds at the University of Virginia"
          />
        </figure>
      </div>
    </section>
  );
}
