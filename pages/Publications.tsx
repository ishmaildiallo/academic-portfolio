import React from 'react';
import { PUBLICATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Publications: React.FC = () => {
  const peerReviewed = PUBLICATIONS.filter(p => p.category === "Peer-reviewed Manuscripts");
  const preprints = PUBLICATIONS.filter(p => p.category === "Preprints");
  const abstracts = PUBLICATIONS.filter(p => p.category === "Conference Abstracts and Posters");
  const opinionItems = PUBLICATIONS.filter(p => p.category === "Opinion Pieces");

  const renderPublication = (pub: any) => (
    <li key={pub.id} className="mb-6 border-l-2 border-brand-border pl-5 hover:border-brand-blue transition-colors duration-300 py-1">
      <div className="text-brand-dark font-medium text-[0.95rem] leading-snug font-body">
        {pub.url || pub.doi ? (
          <a
            href={pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : '#')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-blue transition-colors duration-300 inline-flex items-baseline gap-1.5"
          >
            {pub.title}
            <ArrowUpRight size={12} className="opacity-40 flex-shrink-0" />
          </a>
        ) : (
          <span>{pub.title}</span>
        )}
      </div>
      <div className="text-brand-muted mt-1.5 font-body text-sm leading-relaxed">
        {pub.authors.join(", ")}. <span className="text-brand-text italic">{pub.venue}</span>, {pub.year}.
      </div>
    </li>
  );

  return (
    <div className="space-y-14 animate-fade-in">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-brand-dark">Publications</h1>

        <div className="space-y-14">
          <section>
            <h2 className="text-xs font-semibold mb-8 uppercase tracking-[0.2em] text-brand-muted">Peer-Reviewed Manuscripts</h2>
            <ul className="list-none pl-0">
              {peerReviewed.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold mb-8 uppercase tracking-[0.2em] text-brand-muted">Preprints</h2>
            <ul className="list-none pl-0">
              {preprints.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold mb-8 uppercase tracking-[0.2em] text-brand-muted">Conference Abstracts & Posters</h2>
            <ul className="list-none pl-0">
              {abstracts.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold mb-8 uppercase tracking-[0.2em] text-brand-muted">Opinion Pieces</h2>
            <ul className="list-none pl-0">
              {opinionItems.map(renderPublication)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
