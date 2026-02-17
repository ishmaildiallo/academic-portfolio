import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const allPosts = [...BLOG_POSTS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-10 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Writing</h1>

      <div className="grid gap-6">
        {allPosts.map((post) => {
          const isInternal = post.type === 'internal';
          const linkProps = isInternal
            ? { to: `/blog/${post.slug}` }
            : { href: post.url, target: '_blank', rel: 'noopener noreferrer' };

          const Wrapper = isInternal ? Link : 'a';

          return (
            <article key={post.id} className="group bg-brand-card border border-brand-border p-6 md:p-8 hover:border-brand-muted/30 transition-all duration-300 rounded-sm">
              <Wrapper {...(linkProps as any)} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                  <h2 className="text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors duration-300 flex items-center gap-2">
                    {post.title}
                    {!isInternal && <ArrowUpRight size={16} className="opacity-40" />}
                  </h2>
                  <span className="text-brand-muted font-mono text-xs mt-2 md:mt-0">
                    {post.date}
                  </span>
                </div>
                <p className="text-brand-muted font-body text-sm md:text-[0.95rem] leading-relaxed">
                  {post.excerpt}
                </p>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[0.65rem] px-2.5 py-1 border border-brand-border text-brand-muted rounded-full tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {!isInternal && (
                   <span className="text-[0.65rem] text-brand-muted/60 mt-4 block uppercase tracking-[0.2em]">
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
