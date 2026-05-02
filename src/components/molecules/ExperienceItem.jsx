import React from 'react';
import './ExperienceItem.css';

const RedPin = () => (
  <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="pushpin-icon">
    {/* Needle */}
    <path d="M12 22L13 34L11 34Z" fill="#999" />
    
    {/* Flared base */}
    <path d="M6 20C6 22 18 22 18 20C18 19 16 18 12 18C8 18 6 19 6 20Z" fill="#A00000" />
    <path d="M6 19C6 21 18 21 18 19C18 18 16 17 12 17C8 17 6 18 6 19Z" fill="#E60000" />
    
    {/* Stem */}
    <path d="M9 17L10 8H14L15 17H9Z" fill="#CC0000" />
    
    {/* Top cap */}
    <ellipse cx="12" cy="8" rx="6" ry="4" fill="#E60000" />
    <ellipse cx="12" cy="7" rx="6" ry="3.5" fill="#FF3333" />
    
    {/* Highlight */}
    <ellipse cx="10" cy="6" rx="2" ry="1" fill="#FF9999" />
    <path d="M11 10L11 16" stroke="#FF6666" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ExperienceItem = ({ number, color, role, company, duration, description, index }) => {
  const rotationFront = index % 2 === 0 ? '-2deg' : '3deg';
  const rotationBack = index % 2 === 0 ? '5deg' : '-4deg';
  
  const hoverRotationFront = index % 2 === 0 ? '-10deg' : '12deg';
  const hoverRotationBack = index % 2 === 0 ? '15deg' : '-14deg';

  return (
    <div className="experience-item">
      <div className="experience-number-wrapper">
        <RedPin />
        <div 
          className="experience-number back-note" 
          style={{ 
            backgroundColor: color, 
            '--rot': rotationBack,
            '--hover-rot': hoverRotationBack
          }}
        />
        <div 
          className="experience-number front-note" 
          style={{ 
            backgroundColor: color, 
            '--rot': rotationFront,
            '--hover-rot': hoverRotationFront
          }}
        >
          <span className="font-handlee">{number}</span>
        </div>
      </div>
      <div className="experience-content">
        <h4 className="font-inter">
          {role} <span className="company">{company}</span>
        </h4>
        <p className="duration">{duration}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
