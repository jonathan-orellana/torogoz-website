import { useEffect } from 'react';
import { EVENTS, INSTAGRAM_POST_URLS, INSTAGRAM_URL } from '../../../data/homeData';
import { EventCard } from '../../../components/ui/EventCard';

function InstagramEmbed({ postUrl }) {
  const embedUrl = `${postUrl}?utm_source=ig_embed&utm_campaign=loading`;
  return (
    <div className="ig-embed-crop">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
      />
    </div>
  );
}

function loadInstagramEmbedScript() {
  if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
    window.instgrm?.Embeds.process();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
}

export function EventsSection() {
  const hasUpcomingEvents = EVENTS.some((event) => event.title && event.date);

  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  return (
    <section className="section section--navy" id="events">
      <div className="wrap">
        <div className="events__bar reveal">
          <div>
            <h2 className="h-display events__title">
              Events &amp; <span className="accent">more</span>
            </h2>
          </div>
          <p className="events__lede">
            Catch the latest moments, events, and chapter updates.
          </p>
        </div>

        {hasUpcomingEvents ? (
          <div className="events__grid reveal">
            {EVENTS.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <p className="events__empty reveal">No upcoming events — check back soon.</p>
        )}

        <div className="social__head reveal">
          <h3>From Our Instagram</h3>
          <a
            className="social__handle"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            @uva_upsilons
            <svg viewBox="0 -960 960 960" aria-hidden="true" style={{ width: '18px', height: '18px', fill: 'currentColor', marginLeft: '2px', verticalAlign: 'middle' }}>
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </a>
        </div>

        <div className="social__grid reveal">
          {INSTAGRAM_POST_URLS.map((url) => (
            <InstagramEmbed key={url} postUrl={url} />
          ))}
        </div>
      </div>
    </section>
  );
}
