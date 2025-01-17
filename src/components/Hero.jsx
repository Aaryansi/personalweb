import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background fade-in
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Content fade-in staggered
    tl.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 },
      "-=1"
    );

    // Scroll indicator bounce effect
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Hide scroll indicator when scrolling
    gsap.to(scrollIndicatorRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "top -30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0">
        <DotLottieReact
          src="https://lottie.host/4a7d0e86-0f48-48a6-a57d-f3197a0d19f0/NvNEmwBNEa.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
      >
        {/* Typewriter Effect */}
        <div className="text-4xl md:text-5xl font-bold mb-6 font-stylish">
          <Typewriter
            options={{
              strings: ["Hi! I'm Aaryan!", "Welcome to my website!"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
          Please scroll down to learn more about me and my work.
        </p>

        
      </div>
    </section>
  );
};

export default Hero;
