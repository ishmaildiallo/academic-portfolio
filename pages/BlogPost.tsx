import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug && p.type === 'internal');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-blue mb-10 transition-colors duration-300">
        <ArrowLeft size={16} /> Back to Writing
      </Link>

      <article>
        <header className="mb-10">
           <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
             {post.title}
           </h1>
           <div className="flex flex-wrap items-center gap-4">
             <span className="text-base text-brand-muted font-serif">
               {post.date}
             </span>
             {post.tags && post.tags.length > 0 && (
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <span key={tag} className="text-[0.65rem] px-2.5 py-1 border border-brand-border text-brand-muted rounded-full tracking-wide">
                     {tag}
                   </span>
                 ))}
               </div>
             )}
           </div>
           {post.imageUrl && (
             <div className="w-full aspect-[21/9] overflow-hidden mt-8 mb-8 border border-brand-border rounded-sm">
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
             </div>
           )}
        </header>

        <div
          className="prose prose-lg max-w-none
          prose-p:font-serif prose-p:leading-[1.9] prose-p:text-brand-text prose-p:my-7 prose-p:text-[0.95rem] md:prose-p:text-base
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-brand-dark
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
          prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:font-bold
          prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-brand-muted prose-blockquote:my-8
          prose-strong:text-brand-dark prose-strong:font-bold
          prose-li:text-brand-text prose-li:my-2 prose-li:text-[0.95rem] md:prose-li:text-base prose-li:leading-[1.9]
          prose-ul:my-7 prose-ol:my-7
          prose-hr:border-brand-border prose-hr:my-10"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </div>
  );
};
