import React from 'react';
import { Mic, Video, Image, FileText, Shield, Zap, Lock, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-6 w-6 text-indigo-400" />,
      title: "Audio Detection",
      description: "Identify synthetic voices and manipulated audio content with 99.8% accuracy."
    },
    {
      icon: <Video className="h-6 w-6 text-indigo-400" />,
      title: "Video Analysis",
      description: "Real-time deepfake detection in video streams and recorded content."
    },
    {
      icon: <Image className="h-6 w-6 text-indigo-400" />,
      title: "Image Verification",
      description: "Detect manipulated images and AI-generated content instantly."
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-400" />,
      title: "Text Authentication",
      description: "Identify AI-generated text and maintain content authenticity."
    }
  ];

  const capabilities = [
    {
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-400" />,
      title: "Real-Time Processing",
      description: "Instant analysis with low-latency results."
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-400" />,
      title: "Privacy First",
      description: "Data encryption and secure processing."
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-400" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports and insights."
    }
  ];

  return (
    <div className="py-24 bg-slate-800/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Protection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced multi-model detection across all media types
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-700/30 backdrop-blur-sm hover:bg-slate-700/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-2xl" />
            <div className="relative bg-slate-800/50 rounded-2xl p-8">
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=450" 
                  alt="Deepfake Detection" 
                  className="w-full h-full object-cover"
                />
                {/* Scanning Interface Overlay */}
                <div className="absolute inset-0">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent 
                    animate-pulse" style={{ backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 76%, transparent 77%, transparent)' }} />
                  
                  {/* Scanning Line */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="h-1 bg-indigo-500/50 w-full transform translate-y-1/2 animate-scan" />
                  </div>

                  {/* Face Detection Frame */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-500/50 rounded-lg">
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-indigo-500" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-indigo-500" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-indigo-500" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-indigo-500" />
                  </div>

                  {/* Analysis Data */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-4 rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-red-500 font-semibold mb-1">Deepfake Detected</div>
                        <div className="text-sm text-gray-300">Confidence Score: 99.8%</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Processing... <span className="animate-pulse">|</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Audio Analysis</div>
                  <div className="h-12 bg-slate-600/50 rounded flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold">Detection Successful</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Video Analysis</div>
                  <div className="h-12 bg-slate-600/50 rounded flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold">Detection Successful</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-700/20 hover:bg-slate-700/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;