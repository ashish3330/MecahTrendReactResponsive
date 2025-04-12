import { Link } from 'react-router-dom';
import React from 'react';

const Dropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
      <Link to="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leadership</Link>
      <Link to="/about/design-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design & Development</Link>
      <Link to="/about/history-background" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">History & Background</Link>
    </div>
  );
};

export default Dropdown;