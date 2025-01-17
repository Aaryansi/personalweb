import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="floating-navbar">
      <div className="neon-glow flex gap-8 items-center justify-center shadow-lg transition-all duration-500">
        {/* Links */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white text-lg cursor-pointer font-medium transition-transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white text-lg cursor-pointer font-medium transition-transform hover:scale-110"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white text-lg cursor-pointer font-medium transition-transform hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white text-lg cursor-pointer font-medium transition-transform hover:scale-110"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
