import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">URL Shortener</div>
        <div>
          <a href="#features" className="text-gray-700 hover:text-blue-600 mx-4">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 mx-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
