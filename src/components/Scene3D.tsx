import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Text, Float } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Group, Vector3 } from 'three';
import FarmScene from './scenes/FarmScene';
import TransportScene from './scenes/TransportScene';
import MarketScene from './scenes/MarketScene';
import ConsumerScene from './scenes/ConsumerScene';
import IntroScene from './scenes/IntroScene';

gsap.registerPlugin(ScrollTrigger);

const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const cameraRef = useRef();

  useEffect(() => {
    if (!groupRef.current || !cameraRef.current) return;

    const camera = cameraRef.current as any;
    const scenes = groupRef.current;

    // Scroll-triggered camera movements
    ScrollTrigger.create({
      trigger: '.intro-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.lerp(new Vector3(0, 5, 10), progress * 0.5);
        camera.lookAt(0, 0, 0);
      }
    });

    ScrollTrigger.create({
      trigger: '.farm-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.lerp(new Vector3(-10, 3, 5), progress);
        scenes.rotation.y = progress * 0.2;
      }
    });

    ScrollTrigger.create({
      trigger: '.transport-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.lerp(new Vector3(0, 8, 15), progress);
      }
    });

    ScrollTrigger.create({
      trigger: '.market-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.lerp(new Vector3(8, 2, 8), progress);
      }
    });

    ScrollTrigger.create({
      trigger: '.consumer-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.lerp(new Vector3(0, 0, 12), progress);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Canvas className="scene-container">
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 20]}
        fov={60}
      />
      
      <Environment preset="night" />
      
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        color="#00ffff"
      />
      <pointLight 
        position={[0, 5, 0]} 
        intensity={0.5} 
        color="#ff6b35"
      />

      <group ref={groupRef}>
        <IntroScene position={[0, 0, 0]} />
        <FarmScene position={[-15, 0, 0]} />
        <TransportScene position={[0, 0, -15]} />
        <MarketScene position={[15, 0, 0]} />
        <ConsumerScene position={[0, 0, 15]} />
        
        {/* Blockchain Connection Lines */}
        <Float speed={2} rotationIntensity={0.1}>
          <mesh position={[-7.5, 2, -7.5]}>
            <cylinderGeometry args={[0.05, 0.05, 12]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.1}>
          <mesh position={[7.5, 2, 7.5]}>
            <cylinderGeometry args={[0.05, 0.05, 12]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene3D;

# AI edit: improve ui day by day


# AI edit: cghanged the ui files and added new coll feature


# AI edit: update ui and theme color


# AI edit: fix the bugs


# AI edit: fix the bugs
