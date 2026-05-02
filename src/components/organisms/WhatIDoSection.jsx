import React from 'react';
import { whatIDoNotes, toolsMarquee } from '../../data/mockData';
import { StickyNote } from '../molecules/StickyNote';
import './WhatIDoSection.css';

export const WhatIDoSection = () => {
  return (
    <section className="what-i-do-section">
      <div className="what-i-do-container">
        <div className="section-header">
          <h2 className="font-handlee section-title">What i do?</h2>
        </div>
        
        <div className="notes-container">
          {whatIDoNotes.map(note => (
            <StickyNote 
              key={note.id}
              title={note.title}
              content={note.content}
              color={note.color}
              borderColor={note.borderColor}
              angle={note.angle}
              tagColor={note.tagColor}
              tagStyle={note.tagStyle}
              icon={note.icon}
              tagIcon={note.tagIcon}
              bottomLogos={note.bottomLogos}
            />
          ))}
        </div>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {[...toolsMarquee, ...toolsMarquee].map((tool, index) => (
            <span key={index} className="font-space tool-item">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
