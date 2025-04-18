import Navbar from './Navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex mx-0 my-0 flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-0 my-0 px-0 py-0">{children}</main>
      <footer className="bg-gray-800 text-white mt-8">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Company Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">MechTrend Systems</h5>
            <p>
              Leading innovation in manufacturing and engineering technology solutions.
              Delivering excellence across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/facilities" className="hover:underline">Facilities</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p>Email: info@mechtrend.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: Pune, Maharashtra, India</p>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 py-4 text-center text-xs">
          &copy; {new Date().getFullYear()} MechTrend Systems. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
