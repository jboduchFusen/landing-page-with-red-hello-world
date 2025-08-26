import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-500">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">
            This is the about page of our website. Here you can learn more about our company,
            mission, vision, and values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;