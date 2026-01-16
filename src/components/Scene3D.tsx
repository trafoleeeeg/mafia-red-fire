import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Central glass/metal sphere - the hero element
const GlassSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshPhysicalMaterial
        color="#7f1d1d"
        metalness={0.95}
        roughness={0.05}
        transmission={0.15}
        thickness={2}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={1.5}
        emissive="#7f1d1d"
        emissiveIntensity={0.03}
      />
    </mesh>
  );
};

// Thin orbital rings around the sphere
const OrbitRing = ({ radius, rotation, speed }: { radius: number; rotation: [number, number, number]; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshPhysicalMaterial
        color="#991b1b"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.4}
        emissive="#7f1d1d"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
};

// Small floating abstract shapes
const FloatingShape = ({ 
  position, 
  geometry, 
  size, 
  speed 
}: { 
  position: [number, number, number]; 
  geometry: 'octahedron' | 'tetrahedron' | 'sphere';
  size: number;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    }
  });

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case 'octahedron':
        return <octahedronGeometry args={[size]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[size]} />;
      case 'sphere':
        return <sphereGeometry args={[size, 8, 8]} />;
    }
  }, [geometry, size]);

  return (
    <mesh ref={meshRef} position={position}>
      {geometryComponent}
      <meshPhysicalMaterial
        color="#7f1d1d"
        metalness={0.85}
        roughness={0.15}
        transparent
        opacity={0.6}
        emissive="#7f1d1d"
        emissiveIntensity={0.02}
      />
    </mesh>
  );
};

// Atmospheric dust particles
const DustParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#991b1b"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
};

// Floating shapes configuration
const floatingShapes: Array<{
  position: [number, number, number];
  geometry: 'octahedron' | 'tetrahedron' | 'sphere';
  size: number;
  speed: number;
}> = [
  { position: [-4, 2, -2], geometry: 'octahedron', size: 0.25, speed: 0.8 },
  { position: [4.5, -1.5, -1], geometry: 'tetrahedron', size: 0.2, speed: 1.1 },
  { position: [-3.5, -2, 1], geometry: 'sphere', size: 0.18, speed: 0.9 },
  { position: [3, 2.5, -3], geometry: 'octahedron', size: 0.22, speed: 0.7 },
  { position: [-5, 0, -2], geometry: 'tetrahedron', size: 0.15, speed: 1.2 },
  { position: [5, 1, -1.5], geometry: 'sphere', size: 0.2, speed: 0.85 },
  { position: [-2, 3, -2.5], geometry: 'octahedron', size: 0.18, speed: 1.0 },
  { position: [2.5, -2.5, -1], geometry: 'tetrahedron', size: 0.22, speed: 0.75 },
  { position: [-4.5, 1.5, 0], geometry: 'sphere', size: 0.16, speed: 1.05 },
  { position: [4, -0.5, -2.5], geometry: 'octahedron', size: 0.2, speed: 0.95 },
];

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={0.8}
          color="#ffffff"
        />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#7f1d1d" />
        <pointLight position={[0, 3, 3]} intensity={0.2} color="#991b1b" />
        
        <GlassSphere />
        
        <OrbitRing radius={3.2} rotation={[Math.PI * 0.3, 0, 0]} speed={0.15} />
        <OrbitRing radius={3.8} rotation={[Math.PI * 0.5, Math.PI * 0.2, 0]} speed={-0.1} />
        <OrbitRing radius={4.2} rotation={[Math.PI * 0.15, Math.PI * 0.4, 0]} speed={0.08} />
        
        {floatingShapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
        
        <DustParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
