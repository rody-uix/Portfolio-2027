import React from 'react';
import { featuredProjects } from '../../data/mockData';
import { ProjectCard } from '../molecules/ProjectCard';
import { FileBoxIllustration } from '../molecules/FileBoxIllustration';
import './ProjectsSection.css';

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header-wrapper">
          <div className="projects-title-group">
            <div className="section-header">
              <h2 className="font-handlee section-title">Featured Projects</h2>
            </div>
            <p className="font-inter projects-subtitle">
              Have designed more<br />
              than 20 projects
            </p>
          </div>
          <div className="projects-illustration-container">
            <FileBoxIllustration />
          </div>
        </div>
        
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              badgeColor={project.badgeColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
