import React, { useEffect, useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const { scene } = useGLTF("/models/model4/scene.gltf");
  return <primitive object={scene} scale={0.8} />;
};

const techStack = [
  "React", "JavaScript", "TypeScript", "Node.js", "Express.js", "Flutter", "Firebase",
  "MongoDB", "PostgreSQL", "GraphQL", "TailwindCSS", "GSAP", "Three.js", "Java",
  "C++", "Python", "RISC-V", "Verilog", "Docker", "Kubernetes", "AWS", "Git", "CI/CD"
];

const debugLogs = [
  "[INFO] Portfolio rendering successful ✅",
  "[DEBUG] Experimenting with GSAP animations...",
  "[WARNING] Sleep schedule might be compromised!",
  "[ERROR] System overload: Too many projects at once!",
  "[INFO] Flutter and Firebase connection stable.",
  "[DEBUG] AI module initialization in progress...",
  "[WARNING] Running low on Coca-Cola supply!",
  "[ERROR] Brain processing too many ideas at once!"
];

const About = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const techStackRef = useRef(null);
  const socialLinksRef = useRef(null);
  const [logs, setLogs] = useState([debugLogs[0]]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, textShadow: "0px 0px 5px #ffffff" },
      { opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      techStackRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: techStackRef.current, start: "top 85%" } }
    );

    gsap.fromTo(
      socialLinksRef.current.children,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: socialLinksRef.current, start: "top 90%" } }
    );

    const logInterval = setInterval(() => {
      setLogs((prevLogs) => {
        const newLog = debugLogs[Math.floor(Math.random() * debugLogs.length)];
        return prevLogs.length > 6 ? [...prevLogs.slice(1), newLog] : [...prevLogs, newLog];
      });
    }, 3000);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-10 py-20">
      {/* Left Section - About Me Content */}
      <div className="relative z-10 max-w-3xl text-center md:text-left">
        <h2 ref={headingRef} className="text-6xl font-bold mb-6 font-stylish">
          About Me
        </h2>
        <p ref={textRef} className="text-xl text-gray-300 font-light mb-8">
          Hey! I’m Aaryan, a Computer Science student at Rose-Hulman Institute of Technology from Bhopal, India. 
          I love building intuitive web and mobile applications, exploring AI, and solving complex problems with code.
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center md:text-left mb-4">Tech Stack</h3>
          <div ref={techStackRef} className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.sort(() => Math.random() - 0.5).slice(0, 12).map((tech, index) => (
              <div key={index} className="p-3 border border-gray-600 bg-black bg-opacity-30 rounded-lg text-center text-white text-sm transition-transform hover:scale-110 hover:border-white">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Debug Log */}
        <div className="bg-black bg-opacity-40 p-5 border border-gray-600 rounded-lg shadow-md h-50 overflow-hidden text-green-400 font-mono text-sm md:w-3/4 mx-auto md:mx-0">
          <h3 className="text-lg font-bold text-white mb-2">Debug Log</h3>
          <div className="h-full overflow-auto">
            {logs.map((log, index) => (
              <p key={index} className="whitespace-nowrap">{log}</p>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div ref={socialLinksRef} className="flex gap-6 justify-center md:justify-start mt-8">
            <a href="https://www.linkedin.com/in/aaryansi/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium neon-link">LinkedIn</a>
            <a href="https://github.com/Aaryansi" target="_blank" rel="noopener noreferrer" className="text-lg font-medium neon-link">GitHub</a>
            <a href="https://www.instagram.com/aaryan.sb/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium neon-link">Instagram</a>
        </div>
      </div>

      {/* Right Section - 3D Model */}
      <div className="relative z-10 w-2/5 h-full ml-[-50px]">
        <Canvas camera={{ position: [0, 0, 63], fov: 55 }} style={{ height: "600px", width: "300px" }} gl={{ antialias: true, preserveDrawingBuffer: false }}>
          <ambientLight intensity={0.3} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.5} color={"#ffffff"} castShadow />
          <Environment preset="sunset" background={false} />
          <Suspense fallback={null}><Model /></Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </section>
  );
};

export default About;
