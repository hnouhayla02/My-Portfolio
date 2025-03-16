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
        <meshStandardMaterial color="#ec4899" wireframe /> {/* Pink-500 */}
      </Torus>
      <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#d946ef" wireframe /> {/* Fuchsia-500 */}
      </Box>
      <Sphere args={[0.7, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#a855f7" wireframe /> {/* Purple-500 */}
      </Sphere>
    </group>
  );
}