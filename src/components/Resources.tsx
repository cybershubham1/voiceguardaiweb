import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, FileText, Brain, FileCheck } from 'lucide-react';

const ResourceCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link 
    to={link}
    className="p-6 rounded-xl bg-slate-700/30 backdrop-blur-sm hover:bg-slate-700/50 transition-all group"
  >
    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Link>
);

const Resources = () => {
  const resources = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
      title: "Blog",
      description: "Latest insights on deepfake detection and AI security developments",
      link: "/blog"
    },
    {
      icon: <Newspaper className="h-6 w-6 text-indigo-400" />,
      title: "News Center",
      description: "Stay informed about current threats and industry developments",
      link: "/news"
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-400" />,
      title: "Research Papers",
      description: "Technical papers and findings from our research team",
      link: "/research"
    },
    {
      icon: <Brain className="h-6 w-6 text-indigo-400" />,
      title: "AI Research",
      description: "Deep dives into our detection technology and methodologies",
      link: "/ai-research"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-indigo-400" />,
      title: "Case Studies",
      description: "Real-world examples of deepfake detection in action",
      link: "/case-studies"
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Resources & Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of resources on deepfake detection,
            AI security, and industry developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;