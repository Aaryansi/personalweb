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
          href="https://linkedin.com/in/aaryan-singh"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
