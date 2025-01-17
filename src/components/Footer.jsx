import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="py-6 bg-black text-gray-400 text-center">
      <p>&copy; 2025 Aaryan Singh. All Rights Reserved.</p>
      <div className="mt-4 space-x-6">
        <a
          href="https://github.com/Aaryansi"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aaryansi/"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href=""
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          singha9@rose-hulman.edu
        </a>
      </div>
    </footer>
  );
};

export default Footer;
