import React from 'react';

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Mechanical Components</h2>
          <p>High-precision parts for industrial applications.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Automation Systems</h2>
          <p>Cutting-edge automation solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Custom Solutions</h2>
          <p>Tailored mechanical systems for your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;