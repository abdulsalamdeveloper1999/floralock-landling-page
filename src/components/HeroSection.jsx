import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center fade-in-section product-spotlight">
          <img
            src="/floralock-product.png"
            alt="Floralock 100% Organic Shampoo Bottle"
            className="max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105 product-image"
          />
        </div>

        {/* Product Details */}
        <div className="text-center md:text-left fade-in-section" style={{ transitionDelay: '200ms' }}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold gradient-text hero-text-glow">Floralock™</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 stagger-item">100% Organic Shampoo</h2>
          <p className="text-green-accent text-xl md:text-2xl mt-3 stagger-item">Flaxseed + Strong Locks</p>
          <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0 stagger-item">For Strong, Healthy & Natural Locks</p>

          <div className="mt-8 stagger-item">
            <a
              href="#shop"
              className="inline-block bg-gold text-black font-bold py-3 px-10 rounded-full btn-enhanced btn-ripple"
              data-umami-event="Shop Now Clicked"
            >
              Shop Now
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-4 tracking-wider stagger-item">Eco-Friendly | Paraben-Free | Chemical-Free | Cruelty-Free</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
