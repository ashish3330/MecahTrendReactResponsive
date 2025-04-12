import React, { useState, useEffect } from 'react';
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
      {/* Full-width Carousel Section */}
      <div className="relative w-screen h-[400px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={item.image} 
              alt={item.tagline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-4">{item.tagline}</h2>
                <p className="text-xl">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="w-full bg-gray-100">
        <div className="w-full p-8 mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to MechTrend Systems</h1>
          <p className="text-gray-600 mb-4">
            Your trusted partner in mechanical solutions and industrial innovation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Featured Product</h2>
              <p>Discover our latest mechanical innovations designed for efficiency and durability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Industry News</h2>
              <p>Stay updated with the latest trends and developments in mechanical engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
