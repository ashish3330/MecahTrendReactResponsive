import React from 'react';
import { Factory, Wrench, Sparkles, Brush, Microscope, Leaf, Recycle, MapPin, Truck, Award, ShieldCheck } from 'lucide-react';

const Facilities = () => {
  // Location coordinates
  const locations = [
    { name: 'Pune', top: '60%', left: '30%' },
    { name: 'Delhi', top: '25%', left: '45%' },
    { name: 'Chennai', top: '75%', left: '60%' },
    { name: 'Ahmedabad', top: '40%', left: '28%' },
    { name: 'Hyderabad', top: '65%', left: '48%' },
  ];

  const facilities = [
    {
      title: 'Modern Tool Room & Press Shop',
      description: '50+ high-tonnage presses (100T-1000T) with automated coil feeders and CNC pipe bending.',
      icon: <Wrench className="text-blue-600" size={32} />,
    },
    {
      title: 'Robotic Welding & Assembly',
      description: '100+ robotic welding stations for MIG, spot, and laser welding with automated conveyors.',
      icon: <Sparkles className="text-green-600" size={32} />,
    },
    {
      title: 'Paint Shop & Surface Finishing',
      description: 'ECOAT pretreatment, automated powder coating, and cathodic dip painting systems.',
      icon: <Brush className="text-purple-600" size={32} />,
    },
    {
      title: 'Quality Control & Testing',
      description: '3D CMMs, tensile testers, salt spray chambers, and metallurgical microscopes.',
      icon: <Microscope className="text-yellow-600" size={32} />,
    },
  ];

  const sustainability = [
    {
      title: 'Energy Efficiency',
      description: '30% reduced carbon footprint through solar panels and energy-efficient machinery.',
      icon: <Leaf className="text-green-600" size={32} />,
    },
    {
      title: 'Zero-Waste Manufacturing',
      description: 'Comprehensive recycling programs minimizing landfill use across all facilities.',
      icon: <Recycle className="text-blue-600" size={32} />,
    },
  ];

  const stats = [
    {
      title: 'Strategic Locations',
      value: '8',
      description: 'Pan-India Industrial Hubs',
      icon: <Factory size={48} className="mx-auto mb-3 text-teal-400" />,
    },
    {
      title: 'Components/Year',
      value: '1M+',
      description: 'High-Volume Production',
      icon: <Truck size={48} className="mx-auto mb-3 text-cyan-400" />,
    },
    {
      title: 'OEM Partnerships',
      value: '10+',
      description: 'Trusted by Industry Leaders',
      icon: <Award size={48} className="mx-auto mb-3 text-yellow-400" />,
    },
    {
      title: 'Quality Assurance',
      value: '99%',
      description: 'Zero-Defect Manufacturing',
      icon: <ShieldCheck size={48} className="mx-auto mb-3 text-green-400" />,
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            MechaTrend Systems Facilities
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Driving automotive excellence with cutting-edge manufacturing across India's industrial hubs.
          </p>
          <a
            href="#facilities"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            aria-label="Discover our manufacturing capabilities"
          >
            Discover Our Capabilities
          </a>
        </div>
      </div>

      {/* Facilities Section */}
      <div id="facilities" className="w-full py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Production Capabilities</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Sustainability Initiatives</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {sustainability.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-green-50 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scale & Impact Section */}
      <div className="w-full bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Scale & Impact</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2 text-gray-800">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-700 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations Section */}
      <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Locations</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <span className="font-medium text-gray-800">{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;