import { Float, Text, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface TransportSceneProps {
  position: [number, number, number];
}

const TransportScene = ({ position }: TransportSceneProps) => {
  const groupRef = useRef<Group>(null);
  const iotPodRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (iotPodRef.current) {
      iotPodRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      iotPodRef.current.position.y = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Road */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial 
          color="#2F2F2F" 
          roughness={0.9}
        />
      </mesh>

      {/* Road Lines */}
      <mesh position={[0, -1.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 0.2]} />
        <meshStandardMaterial 
          color="#FFFFFF" 
          emissive="#FFFFFF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Transport Truck */}
      <group position={[0, -1, 0]}>
        {/* Truck Cabin */}
        <Box args={[2, 1.5, 1]} position={[-1, 0.25, 0]}>
          <meshStandardMaterial color="#FF4500" />
        </Box>
        
        {/* Truck Cargo */}
        <Box args={[3, 1.8, 1.2]} position={[1.5, 0.4, 0]}>
          <meshStandardMaterial color="#C0C0C0" />
        </Box>
        
        {/* Wheels */}
        {[-2, 0, 2.5].map((x, i) => (
          <mesh key={i} position={[x, -0.7, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1C1C1C" />
          </mesh>
        ))}
        {[-2, 0, 2.5].map((x, i) => (
          <mesh key={i} position={[x, -0.7, -0.7]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.2]} />
            <meshStandardMaterial color="#1C1C1C" />
          </mesh>
        ))}
      </group>

      {/* IoT Monitoring Pod */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={iotPodRef} position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.4}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Data Stream Visualization */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={3 + i * 0.5} rotationIntensity={0.1}>
          <mesh 
            position={[
              Math.cos((i * Math.PI * 2) / 5 + performance.now() * 0.001) * 2,
              1.5 + Math.sin(i * 2) * 0.3,
              Math.sin((i * Math.PI * 2) / 5 + performance.now() * 0.001) * 2
            ]}
          >
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color="#ff6b35"
              emissive="#ff6b35"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Holographic Data Panels */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <group position={[3, 0.5, 0]}>
          <mesh>
            <planeGeometry args={[2.5, 2]} />
            <meshStandardMaterial
              color="#001a1a"
              emissive="#00ffff"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          <Text
            position={[0, 0.7, 0.01]}
            fontSize={0.2}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
          >
            IoT Live Stream
          </Text>
          
          <Text
            position={[0, 0.3, 0.01]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Temperature: 4°C ✓
          </Text>
          
          <Text
            position={[0, 0.1, 0.01]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Humidity: 85% ✓
          </Text>
          
          <Text
            position={[0, -0.1, 0.01]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Location: Highway A1
          </Text>
          
          <Text
            position={[0, -0.3, 0.01]}
            fontSize={0.12}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            Trust Score: 98%
          </Text>
          
          <Text
            position={[0, -0.5, 0.01]}
            fontSize={0.1}
            color="#ff6b35"
            anchorX="center"
            anchorY="middle"
          >
            ETA: 2h 15m
          </Text>
        </group>
      </Float>

      {/* Trust Score Indicator */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group position={[-3, 1, 0]}>
          <mesh>
            <cylinderGeometry args={[0.8, 0.8, 0.1]} />
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
            fontSize={0.15}
            color="#00ff00"
            anchorX="center"
            anchorY="middle"
          >
            98%
          </Text>
          
          <Text
            position={[0, -0.3, 0.1]}
            fontSize={0.08}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            TRUST
          </Text>
        </group>
      </Float>
    </group>
  );
};

export default TransportScene;

# AI edit: improve ui day by day
