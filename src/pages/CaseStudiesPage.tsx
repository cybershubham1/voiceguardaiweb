import React from 'react';
import { Building2, ArrowRight, Shield } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Major Bank Implements Voice Authentication",
      company: "Global Financial Services Corp",
      industry: "Banking",
      challenge: "Preventing fraudulent transactions via phone banking",
      solution: "Implemented VoiceGuardAI's real-time voice authentication system",
      results: ["97% reduction in voice fraud attempts", "Customer satisfaction increased by 35%"],
      imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800&h=450"
    },
    {
      title: "Media Company Protects Content Creation",
      company: "Creative Media Productions",
      industry: "Entertainment",
      challenge: "Protecting against unauthorized AI voice cloning",
      solution: "Deployed comprehensive voice and video protection suite",
      results: ["100% detection rate of synthetic content", "50% faster content verification"],
      imageUrl: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=800&h=450"
    },
    {
      title: "Online KYC Fraud: Preventing Fake Account Creation",
      company: "FinTech Solutions Inc.",
      industry: "Financial Technology",
      challenge: "Rising cases of synthetic identities being used to create fraudulent accounts during remote KYC verification",
      solution: "Implementation of VoiceGuardAI's multi-modal verification system with liveness detection",
      results: [
        "99.9% accuracy in detecting synthetic faces",
        "85% reduction in fraudulent account creation attempts",
        "60% faster KYC verification process",
        "Annual fraud prevention savings of $2.5M"
      ],
      details: {
        preventionStrategies: [
          "Real-time facial analysis with liveness detection",
          "Voice pattern verification during video calls",
          "Document authenticity verification",
          "Behavioral biometrics analysis"
        ],
        impact: [
          "Enhanced regulatory compliance",
          "Increased customer trust",
          "Reduced operational costs",
          "Improved risk management"
        ]
      },
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800&h=450"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world applications of our technology in protecting organizations against deepfake threats
          </p>
        </div>

        <div className="grid gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-indigo-400 mb-4">
                    <Building2 className="h-5 w-5" />
                    <span>{study.industry}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-gray-400 mb-6">{study.company}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Challenge</h3>
                      <p className="text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solution</h3>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Key Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-400">
                            <ArrowRight className="h-4 w-4 text-indigo-400" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {study.details && (
                      <>
                        <div className="bg-slate-900/50 rounded-lg p-6">
                          <h3 className="font-semibold mb-4">Prevention Strategies</h3>
                          <ul className="space-y-2">
                            {study.details.preventionStrategies.map((strategy, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-400">
                                <Shield className="h-4 w-4 text-indigo-400" />
                                {strategy}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-slate-900/50 rounded-lg p-6">
                          <h3 className="font-semibold mb-4">Business Impact</h3>
                          <ul className="space-y-2">
                            {study.details.impact.map((impact, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-400">
                                <ArrowRight className="h-4 w-4 text-indigo-400" />
                                {impact}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
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

export default CaseStudiesPage;