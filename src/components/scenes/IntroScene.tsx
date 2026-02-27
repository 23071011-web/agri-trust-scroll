import { Float, Text, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import logoImage from '../../assets/agritrust-logo.png';

interface IntroSceneProps {
  position: [number, number, number];
}

const IntroScene = ({ position }: IntroSceneProps) => {
  const groupRef = useRef<Group>(null);
  const logoRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (logoRef.current) {
      logoRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Particle Background */}
      <Sparkles
        count={100}
        scale={10}
        size={3}
        speed={0.4}
        color="#00ffff"
      />
      
      {/* AgriTrust Logo */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={logoRef}>
          {/* Logo Background Glow */}
          <mesh position={[0, 2, -0.1]}>
            <planeGeometry args={[8, 4]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.1}
            />
          </mesh>
          
          {/* Logo Text */}
          <Text
            position={[0, 2, 0]}
            fontSize={1.5}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/orbitron-bold.woff"
          >
            AgriTrust
          </Text>
          
          <Text
            position={[0, 1, 0]}
            fontSize={0.4}
            color="#ff6b35"
            anchorX="center"
            anchorY="middle"
            font="/fonts/orbitron-regular.woff"
          >
            Farm to Fork Transparency
          </Text>
        </group>
      </Float>

      {/* Blockchain Cube */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial
            color="#1a1a2e"
            emissive="#00ffff"
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting Data Points */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.1}>
          <mesh 
            position={[
              Math.cos((i * Math.PI * 2) / 5) * 3,
              -1 + Math.sin(i * 0.5) * 0.5,
              Math.sin((i * Math.PI * 2) / 5) * 3
            ]}
          >
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial
              color="#ff6b35"
              emissive="#ff6b35"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default IntroScene;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs


# AI edit: fix the bugs
