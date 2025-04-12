import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 mb-4">
        MechTrend Systems has been a leader in mechanical solutions since 1995.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Leadership</h2>
          <p className="mb-4">Meet our experienced leadership team guiding our vision.</p>
          <Link to="/about/leadership" className="text-blue-500 hover:text-blue-700 font-medium">Learn more →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Design & Development</h2>
          <p className="mb-4">Our innovative approach to mechanical design.</p>
          <Link to="/about/design-development" className="text-blue-500 hover:text-blue-700 font-medium">Learn more →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">History & Background</h2>
          <p className="mb-4">Our journey from humble beginnings to industry leaders.</p>
          <Link to="/about/history-background" className="text-blue-500 hover:text-blue-700 font-medium">Learn more →</Link>
        </div>
      </div>
    </div>
  );
};

export default About;