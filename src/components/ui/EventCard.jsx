import { useState } from 'react';
import {
  formatDisplayDay,
  formatDisplayMonth,
  formatTimeRange,
  buildGoogleCalendarUrl,
  buildIcsBlob,
  downloadIcsFile,
} from '../../utils/calendarUtils';

function CalendarIcon() {
  return (
    <svg viewBox="0 -960 960 960" aria-hidden="true">
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm280 240q-17 0-28.5-11.5T440-400q0-17 11.5-28.5T480-440q17 0 28.5 11.5T520-400q0 17-11.5 28.5T480-360Z" />
    </svg>
  );
}

function PlaceholderCard() {
  return (
    <article className="event-card event-card--placeholder">
      <div className="event-card__date">
        <span className="event-card__day">—</span>
        <span className="event-card__month">TBA</span>
      </div>
      <div className="event-card__main">
        <div className="event-card__body">
          <h4>To Be Announced</h4>
          <p className="event-card__meta">Details coming soon</p>
        </div>
      </div>
    </article>
  );
}

export function EventCard({ event }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { title, date, startTime, endTime, location } = event;
  const hasEvent = Boolean(title && date);

  if (!hasEvent) return <PlaceholderCard />;

  const description = `${title} — Torogoz Chapter of Lambda Sigma Upsilon.`;
  const calendarData = { title, date, startTime, endTime, location, description };
  const timeRange = formatTimeRange(startTime, endTime);
  const googleCalendarUrl = buildGoogleCalendarUrl(calendarData);
  const hasCalendarButton = Boolean(startTime);

  function openCalendar(e) {
    e.stopPropagation();
    setIsCalendarOpen((prev) => !prev);
  }

  function downloadIcs(e) {
    e.preventDefault();
    downloadIcsFile(buildIcsBlob(calendarData), title);
    setIsCalendarOpen(false);
  }

  function closeCalendar() {
    setIsCalendarOpen(false);
  }

  return (
    <article className={`event-card${isCalendarOpen ? ' cal-open' : ''}`}>
      <div className="event-card__date">
        <span className="event-card__day">{formatDisplayDay(date)}</span>
        <span className="event-card__month">{formatDisplayMonth(date)}</span>
      </div>
      <div className="event-card__main">
        <div className="event-card__body">
          <h4>{title}</h4>
          {timeRange && <p className="event-card__meta">{timeRange}</p>}
          {location && <p className="event-card__loc">{location}</p>}
        </div>
        {hasCalendarButton && (
          <>
            <button
              className="cal-btn"
              type="button"
              aria-haspopup="true"
              aria-expanded={isCalendarOpen}
              onClick={openCalendar}
            >
              <CalendarIcon />
              Add to Calendar
            </button>
            <div className="cal-pop" role="menu">
              <a
                className="cal-pop__item"
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={closeCalendar}
              >
                Google Calendar
              </a>
              <a
                className="cal-pop__item"
                href="#"
                role="menuitem"
                onClick={downloadIcs}
              >
                Apple / Outlook (.ics)
              </a>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
