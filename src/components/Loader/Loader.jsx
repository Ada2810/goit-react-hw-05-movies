import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots color="#3498db" height={80} width={80} />
    </div>
  );
};

export default Loader;
