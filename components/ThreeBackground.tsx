import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Gem = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + props.offset;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5 + props.offset;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} {...props}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          roughness={0} 
          metalness={0.2}
          color={props.color} 
          transmission={0.9} 
          opacity={1}
          clearcoat={1}
          thickness={2}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
};

const TorusObj = (props: any) => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
             <mesh ref={meshRef} {...props}>
                <torusGeometry args={[0.8, 0.2, 16, 32]} />
                 <meshPhysicalMaterial 
                  roughness={0.1} 
                  metalness={0.8}
                  color={props.color} 
                  emissive={props.color}
                  emissiveIntensity={0.2}
                />
             </mesh>
        </Float>
    )
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="green" />
        
        <Gem position={[-2, 1, 0]} color="#10b981" offset={0} />
        <Gem position={[2, -1, -2]} color="#3b82f6" offset={2} />
        <TorusObj position={[0, 2, -3]} color="#f59e0b" />
        <TorusObj position={[-3, -2, -1]} color="#ec4899" />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;