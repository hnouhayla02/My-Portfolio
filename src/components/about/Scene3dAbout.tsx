import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3DAbout() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[3, 0.2, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4299e1" wireframe />
      </Torus>
      <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#48bb78" wireframe />
      </Box>
      <Sphere args={[0.7, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#ed64a6" wireframe />
      </Sphere>
    </group>
  );
}