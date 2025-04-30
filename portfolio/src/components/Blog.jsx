import React from 'react';
import {FaHtml5,FaCss3Alt,FaJs,FaNodeJs,FaReact,FaDatabase,FaGitAlt,FaBootstrap} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'; 

const Blog = () => {
  return (
    <section className="mt-10 min-h-screen bg-black text-white px-6 lg:px-24 py-12 relative overflow-hidden animate-fadeIn">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 text-center mb-8">
        My Skills
      </h1>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* HTML */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHtml5 className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">HTML</h2>
          <p className="text-gray-300 text-center">Advanced knowledge in HTML5, structuring web content efficiently.</p>
        </div>

        {/* CSS */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaCss3Alt className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">CSS</h2>
          <p className="text-gray-300 text-center">Advanced CSS techniques, including Flexbox, Grid, and animations.</p>
        </div>

        {/* JavaScript */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaJs className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">JavaScript</h2>
          <p className="text-gray-300 text-center">Proficient in JavaScript, including ES6+ features and asynchronous programming.</p>
        </div>

        {/* Node.js */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaNodeJs className="text-4xl text-green-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">Node.js</h2>
          <p className="text-gray-300 text-center">Building backend applications using Node.js, Express.js, and REST APIs.</p>
        </div>

        {/* React */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaReact className="text-4xl text-cyan-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">React.js</h2>
          <p className="text-gray-300 text-center">Expert in React.js for building interactive, dynamic, and scalable user interfaces.</p>
        </div>

        {/* MongoDB */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaDatabase className="text-4xl text-green-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">MongoDB</h2>
          <p className="text-gray-300 text-center">Skilled in MongoDB for building NoSQL databases and handling large amounts of unstructured data.</p>
        </div>

        {/* Git */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaGitAlt className="text-4xl text-red-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">Git</h2>
          <p className="text-gray-300 text-center">Experienced with Git version control, branching, and collaborative development using GitHub.</p>
        </div>

        {/* Bootstrap */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaBootstrap className="text-4xl text-purple-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">Bootstrap</h2>
          <p className="text-gray-300 text-center">Skilled in building responsive layouts and components using Bootstrap 4/5 framework.</p>
        </div>

        {/* Tailwind CSS */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <SiTailwindcss className="text-4xl text-sky-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-3 text-center">Tailwind CSS</h2>
          <p className="text-gray-300 text-center">Proficient in Tailwind CSS for rapid UI development with utility-first design.</p>
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

export default Blog;
