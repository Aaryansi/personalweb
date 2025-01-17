// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

// const InteractiveSphere = ({ position, onClick }) => {
//   const meshRef = useRef();

//   // Rotate the sphere
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01; // Adjust rotation speed
//     }
//   });

//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       onClick={onClick}
//       onPointerOver={(e) => (e.object.material.color.set('#ff6347'))} // Change color on hover
//       onPointerOut={(e) => (e.object.material.color.set('#00f'))} // Reset color on hover out
//     >
//       <sphereGeometry args={[0.5, 32, 32]} />
//       <meshStandardMaterial color="#00f" />
//     </mesh>
//   );
// };

// const ThreeSphere = ({ position }) => {
//   return (
//     <Canvas
//       style={{
//         height: '150px', // Adjust size as needed
//         width: '150px',
//       }}
//       camera={{ position: [0, 0, 5] }}
//     >
//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />

//       {/* Sphere */}
//       <InteractiveSphere position={position} onClick={() => alert('Sphere clicked!')} />
//     </Canvas>
//   );
// };

// export default ThreeSphere;
