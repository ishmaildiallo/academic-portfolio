import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const allPosts = [...BLOG_POSTS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-12 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold">Writing</h1>

      <div className="grid gap-8">
        {allPosts.map((post) => {
          const isInternal = post.type === 'internal';
          const linkProps = isInternal
            ? { to: `/blog/${post.slug}` }
            : { href: post.url, target: '_blank', rel: 'noopener noreferrer' };

          const Wrapper = isInternal ? Link : 'a';

          return (
            <article key={post.id} className="group bg-brand-dark border border-white/5 p-8 hover:border-white/20 transition-all">
              <Wrapper {...(linkProps as any)} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-brand-gray transition-colors flex items-center gap-2">
                    {post.title}
                    {!isInternal && <ArrowUpRight size={18} className="opacity-50" />}
                  </h2>
                  <span className="text-brand-gray font-mono text-sm mt-2 md:mt-0">
                    {post.date}
                  </span>
                </div>
                <p className="text-brand-gray font-body text-lg leading-loose">
                  {post.excerpt}
                </p>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 border border-white/10 text-brand-gray rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {!isInternal && (
                   <span className="text-xs text-white/50 mt-4 block uppercase tracking-widest">
                     Read on Substack
                   </span>
                )}
              </Wrapper>
            </article>
          );
        })}
      </div>
    </div>
  );
};
