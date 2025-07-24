import React from 'react';
import {FaFileDownload,FaCode,FaTrophy,FaProjectDiagram,FaGraduationCap,} from 'react-icons/fa';

const Resume = () => {
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
    <section className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
       <img src="/mkm5.jpg" alt="bgimg" className="fixed inset-0 w-full h-full object-cover z-0" />
      <div className="max-w-4xl w-full space-y-10 text-center animate-fadeIn z-10">
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
      <div className='flex flex-col sm:flex-row gap-6 justify-center items-center '>
        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-blue-500 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          <FaFileDownload />
          VIEW MY RESUME
        </a>
         {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-4 bg-blue-500 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 "
        >
          DOWNLOAD RESUME
        </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
