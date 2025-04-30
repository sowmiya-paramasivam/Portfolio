import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 lg:px-24 py-12 flex items-center justify-center relative overflow-hidden animate-fadeIn">
      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center relative">
          <img
            src="/sowmi.png" 
            alt="About Me"
            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto object-cover shadow-2xl border-4 border-green-400 transition-transform duration-500 ease-in-out transform hover:rotate-360"
          />
        </div>

        {/* Content */}
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-6 text-center lg:text-left">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
            Hello! I'm a passionate and detail-oriented developer with experience in building responsive, fast, and modern websites.
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
            I specialize in front-end technologies like React, Tailwind CSS, and JavaScript, and I strive to create seamless user experiences. I enjoy solving complex problems and constantly learning new technologies.
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
            When I'm not coding, you can find me experimenting with design, contributing to open-source projects, or exploring new web development trends.
          </p>
        </div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-green-700 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow top-40 right-10"></div>
        <div className="absolute w-80 h-80 bg-green-400 opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-ping bottom-10 left-20"></div>
      </div>
    </section>
  );
};

export default About;
