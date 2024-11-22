import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const NewsPage = () => {
  const news = [
    {
      title: "VoiceGuardAI Launches Advanced Deepfake Detection Platform",
      date: "March 15, 2024",
      excerpt: "Revolutionary platform combines multiple AI models for unprecedented accuracy in detecting synthetic media.",
      category: "Product Launch",
      readMore: "#"
    },
    {
      title: "Partnership Announcement: Global Security Alliance",
      date: "March 10, 2024",
      excerpt: "Strategic partnership formed to combat the rising threat of deepfake fraud in financial services.",
      category: "Partnership",
      readMore: "#"
    },
    {
      title: "VoiceGuardAI Featured in Tech Innovation Summit",
      date: "March 5, 2024",
      excerpt: "CEO Aniket Chikse presents breakthrough technology at international security conference.",
      category: "Event",
      readMore: "#"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and developments at VoiceGuardAI
          </p>
        </div>

        <div className="grid gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-400 mb-6">{item.excerpt}</p>
                  
                  <a 
                    href={item.readMore}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Read Full Story
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;