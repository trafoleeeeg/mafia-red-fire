import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#1a0505"
          roughness={0.15}
          metalness={0.95}
          distort={0.3}
          speed={1.5}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const GlowingSphere = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const FloatingRing = ({ position, scale, rotationSpeed, tiltX = 0, tiltY = 0 }: { 
  position: [number, number, number], 
  scale: number, 
  rotationSpeed: number,
  tiltX?: number,
  tiltY?: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = tiltX + state.clock.elapsedTime * rotationSpeed * 0.3;
      meshRef.current.rotation.y = tiltY + state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#dc2626"
        roughness={0.2}
        metalness={0.9}
        emissive="#dc2626"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(150 * 3);
    const colors = new Float32Array(150 * 3);
    
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      // Red to orange gradient
      const t = Math.random();
      colors[i * 3] = 0.86 + t * 0.12; // R
      colors[i * 3 + 1] = 0.15 + t * 0.4; // G
      colors[i * 3 + 2] = 0.15; // B
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const DiamondShape = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#2a0a0a"
          roughness={0.1}
          metalness={0.95}
          emissive="#dc2626"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Main directional light */}
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        
        {/* Red accent lights */}
        <pointLight position={[-8, -8, -5]} intensity={1} color="#dc2626" distance={20} />
        <pointLight position={[8, 5, 3]} intensity={0.6} color="#ff4444" distance={15} />
        <pointLight position={[0, -5, 5]} intensity={0.4} color="#ff6b35" distance={12} />
        
        {/* Spotlight for dramatic effect */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#dc2626"
        />
        
        {/* Main central sphere */}
        <AnimatedSphere />
        
        {/* Orbital rings */}
        <FloatingRing position={[0, 0, 0]} scale={3.2} rotationSpeed={0.15} tiltX={0.3} />
        <FloatingRing position={[0, 0, 0]} scale={3.8} rotationSpeed={-0.12} tiltX={-0.2} tiltY={0.5} />
        <FloatingRing position={[0, 0, 0]} scale={4.5} rotationSpeed={0.08} tiltX={0.6} tiltY={-0.3} />
        
        {/* Small glowing spheres */}
        <GlowingSphere position={[4, 2, -2]} scale={0.15} color="#dc2626" />
        <GlowingSphere position={[-3.5, -2.5, -1]} scale={0.12} color="#ff4444" />
        <GlowingSphere position={[3, -3, 1]} scale={0.1} color="#ff6b35" />
        <GlowingSphere position={[-4, 1.5, 2]} scale={0.08} color="#dc2626" />
        
        {/* Diamond accents */}
        <DiamondShape position={[-5, 3, -3]} scale={0.25} />
        <DiamondShape position={[5, -2, -2]} scale={0.2} />
        
        {/* Floating particles */}
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;