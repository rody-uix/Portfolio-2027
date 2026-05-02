import React from 'react';
import { workExperience } from '../../data/mockData';
import { ExperienceItem } from '../molecules/ExperienceItem';
import './ExperienceSection.css';

export const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header-wrapper">
          <div className="experience-title-group">
            <div className="section-header">
              <h2 className="font-handlee section-title">Work Experience</h2>
            </div>
            <p className="font-inter experience-subtitle">
              Have been designing<br />
              since my past 4 years
            </p>
          </div>
          <div className="experience-illustration-container">
            <dotlottie-wc 
              src="https://lottie.host/6c14ef92-4ecf-442e-9d83-f33f327d11b2/8jteBbFyxL.lottie" 
              style={{ width: '400px', height: '400px' }} 
              autoplay 
              loop
            />
          </div>
        </div>
        
        <div className="experience-timeline">
          <div className="timeline-box">
            {workExperience.map((exp, index) => (
              <ExperienceItem 
                key={exp.id}
                number={exp.number}
                color={exp.color}
                role={exp.role}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
