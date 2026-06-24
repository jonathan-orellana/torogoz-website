import { CHAPTER_STATS } from '../../../data/homeData';
import { StatCounter } from '../../../components/ui/StatCounter';

function StatItem({ stat }) {
  return (
    <div className="history__stat">
      <StatCounter value={stat.value} />
      <span>{stat.label}</span>
    </div>
  );
}

export function HistorySection() {
  return (
    <section className="section section--paper2" id="history">
      <div className="wrap history">
        <div className="history__copy reveal">
          <h2 className="h-display history__title">
            A lasting <span className="accent">legacy</span>
          </h2>
          <p className="history__text">
            What began as a vision grew into a brotherhood built on purpose, resilience, and unity
            — coming together to lay the foundation for a lasting legacy at the University of
            Virginia.
          </p>

          <div className="history__stats">
            {CHAPTER_STATS.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>

          <a
            className="btn btn--solid btn--condensed"
            href="/chapter-history"
            style={{ marginTop: '30px' }}
          >
            Explore Our Chapter History
          </a>
        </div>

        <figure className="history__media reveal" style={{ margin: 0 }}>
          <img
            src="/assets/images/tl-2.jpg"
            alt="The Torogoz Chapter together at the University of Virginia"
          />
        </figure>
      </div>
    </section>
  );
}
