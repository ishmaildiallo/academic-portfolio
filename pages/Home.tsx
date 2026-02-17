import React from 'react';
import { PERSONAL_INFO, NEWS_ITEMS, SOCIAL_LINKS } from '../constants';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl">
      <div className="space-y-10">
        {/* Hero section with photo */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-10">
          <div className="space-y-4 flex-1">
            <h2 className="text-brand-gray uppercase tracking-widest text-sm font-bold">
              Physician & Researcher
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg md:text-xl text-brand-gray italic font-serif leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
          </div>
          <div className="mb-6 md:mb-0 flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 hover:border-white/30 transition-colors duration-300">
              <img
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-xl text-gray-300 font-serif leading-relaxed max-w-none space-y-6">
          <p>
            I am a physician (LMCC) and cardiovascular researcher focused on translating high-quality evidence into everyday care. I currently work as an Associate Physician in Cardiology with Alberta Health Services, supporting inpatient care and multidisciplinary decision-making.
          </p>
          <p>
            I trained at the University of Oxford as a Commonwealth Scholar (MSc) and at McMaster/PHRI through a Clinical Research Fellowship. My research spans cardiovascular disease, clinical trials, and health systems, with publications in leading journals including <em>JACC</em>, <em>European Heart Journal</em>, <em>BMJ Global Health</em>, and <em>BMC</em>.
          </p>
          <p>
            I am developing scalable solutions for low- and middle-income countries while pursuing Internal Medicine residency training. I welcome collaborations in cardiovascular research, trials, implementation science, and digital health.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <Link to="/contact" className="text-brand-blue text-lg hover:text-white transition-colors inline-flex items-center gap-2 font-bold border-b border-brand-blue hover:border-white pb-0.5">
            Get in touch <ArrowRight size={20} />
          </Link>
          <Link to="/publications" className="text-brand-gray text-lg hover:text-white transition-colors inline-flex items-center gap-2 font-bold hover:border-b hover:border-white pb-0.5">
            View Publications
          </Link>
        </div>

        {/* News / Latest section */}
        {NEWS_ITEMS.length > 0 && (
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-brand-gray uppercase tracking-widest text-sm font-bold mb-6">Latest</h2>
            <div className="space-y-6">
              {NEWS_ITEMS.map((item) => (
                <div key={item.id} className="group bg-brand-dark border border-white/5 hover:border-white/20 p-6 transition-all duration-300">
                  <div className="flex items-baseline gap-3 mb-2">
                    {item.category && (
                      <span className="text-xs uppercase tracking-widest text-brand-blue font-bold">{item.category}</span>
                    )}
                    <span className="text-xs text-brand-gray flex items-center gap-1.5">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-gray font-body text-base leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick links to platforms */}
        <section className="pt-4">
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-brand-gray hover:text-white transition-colors"
              >
                {link.platform} <ArrowUpRight size={12} className="opacity-50" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
