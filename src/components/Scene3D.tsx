import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// Floating Social Icon Component
const FloatingSocialIcon = ({ 
  position, 
  iconType, 
  color,
  scale = 0.5 
}: { 
  position: [number, number, number];
  iconType: 'facebook' | 'instagram' | 'tiktok' | 'telegram' | 'youtube' | 'google';
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialPosition.current[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      meshRef.current.position.x = initialPosition.current[0] + Math.sin(state.clock.elapsedTime * 0.3 + position[1]) * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  // Simple 3D box representation of social icons with letters
  const getIconGeometry = () => {
    switch (iconType) {
      case 'facebook':
        return <boxGeometry args={[1, 1, 0.3]} />;
      case 'instagram':
        return <boxGeometry args={[1, 1, 0.3]} />;
      case 'tiktok':
        return <boxGeometry args={[0.8, 1.1, 0.3]} />;
      case 'telegram':
        return <coneGeometry args={[0.6, 1, 3]} />;
      case 'youtube':
        return <boxGeometry args={[1.2, 0.85, 0.3]} />;
      case 'google':
        return <sphereGeometry args={[0.55, 32, 32]} />;
      default:
        return <boxGeometry args={[1, 1, 0.3]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={meshRef} position={position} scale={scale}>
        <mesh>
          {getIconGeometry()}
          <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Glow effect */}
        <mesh scale={1.15}>
          {getIconGeometry()}
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
};

// Small accent particles
const AccentParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(80 * 3);
    const colors = new Float32Array(80 * 3);
    
    for (let i = 0; i < 80; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Red to orange gradient
      const t = Math.random();
      colors[i * 3] = 0.86 + t * 0.12;
      colors[i * 3 + 1] = 0.15 + t * 0.4;
      colors[i * 3 + 2] = 0.15;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Glowing orbs for atmosphere
const GlowingOrb = ({ position, color, scale = 0.1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.25;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.6}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.3} />
        
        {/* Main directional light */}
        <directionalLight position={[10, 10, 5]} intensity={0.7} color="#ffffff" />
        
        {/* Red accent lights */}
        <pointLight position={[-8, -6, -5]} intensity={0.8} color="#dc2626" distance={20} />
        <pointLight position={[8, 5, 3]} intensity={0.5} color="#ff4444" distance={15} />
        <pointLight position={[0, -4, 5]} intensity={0.4} color="#ff6b35" distance={12} />
        
        {/* Floating Social Media Icons */}
        <FloatingSocialIcon position={[-4.5, 2.5, -2]} iconType="facebook" color="#dc2626" scale={0.6} />
        <FloatingSocialIcon position={[4, 3, -1]} iconType="instagram" color="#ff4444" scale={0.55} />
        <FloatingSocialIcon position={[-3, -2, 0]} iconType="tiktok" color="#ff6b35" scale={0.5} />
        <FloatingSocialIcon position={[3.5, -2.5, -2]} iconType="telegram" color="#dc2626" scale={0.55} />
        <FloatingSocialIcon position={[-5, 0, -1]} iconType="youtube" color="#ff3333" scale={0.5} />
        <FloatingSocialIcon position={[5, 0.5, -3]} iconType="google" color="#ff4444" scale={0.6} />
        
        {/* Additional smaller icons in background */}
        <FloatingSocialIcon position={[-2, 3.5, -4]} iconType="facebook" color="#dc2626" scale={0.35} />
        <FloatingSocialIcon position={[2, -3.5, -3]} iconType="instagram" color="#ff6b35" scale={0.3} />
        <FloatingSocialIcon position={[0, 2, -5]} iconType="tiktok" color="#ff4444" scale={0.25} />
        
        {/* Glowing orbs for atmosphere */}
        <GlowingOrb position={[6, 2, -2]} color="#dc2626" scale={0.12} />
        <GlowingOrb position={[-6, -1, -1]} color="#ff4444" scale={0.1} />
        <GlowingOrb position={[3, -4, 0]} color="#ff6b35" scale={0.08} />
        <GlowingOrb position={[-4, 4, -3]} color="#dc2626" scale={0.09} />
        <GlowingOrb position={[0, -3, -2]} color="#ff3333" scale={0.07} />
        
        {/* Accent particles */}
        <AccentParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
