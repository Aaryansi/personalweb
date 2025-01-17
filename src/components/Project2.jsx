// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Model2 = () => {
//     const { scene } = useGLTF('/models/model2/scene.gltf'); // Adjusted path
//     return <primitive object={scene} scale={1.5} />;
//   };

// const Project2 = () => {
//   return (
//     <section className="relative h-screen bg-black text-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12 font-stylish">
//           Interactive 3D Projects
//         </h2>

//         <div className="relative h-[75vh] w-full">
//           {/* Render the 3D model */}
//           <Canvas>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 10]} intensity={1} />
//             <OrbitControls enableZoom={true} />
//             <Model2 />
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project2;
