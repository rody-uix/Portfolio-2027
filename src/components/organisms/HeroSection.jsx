import React from 'react';
import { heroData } from '../../data/mockData';
import { Button } from '../atoms/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title font-inter">
          I <span className="highlight-text">design</span> top<br />
          notch Products
        </h2>
        <p className="hero-subtitle font-inter">
          {heroData.subtitle}
        </p>
        <Button className="hero-btn">{heroData.btnText}</Button>
      </div>
      <div className="hero-image-placeholder">
        {/* Placeholder for hero image if any */}
      </div>
    </section>
  );
};
