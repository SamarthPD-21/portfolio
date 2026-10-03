"use client";

import { useState } from "react";

import { useActiveSection } from "../../hooks/use-portfolio-effects";
import { ACTIVE_SECTION_IDS, GITHUB_URL, NAV_ITEMS } from "../../lib/portfolio-data";
import { Logo } from "./static";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(ACTIVE_SECTION_IDS);
  const [left, right] = [NAV_ITEMS.slice(0, 2), NAV_ITEMS.slice(2)];

  const navLink = (item: (typeof NAV_ITEMS)[number]) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className={`nav-item ${activeSection === item.id ? "active" : ""}`}
      aria-current={activeSection === item.id ? "true" : undefined}
    >
      {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
    </a>
  );

  return (
    <>
      {/* ──── Desktop Nav ──── */}
      <nav className="nav" aria-label="Primary">
        <div className="nav-group-left">{left.map(navLink)}</div>
        <div className="nav-group-center">
          <a href="#hero" className="nav-item nav-monogram" aria-label="Home">
            <Logo />
          </a>
        </div>
        <div className="nav-group-right">{right.map(navLink)}</div>
      </nav>

      {/* ──── Mobile Burger ──── */}
      <button
        type="button"
        className="burger-container"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        <div className={`burger ${menuOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </div>
      </button>

      {/* ──── Mobile Nav Overlay ──── */}
      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-label="Mobile"
        inert={!menuOpen}
      >
        <div className="mobile-nav-inner">
          <a
            href="#hero"
            className="mobile-nav-logo"
            onClick={() => setMenuOpen(false)}
            aria-label="Home"
          >
            <Logo />
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:Samarthpd2112@gmail.com">Email</a>
          </div>
        </div>
      </nav>
    </>
  );
}
