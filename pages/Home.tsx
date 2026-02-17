import React from 'react';
import { PERSONAL_INFO, NEWS_ITEMS, SOCIAL_LINKS } from '../constants';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '/profile.jpg';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl">
      <div className="space-y-12">
        {/* Hero section with photo */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12">
          <div className="space-y-4 flex-1">
            <h2 className="text-brand-muted uppercase tracking-[0.2em] text-xs font-semibold">
              Physician &middot; Researcher
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-brand-dark">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base md:text-lg text-brand-muted italic font-serif leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
          </div>
          <div className="mb-6 md:mb-0 flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-brand-border hover:border-brand-muted transition-colors duration-500 shadow-md">
              <img
                src={profileImg}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-brand-text font-serif leading-[1.85] max-w-none space-y-5 text-base md:text-[1.05rem]">
          <p>
            I am a physician (LMCC) and cardiovascular researcher focused on translating high-quality evidence into everyday care. I currently work as an Associate Physician in Cardiology with Alberta Health Services, supporting inpatient care and multidisciplinary decision-making.
          </p>
          <p>
            I trained at the University of Oxford as a Commonwealth Scholar (MSc) and at McMaster/PHRI through a Clinical Research Fellowship. My research spans cardiovascular disease, clinical trials, and health systems, with publications in leading journals including <em className="text-brand-dark font-semibold not-italic">JACC</em>, <em className="text-brand-dark font-semibold not-italic">European Heart Journal</em>, <em className="text-brand-dark font-semibold not-italic">BMJ Global Health</em>, and <em className="text-brand-dark font-semibold not-italic">BMC</em>.
          </p>
          <p>
            I am developing scalable solutions for low- and middle-income countries while pursuing Internal Medicine residency training. I welcome collaborations in cardiovascular research, trials, implementation science, and digital health.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <Link to="/contact" className="text-brand-blue text-base hover:text-brand-dark transition-colors duration-300 inline-flex items-center gap-2 font-semibold border-b border-brand-blue hover:border-brand-dark pb-0.5">
            Get in touch <ArrowRight size={16} />
          </Link>
          <Link to="/publications" className="text-brand-muted text-base hover:text-brand-dark transition-colors duration-300 inline-flex items-center gap-2 font-semibold hover:border-b hover:border-brand-dark pb-0.5">
            View Publications
          </Link>
        </div>

        {/* News / Latest section */}
        {NEWS_ITEMS.length > 0 && (
          <section className="pt-10 border-t border-brand-border">
            <h2 className="text-brand-muted uppercase tracking-[0.2em] text-xs font-semibold mb-8">Latest</h2>
            <div className="space-y-6">
              {NEWS_ITEMS.map((item) => (
                <div key={item.id} className="group bg-brand-card border border-brand-border hover:border-brand-muted/30 rounded-sm p-6 md:p-8 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {item.category && (
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-brand-blue font-semibold px-2 py-0.5 border border-brand-blue/20 rounded-full">{item.category}</span>
                    )}
                    <span className="text-xs text-brand-muted flex items-center gap-1.5">
                      <Calendar size={11} /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 leading-snug">{item.title}</h3>
                  <p className="text-brand-muted font-body text-sm md:text-[0.95rem] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick links to platforms */}
        <section className="pt-4">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-dark transition-colors duration-300"
              >
                {link.platform} <ArrowUpRight size={12} className="opacity-40" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
