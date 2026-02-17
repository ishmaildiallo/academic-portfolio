import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Contact</h1>

      <div className="text-brand-muted font-body leading-relaxed max-w-none space-y-6 text-[0.95rem] md:text-base">
        <p>
          I am always open to discussing new research collaborations, speaking opportunities, or answering questions from students and trainees.
        </p>

        <div className="p-6 md:p-8 bg-brand-card border border-brand-border rounded-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted font-semibold mb-2">Email</p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-dark hover:text-brand-blue transition-colors duration-300 text-base md:text-lg font-medium">
                {PERSONAL_INFO.email}
            </a>
        </div>

        <p>
          You can also find me on these platforms:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {SOCIAL_LINKS.map(link => (
            <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-brand-border hover:border-brand-muted/40 hover:bg-brand-card transition-all duration-300 group rounded-sm"
            >
                <span className="font-sans font-medium text-brand-dark text-sm">{link.platform}</span>
                <ArrowUpRight size={16} className="text-brand-muted group-hover:text-brand-dark transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
