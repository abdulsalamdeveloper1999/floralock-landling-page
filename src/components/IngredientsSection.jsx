import React from 'react';

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-20 bg-black bg-opacity-20 fade-in-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-gold mb-6">Pure, Honest Ingredients</h2>
        <div className="max-w-4xl mx-auto text-gray-400 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-left">
          <p>Aqua (Purified Water)</p>
          <p>Flaxseed Extract</p>
          <p>Hibiscus Flower Extract</p>
          <p>Aloe Vera</p>
          <p>Amla Extract</p>
          <p>Shikakai</p>
          <p>Bhringraj Extract</p>
          <p>Glycerin</p>
          <p>Vitamin E</p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
