import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Box, Sphere, Octahedron, Icosahedron, Cone, Cylinder, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3DAbout() {
  const groupRef = useRef<THREE.Group>(null);
  const floatingGroupRef = useRef<THREE.Group>(null);
  const orbitalGroupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Main group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    // Floating objects animation
    if (floatingGroupRef.current) {
      floatingGroupRef.current.rotation.z = Math.sin(time * 0.4) * 0.3;
      floatingGroupRef.current.position.y = Math.sin(time * 0.6) * 0.5;
    }

    // Orbital objects
    if (orbitalGroupRef.current) {
      orbitalGroupRef.current.rotation.y = time * 0.8;
      orbitalGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    // Particle system
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.2;
      particlesRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(time * 0.5 + index) * 0.3;
        child.rotation.x = time * (0.5 + index * 0.1);
        child.rotation.z = time * (0.3 + index * 0.05);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#DDA853" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A6CDC6" />

      {/* Central Torus - Main focal point */}
      <Torus args={[2.5, 0.15, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#DDA853" wireframe />
      </Torus>

      {/* Inner rotating ring */}
      <Torus args={[1.8, 0.08, 12, 64]} position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#FBF5DD" wireframe />
      </Torus>

      {/* Floating objects group */}
      <group ref={floatingGroupRef}>
        {/* Geometric shapes around the torus */}
        <RoundedBox args={[0.8, 0.8, 0.8]} position={[-3, 1, 0]} radius={0.1}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </RoundedBox>

        <Octahedron args={[0.6]} position={[3, -1, 0]}>
          <meshStandardMaterial color="#16404D" wireframe />
        </Octahedron>

        <Icosahedron args={[0.7]} position={[0, 2.5, -2]}>
          <meshStandardMaterial color="#DDA853" wireframe />
        </Icosahedron>

        <Cone args={[0.5, 1.2, 8]} position={[-2, -2, 1]}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </Cone>
      </group>

      {/* Orbital system */}
      <group ref={orbitalGroupRef}>
        {/* Small spheres orbiting */}
        <Sphere args={[0.3]} position={[4, 0, 0]}>
          <meshStandardMaterial color="#FBF5DD" wireframe />
        </Sphere>
        
        <Sphere args={[0.25]} position={[-4, 0, 0]}>
          <meshStandardMaterial color="#DDA853" wireframe />
        </Sphere>

        <Sphere args={[0.2]} position={[0, 0, 4]}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </Sphere>

        <Sphere args={[0.35]} position={[0, 0, -4]}>
          <meshStandardMaterial color="#16404D" wireframe />
        </Sphere>

        {/* Connecting lines/cylinders */}
        <Cylinder args={[0.02, 0.02, 8]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#FBF5DD" opacity={0.3} transparent />
        </Cylinder>
        
        <Cylinder args={[0.02, 0.02, 8]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#A6CDC6" opacity={0.3} transparent />
        </Cylinder>
      </group>

      {/* Particle system - small floating elements */}
      <group ref={particlesRef}>
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 5 + Math.sin(i) * 1;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 2;

          return (
            <Box key={i} args={[0.1, 0.1, 0.1]} position={[x, y, z]}>
              <meshStandardMaterial 
                color={i % 4 === 0 ? "#DDA853" : i % 4 === 1 ? "#A6CDC6" : i % 4 === 2 ? "#16404D" : "#FBF5DD"} 
                wireframe 
              />
            </Box>
          );
        })}
      </group>

      {/* Additional geometric complexity */}
      <group position={[0, -3, 0]}>
        {/* Base platform */}
        <Cylinder args={[3, 3, 0.2, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#16404D" wireframe opacity={0.4} transparent />
        </Cylinder>

        {/* Corner decorative elements */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 2.5;
          const z = Math.sin(angle) * 2.5;
          
          return (
            <Octahedron key={`corner-${i}`} args={[0.3]} position={[x, 0.5, z]}>
              <meshStandardMaterial color="#A6CDC6" wireframe />
            </Octahedron>
          );
        })}
      </group>

      {/* Dynamic helix structure */}
      <group>
        {Array.from({ length: 20 }, (_, i) => {
          const t = i / 20;
          const angle = t * Math.PI * 4;
          const radius = 1.2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (t - 0.5) * 4;

          return (
            <Sphere key={`helix-${i}`} args={[0.08]} position={[x, y, z]}>
              <meshStandardMaterial 
                color={t < 0.5 ? "#DDA853" : "#A6CDC6"} 
                wireframe 
                opacity={0.7} 
                transparent 
              />
            </Sphere>
          );
        })}
      </group>
    </group>
  );
}