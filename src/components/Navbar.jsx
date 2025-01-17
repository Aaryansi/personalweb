import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [bottomSpacing, setBottomSpacing] = useState(35); // Default floating height
  const [isAboveFooter, setIsAboveFooter] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Store active link
  const [isHovered, setIsHovered] = useState(false); // Detect hover state

  useEffect(() => {
    const adjustNavbarPosition = () => {
      const footer = document.getElementById('footer'); // Get footer element
      if (footer) {
        const footerRect = footer.getBoundingClientRect(); // Get footer position
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight - 80) {
          // If footer is close, move navbar UP instead of going below
          setBottomSpacing(windowHeight - footerRect.top + 15); // Adjust slightly above footer
          setIsAboveFooter(true);
        } else {
          // Keep default floating position
          setBottomSpacing(35);
          setIsAboveFooter(false);
        }
      }
    };

    window.addEventListener('scroll', adjustNavbarPosition);
    return () => window.removeEventListener('scroll', adjustNavbarPosition);
  }, []);

  return (
    <nav 
      className="floating-navbar" 
      style={{ bottom: `${bottomSpacing}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`neon-glow flex gap-8 items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'hovered' : ''}`}>
        {/* Links with neon animation on click */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => setActiveLink('home')}
        >
          Home
          <span className="neon-underline"></span>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => setActiveLink('about')}
        >
          About
          <span className="neon-underline"></span>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveLink('projects')}
        >
          Projects
          <span className="neon-underline"></span>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveLink('contact')}
        >
          Contact
          <span className="neon-underline"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
