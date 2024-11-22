import React from 'react';
import { Users, Handshake, Briefcase, Newspaper } from 'lucide-react';

const Company = () => {
  return (
    <section className="py-24 bg-slate-800/50" id="company">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">About VoiceGuardAI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneering the future of digital authenticity through advanced AI technology
            and unwavering commitment to truth.
          </p>
        </div>

        {/* Mission & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300">
              Our mission is to safeguard digital truth in an era of synthetic media,
              empowering organizations to maintain authenticity and trust.
            </p>
          </div>

          <div className="bg-slate-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Leadership</h3>
            <div className="flex items-center space-x-6 bg-slate-800/50 p-6 rounded-lg">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-500/20">
                <img
                  src="/founder.jpg"
                  alt="Aniket Chikse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Aniket Chikse</h4>
                <p className="text-indigo-400 mb-4">Founder & CEO</p>
                <p className="text-sm text-gray-300">
                  Leading VoiceGuardAI's mission to protect digital authenticity
                  through innovative AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="h-6 w-6" />,
              title: "Join Us",
              description: "Be part of our mission"
            },
            {
              icon: <Handshake className="h-6 w-6" />,
              title: "Partner With Us",
              description: "Strategic collaborations"
            },
            {
              icon: <Briefcase className="h-6 w-6" />,
              title: "Our Culture",
              description: "Innovation & integrity"
            },
            {
              icon: <Newspaper className="h-6 w-6" />,
              title: "Latest News",
              description: "Company updates"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-700/20 hover:bg-slate-700/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;