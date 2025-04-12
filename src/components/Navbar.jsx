import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import React from 'react';
import logo from '../assets/images/logo.png';
// Update this path to your actual logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-20 w-30 md:h-20 w-30" // Responsive logo height
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Home</Link>
              <div className="relative" onMouseEnter={() => setAboutDropdown(true)} onMouseLeave={() => setAboutDropdown(false)}>
                <button className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300 flex items-center">
                  About
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdown && <Dropdown darkTheme />}
              </div>
              <Link to="/products" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Products</Link>
              <Link to="/facilities" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Facilities</Link>
              <Link to="/customers" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Customers</Link>
              <Link to="/best-practices" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Best Practices</Link>
              <Link to="/contact" className="py-4 px-2 text-gray-300 font-semibold hover:text-white transition duration-300">Contact Us</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <Link to="/" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
        <div className="relative">
          <button className="block w-full text-left py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 flex justify-between items-center" onClick={() => setAboutDropdown(!aboutDropdown)}>
            About
            <svg className={`w-4 h-4 transition-transform ${aboutDropdown ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {aboutDropdown && (
            <div className="pl-6 bg-gray-700">
              <Link to="/about/leadership" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600" onClick={() => { setIsOpen(false); setAboutDropdown(false); }}>Leadership</Link>
              <Link to="/about/design-development" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600" onClick={() => { setIsOpen(false); setAboutDropdown(false); }}>Design & Development</Link>
              <Link to="/about/history-background" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600" onClick={() => { setIsOpen(false); setAboutDropdown(false); }}>History & Background</Link>
            </div>
          )}
        </div>
        <Link to="/products" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/facilities" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Facilities</Link>
        <Link to="/customers" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Customers</Link>
        <Link to="/best-practices" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Best Practices</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;