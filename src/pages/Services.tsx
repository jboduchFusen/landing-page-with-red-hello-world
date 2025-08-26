import React from 'react';
import Header from '../components/Header';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-500">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600">
            This is the services page where you can learn about the various services we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;