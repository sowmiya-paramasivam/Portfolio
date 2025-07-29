import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaFileDownload, FaCode, FaTrophy, FaProjectDiagram, FaGraduationCap, } from 'react-icons/fa';

const About = () => {
  const resumeSections = [
    {
      icon: <FaCode className="text-4xl text-green-400" />,
      title: 'Skills',
      items: [
        'HTML, CSS, JavaScript, Tailwind CSS',
        'React, Bootstrap, Node.js, Express.js',
        'MongoDB, Firebase, VS Code',
      ],
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-purple-400" />,
      title: 'Projects',
      items: [
        'MERN Stack Book Store Website',
        'Responsive Bag Shop (HTML, CSS, JS)',
        'Consumer Behaviour Study (Research)',
      ],
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-300" />,
      title: 'Achievements',
      items: [
        'District-level athlete',
        'Zonal/state-level chess player',
        'College sports & chess team',
      ],
    },
    {
      icon: <FaGraduationCap className="text-4xl text-blue-300" />,
      title: 'Training',
      items: [
        'MERN Stack – Axexa Technology (May–Sep 2024)',
        'MS Office Certification (Advanced)',
        'Cyber Security Certification',
      ],
    },
  ];
  return (
    <section className="min-h-screen bg-black text-white px-6 lg:px-24 py-12 flex flex-col gap-20 justify-center relative overflow-hidden animate-fadeIn">
      <img src="/mkm5.jpg" alt="bgimg" className="fixed inset-0 w-full h-full object-cover z-0" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-customBlue1 text-center font-leckerli z-10 mt-8">
        About Me
      </h1>
      {/* About Section */}
      <div className="max-w-screen-xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between z-10 gap-12">
        {/* Profile Image */}
        <div className="lg:w-1/3 flex justify-center items-center">
          <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full p-3 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-900 via-blue-800 via-blue-600 via-blue-500 to-blue-400"></div>
            </div>
            <div className="absolute w-[88%] h-[88%] perspective z-10">
              <div className="relative w-full h-full group">
                <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 relative">
                  {/* Front Face */}
                  <div className="absolute w-full h-full backface-hidden rounded-full bg-black overflow-hidden">
                    <img
                      src="/sowmi.png"
                      alt="About Me"
                      className="w-full h-full object-cover object-center "
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-full bg-black flex flex-col justify-center items-center text-white text-center p-4">
                    <h2 className="text-lg font-semibold">Sowmiya P</h2>
                    <p className="text-xs mt-1"> Developer | Chess Player | Athlete </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="lg:w-2/3 space-y-6 text-center lg:text-left font-inter">
          <p className="text-lg md:text-xl text-gray-300 ">
            Hello! I'm a passionate and detail-oriented developer with experience in building responsive, fast, and modern websites.
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-inter ">
            I specialize in front-end technologies like React, Tailwind CSS, and JavaScript, and I strive to create seamless user experiences. I enjoy solving complex problems and constantly learning new technologies.
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-inter">
            When I'm not coding, you can find me experimenting with design, contributing to open-source projects, or exploring new web development trends.
          </p>
        </div>
      </div>
      {/* Skills Section */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-customBlue1 text-center mb-12 font-leckerli">
          My Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-leckerli">
          {[
            {
              icon: <FaHtml5 className="text-5xl text-orange-500" />,
              title: 'HTML',
              desc: 'Expert in writing semantic and accessible HTML5.',
            },
            {
              icon: <FaCss3Alt className="text-5xl text-blue-500" />,
              title: 'CSS',
              desc: 'Proficient in Flexbox, Grid, and responsive design.',
            },
            {
              icon: <FaJs className="text-5xl text-yellow-400" />,
              title: 'JavaScript',
              desc: 'Skilled in ES6+, DOM manipulation, and async programming.',
            },
            {
              icon: <FaNodeJs className="text-5xl text-green-500" />,
              title: 'Node.js',
              desc: 'Experienced in backend development and REST APIs.',
            },
            {
              icon: <FaReact className="text-5xl text-cyan-400" />,
              title: 'React.js',
              desc: 'Building modern UIs with reusable components and hooks.',
            },
            {
              icon: <FaDatabase className="text-5xl text-green-400" />,
              title: 'MongoDB',
              desc: 'Handling large NoSQL datasets and schema design.',
            },
            {
              icon: <FaGitAlt className="text-5xl text-red-500" />,
              title: 'Git',
              desc: 'Version control, branching, merging, and GitHub workflows.',
            },
            {
              icon: <FaBootstrap className="text-5xl text-purple-500" />,
              title: 'Bootstrap',
              desc: 'Creating responsive layouts with prebuilt components.',
            },
            {
              icon: <SiTailwindcss className="text-5xl text-sky-400" />,
              title: 'Tailwind CSS',
              desc: 'Utility-first styling with rapid development capabilities.',
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-blue-400/20 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-blue-500/30 hover:border-blue-400/50 group"
            >
              <div className="flex justify-center mb-4 group-hover:animate-pulse">{skill.icon}</div>
              <h2 className="text-xl font-semibold text-blue-900 text-center mb-2">
                {skill.title}
              </h2>
              <p className="text-gray-500 text-sm text-center">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Resume Section */}
      <div className="max-w-7xl w-full mx-auto space-y-10 text-center animate-fadeIn z-10 mt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-customBlue1 font-leckerli">
          My Resume
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 font-leckerli">
          {resumeSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 border border-blue-400/20 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-blue-500/30 hover:border-green-300/50 group"
            >
              <div className="flex justify-center mb-4 group-hover:animate-pulse">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold text-blue-400 text-center mb-2">
                {section.title}
              </h2>
              <ul className="text-gray-300 text-sm text-left space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resume Download Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            <FaFileDownload className="text-lg" />
            VIEW MY RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
