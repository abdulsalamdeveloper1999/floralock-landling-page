import React from 'react';

const Toast = ({ showToast }) => {
  return (
    <div className={`fixed top-20 right-5 bg-green-accent text-white py-2 px-5 rounded-lg shadow-lg transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <p>Item added to cart!</p>
    </div>
  );
};

export default Toast;
