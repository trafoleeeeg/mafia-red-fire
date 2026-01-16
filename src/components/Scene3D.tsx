import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Facebook Icon - "f" in rounded square
const FacebookIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Background rounded square */}
        <RoundedBox args={[1.2, 1.2, 0.25]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </RoundedBox>
        {/* Letter "f" */}
        <mesh position={[0.05, 0, 0.15]}>
          <boxGeometry args={[0.15, 0.7, 0.1]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        <mesh position={[0.2, 0.15, 0.15]}>
          <boxGeometry args={[0.35, 0.12, 0.1]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        <mesh position={[0.15, 0.4, 0.15]}>
          <boxGeometry args={[0.25, 0.12, 0.1]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <RoundedBox args={[1.4, 1.4, 0.3]} radius={0.18} smoothness={4}>
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Instagram Icon - camera in rounded square
const InstagramIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[1]) * 0.25;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Background */}
        <RoundedBox args={[1.2, 1.2, 0.25]} radius={0.25} smoothness={4}>
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </RoundedBox>
        {/* Camera lens circle */}
        <mesh position={[0, 0, 0.15]}>
          <torusGeometry args={[0.28, 0.08, 16, 32]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Center dot */}
        <mesh position={[0, 0, 0.15]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Corner flash */}
        <mesh position={[0.35, 0.35, 0.15]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <RoundedBox args={[1.4, 1.4, 0.3]} radius={0.28} smoothness={4}>
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </RoundedBox>
      </group>
    </Float>
  );
};

// YouTube Icon - play button in rounded rectangle
const YouTubeIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.45 + position[0] * 2) * 0.28;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    }
  });

  const triangleShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.12, -0.18);
    shape.lineTo(-0.12, 0.18);
    shape.lineTo(0.18, 0);
    shape.closePath();
    return shape;
  }, []);

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Background rounded rectangle */}
        <RoundedBox args={[1.6, 1.1, 0.25]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </RoundedBox>
        {/* Play triangle */}
        <mesh position={[0.05, 0, 0.15]} rotation={[0, 0, 0]}>
          <extrudeGeometry args={[triangleShape, { depth: 0.1, bevelEnabled: false }]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <RoundedBox args={[1.8, 1.3, 0.3]} radius={0.22} smoothness={4}>
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Telegram Icon - paper plane
const TelegramIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.55 + position[1]) * 0.3;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const planeShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0.6, 0);
    shape.lineTo(-0.4, 0.35);
    shape.lineTo(-0.2, 0);
    shape.lineTo(-0.4, -0.35);
    shape.closePath();
    return shape;
  }, []);

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Circle background */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </mesh>
        {/* Paper plane */}
        <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, -0.2]}>
          <extrudeGeometry args={[planeShape, { depth: 0.08, bevelEnabled: false }]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <mesh>
          <cylinderGeometry args={[0.7, 0.7, 0.25, 32]} />
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </mesh>
      </group>
    </Float>
  );
};

// TikTok Icon - music note
const TikTokIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.25;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.15;
    }
  });

  return (
    <Float speed={1.7} rotationIntensity={0.25} floatIntensity={0.55}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Background */}
        <RoundedBox args={[1.1, 1.3, 0.25]} radius={0.18} smoothness={4}>
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </RoundedBox>
        {/* Music note stem */}
        <mesh position={[0.1, 0.1, 0.15]}>
          <boxGeometry args={[0.1, 0.65, 0.1]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Note head */}
        <mesh position={[-0.05, -0.25, 0.15]} rotation={[0, 0, 0.3]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Flag */}
        <mesh position={[0.2, 0.35, 0.15]}>
          <boxGeometry args={[0.15, 0.2, 0.08]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <RoundedBox args={[1.3, 1.5, 0.3]} radius={0.2} smoothness={4}>
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Google Icon - "G" shape
const GoogleIcon = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialPos.current[1] + Math.sin(state.clock.elapsedTime * 0.48 + position[1] * 2) * 0.27;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.38) * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Circle background */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#7f1d1d" roughness={0.5} metalness={0.5} emissive="#450a0a" emissiveIntensity={0.08} />
        </mesh>
        {/* G shape - arc */}
        <mesh position={[0, 0, 0.35]} rotation={[0, 0, -0.3]}>
          <torusGeometry args={[0.32, 0.1, 12, 24, Math.PI * 1.5]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* G horizontal bar */}
        <mesh position={[0.1, 0, 0.45]}>
          <boxGeometry args={[0.25, 0.1, 0.08]} />
          <meshStandardMaterial color="#fafafa" roughness={0.4} />
        </mesh>
        {/* Glow */}
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#7f1d1d" transparent opacity={0.04} />
        </mesh>
      </group>
    </Float>
  );
};

// Accent particles
const AccentParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(40 * 3);
    const colors = new Float32Array(40 * 3);
    
    for (let i = 0; i < 40; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      
      // Deep maroon tones
      colors[i * 3] = 0.5 + Math.random() * 0.1;
      colors[i * 3 + 1] = 0.11 + Math.random() * 0.05;
      colors[i * 3 + 2] = 0.11 + Math.random() * 0.05;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.35} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} color="#ffffff" />
        <pointLight position={[-8, -6, -5]} intensity={0.25} color="#7f1d1d" distance={20} />
        <pointLight position={[8, 5, 3]} intensity={0.2} color="#7f1d1d" distance={15} />
        
        {/* Main social icons */}
        <FacebookIcon position={[-5, 2, -2]} scale={0.7} />
        <InstagramIcon position={[4.5, 2.5, -1]} scale={0.65} />
        <YouTubeIcon position={[-4, -2, 0]} scale={0.6} />
        <TelegramIcon position={[4, -2.5, -1.5]} scale={0.65} />
        <TikTokIcon position={[-2, 3, -3]} scale={0.55} />
        <GoogleIcon position={[2, -3, -2]} scale={0.6} />
        
        {/* Background smaller icons */}
        <FacebookIcon position={[5.5, 0, -4]} scale={0.4} />
        <InstagramIcon position={[-3, -3.5, -3]} scale={0.35} />
        <YouTubeIcon position={[0, 3.5, -4]} scale={0.35} />
        
        <AccentParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
