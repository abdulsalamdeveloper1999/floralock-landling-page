import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Floralock has completely transformed my hair! After just 2 weeks of use, I noticed significantly less hair fall and my hair feels so much stronger. The natural ingredients make me feel confident about what I'm putting on my hair.",
      name: "Sarah Ahmed",
      location: "Lahore, Pakistan",
      initial: "S"
    },
    {
      text: "I've tried so many shampoos but Floralock is different. My hair has never been this healthy and shiny. The flaxseed formula really works! Plus, knowing it's 100% organic gives me peace of mind.",
      name: "Maria Khan",
      location: "Karachi, Pakistan",
      initial: "M"
    },
    {
      text: "As someone with sensitive scalp, I was skeptical about trying new products. Floralock proved me wrong! It's gentle yet effective. My hair fall has reduced by 70% and my scalp feels so much healthier.",
      name: "Aisha Malik",
      location: "Islamabad, Pakistan",
      initial: "A"
    },
    {
      text: "The natural shine Floralock gives my hair is incredible! My friends keep asking what I'm using. The organic ingredients make all the difference. I've been using it for 3 months now and my hair has never looked better.",
      name: "Fatima Sheikh",
      location: "Rawalpindi, Pakistan",
      initial: "F"
    },
    {
      text: "I love that Floralock is Halal certified and chemical-free. As a mother, I want the best for my family. This shampoo has made my hair stronger and my daughter loves how soft it makes her hair feel.",
      name: "Nadia Hassan",
      location: "Faisalabad, Pakistan",
      initial: "N"
    },
    {
      text: "After years of struggling with hair loss, Floralock has been a game-changer. The flaxseed and herbal extracts have strengthened my hair roots significantly. I can finally wear my hair down with confidence!",
      name: "Zara Ali",
      location: "Multan, Pakistan",
      initial: "Z"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black bg-opacity-20 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-gold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-lg">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
