import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-500">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Get in touch with us for any inquiries or feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;