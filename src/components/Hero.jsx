import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  

  useEffect(() => {
    const tl = gsap.timeline();

    // Background animation (fade in)
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Content animation (slide up)
    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=1' // Overlap with the previous animation
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0">
        <DotLottieReact
          src="https://lottie.host/4a7d0e86-0f48-48a6-a57d-f3197a0d19f0/NvNEmwBNEa.lottie" // Lottie animation
          loop
          autoplay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
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
              strings: ["Hi! I'm Aaryan!", 'Welcome to my website!'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
          Please scroll down to learn more about me and my work.
        </p>

        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 cursor-pointer"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
