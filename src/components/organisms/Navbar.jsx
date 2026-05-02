import React from 'react';
import { navigationLinks } from '../../data/mockData';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="font-handlee">rodip chettri</h1>
      </div>
      <div className="navbar-links">
        {navigationLinks.map((link, index) => (
          <a key={index} href={link.href} className="font-inter navbar-link">
            {link.label}
            {link.label === "Hire Me" && <div className="highlight-line"></div>}
          </a>
        ))}
      </div>
    </nav>
  );
};
