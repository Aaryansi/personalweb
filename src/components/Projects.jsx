import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: '2025',
    items: [
      {
        title: 'Portfolio Website',
        description: 'Developed a sleek, interactive personal portfolio using React and GSAP.',
      },
      {
        title: 'Uber-like App for Ashton',
        description: 'Created a ride-sharing app for local neighborhoods using Flutter and Firebase.',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'R&D Intern at BNC Motors',
        description: 'Automated data scraping, saving 1M INR annually and 80 hours of work.',
      },
      {
        title: 'Genetic Algorithm Research',
        description: 'Simulated genetic evolution using Java and visualized it with UML diagrams.',
      },
    ],
  },
];

const AnimatedModel = () => {
    const { scene, animations } = useGLTF('/models/model2/scene.gltf'); // Load model and animations
    const ref = useRef();
    const mixerRef = useRef();
  
    useEffect(() => {
      if (animations.length) {
        const mixer = new THREE.AnimationMixer(scene);
        mixerRef.current = mixer;
  
        animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          //action.loop = THREE.LoopRepeat; // Ensure looping
          action.clampWhenFinished = false; // Prevent freezing on last frame
          action.reset(); // Reset animation to initial state
          action.play();
        });
  
        // Animation clock for updates
        const clock = new THREE.Clock();
        const animate = () => {
          const delta = clock.getDelta();
  
          // Update mixer only if defined
          if (mixerRef.current) {
            mixerRef.current.update(delta);
          }
  
          requestAnimationFrame(animate); // Continue animation loop
        };
  
        //animate();
  
        return () => {
          // Clean up mixer and actions on unmount
          mixer.stopAllAction();
          mixer.uncacheRoot(scene); // Remove all associated mixer actions
        };
      }
    }, [animations, scene]);

  // Rotate the model slowly
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Adjust the rotation speed
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
};

const Projects = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      timelineRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Timeline Section */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-center mb-12 font-stylish">
            Projects & Work Experience
          </h2>

          <div ref={timelineRef} className="relative border-l border-gray-600 pl-6">
            {projects.map((entry, index) => (
              <div key={index} className="mb-12">
                {/* Year */}
                <div className="text-2xl font-bold text-blue-400 mb-4">{entry.year}</div>

                {/* Projects */}
                {entry.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="mb-6 pl-6 border-l-4 border-blue-500 relative"
                    style={{ marginLeft: '10px' }}
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Model Viewer Section */}
        <div className="md:w-1/3 flex justify-center items-center">
          <Canvas
            camera={{ position: [0, 0, 22], fov: 50 }}
            style={{ height: '600px', width: '300px' }}
            gl={{ antialias: true, preserveDrawingBuffer: false }}
          >
            {/* Lighting Setup */}
            <ambientLight color={'#a853ff'} intensity={0.5} />
            <directionalLight position={[0, 10, 10]} intensity={1.5} castShadow color={'#ffffff'} />
            <pointLight position={[0, 5, 5]} intensity={1.2} color={'#a853ff'} />
            <spotLight
              position={[5, 10, 5]}
              angle={0.3}
              penumbra={1}
              intensity={1.5}
              color={'#ffffff'}
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
