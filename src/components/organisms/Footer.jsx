import React from 'react';
import { footerData } from '../../data/mockData';
import './Footer.css';

const SOCIAL_ICONS = {
  X: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </div>
  ),
  LinkedIn: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#0077b5', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </div>
  ),
  Instagram: (
    <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </div>
  ),
  Topmate: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#ff4d4d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm3-6l-5 3V9l5 3z" />
      </svg>
    </div>
  ),
  Pinterest: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#bd081c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.164 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.992 5.368 18.623 0 12.017 0z" />
      </svg>
    </div>
  ),
  Behance: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#0057ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M22 14.4h-6.7c.1 1.5 1.3 2.6 2.9 2.6 1.1 0 2.1-.5 2.5-1.4h2.2c-.5 1.9-2.5 3.4-4.8 3.4-3.3 0-5.3-2.2-5.3-5.3 0-3.2 2.2-5.4 5.2-5.4 3 0 5 2.2 5 5.2 0 .3 0 .6-.1.9zm-4.3-2.9c-1.4 0-2.4 1-2.6 2.3h5c-.1-1.3-1-2.3-2.4-2.3zM8.5 19H3V5h5.5c2.3 0 4.3 1.5 4.3 3.5 0 1.3-.8 2.4-1.9 3 1.3.5 2.3 1.8 2.3 3.3 0 2.4-2.1 4.2-4.7 4.2zM5.2 11h2.9c1 0 1.9-.7 1.9-1.6 0-.9-.9-1.6-1.9-1.6H5.2V11zm2.9 5.3c1.2 0 2.2-.8 2.2-1.9 0-1.1-1-1.9-2.2-1.9H5.2v3.8h2.9zM16.2 8h4.8v1.1h-4.8V8z" />
      </svg>
    </div>
  ),
  Dribbble: (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#ea4c89', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <svg viewBox="0 0 24 24" fill="white">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 2.02 7.477a9.905 9.905 0 0 0 4.364-7.039zm-5.698 8.471c-.19-.89-.768-3.903-2.126-7.541-4.333 1.205-8.113 1.161-8.51 1.155a9.99 9.99 0 0 0 4.938 5.2c.57-.383 1.24-.95 1.748-1.583.746.467 1.492.934 1.95 1.269zm-11.23-5.12c.11.004 3.11.054 7.23-1.001a40.35 40.35 0 0 0-2.321-4.864c-4.47 1.264-6.197 3.738-6.42 4.09a9.866 9.866 0 0 0 1.51 1.775zm-.502-3.847c.23-.33 2.19-2.7 6.45-3.665a18.23 18.23 0 0 0-1.315-2.735 9.954 9.954 0 0 0-5.135 6.4zm7.252-8.324c.44.85.94 1.88 1.34 2.76 3.67-1.42 5.21-3.5 5.39-3.76a9.916 9.916 0 0 0-6.73-1zm8.303 1.95c-.16.22-1.53 2.06-5.11 3.51a37.8 37.8 0 0 1 2.31 5.02c2.99-.41 5.92.27 6.27.35a9.957 9.957 0 0 0-3.47-8.88z" />
      </svg>
    </div>
  )
};

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
              <div key={index} className="social-badge-container">
                <div className="social-logo-popout">
                  {SOCIAL_ICONS[social]}
                </div>
                <span className="social-badge font-inter">{social}</span>
              </div>
            ))}
          </div>
          <p className="font-inter thank-you">{footerData.closing}</p>
        </div>
      </div>
    </footer>
  );
};
