import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, scale, rotationSpeed }: { position: [number, number, number], scale: number, rotationSpeed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#dc2626"
        roughness={0.3}
        metalness={0.8}
        emissive="#dc2626"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#dc2626" />
        
        <AnimatedSphere />
        <FloatingRing position={[0, 0, 0]} scale={3.5} rotationSpeed={0.2} />
        <FloatingRing position={[0, 0, 0]} scale={4.2} rotationSpeed={-0.15} />
        <FloatingRing position={[0, 0, 0]} scale={5} rotationSpeed={0.1} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
