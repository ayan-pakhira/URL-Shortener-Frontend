import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">URL Shortener</Link>

        <div className="flex items-center space-x-6">
          {/* Login link now replaces "Features" */}
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>

          {/* Register link moved out of the dropdown */}
          <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>

          {/* Human Icon - remains as is for now */}
          <div className="relative">
            <FaUserCircle
              className="text-3xl text-gray-700 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-50">
                {/* Dropdown menu for logged in user will be shown here */}
                <p className="block px-4 py-2 text-sm text-gray-700">User Details</p>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
