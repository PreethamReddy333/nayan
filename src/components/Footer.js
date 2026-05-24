import './Footer.css';

export default function Footer() {
  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Features', href: '#features' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <a href="#" className="footer-logo" aria-label="NayanSaathi home">
          NayanSaathi
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                {index > 0 && <span className="footer-divider" aria-hidden="true">·</span>}
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-copyright">
          &copy; 2025 NayanSaathi. All rights reserved.
        </p>
        <p className="footer-tagline">
          Made with <span aria-label="love">❤️</span> for accessibility
        </p>
      </div>
    </footer>
  );
}
