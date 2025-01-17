import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Ridez",
    caption: "Your Ride, Your Way.",
    description:
      "An Uber-like ride-sharing app built for Ashton and nearby neighborhoods using Flutter and Firebase.",
    link: "https://github.com/Aaryansi/ashton-rides",
  },
  {
    title: "Genetic Algorithm Research",
    caption: "Simulating Evolution in Action.",
    description:
      "A research project implementing genetic algorithms to simulate evolution using Java, featuring interactive visualization.",
    link: "https://github.com/Aaryansi/genetic-algo",
  },
  {
    title: "Rosie Bonfīr",
    caption: "A Jetpac-inspired Adventure.",
    description:
      "A thrilling platformer game built using Java, inspired by Jetpac, featuring unique levels and mechanics.",
    link: "https://github.com/Aaryansi/rosie-jetpac",
  },
  {
    title: "BeverageAI",
    caption: "AI-Powered Beverage Analysis (Ongoing).",
    description:
      "An AI-driven system for analyzing and recommending beverages based on preferences and trends.",
    link: "",
  },
];

const AnimatedModel = () => {
  const { scene, animations } = useGLTF("/models/model2/scene.gltf");
  const ref = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;

      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.clampWhenFinished = false;
        action.reset();
        action.play();
      });
    }
  }, [animations, scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
};

const ProjectCard = ({ title, caption, description, link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group bg-black bg-opacity-40 backdrop-blur-lg border border-gray-600 rounded-lg p-8 text-white transition-transform transform hover:scale-110 hover:shadow-lg hover:border-white"
    >
      {/* Wrap in a link if available */}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardContent title={title} caption={caption} description={description} />
        </a>
      ) : (
        <CardContent title={title} caption={caption} description={description} />
      )}
    </div>
  );
};

const CardContent = ({ title, caption, description }) => (
  <>
    {/* Title (Stays always visible, does NOT appear in hover effect) */}
    <h3 className="text-xl font-bold text-white group-hover:text-white transition-all duration-300 relative">{title}</h3>
    <p className="text-gray-400 italic">{caption}</p>

    {/* Glassmorphic Hover Effect - Shows Description ONLY */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-80 backdrop-blur-xl rounded-lg p-6">
      <p className="text-white text-center text-lg font-medium glow-effect">
        {description}
      </p>
    </div>
  </>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Project Grid Section */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-center mb-12 font-stylish">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Model Viewer Section */}
        <div className="md:w-1/3 flex justify-center items-center">
          <Canvas
            camera={{ position: [0, 0, 22], fov: 50 }}
            style={{ height: "600px", width: "300px" }}
            gl={{ antialias: true, preserveDrawingBuffer: false }}
          >
            {/* Lighting Setup */}
            <ambientLight color={"#a853ff"} intensity={0.5} />
            <directionalLight
              position={[0, 10, 10]}
              intensity={1.5}
              castShadow
              color={"#ffffff"}
            />
            <pointLight position={[0, 5, 5]} intensity={1.2} color={"#a853ff"} />
            <spotLight
              position={[5, 10, 5]}
              angle={0.3}
              penumbra={1}
              intensity={1.5}
              color={"#ffffff"}
              castShadow
            />

            {/* Bloom Effect */}
            <EffectComposer>
              <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1} />
            </EffectComposer>

            {/* Orbit Controls */}
            <OrbitControls autoRotate enablePan={false} enableZoom={true} />

            {/* 3D Model with Animations */}
            <AnimatedModel />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
