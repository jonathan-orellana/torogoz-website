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

function ArrowOutwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" aria-hidden="true" className="nav__outward">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T840-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      setIsScrolled(y > 30);
      if (y > lastY && y > 80) {
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

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 860) setIsMobileMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const headerClass = [
    "header",
    isScrolled && "is-stuck",
    isHidden && !isMobileMenuOpen && "is-hidden",
    isMobileMenuOpen && "is-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} id="header">
      <Link className="brand" to="/" aria-label="Torogoz Chapter home">
        <img
          className="brand__crest"
          src="/assets/logos/image.png"
          alt="Lambda Sigma Upsilon crest"
        />
      </Link>

      <nav className="nav" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
        <a
          className="nav__mobile-cta"
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
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
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
