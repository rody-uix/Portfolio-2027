import React from 'react';
import './Badge.css';

export const Badge = ({ text, color }) => {
  return (
    <div className="badge" style={{ backgroundColor: color }}>
      {text}
    </div>
  );
};
