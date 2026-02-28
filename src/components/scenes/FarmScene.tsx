import { Float, Text, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface FarmSceneProps {
  position: [number, number, number];
}

const FarmScene = ({ position }: FarmSceneProps) => {
  const groupRef = useRef<Group>(null);
  const digitalTwinRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (digitalTwinRef.current) {
      digitalTwinRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      digitalTwinRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Farm Ground */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          color="#2d5016" 
          roughness={0.8}
        />
      </mesh>

      {/* Mango Trees */}
      {[-2, 0, 2].map((x, i) => (
        <group key={i} position={[x, -1, -2]}>
          {/* Tree Trunk */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.3, 2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          
          {/* Tree Crown */}
          <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <mesh position={[0, 1.5, 0]}>
              <sphereGeometry args={[1.2]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </Float>
        </group>
      ))}

      {/* Mango Crate */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <group position={[0, -0.5, 1]}>
          <Box args={[1.5, 0.8, 1]}>
            <meshStandardMaterial color="#D2691E" />
          </Box>
          
          {/* Mangoes */}
          {[0, 1, 2].map((i) => (
            <mesh 
              key={i}
              position={[
                (i - 1) * 0.4,
                0.5,
                0
              ]}
            >
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial 
                color="#FFD700" 
                emissive="#FFD700"
                emissiveIntensity={0.1}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Digital Twin Cube */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={digitalTwinRef} position={[0, 2, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Hologram Data Panel */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[2, 1, 0]}>
          <mesh>
            <planeGeometry args={[2, 1.5]} />
            <meshStandardMaterial
              color="#001a1a"
              emissive="#00ffff"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          <Text
            position={[0, 0.4, 0.01]}
            fontSize={0.15}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
          >
            Digital Twin Active
          </Text>
          
          <Text
            position={[0, 0.1, 0.01]}
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Farmer: Prajwal Singh
          </Text>
          
          <Text
            position={[0, -0.1, 0.01]}
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Location: Verified
          </Text>
          
          <Text
            position={[0, -0.3, 0.01]}
            fontSize={0.1}
            color="#ff6b35"
            anchorX="center"
            anchorY="middle"
          >
            Quality: Premium A+
          </Text>
        </group>
      </Float>

      {/* Farmer Avatar */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[-2, -0.5, 0]}>
          {/* Head */}
          <mesh position={[0, 1.7, 0]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          
          {/* Body */}
          <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 0.8]} />
            <meshStandardMaterial color="#4169E1" />
          </mesh>
          
          {/* Arms */}
          <mesh position={[-0.5, 1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.6]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
          <mesh position={[0.5, 1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.6]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export default FarmScene;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs
