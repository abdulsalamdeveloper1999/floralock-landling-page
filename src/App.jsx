import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [quantity, setQuantity] = useState(1);

  // Scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('bg-opacity-100', 'bg-black/80');
        header.classList.remove('bg-opacity-50', 'bg-black/30');
      } else {
        header.classList.remove('bg-opacity-100', 'bg-black/80');
        header.classList.add('bg-opacity-50', 'bg-black/30');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', {
      ...formData,
      items: cartItems,
      total: (cartItems * 24.99).toFixed(2)
    });
    setShowConfirmation(true);
  };

  const handleNewOrder = () => {
    setShowConfirmation(false);
    setFormData({ name: '', phone: '', address: '' });
    setCartItems(0);
    setShowCart(false);
  };

  const handleAddToCart = () => {
    setCartItems(prev => prev + quantity);
    setQuantity(1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const price = 24.99;
  const totalPrice = (cartItems * price).toFixed(2);

  return (
    <div className="scroll-smooth">
      {/* Toast Message */}
      <div className={`fixed top-20 right-5 bg-green-accent text-white py-2 px-5 rounded-lg shadow-lg transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p>Item added to cart!</p>
      </div>

      {/* Cart Modal */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 flex items-center justify-center p-4 ${showCart ? 'block' : 'hidden'}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowCart(false);
          }
        }}
      >
        <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-full max-w-md p-6 relative transform transition-all">
          {/* Close Button */}
          <button 
            onClick={() => setShowCart(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Order Confirmation View */}
          <div className={`text-center py-8 ${showConfirmation ? 'block' : 'hidden'}`}>
            <div className="w-24 h-24 mx-auto bg-green-accent rounded-full flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="font-serif text-3xl text-gold mb-2">Congratulations!</h2>
            <p className="text-gray-300">We have your order and will call you to confirm before we dispatch.</p>
            <button 
              onClick={handleNewOrder}
              className="mt-6 bg-gold text-black font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Place New Order
            </button>
          </div>

          {/* Checkout Form View */}
          <div className={showConfirmation ? 'hidden' : 'block'}>
            <h2 className="font-serif text-3xl text-gold mb-4">Confirm Order</h2>
            {/* Order Summary */}
            <div className="border-b border-gray-700 pb-4 mb-4">
              {cartItems > 0 ? (
                <div className="flex justify-between items-center text-white">
                  <p>Floralock™ Organic Shampoo (x{cartItems})</p>
                  <p className="font-bold">${totalPrice}</p>
                </div>
              ) : (
                <p className="text-gray-400 text-center">Your cart is empty.</p>
              )}
            </div>
            {/* User Details Form */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">Your Details</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                  required 
                />
                <textarea 
                  name="address"
                  placeholder="Shipping Address" 
                  rows="3" 
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gold text-black font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 mt-6 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
                disabled={cartItems === 0}
              >
                Confirm Order
        </button>
            </form>
          </div>
        </div>
      </div>

      {/* Header */}
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
            <div className="relative cursor-pointer" onClick={() => {
              setShowConfirmation(false); // Reset to form view
              setShowCart(true);
            }}>
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-green-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItems}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center fade-in-section">
              <img 
                src="/floralock-product.png" 
                alt="Floralock 100% Organic Shampoo Bottle" 
                className="max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105 product-image"
              />
            </div>

            {/* Product Details */}
            <div className="text-center md:text-left fade-in-section" style={{transitionDelay: '200ms'}}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gold hero-text-glow">Floralock™</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">100% Organic Shampoo</h2>
              <p className="text-green-accent text-xl md:text-2xl mt-3">Flaxseed + Strong Locks</p>
              <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0">For Strong, Healthy & Natural Locks</p>

              <div className="mt-8">
                <a href="#shop" className="inline-block bg-gold text-black font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </a>
              </div>
              <p className="text-gray-400 text-xs mt-4 tracking-wider">Eco-Friendly | Paraben-Free | Chemical-Free | Cruelty-Free</p>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Benefits Section */}
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

        {/* Ingredients Section */}
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-black bg-opacity-20 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl text-gold mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"Floralock has completely transformed my hair! After just 2 weeks of use, I noticed significantly less hair fall and my hair feels so much stronger. The natural ingredients make me feel confident about what I'm putting on my hair."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Sarah Ahmed</h4>
                    <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"I've tried so many shampoos but Floralock is different. My hair has never been this healthy and shiny. The flaxseed formula really works! Plus, knowing it's 100% organic gives me peace of mind."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Maria Khan</h4>
                    <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"As someone with sensitive scalp, I was skeptical about trying new products. Floralock proved me wrong! It's gentle yet effective. My hair fall has reduced by 70% and my scalp feels so much healthier."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Aisha Malik</h4>
                    <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"The natural shine Floralock gives my hair is incredible! My friends keep asking what I'm using. The organic ingredients make all the difference. I've been using it for 3 months now and my hair has never looked better."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Fatima Sheikh</h4>
                    <p className="text-gray-400 text-sm">Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"I love that Floralock is Halal certified and chemical-free. As a mother, I want the best for my family. This shampoo has made my hair stronger and my daughter loves how soft it makes her hair feel."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">N</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Nadia Hassan</h4>
                    <p className="text-gray-400 text-sm">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"After years of struggling with hair loss, Floralock has been a game-changer. The flaxseed and herbal extracts have strengthened my hair roots significantly. I can finally wear my hair down with confidence!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">Z</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Zara Ali</h4>
                    <p className="text-gray-400 text-sm">Multan, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="py-20 fade-in-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-gold mb-10">Simple Steps to Healthy Hair</h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:space-x-8 space-y-8 md:space-y-0">
              {/* Step 1 */}
              <div className="flex flex-col items-center w-48">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gold text-black font-serif text-3xl mb-3">1</div>
                <h3 className="font-bold text-lg mb-1">Apply</h3>
                <p className="text-gray-400 text-sm">Apply a generous amount to completely wet hair.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center w-48">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gold text-black font-serif text-3xl mb-3">2</div>
                <h3 className="font-bold text-lg mb-1">Massage</h3>
                <p className="text-gray-400 text-sm">Gently massage into the scalp and roots with your fingertips.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center w-48">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gold text-black font-serif text-3xl mb-3">3</div>
                <h3 className="font-bold text-lg mb-1">Rinse</h3>
                <p className="text-gray-400 text-sm">Rinse thoroughly with lukewarm water.</p>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center w-48">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gold text-black font-serif text-3xl mb-3">4</div>
                <h3 className="font-bold text-lg mb-1">Repeat</h3>
                <p className="text-gray-400 text-sm">Use regularly for best and most consistent results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-20 bg-black bg-opacity-20 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl text-gold mb-10 text-center">Purchase Floralock™</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800">
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
                <p className="font-serif text-4xl text-gold my-4" data-price="24.99">${price}</p>
                <div className="flex items-center justify-center md:justify-start space-x-4 my-6">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-10 h-10 rounded-full border border-gold text-gold font-bold text-xl flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
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
                    className="w-10 h-10 rounded-full border border-gold text-gold font-bold text-xl flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-gold text-black font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black bg-opacity-30 py-8 fade-in-section">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p className="mb-4">Manufactured by Floralock Organics, Pakistan</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.73.01-3.685.053-.934.042-1.514.187-2.02.372a3.292 3.292 0 00-1.18 1.18c-.185.506-.33 1.086-.372 2.02-.043.955-.053 1.282-.053 3.685s.01 2.73.053 3.685c.042.934.187 1.514.372 2.02a3.292 3.292 0 001.18 1.18c.506.185 1.086.33 2.02.372.955.043 1.282.053 3.685.053s2.73-.01 3.685-.053c.934-.042 1.514-.187 2.02-.372a3.292 3.292 0 001.18-1.18c.185-.506.33-1.086.372-2.02.043-.955.053-1.282.053-3.685s-.01-2.73-.053-3.685c-.042-.934-.187-1.514-.372-2.02a3.292 3.292 0 00-1.18-1.18c-.506-.185-1.086-.33-2.02-.372C15.045 3.63 14.718 3.62 12.315 3.62zM12 7.037a4.963 4.963 0 100 9.925 4.963 4.963 0 000-9.925zm0 8.292a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.506 2.506 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM9.999 15.199l4.998-3.2-4.998-3.2v6.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <a href="mailto:hello@floralock.com" className="hover:text-gold transition-colors">hello@floralock.com</a>
          <p className="text-xs mt-4">Copyright © Floralock Organics 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;