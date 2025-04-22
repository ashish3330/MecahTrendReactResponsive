import React from 'react';
import { Cpu, Settings, DraftingCompass, Repeat2 } from 'lucide-react';

const DesignDevelopment = () => {
  const features = [
    {
      icon: <DraftingCompass className="text-blue-600 w-10 h-10" />,
      title: 'Advanced CAD/CAM Tools',
      description:
        'Our team leverages industry-leading design software like Pro-E and AutoCAD to create highly accurate models and technical drawings that form the backbone of our engineering process.',
    },
    {
      icon: <Cpu className="text-green-600 w-10 h-10" />,
      title: 'Product Feasibility & Reverse Engineering',
      description:
        'We evaluate product feasibility and perform reverse engineering to refine legacy components or develop efficient alternatives—ensuring every design is production-ready and cost-effective.',
    },
    {
      icon: <Settings className="text-yellow-600 w-10 h-10" />,
      title: 'Tool Design & Development',
      description:
        'Our in-house tooling team designs and develops specialized tools that meet precise manufacturing requirements, reducing lead time and enhancing production flexibility.',
    },
    {
      icon: <Repeat2 className="text-red-600 w-10 h-10" />,
      title: 'Rapid Prototyping',
      description:
        'With quick turnaround prototyping capabilities, we provide physical validation models early in the product lifecycle—accelerating development and minimizing errors.',
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-r from-purple-900 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Design & Development
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Precision-driven innovation from concept to production—powered by advanced tools, smart engineering, and a passion for perfection.
          </p>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Core Capabilities</h2>
        <div className="h-1 w-24 bg-purple-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section: Our Design Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Design Philosophy</h2>
        <div className="h-1 w-24 bg-purple-600 mx-auto mb-10"></div>
        <p className="text-lg text-gray-700 max-w-5xl mx-auto text-center leading-relaxed">
          At MechaTrend Systems, innovation and manufacturability go hand in hand. Our design and development process focuses not just on engineering precision, but also on ensuring ease of manufacturing, scalability, and performance optimization. By integrating CAD/CAM expertise with hands-on prototyping, we bring ideas to life—faster, better, and smarter.
        </p>
      </section>
    </div>
  );
};

export default DesignDevelopment;
 