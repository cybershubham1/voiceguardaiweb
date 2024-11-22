import React from 'react';
import { Brain, Lightbulb, Code2, ArrowRight } from 'lucide-react';

const AiResearchPage = () => {
  const researchAreas = [
    {
      title: "Multi-Modal Detection",
      description: "Our approach combines audio, visual, and linguistic analysis for comprehensive deepfake detection.",
      details: [
        "Cross-modal consistency verification",
        "Temporal pattern analysis",
        "Behavioral anomaly detection"
      ],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Real-Time Processing",
      description: "Advanced algorithms optimized for instantaneous detection with minimal latency.",
      details: [
        "Parallel processing architecture",
        "Edge computing integration",
        "Adaptive resource allocation"
      ],
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Model Architecture",
      description: "State-of-the-art neural network designs specifically tailored for synthetic media detection.",
      details: [
        "Custom attention mechanisms",
        "Hierarchical feature extraction",
        "Advanced loss functions"
      ],
      icon: <Code2 className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">AI Research</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the cutting edge of artificial intelligence in deepfake detection
          </p>
        </div>

        <div className="grid gap-12">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  {area.icon}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{area.title}</h2>
                  <p className="text-gray-400 mb-6">{area.description}</p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Key Components</h3>
                    <ul className="space-y-3">
                      {area.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400">
                          <ArrowRight className="h-4 w-4 text-indigo-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Research Collaboration</h2>
          <p className="text-gray-300 mb-6">
            We're always looking to collaborate with researchers and institutions in the field of AI and security.
            If you're interested in partnering with us, reach out to our research team.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Research Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiResearchPage;