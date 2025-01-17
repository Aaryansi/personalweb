import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, SpotLight, PointLight } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/model4/scene.gltf'); // Ensure the file path is correct
  return <primitive object={scene} scale={0.8
  } />;
};

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center md:text-left px-6">
        <h2 className="text-6xl font-bold mb-6 font-stylish animate-fade-in">
          About Me
        </h2>
        <p className="text-xl text-gray-300 font-light mb-8 animate-fade-in-delay">
          I’m Aaryan, a passionate developer dedicated to creating modern, interactive web
          experiences. I believe in blending creativity with technology to build designs that
          are not only visually stunning but also highly functional.
        </p>
        <p className="text-xl text-gray-300 font-light mb-8 animate-fade-in-delay">
          With expertise in front-end and back-end technologies, I strive to deliver projects
          that meet the latest design trends while ensuring top-notch user experience.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105">
          Connect with Me
        </button>
      </div>

      {/* 3D Model */}
      <div className="relative z-10 w-2/5 h-full ml-[-50px]">
      <Canvas
            camera={{ position: [0, 0, 63], fov: 55 }}
            style={{ height: '600px', width: '300px' }}
            gl={{ antialias: true, preserveDrawingBuffer: false }}
          >
          <ambientLight intensity={0.3} />
          <spotLight
            position={[5, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            color={'#ffffff'}
            castShadow
          />
          <pointLight position={[0, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <Model />
            {/* Environment */}
            <Environment preset="sunset" background={false} />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </section>
  );
};

export default About;
