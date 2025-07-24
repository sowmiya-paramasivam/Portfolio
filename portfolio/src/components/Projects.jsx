import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Bag Shopping Website',
      description:
        'A beautiful and unique bag store app built with HTML, advanced CSS, Bootstrap, and JavaScript.',
      image: 'https://i.imgur.com/aZdPFpy.png',
      link: 'https://bag-shop-nine.vercel.app',
    },
    {
      title: 'Book Store Website',
      description:
        'A beautiful and unique book store app built with React Router, Node.js, Tailwind CSS, Express.js,firebase and MongoDB.',
      image: 'https://i.imgur.com/hMnpgKs.png',
      link: 'https://book-store-frontend-yf1f.onrender.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A beautiful and unique personal portfolio built with React.js and Tailwind CSS.',
      image: 'https://i.imgur.com/MAn2pm9.png',
      link: 'https://protfolio-tau-lemon-79.vercel.app',
    },
  ];

  return (
    <section className=" mt-10 min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 lg:px-24 py-12 relative overflow-hidden animate-fadeIn">
       <img src="/mkm5.jpg" alt="bgimg" className="fixed inset-0 w-full h-full object-cover z-0" />
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-customBlue1 mb-10 font-leckerli z-10">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl font-edu">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-50 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-gray-500 hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl mb-6 border border-blue-900"
            />
            <h2 className="text-2xl font-bold text-blue-500 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-customBlue1 text-white rounded-full hover:bg-customBlue transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-700 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow top-40 right-10"></div>
        <div className="absolute w-80 h-80 bg-pink-400 opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-ping bottom-10 left-20"></div>
      </div>
    </section>
  );
};

export default Projects;
