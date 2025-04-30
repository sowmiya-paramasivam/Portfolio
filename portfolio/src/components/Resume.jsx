import React from 'react';

const Resume = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">
          My Resume
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Download my resume to learn more about my experience, skills, and education in web development.
        </p>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
