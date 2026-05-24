'use client';

import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Features', href: '#features' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="announcement-bar">
        <span>
          🎉 <strong>Funding Milestone:</strong> Secured ₹5 Lakh CSR funding to provide 500 blind students free access to NayanSaathi!
        </span>
      </div>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <a href="#" className="nav-logo" aria-label="NayanSaathi home">
            <span>Nayan</span>Saathi
          </a>

          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="navbar-menu" className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
