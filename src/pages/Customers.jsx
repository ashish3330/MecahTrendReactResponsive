import React from 'react';
import { ThumbsUp, Users, Globe, Star } from 'lucide-react';

const Customer = () => {
  const values = [
    {
      icon: <ThumbsUp className="text-green-600" size={32} />,
      title: 'Customer First Approach',
      description:
        'We put our customers at the center of everything we do. From understanding their needs to delivering consistent value, customer satisfaction is our top priority.',
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: 'Long-Term Relationships',
      description:
        'Our focus is on building long-term partnerships. We believe trust and transparency are key to driving mutual growth with our clients.',
    },
    {
      icon: <Globe className="text-yellow-500" size={32} />,
      title: 'Global Standards, Local Support',
      description:
        'With global quality standards and local responsiveness, we support our clients seamlessly across geographies.',
    },
  ];

  const customers = [
    {
      name: 'AutoNova Inc.',
      logo: 'https://via.placeholder.com/150x60?text=AutoNova',
    },
    {
      name: 'MotionTech Motors',
      logo: 'https://via.placeholder.com/150x60?text=MotionTech',
    },
    {
      name: 'GearUp Industries',
      logo: 'https://via.placeholder.com/150x60?text=GearUp',
    },
    {
      name: 'DriveLine Corp.',
      logo: 'https://via.placeholder.com/150x60?text=DriveLine',
    },
    {
      name: 'NextGen Auto',
      logo: 'https://via.placeholder.com/150x60?text=NextGen+Auto',
    },
    {
      name: 'TreadWorks Global',
      logo: 'https://via.placeholder.com/150x60?text=TreadWorks',
    },
  ];

  const testimonials = [
    {
      name: 'Rohit Mehra',
      company: 'MotionTech Motors',
      quote:
        'Working with MechTrend has streamlined our production process by 20%. Their commitment to quality and support is unmatched.',
    },
    {
      name: 'Laura Smith',
      company: 'NextGen Auto',
      quote:
        'We’ve collaborated with MechTrend for over a decade. Their expertise in design and rapid prototyping has been a game changer.',
    },
    {
      name: 'Anil Kapoor',
      company: 'DriveLine Corp.',
      quote:
        'A reliable partner for all our critical components. Their attention to detail and delivery timelines are exceptional.',
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-green-900 to-green-600 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our Valued Customers
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders for precision engineering and consistent excellence.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Customer Philosophy</h2>
        <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Clients</h2>
        <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {customers.map((client, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-50 rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 px-6 sm:px-10 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" />
                <h4 className="text-md font-semibold text-gray-800">{t.name}</h4>
              </div>
              <p className="text-gray-600 italic">"{t.quote}"</p>
              <p className="text-sm text-green-700 font-medium mt-2">— {t.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white px-6 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Case Study Highlight</h2>
          <p className="text-lg text-gray-700 mb-4">
            When <strong>AutoNova Inc.</strong> needed a scalable and efficient drivetrain solution, they turned to MechTrend. In less than 6 months, we helped them reduce their defect rate by 35%, while cutting production costs by 18%.
          </p>
          <p className="text-md text-gray-500 italic">“MechTrend’s precision and engineering clarity made this partnership a standout.” — CTO, AutoNova Inc.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-lg mb-6">Join our global clientele and discover what precision really means.</p>
        <a
          href="/contact"
          className="bg-white text-green-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Customer;
