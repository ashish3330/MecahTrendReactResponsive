import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="w-screen overflow-x-hidden font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://via.placeholder.com/1920x1080?text=Contact+Us"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              We would love to hear from you. Get in touch with us for any inquiries or support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
            <p className="text-gray-600 mt-2">1234, ABC Street, City, Country</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Phone className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
            <p className="text-gray-600 mt-2">+123 456 7890</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Mail className="text-purple-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
            <p className="text-gray-600 mt-2">contact@company.com</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ContactUs;
