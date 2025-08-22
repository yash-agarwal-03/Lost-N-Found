import React from 'react';
import tietLogo from '../tietlogo.png';

const navLinks = [
  { name: 'Welcome', href: '/' },
  { name: 'Explore', href: '/explore' },
  { name: 'Campus Map', href: '/map' },
  { name: 'Thapar AI', href: '/ai' },
  { name: 'Feeds', href: '/feeds' },
  { name: 'Lost & Found', href: 'http://localhost:3001', external: true },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Team', href: '/team' },
];

const Navbar = () => (
  <header className="lnf-navbar">
    <div className="lnf-navbar-logo">
      <img src={tietLogo} alt="TIET Logo" className="lnf-navbar-logo-img" />
      <span className="lnf-navbar-title">TIET Nexus</span>
    </div>
    <nav className="lnf-navbar-links">
      {navLinks.map((item) =>
        item.external ? (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="lnf-navbar-link"
          >
            {item.name}
          </a>
        ) : (
          <a key={item.name} href={item.href} className="lnf-navbar-link">
            {item.name}
          </a>
        )
      )}
    </nav>
  </header>
);

export default Navbar;
