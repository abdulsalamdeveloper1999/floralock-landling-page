import React from 'react';

const Header = ({ totalItems, onCartClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 p-4 bg-opacity-50 bg-black/30 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/applogo.png" alt="Floralock Logo" className="h-8 w-auto mr-3" />
          <h1 className="font-serif text-2xl text-gold">Floralock™</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#shop" className="hidden sm:inline-block bg-gold text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-sm">
            Shop Now
          </a>
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-green-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
