import React from 'react';
import { RESEARCH_PROJECTS } from '../constants';

export const Research: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
        <p className="text-xl text-brand-gray font-body leading-loose">
          My work investigates the intersection of cardiovascular health and systemic inequities, designing resilient healthcare delivery models for resource-limited settings.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {RESEARCH_PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="group bg-brand-dark border border-white/5 hover:border-white/20 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {project.imageUrl && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
            )}
            <div className="p-8 space-y-4">
              <h2 className="text-2xl font-bold group-hover:text-brand-gray transition-colors">
                {project.title}
              </h2>
              <p className="text-brand-gray font-body leading-loose">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};