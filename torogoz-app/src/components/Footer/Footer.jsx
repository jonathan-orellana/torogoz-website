import {
  FOOTER_EXPLORE_LINKS,
  FOOTER_CONNECT_LINKS,
  INSTAGRAM_URL,
  EMAIL,
} from "../../data/homeData";
import "./footer.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 640 640" aria-hidden="true">
      <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5z" />
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <img
              className="footer__crest"
              src="/assets/logos/image.png"
              alt="Lambda Sigma Upsilon crest"
            />
            <p className="footer__motto">Latinos Siempre Unidos</p>
            <p className="footer__desc">
              The Torogoz Chapter of Lambda Sigma Upsilon Latino Fraternity,
              Inc. — University of Virginia.
            </p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            {FOOTER_EXPLORE_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            {FOOTER_CONNECT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {currentYear} Torogoz Chapter · Lambda Sigma Upsilon Latino
            Fraternity, Inc.
          </span>
          <div className="footer__socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
