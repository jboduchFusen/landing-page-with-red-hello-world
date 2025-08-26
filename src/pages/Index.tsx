
import React from 'react';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-red-500">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-6xl font-bold text-red-600">Hello World</h1>
      </div>
    </div>
  );
};

export default Index;
