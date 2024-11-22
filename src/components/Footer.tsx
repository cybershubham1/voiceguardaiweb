import React from 'react';
import { Shield, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold">VoiceGuardAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the fight against deepfakes with advanced multi-model detection technology.
              Founded by Aniket Chikse, we're committed to protecting digital authenticity across all media types.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/cyberaniket?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aniketchikse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/voiceguardai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-indigo-400"
              >
                <Shield className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Audio Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Video Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Image Detection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Text Verification</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} VoiceGuardAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;