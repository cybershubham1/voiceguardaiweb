import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Play } from 'lucide-react';
import * as THREE from 'three';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#6366f1',
      transparent: true,
      opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative pt-32 pb-32 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 gap-2 backdrop-blur-sm">
              <Shield className="h-5 w-5" />
              <span>AI-Powered Deepfake Detection</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="block">Protect Your</span>
            <span className="block text-gradient">Digital Identity</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Advanced deepfake detection for audio, video, and images. 
            Secure your content with enterprise-grade AI protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all backdrop-blur-sm"
            >
              Try Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold transition-all backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Watch How It Works
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 max-w-lg mx-auto">
            {[
              { label: 'Accuracy Rate', value: '99.8%' },
              { label: 'Media Types', value: '4+' }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;