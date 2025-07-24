import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6 lg:px-24">
      {/* <img src="/mkm5.jpg" alt="bgimg" className="fixed inset-0 w-full h-50 object-cover z-0" /> */}
       <video
        className="fixed inset-0 w-full h-50 object-cover z-0"
        src="/video.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Main Content */}
      <div className="relative z-20 text-center space-y-8 text-white animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-emilys text-customBlue1 object-cover animate-pulse shadow-md">
          Hy! This is <br />
          <span className="inline-block font-edu text-white border-r-2 border-white whitespace-nowrap overflow-hidden w-[7ch] animate-typing animate-blink">
            Sowmiya...
          </span>
          </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-limelight">
          I'm a passionate Developer focused on building responsive, fast, and beautiful websites using modern technologies.
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-customBlue1 hover:bg-customBlue text-black font-bold py-3 px-8 rounded-full transition-all duration-300 mt-6"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default Home;
