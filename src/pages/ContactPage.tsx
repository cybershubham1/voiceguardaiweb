import React from 'react';
import { Mail, Linkedin, Instagram, ExternalLink, Shield, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/founder.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with us to learn more about how VoiceGuardAI can protect your digital identity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="h-8 w-8 text-indigo-500" />
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:voiceguardai@gmail.com"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      voiceguardai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">Available upon request</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <h3 className="font-semibold mb-4">Connect with us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/voiceguardai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-indigo-400" />
                    </a>
                    <a
                      href="https://www.instagram.com/cyberaniket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-indigo-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-indigo-500/20">
                  <img
                    src="/founder.jpg"
                    alt="Aniket Chikse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">Aniket Chikse</h2>
                <p className="text-indigo-400 mb-4">Founder & CEO</p>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-gray-300 mb-6">
                    Leading VoiceGuardAI's mission to protect digital authenticity and combat deepfake threats through innovative AI solutions.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.linkedin.com/in/aniketchikse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-indigo-400" />
                        <span>LinkedIn Profile</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                    <a
                      href="https://www.instagram.com/cyberaniket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Instagram className="h-5 w-5 text-indigo-400" />
                        <span>Instagram Profile</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;