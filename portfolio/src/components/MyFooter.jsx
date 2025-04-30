import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-green-700 text-white py-8 px-4 lg:px-24 animate-fadeIn">
      <div className="text-center">
        {/* Links */}
        <div className="flex justify-center items-center gap-6 text-lg mb-6">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sowmiya-p-670425297/ "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>

        {/* Bottom line */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
