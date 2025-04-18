import React from 'react';
import { Cog, TrendingUp, Leaf, Shield, Users, Truck, Database, User, Package } from 'lucide-react';

const BestPractices = () => {
  const bestPractices = [
    {
      title: 'Lean Manufacturing Techniques',
      description: 'We embrace Lean Manufacturing principles to minimize waste and optimize production efficiency using techniques like JIT, standardized work, and 5S.',
      icon: <Cog className="text-blue-600" size={32} />,
    },
    {
      title: 'Kaizen & Continuous Improvement Culture',
      description: 'Kaizen is at the core of our operations, encouraging all employees to suggest improvements, ensuring we stay agile and responsive.',
      icon: <TrendingUp className="text-green-600" size={32} />,
    },
    {
      title: 'Environmentally Friendly Paint Processes',
      description: 'Our eco-friendly paint systems feature low-VOC coatings, minimizing environmental impact while maintaining high-quality finishes.',
      icon: <Leaf className="text-green-600" size={32} />,
    },
    {
      title: 'Quality Certifications: IATF 16949, ISO 14001',
      description: 'We are certified with IATF 16949 for automotive industry standards and ISO 14001 for environmental management.',
      icon: <Shield className="text-yellow-600" size={32} />,
    },
    {
      title: 'Employee Safety and Training Programs',
      description: 'Comprehensive training programs, safety drills, and wellness initiatives prioritize employee safety and mental well-being.',
      icon: <Users className="text-purple-600" size={32} />,
    },
    {
      title: 'Robust Supply Chain Management',
      description: 'Our supply chain focuses on reliability, transparency, and flexibility, ensuring timely and cost-effective delivery.',
      icon: <Truck className="text-red-600" size={32} />,
    },
    {
      title: 'Advanced Automation & Robotics Integration',
      description: 'We integrate automation and robotics into production lines to ensure precision, safety, and higher-value tasks for our workforce.',
      icon: <Database className="text-teal-600" size={32} />,
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'By leveraging IoT sensors and AI-based analytics, we optimize production schedules, predict maintenance needs, and improve overall efficiency.',
      icon: <User className="text-orange-600" size={32} />,
    },
    {
      title: 'Sustainability in Materials Sourcing',
      description: 'We prioritize eco-friendly materials, focusing on recycled and biodegradable options to reduce our environmental footprint.',
      icon: <Package className="text-blue-600" size={32} />,
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We work closely with customers to provide tailored solutions, fostering long-term partnerships based on trust and clear communication.',
      icon: <Users className="text-purple-600" size={32} />,
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-r from-green-900 to-green-600 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            MechaTrend Systems Best Practices
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Commitment to quality, sustainability, and continuous improvement drives our manufacturing excellence.
          </p>
          <a
            href="#best-practices"
            className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            aria-label="Discover our best practices"
          >
            Discover Our Best Practices
          </a>
        </div>
      </div>

      {/* Best Practices Section */}
      <div id="best-practices" className="w-full py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Best Practices</h2>
        <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bestPractices.map((practice, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-green-50 rounded-full">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{practice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
