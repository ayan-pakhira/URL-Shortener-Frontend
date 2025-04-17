import React from 'react';
import { FaLink, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaLink className="text-blue-600 text-3xl" />,
    title: 'Short & Clean Links',
    description: 'Convert long URLs into short, easy-to-share links.',
  },
  {
    icon: <FaChartBar className="text-green-600 text-3xl" />,
    title: 'Track Click Analytics',
    description: 'Monitor number of visits and user engagement.',
  },
  {
    icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
    title: 'Secure & Reliable',
    description: 'Your data is safe and links never expire.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Use Our URL Shortener?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
