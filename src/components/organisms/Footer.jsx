import React from 'react';
import { footerData } from '../../data/mockData';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="playground-note">
          <p className="font-inter">{footerData.playgroundText}</p>
        </div>
        
        <div className="explore-badge">
          <span className="font-handlee">Explore my playground.</span>
        </div>
        
        <div className="repeated-text-block">
          {[...Array(5)].map((_, i) => (
            <p key={i} className="font-inter">{footerData.repeatedText}</p>
          ))}
        </div>
        
        <div className="footer-bottom">
          <h2 className="font-handlee footer-name">{footerData.name}</h2>
          <div className="social-links">
            {footerData.socials.map((social, index) => (
              <span key={index} className="social-badge font-inter">{social}</span>
            ))}
          </div>
          <p className="font-inter thank-you">{footerData.closing}</p>
        </div>
      </div>
    </footer>
  );
};
