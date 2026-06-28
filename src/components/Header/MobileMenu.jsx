import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, CONTACT_FORM_URL, INSTAGRAM_URL, EMAIL } from "../../data/homeData";
import "./mobile-menu.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 640 640" aria-hidden="true">
      <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 -960 960 960" aria-hidden="true">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
    </svg>
  );
}

export function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const [expandedLabel, setExpandedLabel] = useState(null);

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (!open) setExpandedLabel(null);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="mm" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="mm__top">
        <img className="mm__crest" src="/assets/logos/image.webp" alt="Lambda Sigma Upsilon crest" />
        <button className="mm__close" type="button" aria-label="Close menu" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 3l12 12M15 3L3 15" />
          </svg>
        </button>
      </div>

      <nav className="mm__nav" aria-label="Mobile navigation">
        <p className="mm__nav-label">Menu</p>

        {NAV_LINKS.map((link) => {
          if (link.dropdown) {
            const isExpanded = expandedLabel === link.label;
            return (
              <div key={link.label} className="mm__group">
                <button
                  className={`mm__link mm__link--btn${isExpanded ? " mm__link--expanded" : ""}`}
                  onClick={() => setExpandedLabel(isExpanded ? null : link.label)}
                  aria-expanded={isExpanded}
                >
                  {link.label}
                  <span className={`mm__chev${isExpanded ? " mm__chev--open" : ""}`} aria-hidden="true" />
                </button>
                {isExpanded && (
                  <div className="mm__sub">
                    {link.dropdown.map((sub) => {
                      const isActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`mm__link mm__link--sub${isActive ? " mm__link--active" : ""}`}
                        >
                          {sub.label}
                          {isActive && <span className="mm__dot" aria-hidden="true" />}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`mm__link${isActive ? " mm__link--active" : ""}`}
            >
              {link.label}
              {isActive && <span className="mm__dot" aria-hidden="true" />}
            </Link>
          );
        })}
      </nav>

      <div className="mm__foot">
        <a
          className="mm__cta"
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Brotherhood
        </a>
        <div className="mm__footrow">
          <span className="mm__motto">Latinos Siempre Unidos</span>
          <div className="mm__socials">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
