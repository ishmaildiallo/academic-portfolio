import React from 'react';
import { TEACHING_COURSES } from '../constants';

export const Teaching: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Teaching & Mentorship</h1>

      <div className="grid gap-6">
        {TEACHING_COURSES.map((course) => (
          <div key={course.id} className="bg-brand-card border border-brand-border p-6 md:p-8 hover:border-brand-muted/30 transition-all duration-300 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
              <h2 className="text-lg md:text-xl font-bold text-brand-dark">{course.title}</h2>
              <span className="text-brand-muted font-mono text-xs tracking-widest mt-1 md:mt-0">{course.semester}</span>
            </div>
            <div className="text-xs font-semibold text-brand-muted mb-4 uppercase tracking-[0.15em]">{course.role}</div>
            <p className="text-brand-muted font-body leading-relaxed text-sm md:text-[0.95rem]">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
