import { Float, Text, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface MarketSceneProps {
  position: [number, number, number];
}

const MarketScene = ({ position }: MarketSceneProps) => {
  const groupRef = useRef<Group>(null);
  const smartContractRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (smartContractRef.current) {
      smartContractRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      smartContractRef.current.position.y = 2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Store Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial 
          color="#F5F5F5" 
          roughness={0.3}
        />
      </mesh>

      {/* Store Shelves */}
      {[-3, 0, 3].map((x, i) => (
        <group key={i} position={[x, -0.5, -2]}>
          <Box args={[2, 3, 0.3]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          
          {/* Produce on shelves */}
          {[0, 1, 2].map((j) => (
            <Float key={j} speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
              <mesh position={[0, j * 0.8 - 0.8, 0.3]}>
                <sphereGeometry args={[0.1]} />
                <meshStandardMaterial 
                  color="#FFD700" 
                  emissive="#FFD700"
                  emissiveIntensity={0.1}
                />
              </mesh>
            </Float>
          ))}
        </group>
      ))}

      {/* Premium Mango Crates */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[0, -1, 1]}>
          <Box args={[2, 1, 1.5]}>
            <meshStandardMaterial color="#D2691E" />
          </Box>
          
          {/* Premium Mangoes with Glow */}
          {[-0.5, 0, 0.5].map((x, i) => (
            <mesh 
              key={i}
              position={[x, 0.7, 0]}
            >
              <sphereGeometry args={[0.2]} />
              <meshStandardMaterial 
                color="#FFD700" 
                emissive="#FFD700"
                emissiveIntensity={0.3}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Smart Contract Hologram */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={smartContractRef} position={[0, 2, 0]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color="#9932cc"
            emissive="#9932cc"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      </Float>

      {/* Payment Split Visualization */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[3.5, 1, 0]}>
          <mesh>
            <planeGeometry args={[3, 2.5]} />
            <meshStandardMaterial
              color="#001a1a"
              emissive="#9932cc"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          <Text
            position={[0, 1, 0.01]}
            fontSize={0.18}
            color="#9932cc"
            anchorX="center"
            anchorY="middle"
          >
            Smart Contract
          </Text>
          
          <Text
            position={[0, 0.6, 0.01]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Payment Distribution
          </Text>
          
          {/* Payment bars */}
          <mesh position={[0, 0.2, 0.01]}>
            <boxGeometry args={[2, 0.15, 0.01]} />
            <meshStandardMaterial 
              color="#00ff00"
              emissive="#00ff00"
              emissiveIntensity={0.3}
            />
          </mesh>
          <Text
            position={[1.2, 0.2, 0.02]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            Farmer: 60%
          </Text>
          
          <mesh position={[-0.3, -0.1, 0.01]}>
            <boxGeometry args={[1.4, 0.15, 0.01]} />
            <meshStandardMaterial 
              color="#ff6b35"
              emissive="#ff6b35"
              emissiveIntensity={0.3}
            />
          </mesh>
          <Text
            position={[0.5, -0.1, 0.02]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            Distributor: 25%
          </Text>
          
          <mesh position={[-0.8, -0.4, 0.01]}>
            <boxGeometry args={[0.4, 0.15, 0.01]} />
            <meshStandardMaterial 
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.3}
            />
          </mesh>
          <Text
            position={[-0.4, -0.4, 0.02]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            Retailer: 15%
          </Text>
        </group>
      </Float>

      {/* FarmTokens Floating */}
      {[0, 1, 2, 3].map((i) => (
        <Float key={i} speed={2 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.8}>
          <mesh 
            position={[
              Math.cos((i * Math.PI * 2) / 4) * 1.5,
              3 + Math.sin(i * 0.8) * 0.5,
              Math.sin((i * Math.PI * 2) / 4) * 1.5
            ]}
          >
            <cylinderGeometry args={[0.2, 0.2, 0.05]} />
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={0.6}
            />
          </mesh>
        </Float>
      ))}

      {/* Store Manager Avatar */}
      <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.1}>
        <group position={[-2.5, -0.5, 0]}>
          {/* Head */}
          <mesh position={[0, 1.7, 0]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          
          {/* Body */}
          <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 0.8]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
          
          {/* Tablet in hand */}
          <mesh position={[0.7, 1.2, 0]}>
            <boxGeometry args={[0.3, 0.4, 0.05]} />
            <meshStandardMaterial 
              color="#1a1a1a"
              emissive="#00ffff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export default MarketScene;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs
