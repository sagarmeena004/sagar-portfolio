import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FuturisticCore() {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 2) * 0.3;
      meshRef.current.rotation.y = time * 0.4;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.5;
      ringRef1.current.rotation.y = time * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.4;
      ringRef2.current.rotation.y = time * 0.6;
    }
  });

  return (
    <group>
      {/* Central Glowing Tech Mesh */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#189B3F"
            emissive="#00ff66"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Wireframe Outer Shell */}
      <mesh scale={2.3}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#00ff66"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Outer Orbiting Matrix Ring 1 */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.8, 0.03, 16, 100]} />
        <meshBasicMaterial color="#189B3F" transparent opacity={0.7} />
      </mesh>

      {/* Outer Orbiting Matrix Ring 2 */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[3.4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00ff66" transparent opacity={0.5} />
      </mesh>

      {/* Lights */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff66" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#189B3F" />
    </group>
  );
}

export default function Hero3DObject() {
  return (
    <div className="w-full h-[380px] md:h-[480px] relative flex items-center justify-center">
      {/* Glow Backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-[#189B3F]/20 blur-3xl pointer-events-none animate-pulse-glow" />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <FuturisticCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
