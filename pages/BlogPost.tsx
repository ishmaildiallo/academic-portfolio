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
      <Link to="/blog" className="inline-flex items-center gap-2 text-base text-brand-gray hover:text-brand-blue mb-12 transition-colors">
        <ArrowLeft size={18} /> Back to Writing
      </Link>

      <article>
        <header className="mb-12">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
             {post.title}
           </h1>
           <div className="flex flex-wrap items-center gap-4">
             <span className="text-lg text-brand-gray font-serif">
               {post.date}
             </span>
             {/* Tags in blog post header */}
             {post.tags && post.tags.length > 0 && (
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <span key={tag} className="text-xs px-2.5 py-1 border border-white/10 text-brand-gray rounded-full">
                     {tag}
                   </span>
                 ))}
               </div>
             )}
           </div>
           {post.imageUrl && (
             <div className="w-full aspect-[21/9] overflow-hidden mt-8 mb-10 border border-white/10">
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
             </div>
           )}
        </header>

        <div
          className="prose prose-invert prose-xl max-w-none
          prose-p:font-serif prose-p:leading-relaxed prose-p:text-gray-300 prose-p:my-6
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-white
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
          prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-bold
          prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-gray-700 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:my-8
          prose-strong:text-white prose-strong:font-bold
          prose-li:text-gray-300 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </div>
  );
};
