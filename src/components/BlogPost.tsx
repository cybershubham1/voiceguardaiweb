import React from 'react';
import { Calendar, Clock, User, X } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

interface BlogPostProps {
  post: BlogPost;
  onClick?: () => void;
  isFullView?: boolean;
  onClose?: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onClick, isFullView, onClose }) => {
  if (isFullView) {
    return (
      <div className="fixed inset-0 bg-slate-900/95 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-16">
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="aspect-video relative">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {post.content || `This is a full blog post about ${post.title}. 
                  The content would typically be much longer and more detailed, 
                  including multiple paragraphs, images, and possibly code snippets 
                  or other media. For now, we're displaying this placeholder text 
                  to demonstrate the layout.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article 
      className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;