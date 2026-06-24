import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_FORM_URL } from '../../data/homeData';
import './header.css';

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 640 640" aria-hidden="true">
      <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
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

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  if (!link.dropdown) {
    return (
      <Link to={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
        {link.label}
      </Link>
    );
  }

  function toggleDropdown(e) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  return (
    <div ref={itemRef} className={`nav__item${isOpen ? ' open' : ''}`}>
      <button
        className="nav__toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {link.label}
        <ChevronDownIcon />
      </button>
      <DropdownMenu items={link.dropdown} onSelect={() => setIsOpen(false)} />
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 860) setIsMobileMenuOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const headerClass = ['header', isScrolled && 'is-stuck', isMobileMenuOpen && 'is-open']
    .filter(Boolean)
    .join(' ');

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
