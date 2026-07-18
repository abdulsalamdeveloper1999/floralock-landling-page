import React, { useRef, useEffect, useState } from 'react';

const HeroSection = ({ setShowCart, addToCart }) => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll if we are near the top
      if (window.scrollY < window.innerHeight * 1.5) {
        setScrollY(window.scrollY);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShopNow = () => {
    const newItem = {
      id: 'floralock-shampoo',
      name: 'Floralock™ Organic Shampoo',
      price: 1250,
      quantity: 1,
      image: '/benefits-bottle.png'
    };
    addToCart(newItem);
    setShowCart(true);
  };

  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '100%', label: 'Organic' },
    { value: '4.9★', label: 'Rating' },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Background Video */}
      <video
        key={isMobile ? 'mobile-video' : 'desktop-video'}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.6,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        <source src={isMobile ? "/broll3-mobile.mp4" : "/broll1-opt.mp4"} type="video/mp4" />
      </video>

      {/* Dark overlay for text readability on left side */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.6) 40%, transparent 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left: Content */}
          <div ref={heroRef} className="hero-content-col" style={{
            animation: 'fadeInUp 1s ease forwards',
          }}>
            {/* Badge */}
            <div className="badge" style={{ marginBottom: '1.5rem', animation: 'badge-pulse 2s infinite', display: 'inline-flex' }}>
              <span style={{ marginRight: '0.5rem' }}>🌿</span>
              Pure Organic · Made in Pakistan
            </div>

            {/* Headline */}
            <h1 className="display-xl" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}>
              <span style={{ display: 'block', color: 'var(--text-primary)' }}>Unlock Your</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #C9973A 0%, #E8B84B 50%, #C9973A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'gradient-flow 4s linear infinite',
              }}>Best Hair</span>
              <span style={{ display: 'block', color: 'var(--text-primary)' }}>Ever.</span>
            </h1>

            {/* Sub */}
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '90%',
              marginBottom: '2.5rem',
            }}>
              FloraLock™ harnesses the power of flaxseed, hibiscus, and bhringraj to strengthen your hair from root to tip — no chemicals, no compromise.
            </p>

            {/* Quick trust tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              {['Paraben-Free', 'Chemical-Free', 'Halal Certified', 'Cruelty-Free'].map(tag => (
                <span key={tag} style={{
                  padding: '0.4rem 1rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  backdropFilter: 'blur(4px)',
                }}>{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
              <button
                className="btn-primary"
                id="hero-shop-now"
                onClick={handleShopNow}
                data-umami-event="Hero Shop Click"
              >
                Shop Now — PKR 1,250 <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
              </button>
              <a href="#about" className="btn-secondary" data-umami-event="Hero Learn More">
                Learn More
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '3rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem'
            }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    background: 'var(--grad-brand)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Badges */}
          <div className="hero-badges-col">
            {/* Floating info cards */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              animation: 'fadeInUp 1s ease forwards 0.6s',
              opacity: 0,
              minWidth: '160px',
            }}>
              <span style={{ fontSize: '1.4rem' }}>🌱</span>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)' }}>100% Organic</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Flaxseed Formula</div>
              </div>
            </div>

            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '15%',
              left: '-10px',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              animation: 'fadeInUp 1s ease forwards 0.9s',
              opacity: 0,
              minWidth: '145px',
            }}>
              <span style={{ fontSize: '1.4rem' }}>⭐</span>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold)' }}>4.9 / 5 Stars</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.4,
      }}>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-content-col {
          max-width: 640px;
        }
        .hero-badges-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .hero-badges-col {
            display: none !important;
          }
          .hero-content-col {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          /* Center the badges and buttons on mobile */
          .hero-content-col > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
