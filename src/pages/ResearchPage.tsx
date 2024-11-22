import React from 'react';
import { FileText, Download } from 'lucide-react';

const ResearchPage = () => {
  const papers = [
    {
      title: "Advanced Techniques in Voice Deepfake Detection",
      authors: "VoiceGuardAI Research Team",
      date: "March 2024",
      abstract: "This paper presents novel approaches to detecting synthetic voices using multi-modal analysis and advanced neural network architectures. Our research demonstrates significant improvements in accuracy and processing speed for real-time voice authentication systems.",
      downloadUrl: "#",
      tags: ["Voice Analysis", "AI", "Machine Learning"]
    },
    {
      title: "Real-time Video Authentication Framework",
      authors: "VoiceGuardAI Research Team",
      date: "February 2024",
      abstract: "A comprehensive framework for real-time detection of manipulated video content, incorporating temporal analysis, facial consistency verification, and behavioral pattern recognition. This paper presents breakthrough methodologies in video deepfake detection.",
      downloadUrl: "#",
      tags: ["Video Analysis", "Real-time Processing", "Deep Learning"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Research Papers</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest research findings and technical papers in deepfake detection and digital security
          </p>
        </div>

        <div className="grid gap-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{paper.title}</h2>
                  <p className="text-indigo-400 mb-4">{paper.authors} • {paper.date}</p>
                </div>
                <a
                  href={paper.downloadUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  PDF
                </a>
              </div>
              
              <div className="flex gap-2 mb-4">
                {paper.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Abstract</h3>
                    <p className="text-gray-400">{paper.abstract}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;