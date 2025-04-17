import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto py-6 px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Shortify. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600 text-sm">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 text-sm">Terms</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 text-sm">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
