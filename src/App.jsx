import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CartModal from './components/CartModal';
import Toast from './components/Toast';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import IngredientsSection from './components/IngredientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowToUseSection from './components/HowToUseSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { sendOrderConfirmation } from './services/emailService';

function App() {
  const [cartItems, setCartItems] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const orderData = {
      ...formData,
      items: cartItems,
      totalItems: totalItems,
      total: (totalItems * 1500).toLocaleString('en-PK')
    };

    console.log('Order Submitted:', orderData);

    // Send email confirmation
    try {
      const emailSent = await sendOrderConfirmation(orderData);
      if (emailSent) {
        console.log('Order confirmation email sent successfully');
      } else {
        console.log('Failed to send email, but order was recorded');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setShowConfirmation(true);
  };

  const handleNewOrder = () => {
    setShowConfirmation(false);
    setFormData({ name: '', phone: '', address: '' });
    setCartItems([]);
    setShowCart(false);
  };

  const handleAddToCart = () => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === 'floralock-shampoo');
      if (existingItem) {
        return prev.map(item => 
          item.id === 'floralock-shampoo' 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { id: 'floralock-shampoo', name: 'Floralock™ Organic Shampoo', price: 1500, quantity: quantity }];
      }
    });
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

  // Cart item management functions
  const increaseCartItemQuantity = (itemId) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseCartItemQuantity = (itemId) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    ));
  };

  const removeCartItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const price = 1500; // Price in PKR
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = (totalItems * price).toLocaleString('en-PK');

  return (
    <div className="scroll-smooth">
      <Toast showToast={showToast} />
      
      <CartModal 
        showCart={showCart}
        setShowCart={setShowCart}
        showConfirmation={showConfirmation}
        cartItems={cartItems}
        totalPrice={totalPrice}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleNewOrder={handleNewOrder}
        increaseCartItemQuantity={increaseCartItemQuantity}
        decreaseCartItemQuantity={decreaseCartItemQuantity}
        removeCartItem={removeCartItem}
      />

      <Header 
        totalItems={totalItems}
        onCartClick={() => {
          setShowConfirmation(false);
          setShowCart(true);
        }}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <IngredientsSection />
        <TestimonialsSection />
        <HowToUseSection />
        <ContactForm />
        <ShopSection 
          price={price}
          quantity={quantity}
          setQuantity={setQuantity}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          handleAddToCart={handleAddToCart}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;