import React, { useState, useEffect } from 'react';
import { Globe, Factory, Heart, BadgeCheck } from 'lucide-react'; // Icons
import Image1 from '../assets/images/crouselImage1.jpg';
import Image2 from '../assets/images/crouselImage2.jpg';
import Image3 from '../assets/images/crouselImage3.jpg';

const Home = () => {
  const carouselItems = [
    {
      image: Image1,
      tagline: "Innovative Mechanical Solutions",
      subtitle: "Pioneering technology to move the world forward",
    },
    {
      image: Image2,
      tagline: "Engineering Excellence",
      subtitle: "Precision and performance in every design",
    },
    {
      image: Image3,
      tagline: "Future of Manufacturing",
      subtitle: "Automated systems for a smarter tomorrow",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Carousel Section */}
      <div className="relative w-screen h-[400px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.tagline} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-4">{item.tagline}</h2>
                <p className="text-xl">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <div className="w-full bg-white py-12 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to INDO Autotech Limited
        </h1>
        <div className="h-1 w-20 bg-blue-600 mb-6"></div>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Your partner in Innovation</h2>
        <p className="text-gray-700 mb-4 max-w-4xl">
          With an impressive track record in meeting stringent quality requirements and a commitment
          to supply best quality sheet metal components & tubular components at the lowest prices.
        </p>
        <p className="text-gray-700 max-w-4xl">
          Our Engineering, Production and Quality Assurance departments coordinate to guarantee and
          maintain the highest quality levels. Process controls assure quality from prototype
          through production.
        </p>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Globe className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Global Experience</h3>
            <p className="text-gray-600">
              Manufacturers and suppliers of precision sheet metal components, tubular parts and
              assemblies used in Automobile Industry since 1974.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Factory className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">World Class Facilities</h3>
            <p className="text-gray-600">
              Indo Autotech Limited has a strength of over 4200 employees and 850000 sq ft of
              production facility across six units in India.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Heart className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Best Practices</h3>
            <p className="text-gray-600">
              Expertise in Sheet Metal Press, CNC Pipe Bending, Robotic & MIG Welding, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <BadgeCheck className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Awards & Certificates</h3>
            <p className="text-gray-600">
              Recognized as best manufacturer by Maruti, JCB, Honda, Suzuki, Yamaha, and others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
