import React from 'react';
import './PhotoCard.css';

export const PhotoCard = ({ text, rotation, zIndex, top, left }) => {
  return (
    <div 
      className="photo-card" 
      style={{ 
        transform: `rotate(${rotation})`, 
        zIndex: zIndex,
        top: top,
        left: left
      }}
    >
      <div className="photo-placeholder"></div>
      <div className="photo-text">
        <p className="font-inter">{text}</p>
      </div>
    </div>
  );
};
