import React from 'react';
import { aboutMePolaroids } from '../../data/mockData';
import { PhotoCard } from '../molecules/PhotoCard';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header about-header">
          <h2 className="font-handlee section-title">About Me</h2>
        </div>
        
        <div className="polaroids-container">
          {aboutMePolaroids.map(polaroid => (
            <PhotoCard 
              key={polaroid.id}
              text={polaroid.text}
              rotation={polaroid.rotation}
              zIndex={polaroid.zIndex}
              top={polaroid.top}
              left={polaroid.left}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
