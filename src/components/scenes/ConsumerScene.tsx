import { Float, Text, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface ConsumerSceneProps {
  position: [number, number, number];
}

const ConsumerScene = ({ position }: ConsumerSceneProps) => {
  const groupRef = useRef<Group>(null);
  const qrCodeRef = useRef<Mesh>(null);
  const storyHologramRef = useRef<Group>(null);

  useFrame((state) => {
    if (qrCodeRef.current) {
      qrCodeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    if (storyHologramRef.current) {
      storyHologramRef.current.position.y = 2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Kitchen Counter */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial 
          color="#F5F5DC" 
          roughness={0.4}
        />
      </mesh>

      {/* Kitchen Island */}
      <Box args={[4, 1, 2]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* Mango on Counter */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Glowing QR Code */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={qrCodeRef} position={[0, 1, 0]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Farm Story Hologram */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group ref={storyHologramRef} position={[3, 2, 0]}>
          <mesh>
            <planeGeometry args={[3, 2.5]} />
            <meshStandardMaterial
              color="#001a1a"
              emissive="#00ffff"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          <Text
            position={[0, 1, 0.01]}
            fontSize={0.2}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
          >
            Farm Story
          </Text>
          
          <Text
            position={[0, 0.6, 0.01]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            From: Prajwal Singh Farm
          </Text>
          
          <Text
            position={[0, 0.4, 0.01]}
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            "Grown with organic methods"
          </Text>
          
          <Text
            position={[0, 0.1, 0.01]}
            fontSize={0.12}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            Freshness: 96% ✓
          </Text>
          
          <Text
            position={[0, -0.1, 0.01]}
            fontSize={0.12}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            Green Score: A+
          </Text>
          
          <Text
            position={[0, -0.3, 0.01]}
            fontSize={0.1}
            color="#ff6b35"
            anchorX="center"
            anchorY="middle"
          >
            Journey: 3 days
          </Text>
          
          <Text
            position={[0, -0.5, 0.01]}
            fontSize={0.1}
            color="#FFD700"
            anchorX="center"
            anchorY="middle"
          >
            Impact: +12 FarmTokens earned
          </Text>
        </group>
      </Float>

      {/* AI Freshness Badge */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[-2.5, 1.5, 0]}>
          <mesh>
            <cylinderGeometry args={[0.6, 0.6, 0.1]} />
            <meshStandardMaterial
              color="#001a1a"
              emissive="#00ff00"
              emissiveIntensity={0.2}
              transparent
              opacity={0.9}
            />
          </mesh>
          
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.12}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            AI FRESH
          </Text>
          
          <Text
            position={[0, -0.2, 0.1]}
            fontSize={0.15}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            96%
          </Text>
        </group>
      </Float>

      {/* Consumer Avatar */}
      <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <group position={[-1.5, -0.3, 0]}>
          {/* Head */}
          <mesh position={[0, 1.7, 0]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          
          {/* Body */}
          <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 0.8]} />
            <meshStandardMaterial color="#FF69B4" />
          </mesh>
          
          {/* Phone scanning */}
          <mesh position={[0.6, 1.4, 0]}>
            <boxGeometry args={[0.15, 0.3, 0.05]} />
            <meshStandardMaterial 
              color="#1a1a1a"
              emissive="#00ffff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Satisfaction Particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.8}>
          <mesh 
            position={[
              Math.cos((i * Math.PI * 2) / 5) * 2.5,
              1 + Math.sin(i * 0.5) * 0.5,
              Math.sin((i * Math.PI * 2) / 5) * 2.5
            ]}
          >
            <sphereGeometry args={[0.08]} />
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Kitchen Appliances */}
      <group position={[2, -0.5, -2]}>
        <Box args={[0.8, 1.5, 0.8]}>
          <meshStandardMaterial color="#C0C0C0" />
        </Box>
      </group>

      <group position={[-2, -0.5, -2]}>
        <Box args={[1.2, 0.8, 0.8]}>
          <meshStandardMaterial color="#000000" />
        </Box>
      </group>
    </group>
  );
};

export default ConsumerScene;

# AI edit: improve ui day by day
