import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Scanner = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[2, 0.2, 16, 100]} />
      <meshStandardMaterial color="#6366f1" emissive="#4f46e5" roughness={0.3} />
    </mesh>
  );
};

const ScannerVisualization = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden bg-slate-900/50">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scanner />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ScannerVisualization;