import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="https://via.placeholder.com/1920x1080?text=Contact+Us"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We would love to hear from you. Reach out for inquiries, support, or collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-20 px-6 sm:px-10 lg:px-24 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="h-1 w-24 bg-green-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Address */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <MapPin className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
            <p className="text-gray-600 mt-2">1234, ABC Street, City, Country</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Phone className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-600 mt-2">+123 456 7890</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Mail className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600 mt-2">contact@company.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form (Optional placeholder) */}
      <section className="py-20 px-6 sm:px-10 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <p className="text-lg text-gray-700 mb-10">Have a question or want to connect? Fill out the form below and we'll get back to you promptly.</p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 border border-gray-300 rounded-lg w-full sm:col-span-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-4 border border-gray-300 rounded-lg w-full sm:col-span-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
