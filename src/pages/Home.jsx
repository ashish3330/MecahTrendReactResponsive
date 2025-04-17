import React, { useState, useEffect } from 'react';
import { ShieldCheck, GraduationCap, Handshake, Award } from 'lucide-react'; // Icons
import Image1 from '../assets/images/crouselImage1.jpg';
import Image2 from '../assets/images/crouselImage2.jpg';
import Image3 from '../assets/images/crouselImage3.jpg';
import Stamp1 from '../assets/images/stamping/stamp1.png';
import Stamp2 from '../assets/images/stamping/stamp2.png';
import Weildcom from '../assets/images/weilding/weildcom.png';
import Weildcom1 from '../assets/images/weilding/weildcom1.png';
import Weildp from '../assets/images/weilding/weildp1.png';
import Weildp2 from '../assets/images/weilding/weildp2.png';
import Tool1 from '../assets/images/tooling &jigfixer/tooljig1.png';
import Tool2 from '../assets/images/tooling &jigfixer/tooljig2.png';
import Tool3 from '../assets/images/tooling &jigfixer/tooljig3.png';
import Tool4 from '../assets/images/tooling &jigfixer/tooljig4.png';
import Milling1 from '../assets/images/miling/milingp1.png';
import Milling2 from '../assets/images/miling/milingp2.png';
import Milling3 from '../assets/images/miling/milingm1.png';
import Milling4 from '../assets/images/miling/milingm2.png';
import StampingMachinge from '../assets/images/stamping/stampingmachine.png';

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
      subtitle: "Excellence in Manufacturing Through Continuous Innovation and performance in every design",
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

  // Product range logic
  const categories = ['All', 'Stamping', 'Tooling & Jigfixers', 'Welded Assembly', 'MILING'];
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    // Tooling & Jigfixers
    {
      id: 1,
      category: 'Tooling & Jigfixers',
      img: Tool1,
      label: 'Tooling & Jigfixers',
    },
    {
      id: 2,
      category: 'Tooling & Jigfixers',
      img: Tool2,
      label: 'Tooling & Jigfixers',
    },
    {
      id: 3,
      category: 'Tooling & Jigfixers',
      img: Tool3,
      label: 'Tooling & Jigfixers',
    },
    {
      id: 4,
      category: 'Tooling & Jigfixers',
      img: Tool4,
      label: 'Tooling & Jigfixers',
    },
  
    // MILING
    {
      id: 5,
      category: 'MILING',
      img: Milling1,
      label: 'MILING',
    },
    {
      id: 6,
      category: 'MILING',
      img: Milling2,
      label: 'MILING',
    },
    {
      id: 7,
      category: 'MILING',
      img: Milling3,
      label: 'MILING',
    },
    {
      id: 8,
      category: 'MILING',
      img: Milling4,
      label: 'MILING',
    },
  
    // Stamping
    {
      id: 9,
      category: 'Stamping',
      img: Stamp1,
      label: 'Stamping',
    },
    {
      id: 10,
      category: 'Stamping',
      img: StampingMachinge,
      label: 'Stamping',
    },
    {
      id: 11,
      category: 'Stamping',
      img: Stamp2,
      label: 'Stamping',
    },
  
    // Welded Assembly
    {
      id: 12,
      category: 'Welded Assembly',
      img: Weildcom,
      label: 'Welded Assembly',
    },
    {
      id: 13,
      category: 'Welded Assembly',
      img: Weildp,
      label: 'Welded Assembly',
    },
    {
      id: 14,
      category: 'Welded Assembly',
      img: Weildp2,
      label: 'Welded Assembly',
    },
    {
      id: 15,
      category: 'Welded Assembly',
      img: Weildcom1,
      label: 'Welded Assembly',
    },
  ];
  
  const filteredProducts = 
  activeCategory === 'All'
    ? products  // Show all products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Carousel Section */}
      <div className="relative w-screen h-[400px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
          Welcome to MechaTrend Systems
        </h1>
        <div className="h-1 w-20 bg-blue-600 mb-6"></div>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Pioneering Excellence in Manufacturing
        </h2>

        <p className="text-gray-700 mb-4 max-w-4xl">
          Mechatrend Systems Private Limited is a next-generation engineering and
          manufacturing venture built on a foundation of innovation, precision, and
          unwavering commitment to quality.
        </p>
        <p className="text-gray-700 max-w-4xl">
          Founded by IIM alumni and industry veterans with decades of expertise at India’s
          leading OEMs, we combine strategic vision with hands-on mastery to redefine
          manufacturing excellence.
        </p>
        <h2 className="text-3xl my-10 text-center font-bold text-gray-900 mb-4">
          Our Strategic Edge
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <ShieldCheck className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Leadership with Legacy</h3>
            <p className="text-gray-600">
              Our core team brings unparalleled experience from top-tier automotive and
              industrial manufacturing giants, ensuring world-class processes and execution.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Handshake className="mx-auto text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Disruptive Collaboration</h3>
            <p className="text-gray-600">
              Through a strategic joint venture with MK Automotives, we merge decades of
              proven fabrication expertise with cutting-edge technology to deliver
              transformative solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <GraduationCap className="mx-auto text-purple-700 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Academic Rigor</h3>
            <p className="text-gray-600">
              Insights from India’s premier management institute (IIM) drive our operational
              and strategic decision-making.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Award className="mx-auto text-yellow-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Awards & Certificates</h3>
            <p className="text-gray-600">
              Recognized as best manufacturer by Reboit, JBM, V-Gaurd, Euler, Metalman,
              Asme, FieldKing
            </p>
          </div>
        </div>
      </div>

      {/* Product Range Section */}
      <div className="bg-[#f9fcff] py-12 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Product Range</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium ${activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden bg-white shadow-md rounded-md"
            >
              <img
                src={product.img}
                alt="product"
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              {activeCategory === 'All' && product.label && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">{product.label}</span>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
