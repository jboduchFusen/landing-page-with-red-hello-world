import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            My Website
          </div>
          <ul className="flex flex-wrap gap-6">
            <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-blue-300 transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;