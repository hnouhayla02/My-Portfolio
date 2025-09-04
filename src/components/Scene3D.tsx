import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Box, Sphere, Octahedron, Icosahedron, Cone, Cylinder, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const floatingGroupRef = useRef<THREE.Group>(null);
  const orbitalGroupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);
  const helixRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Main group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }

    // Floating objects animation
    if (floatingGroupRef.current) {
      floatingGroupRef.current.rotation.z = Math.sin(time * 0.3) * 0.2;
      floatingGroupRef.current.position.y = Math.sin(time * 0.4) * 0.3;
    }

    // Orbital objects
    if (orbitalGroupRef.current) {
      orbitalGroupRef.current.rotation.y = time * 0.6;
      orbitalGroupRef.current.rotation.x = Math.sin(time * 0.4) * 0.15;
    }

    // Particle system
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.15;
      particlesRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(time * 0.3 + index) * 0.2;
        child.rotation.x = time * (0.3 + index * 0.05);
        child.rotation.z = time * (0.2 + index * 0.03);
      });
    }

    // Helix rotation
    if (helixRef.current) {
      helixRef.current.rotation.y = time * 0.4;
      helixRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#DDA853" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#A6CDC6" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#FBF5DD" />

      {/* Central Torus - Main focal point */}
      <Torus args={[3, 0.2, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#DDA853" wireframe />
      </Torus>

      {/* Inner rotating rings */}
      <Torus args={[2.2, 0.1, 12, 64]} position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#FBF5DD" wireframe />
      </Torus>

      <Torus args={[1.5, 0.08, 8, 32]} position={[0, 0, 0]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <meshStandardMaterial color="#A6CDC6" wireframe opacity={0.7} transparent />
      </Torus>

      {/* Floating objects group */}
      <group ref={floatingGroupRef}>
        {/* Geometric shapes around the torus */}
        <RoundedBox args={[1, 1, 1]} position={[-4, 1.5, 0]} radius={0.1}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </RoundedBox>

        <Octahedron args={[0.8]} position={[4, -1.5, 0]}>
          <meshStandardMaterial color="#16404D" wireframe />
        </Octahedron>

        <Icosahedron args={[0.9]} position={[0, 3, -3]}>
          <meshStandardMaterial color="#DDA853" wireframe />
        </Icosahedron>

        <Cone args={[0.6, 1.5, 8]} position={[-3, -2.5, 2]}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </Cone>

        <Cylinder args={[0.4, 0.7, 1.2, 6]} position={[3, 2, 2]}>
          <meshStandardMaterial color="#FBF5DD" wireframe />
        </Cylinder>

        <Box args={[0.8, 1.2, 0.8]} position={[-2, 0, -3]}>
          <meshStandardMaterial color="#16404D" wireframe />
        </Box>
      </group>

      {/* Orbital system */}
      <group ref={orbitalGroupRef}>
        {/* Large orbit spheres */}
        <Sphere args={[0.4]} position={[5, 0, 0]}>
          <meshStandardMaterial color="#FBF5DD" wireframe />
        </Sphere>
        
        <Sphere args={[0.35]} position={[-5, 0, 0]}>
          <meshStandardMaterial color="#DDA853" wireframe />
        </Sphere>

        <Sphere args={[0.3]} position={[0, 0, 5]}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </Sphere>

        <Sphere args={[0.45]} position={[0, 0, -5]}>
          <meshStandardMaterial color="#16404D" wireframe />
        </Sphere>

        {/* Medium orbit */}
        <Octahedron args={[0.3]} position={[3.5, 3.5, 0]}>
          <meshStandardMaterial color="#DDA853" wireframe />
        </Octahedron>

        <Octahedron args={[0.25]} position={[-3.5, -3.5, 0]}>
          <meshStandardMaterial color="#A6CDC6" wireframe />
        </Octahedron>

        {/* Connecting orbital lines */}
        <Cylinder args={[0.02, 0.02, 10]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#FBF5DD" opacity={0.2} transparent />
        </Cylinder>
        
        <Cylinder args={[0.02, 0.02, 10]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#A6CDC6" opacity={0.2} transparent />
        </Cylinder>

        <Cylinder args={[0.02, 0.02, 10]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 4]}>
          <meshStandardMaterial color="#DDA853" opacity={0.15} transparent />
        </Cylinder>
      </group>

      {/* Particle system - floating cubes */}
      <group ref={particlesRef}>
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const radius = 6 + Math.sin(i * 0.5) * 1.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 3;

          return (
            <Box key={i} args={[0.12, 0.12, 0.12]} position={[x, y, z]}>
              <meshStandardMaterial 
                color={i % 4 === 0 ? "#DDA853" : i % 4 === 1 ? "#A6CDC6" : i % 4 === 2 ? "#16404D" : "#FBF5DD"} 
                wireframe 
              />
            </Box>
          );
        })}
      </group>

      {/* Dynamic helix structure */}
      <group ref={helixRef}>
        {Array.from({ length: 24 }, (_, i) => {
          const t = i / 24;
          const angle = t * Math.PI * 6;
          const radius = 1.8;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (t - 0.5) * 5;

          return (
            <Sphere key={`helix-${i}`} args={[0.1]} position={[x, y, z]}>
              <meshStandardMaterial 
                color={t < 0.33 ? "#DDA853" : t < 0.66 ? "#A6CDC6" : "#FBF5DD"} 
                wireframe 
                opacity={0.8} 
                transparent 
              />
            </Sphere>
          );
        })}
      </group>

      {/* Base platform with decorative elements */}
      <group position={[0, -4, 0]}>
        {/* Main platform */}
        <Cylinder args={[4, 4, 0.3, 12]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#16404D" wireframe opacity={0.3} transparent />
        </Cylinder>

        {/* Corner decorative elements */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * 3.5;
          const z = Math.sin(angle) * 3.5;
          
          return (
            <Icosahedron key={`platform-${i}`} args={[0.25]} position={[x, 0.8, z]}>
              <meshStandardMaterial color={i % 2 === 0 ? "#A6CDC6" : "#DDA853"} wireframe />
            </Icosahedron>
          );
        })}
      </group>

      {/* Additional floating geometric elements */}
      <group>
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 8 + Math.sin(i) * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 2) * 2;

          const shapes = [RoundedBox, Octahedron, Cone, Cylinder];
          const Shape = shapes[i % 4];
          const args =
            Shape === RoundedBox
              ? [0.4, 0.4, 0.4]
              : Shape === Octahedron
              ? [0.4]
              : Shape === Cone
              ? [0.4, 0.8, 8]
              : [0.4, 0.4, 1.2, 6]; // For Cylinder

          return (
            <Shape key={`outer-${i}`} args={args as any} position={[x, y, z]}>
              <meshStandardMaterial 
                color={["#DDA853", "#A6CDC6", "#16404D", "#FBF5DD"][i % 4]} 
                wireframe 
                opacity={0.6}
                transparent
              />
            </Shape>
          );
        })}
      </group>
    </group>
  );
}