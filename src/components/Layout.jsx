import Navbar from './Navbar'; 
import React from 'react';


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-0 px-0 py-0">{children}</main>
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-0 px-4 text-center">
          &copy; {new Date().getFullYear()} MechTrend Systems
        </div>
      </footer>
    </div>
  );
};

export default Layout;