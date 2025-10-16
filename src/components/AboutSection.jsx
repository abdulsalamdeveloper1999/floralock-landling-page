import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black bg-opacity-20 fade-in-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-gold mb-4">Nature Meets Strength</h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Floralock™ combines the purest organic ingredients like flaxseed, hibiscus, and bhringraj to create a powerful formula that strengthens your hair from the roots. Our philosophy is simple: harness nature's best to promote visibly healthy, strong, and beautiful hair without compromise.
        </p>
        <div className="flex justify-center space-x-8 md:space-x-12 mt-10">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mb-2 border-2 border-green-accent">
              <svg className="w-8 h-8 text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <span className="text-sm">Paraben Free</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mb-2 border-2 border-green-accent">
              <svg className="w-8 h-8 text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <span className="text-sm">Chemical Free</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mb-2 border-2 border-green-accent">
              <svg className="w-8 h-8 text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l5.373 2.986m11.254 0L23 12"></path>
              </svg>
            </div>
            <span className="text-sm">Halal Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
