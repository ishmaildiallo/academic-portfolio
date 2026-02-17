import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
      
      <div className="prose prose-invert prose-lg text-brand-gray font-body leading-relaxed max-w-none space-y-6">
        <p>
          I am always open to discussing new research collaborations, speaking opportunities, or answering questions from students and trainees.
        </p>
        
        <div className="p-8 bg-brand-dark border border-white/5 my-8">
            <p className="text-xl text-white mb-2">Email</p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-gray hover:text-white transition-colors text-lg">
                {PERSONAL_INFO.email}
            </a>
        </div>

        <p>
          You can also find me on these platforms:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          {SOCIAL_LINKS.map(link => (
            <a 
                key={link.platform}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between p-4 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all group"
            >
                <span className="font-sans font-medium text-white">{link.platform}</span>
                <ArrowUpRight size={18} className="text-brand-gray group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};