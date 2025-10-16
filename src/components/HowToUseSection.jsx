import React from 'react';

const HowToUseSection = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Apply a generous amount to completely wet hair."
    },
    {
      number: 2,
      title: "Massage",
      description: "Gently massage into the scalp and roots with your fingertips."
    },
    {
      number: 3,
      title: "Rinse",
      description: "Rinse thoroughly with lukewarm water."
    },
    {
      number: 4,
      title: "Repeat",
      description: "Use regularly for best and most consistent results."
    }
  ];

  return (
    <section id="how-to-use" className="py-20 fade-in-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-gold mb-10">Simple Steps to Healthy Hair</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:space-x-8 space-y-8 md:space-y-0">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center w-48">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gold text-black font-serif text-3xl mb-3">
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
