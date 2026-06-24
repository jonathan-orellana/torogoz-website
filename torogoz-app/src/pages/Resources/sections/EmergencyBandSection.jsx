import { EMERGENCY_CONTACTS } from '../../../data/resourcesData';

const PHONE_ICON_PATH =
  'M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T401-359q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T675-361l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z';

export function EmergencyBandSection() {
  return (
    <section className="res-help">
      <div className="res-help__inner">
        <div className="res-help__lead">
          <span className="res-help__icon">
            <svg viewBox="0 -960 960 960" aria-hidden="true">
              <path d={PHONE_ICON_PATH} />
            </svg>
          </span>
          <div>
            <h2 className="res-help__title">In an emergency</h2>
            <p className="res-help__note">
              If you or someone else is in immediate danger, call 911 first.
            </p>
          </div>
        </div>
        <div className="res-help__contacts">
          {EMERGENCY_CONTACTS.map((contact) => (
            <a key={contact.label} className="res-help__chip" href={contact.href}>
              <span>{contact.label}</span>
              <b>{contact.number}</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
