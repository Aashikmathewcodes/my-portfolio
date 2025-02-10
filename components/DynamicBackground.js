import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Float, OrbitControls } from '@react-three/drei';

// A floating neon cube component with customizable speed.
function FloatingCube({ position, speed = 3 }) {
  return (
    <Float 
      speed={speed} 
      rotationIntensity={1.5} 
      floatIntensity={2.5} 
      position={position}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00aaff" emissive="#001133" />
      </mesh>
    </Float>
  );
}

export default function DynamicBackground() {
  // Generate an array of 15 cubes with random positions and speeds.
  const cubes = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,  // X: from -10 to 10
      (Math.random() - 0.5) * 10,  // Y: from -5 to 5
      (Math.random() - 0.5) * 20,  // Z: from -10 to 10
    ],
    speed: Math.random() * 2 + 2, // Speed between 2 and 4
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
        }}
        camera={{ position: [0, 0, 15], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Disable interactive controls for the background */}
        <OrbitControls enableZoom={false} enableRotate={false} />
        {/* Sparkles add a subtle, techy particle effect */}
        <Sparkles count={200} scale={[15, 15, 15]} speed={1} noise={2} />
        {/* Render multiple floating cubes */}
        {cubes.map((cube, i) => (
          <FloatingCube key={i} position={cube.position} speed={cube.speed} />
        ))}
      </Canvas>
    </div>
  );
}