import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, CONTACT_FORM_URL } from "../../data/homeData";
import "./header.css";

function ChevronRightIcon() {
  return (
    <svg viewBox="0 -960 960 960" aria-hidden="true">
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}


function DropdownMenu({ items, onSelect }) {
  return (
    <div className="dropdown">
      {items.map((item) => (
        <Link key={item.href} to={item.href} onClick={onSelect}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  if (!link.dropdown) {
    return (
      <Link
        to={link.href}
        aria-current={pathname === link.href ? "page" : undefined}
      >
        {link.label}
      </Link>
    );
  }

  function toggleDropdown(e) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  return (
    <div ref={itemRef} className={`nav__item${isOpen ? " open" : ""}`}>
      <button
        className="nav__toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {link.label}
        <ChevronRightIcon />
      </button>
      <DropdownMenu items={link.dropdown} onSelect={() => setIsOpen(false)} />
    </div>
  );
}

export function Header({ menuOpen = false, onToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY;
      setIsScrolled(y > 30);
      if (Math.abs(delta) < 6) return;
      if (delta > 0 && y > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastY = y;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = [
    "header",
    isScrolled && "is-stuck",
    isHidden && !menuOpen && "is-hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} id="header">
      <Link className="brand" to="/" aria-label="Torogoz Chapter home">
        <img
          className="brand__crest"
          src={"/assets/logos/image.webp"}
          alt="Lambda Sigma Upsilon crest"
        />
      </Link>

      <nav className="nav" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </nav>

      <a
        className="header__cta"
        href={CONTACT_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Us
      </a>

      <button
        className="burger"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
