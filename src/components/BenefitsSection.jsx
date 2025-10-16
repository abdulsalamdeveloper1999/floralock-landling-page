import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-green-accent mb-2">Stronger Roots</h3>
            <p className="text-gray-400">Strengthens roots and promotes thicker, more resilient hair growth from the scalp.</p>
          </div>
          {/* Benefit Card 2 */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-green-accent mb-2">Reduces Hair Fall</h3>
            <p className="text-gray-400">Helps reduce hair fall and combats dryness, leaving hair hydrated and healthy.</p>
          </div>
          {/* Benefit Card 3 */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-green-accent mb-2">Nourishes Scalp</h3>
            <p className="text-gray-400">Nourishes the scalp with essential vitamins and minerals for optimal hair health.</p>
          </div>
          {/* Benefit Card 4 */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-green-accent mb-2">Adds Shine</h3>
            <p className="text-gray-400">Adds a natural, radiant shine and improves smoothness for effortlessly beautiful locks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
