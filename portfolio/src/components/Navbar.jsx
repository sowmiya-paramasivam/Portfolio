import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsSticky, setIsSticky] = useState(false);
  const location = useLocation(); 

  const togglemenu = () => setIsMenuOpen(!IsMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "About", path: "/about" },
    { Link: "Projects", path: "/projects" },
    { Link: "Contact", path: "/contact" },
  ];

  return (
    <nav className={"fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out"}>
      <div className="flex justify-between items-center py-4 px-6 lg:px-24">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/S.png"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover animate-pulse shadow-md"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-lg font-medium transition duration-300 ${
                location.pathname === item.path
                  ? "text-customBlue underline underline-offset-8"
                  : "text-white hover:text-customBlue"
              }`}
            >
              {item.Link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={togglemenu} className="text-white focus:outline-none">
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
              className={`block text-lg font-semibold uppercase transition duration-300 ${
                location.pathname === item.path
                  ? "text-customBlue underline underline-offset-4"
                  : "text-white hover:text-customBlue"
              }`}
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
