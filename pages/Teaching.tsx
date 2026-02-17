import React from 'react';
import { TEACHING_COURSES } from '../constants';

export const Teaching: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Teaching & Mentorship</h1>

      <div className="grid gap-8">
        {TEACHING_COURSES.map((course) => (
          <div key={course.id} className="bg-brand-dark border border-white/5 p-8 hover:border-white/20 transition-colors">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">{course.title}</h2>
              <span className="text-brand-gray font-mono text-sm tracking-widest">{course.semester}</span>
            </div>
            <div className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">{course.role}</div>
            <p className="text-brand-gray font-body leading-loose text-lg">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};