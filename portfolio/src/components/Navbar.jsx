import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsSticky, setIsSticky] = useState(false);

  // Toggle Mobile Menu
  const togglemenu = () => setIsMenuOpen(!IsMenuOpen);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Items
  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "About", path: "/about" },
    { Link: "Projects", path: "/projects" },
    {Link:"Resume",path:"/resume"},
    { Link: "Contact", path: "/contact" },
    { Link: "Blog", path: "/blog" },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${IsSticky ? "bg-black shadow-lg" : "bg-gradient-to-r from-black to-green-700"}`}>
      <div className="flex justify-between items-center py-4 px-6 lg:px-24">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-green-400 animate-pulse">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white text-lg font-medium hover:text-green-400 transition duration-300 uppercase"
            >
              {item.Link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={togglemenu} className="text-green-400 focus:outline-none">
            {IsMenuOpen ? <FaTimes className="h-6 w-6 animate-spin" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${IsMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-black w-full py-6 px-8 space-y-4 animate-fadeIn">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-green-400 text-lg font-semibold uppercase hover:text-white transition duration-300"
            >
              {item.Link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
