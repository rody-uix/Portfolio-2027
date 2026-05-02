import React from 'react';
import { Badge } from '../atoms/Badge';
import './ProjectCard.css';

export const ProjectCard = ({ title, category, badgeColor }) => {
  return (
    <div className="project-card">
      <div className="project-image-placeholder"></div>
      <div className="project-card-footer">
        <h3 className="font-handlee">{title}</h3>
        <div className="project-badge-wrapper">
          <Badge text={category} color={badgeColor} />
        </div>
      </div>
    </div>
  );
};
