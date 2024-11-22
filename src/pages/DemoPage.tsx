import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const DemoPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Shield className="h-12 w-12 text-indigo-500" />
            <h1 className="text-4xl font-bold">Try VoiceGuardAI</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our advanced deepfake detection technology through our online platform
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-300 mb-8">
              Access our comprehensive deepfake detection platform to protect your digital identity and verify content authenticity.
            </p>
            
            <a
              href="https://app.voiceguardai.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Launch VoiceGuardAI Platform
              <ExternalLink className="h-5 w-5" />
            </a>

            <div className="mt-8 p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <p className="text-gray-300">
                Need a custom implementation or enterprise solution? 
                <a href="/contact" className="text-indigo-400 hover:text-indigo-300 ml-1">
                  Contact our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;