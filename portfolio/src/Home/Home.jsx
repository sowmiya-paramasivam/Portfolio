import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6 lg:px-24">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-green-700 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow top-40 right-10"></div>
        <div className="absolute w-80 h-80 bg-green-400 opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-ping bottom-10 left-20"></div>
      </div>

      {/* Content */}
      <div className="text-center space-y-8 relative z-10 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-400">
          Welcome to My World
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a passionate Developer focused on building responsive, fast, and beautiful websites with modern technologies.
        </p>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 mt-8"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default Home;
