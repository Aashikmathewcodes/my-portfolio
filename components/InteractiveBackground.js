import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function InteractiveBackground() {
  return (
    <div
      className="interactive-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Place the background behind other content
        pointerEvents: 'none', // Allow interactions with UI elements above
      }}
    >
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        {/* Animated starfield effect */}
        <Stars 
          radius={100}       // Inner sphere radius (default: 100)
          depth={50}         // Depth of the starfield (default: 50)
          count={5000}       // Number of stars (default: 5000)
          factor={4}         // Size factor (default: 4)
          saturation={0}     // Star saturation (0 to 1, default: 0)
          fade               // Enable star fade-out effect
          speed={1}          // Animation speed (default: 1)
        />
        {/* Optionally, keep OrbitControls disabled for interactivity if needed */}
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
