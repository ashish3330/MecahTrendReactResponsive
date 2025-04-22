import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About Us</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          MechTrend Systems has been a leader in mechanical solutions since 1995.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Leadership</h2>
            <p className="text-gray-600 mb-4">Meet our experienced leadership team guiding our vision.</p>
            <Link
              to="/about/leadership"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Design & Development</h2>
            <p className="text-gray-600 mb-4">Our innovative approach to mechanical design.</p>
            <Link
              to="/about/design-development"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">History & Background</h2>
            <p className="text-gray-600 mb-4">Our journey from humble beginnings to industry leaders.</p>
            <Link
              to="/about/history-background"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
