import React, { useState } from 'react';
import Tool1 from '../assets/images/tooling &jigfixer/tooljig1.png';
import Tool2 from '../assets/images/tooling &jigfixer/tooljig2.png';
import Tool3 from '../assets/images/tooling &jigfixer/tooljig3.png';
import Tool4 from '../assets/images/tooling &jigfixer/tooljig4.png';
import Milling1 from '../assets/images/miling/milingp1.png';
import Milling2 from '../assets/images/miling/milingp2.png';
import Milling3 from '../assets/images/miling/milingm1.png';
import Milling4 from '../assets/images/miling/milingm2.png';
import Stamp1 from '../assets/images/stamping/stamp1.png';
import Stamp2 from '../assets/images/stamping/stamp2.png';
import StampingMachinge from '../assets/images/stamping/stampingmachine.png';
import Weildcom from '../assets/images/weilding/weildcom.png';
import Weildcom1 from '../assets/images/weilding/weildcom1.png';
import Weildp from '../assets/images/weilding/weildp1.png';
import Weildp2 from '../assets/images/weilding/weildp2.png';

const Product = () => {
  const categories = ['All', 'Stamping', 'Tooling & Jigfixers', 'Welded Assembly', 'MILING'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProductExpand = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  const products = [
    { 
      id: 1, 
      category: 'Tooling & Jigfixers', 
      img: Tool1, 
      label: 'Precision Alignment Jig', 
      description: 'Our precision-engineered alignment jigs ensure micrometer-level accuracy in assembly processes with hardened steel construction for exceptional durability.',
      detailedDescription: 'Features adjustable clamping mechanisms for various part geometries with anodized surface treatment to prevent corrosion. Ideal for automotive assembly lines where repeatability is critical.',
      specifications: [
        'Material: Grade 5 Titanium alloy with steel inserts',
        'Dimensions: 200mm × 100mm × 50mm (±0.01mm)',
        'Load Capacity: 50kg',
        'Temperature Range: -20°C to 150°C'
      ],
      price: '₹2,450',
      warranty: '24 months'
    },
    { 
      id: 2, 
      category: 'Tooling & Jigfixers', 
      img: Tool2, 
      label: 'Modular Fixture System', 
      description: 'Versatile modular fixture system with quick-change components that adapt to various manufacturing needs without compromising precision.',
      detailedDescription: 'Features a base plate with standardized grid patterns that accept various locators, clamps, and supports. Aluminum construction provides optimal strength-to-weight ratio.',
      specifications: [
        'Material: Aircraft-grade aluminum (6061-T6)',
        'Base Plate: 250mm × 150mm × 25mm',
        'T-slot spacing: 25mm centers',
        'Maximum clamping force: 500N per point'
      ],
      price: '₹3,850',
      warranty: '36 months'
    },
    { 
      id: 3, 
      category: 'Tooling & Jigfixers', 
      img: Tool3, 
      label: 'CNC Machining Fixture', 
      description: 'High-precision fixture designed specifically for CNC machining operations with exceptional stability and repeatability.',
      detailedDescription: 'Incorporates vibration-dampening technology and thermal-stable materials to maintain precision during extended machining operations.',
      specifications: [
        'Material: Stainless steel 304 with bronze bushings',
        'Workholding capacity: Up to 150mm diameter',
        'Positioning accuracy: ±0.002mm',
        'Maximum RPM: 8,000'
      ],
      price: '₹4,200',
      warranty: '24 months'
    },
    { 
      id: 4, 
      category: 'Tooling & Jigfixers', 
      img: Tool4, 
      label: 'Multi-Station Jig', 
      description: 'Innovative multi-station jig that allows simultaneous processing of multiple components, dramatically improving throughput.',
      detailedDescription: 'Features quick-release mechanisms and standardized interfaces for fast changeovers between production runs.',
      specifications: [
        'Material: Hardened tool steel (D2)',
        'Stations: 4 independent work areas',
        'Changeover time: <5 minutes',
        'Life expectancy: 500,000 cycles'
      ],
      price: '₹5,600',
      warranty: '36 months'
    },
    { 
      id: 5, 
      category: 'MILING', 
      img: Milling1, 
      label: 'High-Speed Vertical Mill', 
      description: 'Industrial-grade vertical milling machine with advanced spindle technology for high-speed precision machining.',
      detailedDescription: 'Features rigid box-way construction, precision ground ballscrews, and advanced CNC controls for exceptional machining accuracy.',
      specifications: [
        'Table size: 1,370mm × 305mm',
        'X/Y/Z travel: 762mm × 406mm × 508mm',
        'Spindle speed: 50-6,000 RPM',
        'Spindle motor: 7.5kW vector drive'
      ],
      price: '₹125,000',
      warranty: '12 months'
    },
    { 
      id: 6, 
      category: 'MILING', 
      img: Milling2, 
      label: 'CNC Bed Mill', 
      description: 'Heavy-duty bed mill designed for stability and precision in demanding machining applications.',
      detailedDescription: 'Features large diameter ballscrews, box-way construction, and thermal compensation for consistent accuracy.',
      specifications: [
        'Table size: 1,524mm × 381mm',
        'X/Y/Z travel: 1,016mm × 508mm × 610mm',
        'Spindle speed: 30-4,500 RPM',
        'Spindle motor: 11kW direct drive'
      ],
      price: '₹185,000',
      warranty: '18 months'
    },
    { 
      id: 7, 
      category: 'MILING', 
      img: Milling3, 
      label: 'Precision Toolroom Mill', 
      description: 'Ultra-precise toolroom mill for mold making, die work, and precision component manufacturing.',
      detailedDescription: 'Features hand-scraped ways, precision ground leadscrews, and vibration-dampened construction for micro-level accuracy.',
      specifications: [
        'Table size: 915mm × 230mm',
        'X/Y/Z travel: 610mm × 305mm × 406mm',
        'Spindle speed: 60-4,200 RPM',
        'Spindle taper: ISO 40'
      ],
      price: '₹95,000',
      warranty: '24 months'
    },
    { 
      id: 8, 
      category: 'MILING', 
      img: Milling4, 
      label: 'Compact CNC Mill', 
      description: 'Space-efficient CNC milling machine that delivers full-size capabilities in a compact footprint.',
      detailedDescription: 'Ideal for small shops or educational institutions needing CNC capabilities without sacrificing floor space.',
      specifications: [
        'Table size: 762mm × 254mm',
        'X/Y/Z travel: 508mm × 305mm × 406mm',
        'Spindle speed: 50-5,000 RPM',
        'Spindle motor: 3.7kW'
      ],
      price: '₹75,000',
      warranty: '12 months'
    },
    { 
      id: 9, 
      category: 'Stamping', 
      img: Stamp1, 
      label: 'Hydraulic Stamping Press', 
      description: 'Industrial hydraulic press with programmable controls for consistent, high-force stamping operations.',
      detailedDescription: 'Features precision guided ram, programmable pressure/position controls, and overload protection.',
      specifications: [
        'Capacity: 150 tons',
        'Daylight: 600mm',
        'Ram stroke: 250mm',
        'Table size: 900mm × 600mm'
      ],
      price: '₹225,000',
      warranty: '12 months'
    },
    { 
      id: 10, 
      category: 'Stamping', 
      img: Stamp2, 
      label: 'Mechanical Stamping Press', 
      description: 'High-speed mechanical press for volume production of stamped components.',
      detailedDescription: 'Features rigid C-frame construction, precision clutch/brake system, and automatic lubrication.',
      specifications: [
        'Capacity: 200 tons',
        'Stroke: 100mm',
        'Speed: 30-90 SPM',
        'Slide adjustment: 80mm'
      ],
      price: '₹275,000',
      warranty: '18 months'
    },
    { 
      id: 11, 
      category: 'Stamping', 
      img: StampingMachinge, 
      label: 'Progressive Die Press', 
      description: 'Automated progressive die system for high-volume production of complex stamped parts.',
      detailedDescription: 'Integrated feed system, die protection sensors, and quick-change die setup for maximum uptime.',
      specifications: [
        'Capacity: 100 tons',
        'Maximum strip width: 300mm',
        'Feed length: 5-300mm',
        'Production rate: Up to 1,200 parts/hour'
      ],
      price: '₹320,000',
      warranty: '24 months'
    },
    { 
      id: 12, 
      category: 'Welded Assembly', 
      img: Weildcom, 
      label: 'MIG Welding System', 
      description: 'Industrial MIG welding package with advanced arc control technology.',
      detailedDescription: 'Features synergic control, spot timer, and industrial-grade wire feed mechanism for consistent welds.',
      specifications: [
        'Output: 350A at 60% duty cycle',
        'Input voltage: 415V 3-phase',
        'Wire feed speed: 2-24 m/min',
        'Weight: 85kg'
      ],
      price: '₹65,000',
      warranty: '24 months'
    },
    { 
      id: 13, 
      category: 'Welded Assembly', 
      img: Weildcom1, 
      label: 'TIG Welding System', 
      description: 'Precision TIG welding machine for critical welding applications.',
      detailedDescription: 'Features AC/DC output, pulse welding, and advanced HF start for clean arc initiation.',
      specifications: [
        'Output: 300A at 40% duty cycle',
        'AC frequency: 20-200Hz',
        'Pulse frequency: 0.5-500 PPS',
        'Weight: 72kg'
      ],
      price: '₹78,000',
      warranty: '24 months'
    },
    { 
      id: 14, 
      category: 'Welded Assembly', 
      img: Weildp, 
      label: 'Portable Welding Unit', 
      description: 'Compact welding machine designed for field service and maintenance applications.',
      detailedDescription: 'Lightweight yet powerful enough for most repair and fabrication tasks outside the workshop.',
      specifications: [
        'Output: 200A at 30% duty cycle',
        'Input voltage: 240V single phase',
        'Processes: MMA, TIG lift',
        'Weight: 18kg'
      ],
      price: '₹42,000',
      warranty: '12 months'
    },
    { 
      id: 15, 
      category: 'Welded Assembly', 
      img: Weildp2, 
      label: 'Multi-Process Welder', 
      description: 'Versatile welding system capable of MIG, TIG, and stick welding processes.',
      detailedDescription: 'Single machine solution for shops needing flexibility across multiple welding processes.',
      specifications: [
        'Output: 250A at 35% duty cycle',
        'Input voltage: 415V 3-phase',
        'Processes: MIG/MAG, TIG, MMA',
        'Weight: 95kg'
      ],
      price: '₹88,000',
      warranty: '24 months'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MechaTrend Systems <span className="text-green-700">Product Catalog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Precision-engineered manufacturing solutions for automotive, aerospace, and industrial applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Product Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.img}
                  alt={product.label}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.label}</h3>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedProduct === product.id ? 'max-h-96' : 'max-h-0'
                }`}>
                  <p className="text-gray-700 text-sm mb-3">{product.detailedDescription}</p>
                  <h4 className="font-semibold text-sm mb-1">Specifications:</h4>
                  <ul className="text-xs text-gray-600 mb-3 space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex">
                        <span className="mr-1">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  {product.warranty && (
                    <p className="text-xs text-gray-500 mb-2">Warranty: {product.warranty}</p>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-green-700">{product.price}</span>
                  <button
                    onClick={() => toggleProductExpand(product.id)}
                    className="text-sm text-green-600 hover:text-green-800 font-medium"
                  >
                    {expandedProduct === product.id ? 'Show Less' : 'Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">We couldn't find any products matching your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;