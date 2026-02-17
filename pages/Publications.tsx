import React from 'react';
import { PUBLICATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Publications: React.FC = () => {
  const peerReviewed = PUBLICATIONS.filter(p => p.category === "Peer-reviewed Manuscripts");
  const preprints = PUBLICATIONS.filter(p => p.category === "Preprints");
  const abstracts = PUBLICATIONS.filter(p => p.category === "Conference Abstracts and Posters");
  const opinionItems = PUBLICATIONS.filter(p => p.category === "Opinion Pieces");

  const renderPublication = (pub: any) => (
    <li key={pub.id} className="mb-8 border-l border-white/10 pl-6 hover:border-white transition-colors duration-300">
      <div className="text-white font-medium text-lg font-body">
        {pub.url || pub.doi ? (
          <a
            href={pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : '#')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gray transition-colors inline-flex items-baseline gap-2"
          >
            {pub.title}
            <ArrowUpRight size={14} className="opacity-50" />
          </a>
        ) : (
          <span>{pub.title}</span>
        )}
      </div>
      <div className="text-brand-gray mt-2 font-body text-base">
        {pub.authors.join(", ")}. <span className="text-white/80 italic">{pub.venue}</span>, {pub.year}.
      </div>
    </li>
  );

  return (
    <div className="space-y-16 animate-fade-in">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-gray mb-12 pb-6 border-b border-white/10">
          <span><span className="text-white font-bold">{peerReviewed.length}</span> Peer-Reviewed</span>
          <span><span className="text-white font-bold">{preprints.length}</span> Preprints</span>
          <span><span className="text-white font-bold">{abstracts.length}</span> Abstracts</span>
          <span><span className="text-white font-bold">{opinionItems.length}</span> Opinion Pieces</span>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-brand-gray">Peer-Reviewed Manuscripts</h2>
            <ul className="list-none pl-0">
              {peerReviewed.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-brand-gray">Preprints</h2>
            <ul className="list-none pl-0">
              {preprints.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-brand-gray">Conference Abstracts & Posters</h2>
            <ul className="list-none pl-0">
              {abstracts.map(renderPublication)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-brand-gray">Opinion Pieces</h2>
            <ul className="list-none pl-0">
              {opinionItems.map(renderPublication)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
