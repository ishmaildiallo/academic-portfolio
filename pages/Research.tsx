import React from 'react';
import { RESEARCH_PROJECTS } from '../constants';

export const Research: React.FC = () => {
  return (
    <div className="space-y-14 animate-fade-in">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-brand-dark">Research</h1>
        <p className="text-base md:text-[1.05rem] text-brand-muted font-body leading-relaxed">
          My work investigates the intersection of cardiovascular health and systemic inequities, designing resilient healthcare delivery models for resource-limited settings.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {RESEARCH_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="group bg-brand-card border border-brand-border hover:border-brand-muted/30 transition-all duration-500 rounded-sm overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {project.imageUrl && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6 md:p-8 space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-brand-muted font-body text-sm md:text-[0.95rem] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
