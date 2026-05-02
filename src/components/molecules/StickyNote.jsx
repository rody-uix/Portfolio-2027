import React from 'react';
import './StickyNote.css';
import pencilImg from '../../../assets/initial-cards/Group 1.png';
import eyeImg from '../../../assets/initial-cards/Group 2.png';
import starImg from '../../../assets/initial-cards/Group 10.png';
import figmaImg from '../../../assets/initial-cards/image 1.png';
import framerImg from '../../../assets/initial-cards/image 2.png';
import webflowImg from '../../../assets/initial-cards/image 3.png';
import antigravityImg from '../../../assets/initial-cards/image 4.png';

const renderIcon = (iconName) => {
  if (!iconName) return null;

  if (iconName === 'pencil') {
    return (
      <img src={pencilImg} alt="Pencil Illustration" className="placeholder-icon" style={{ width: '78px', height: '78px', marginLeft: '-10px', objectFit: 'contain' }} />
    );
  }
  if (iconName === 'eye') {
    return (
      <img src={eyeImg} alt="Eye Illustration" className="placeholder-icon" style={{ width: '78px', height: '78px', marginLeft: '-10px', objectFit: 'contain' }} />
    );
  }
  if (iconName === 'star') {
    return (
      <img src={starImg} alt="Star Illustration" className="placeholder-icon" style={{ width: '78px', height: '78px', marginLeft: '-10px', objectFit: 'contain' }} />
    );
  }
  return null;
};

const renderTagIcon = (tagIcon) => {
  if (tagIcon === 'figma') {
    return (
      <img src={figmaImg} alt="Figma Logo" style={{ width: '24px', height: '24px', marginLeft: '8px', flexShrink: 0, objectFit: 'contain' }} />
    );
  }
  return null;
}

const renderBottomLogos = (bottomLogos) => {
  if (!bottomLogos || bottomLogos.length === 0) return null;

  const isThirdCardLogos = bottomLogos.includes('framer') && bottomLogos.includes('webflow') && bottomLogos.includes('antigravity');

  if (isThirdCardLogos) {
    return (
      <div style={{
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: '0px',
        paddingBottom: '15px'
      }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '-10px', marginLeft: '-10px' }}>
          <img src={framerImg} alt="Framer" style={{ height: '55px', width: '55px', objectFit: 'contain', transform: 'rotate(-15deg)', filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.15))' }} />
          <img src={webflowImg} alt="Webflow" style={{ height: '55px', width: '55px', objectFit: 'contain', transform: 'rotate(10deg)', filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.15))', marginLeft: '-20px' }} />
        </div>
        <img src={antigravityImg} alt="Google Antigravity" style={{ height: '65px', width: 'auto', objectFit: 'contain', transform: 'rotate(1deg)', marginLeft: '25px', marginTop: '-10px', filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.15))' }} />
      </div>
    );
  }

  return (
    <div className="bottom-logos">
      {bottomLogos.map((logo, index) => {
        let logoSrc = null;
        if (typeof logo === 'string') {
          if (logo.toLowerCase() === 'framer') logoSrc = framerImg;
          if (logo.toLowerCase() === 'webflow') logoSrc = webflowImg;
          if (logo.toLowerCase() === 'antigravity') logoSrc = antigravityImg;
        }

        return (
          <div key={index} className="placeholder-logo font-inter" style={logoSrc ? { padding: 0, border: 'none', background: 'none' } : {}}>
            {logoSrc ? (
              <img src={logoSrc} alt={logo} style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            ) : (
              logo
            )}
          </div>
        );
      })}
    </div>
  );
}

const Paperclip = () => (
  <svg width="24" height="64" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="paperclip-icon">
    {/* Shadow/Outline */}
    <path d="M14 8V52C14 56.4183 10.4183 60 6 60C1.58172 60 -2 56.4183 -2 52V16C-2 12.6863 0.68629 10 4 10C7.31371 10 10 12.6863 10 16V46C10 48.2091 8.20914 50 6 50C3.79086 50 2 48.2091 2 46V22" stroke="rgba(0,0,0,0.15)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translate(5px, 2px)' }} />
    {/* Metal clip */}
    <path d="M14 8V52C14 56.4183 10.4183 60 6 60C1.58172 60 -2 56.4183 -2 52V16C-2 12.6863 0.68629 10 4 10C7.31371 10 10 12.6863 10 16V46C10 48.2091 8.20914 50 6 50C3.79086 50 2 48.2091 2 46V22" stroke="#B0B5B9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translate(4px, 0)' }} />
    <path d="M14 8V52C14 56.4183 10.4183 60 6 60C1.58172 60 -2 56.4183 -2 52V16C-2 12.6863 0.68629 10 4 10C7.31371 10 10 12.6863 10 16V46C10 48.2091 8.20914 50 6 50C3.79086 50 2 48.2091 2 46V22" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translate(3.5px, -0.5px)' }} />
  </svg>
);

export const StickyNote = ({ title, content, color, borderColor, angle, tagColor, tagStyle, icon, tagIcon, bottomLogos }) => {
  return (
    <div
      className="sticky-note"
      style={{
        backgroundColor: color,
        '--rot': angle
      }}
    >
      <div className="notebook-board-text font-inter">Get set.</div>

      <div className="paper-stack">
        <div className="paper-layer layer-3"></div>
        <div className="paper-layer layer-1"></div>
        <div className="paper-layer layer-2"></div>

        <div className="paper-top">
          <Paperclip />

          <div
            className="sticky-note-tag"
            style={{
              backgroundColor: tagColor || 'var(--color-black)',
              ...tagStyle
            }}
          >
            <h3 className="font-handlee" style={{ whiteSpace: 'pre-line', display: 'flex', alignItems: 'center' }}>
              {title}
              {renderTagIcon(tagIcon)}
            </h3>
          </div>

          <div className="sticky-note-illustration">
            {renderIcon(icon)}
          </div>

          <div className="sticky-note-content">
            <ul>
              {content.map((item, index) => (
                <li key={index} className="font-inter">{item}</li>
              ))}
            </ul>
          </div>

          {renderBottomLogos(bottomLogos)}
        </div>
      </div>
    </div>
  );
};
