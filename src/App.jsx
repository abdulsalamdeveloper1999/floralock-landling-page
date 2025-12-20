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
import CountdownTimer from './components/CountdownTimer';
// import ContactForm from './components/ContactForm';
import { sendOrderConfirmation } from './services/emailService';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [quantity, setQuantity] = useState(1);

  // Create scroll progress bar and back-to-top button on mount
  useEffect(() => {
    // Scroll Progress Bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    // Back to Top Button
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>';
    backToTop.style.color = '#000';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      document.body.removeChild(progressBar);
      document.body.removeChild(backToTop);
    };
  }, []);

  // Create floating background particles
  useEffect(() => {
    const createParticles = () => {
      const particleCount = 20;
      const shapes = ['●', '◆', '★', '✦', '❋'];
      const colors = ['rgba(197, 162, 91, 0.25)', 'rgba(94, 179, 94, 0.2)', 'rgba(240, 215, 140, 0.2)'];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        particle.style.fontSize = (Math.random() * 40 + 30) + 'px';
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      document.querySelectorAll('.floating-particle').forEach(p => p.remove());
    };
  }, []);

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

  // Header scroll effect + Progress bar + Back-to-top
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / windowHeight) * 100;

      // Update progress bar
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }

      // Show/hide back-to-top button
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        if (scrolled > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }

      // Header blur effect
      if (scrolled > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Parallax effect on hero image
      const heroImage = document.querySelector('.hero-parallax');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      // Parallax on hero text (slower)
      const heroText = document.querySelector('.hero-text-parallax');
      if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.15}px)`;
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

    // Confetti celebration
    createConfetti();

    setShowConfirmation(true);
  };

  // Confetti effect
  const createConfetti = () => {
    const colors = ['#c5a25b', '#f0d78c', '#5eb35e', '#ffffff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  const handleNewOrder = () => {
    setShowConfirmation(false);
    setFormData({ name: '', email: '', phone: '', address: '' });
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
        {/* <ContactForm /> Removed as per request */}

        <CountdownTimer />

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