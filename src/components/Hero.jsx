import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Simplify Your Links
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Shorten, share, and track your links with our easy-to-use URL shortener.
        </p>
        <a href="#shorten" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
