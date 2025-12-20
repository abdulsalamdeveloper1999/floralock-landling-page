import React from 'react';

const ShopSection = ({
  price,
  quantity,
  setQuantity,
  decreaseQuantity,
  increaseQuantity,
  handleAddToCart
}) => {
  return (
    <section id="shop" className="py-20 bg-black bg-opacity-20 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-gold mb-10 text-center">Purchase Floralock™</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800 product-glow">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/floralock-product.png"
              alt="Floralock Shampoo Bottle"
              className="rounded-lg w-full max-w-xs md:max-w-sm mx-auto product-image"
            />
          </div>
          {/* Purchase Form */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">100% Organic Shampoo</h3>
            <p className="text-green-accent mt-1">Flaxseed + Strong Locks</p>
            <p className="font-serif text-4xl text-gold my-4" data-price="1500">PKR {price.toLocaleString('en-PK')}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 my-6">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-full border border-gold text-gold font-bold text-xl flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 h-10 text-center bg-gray-800 border border-gray-700 rounded-md focus:ring-gold focus:border-gold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-full border border-gold text-gold font-bold text-xl flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-black font-bold py-3 px-10 rounded-full btn-enhanced btn-ripple"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
