import React from 'react';

const ShopSection = ({
  price,
  quantity,
  setQuantity,
  decreaseQuantity,
  increaseQuantity,
  handleAddToCart
}) => {
  const features = [
    { icon: '🚚', text: 'Free Delivery in Pakistan' },
    { icon: '🔄', text: '30-Day Return Policy' },
    { icon: '🔒', text: 'Secure Cash on Delivery' },
    { icon: '🌿', text: '100% Organic Certified' },
  ];

  return (
    <section id="shop" className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-green" style={{ width: '600px', height: '600px', top: '-200px', right: '-200px', opacity: 0.07 }} />
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', opacity: 0.1 }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <p className="section-label">Get Yours</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Order{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>FloraLock™</span>{' '}
            Today
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Start your hair transformation journey. Free delivery across Pakistan.
          </p>
        </div>

        {/* Product Card */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="glass-card-gradient" style={{
            borderRadius: '28px',
            overflow: 'hidden',
            transform: 'translateZ(0)',
          }}>
            <div className="shop-grid">
              {/* Left: Product Visual (Cinematic Video) */}
              <div className="shop-video-col">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/broll3-mobile.mp4" type="video/mp4" />
                </video>

                {/* Gradient blend to bridge seamlessly with the dark right panel */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, transparent 70%, rgba(15,15,15,0.8) 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  padding: '0.4rem 0.875rem',
                  background: 'rgba(201,151,58,0.15)',
                  border: '1px solid rgba(201,151,58,0.3)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  zIndex: 2,
                }}>
                  🌿 Organic
                </div>
              </div>

              {/* Right: Purchase Info */}
              <div className="shop-details-col">
                {/* Product name */}
                <p className="section-label" style={{ marginBottom: '0.5rem' }}>FloraLock™</p>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  100% Organic Shampoo
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Flaxseed + Strong Locks Formula · 250ml
                </p>

                {/* Stars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f0c060">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>4.9 (10K+ reviews)</span>
                </div>

                {/* Price */}
                <div style={{ marginBottom: '1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 6vw, 2.5rem)',
                    fontWeight: 900,
                    background: 'var(--grad-brand)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    PKR {price.toLocaleString('en-PK')}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '1rem',
                      color: 'var(--text-muted)',
                      textDecoration: 'line-through',
                    }}>PKR 1,500</span>
                    <span style={{
                      padding: '0.15rem 0.5rem',
                      background: 'rgba(239,68,68,0.15)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#f87171',
                      whiteSpace: 'nowrap',
                    }}>
                      Save 17%
                    </span>
                  </div>
                </div>

                {/* Quantity selector */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.625rem', display: 'block', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Quantity
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={decreaseQuantity}
                      id="qty-decrease"
                      style={{
                        width: '40px', height: '40px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-primary)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,151,58,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,151,58,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      id="qty-input"
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      style={{
                        width: '60px',
                        height: '40px',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        outline: 'none',
                        MozAppearance: 'textfield',
                        WebkitAppearance: 'none',
                      }}
                    />
                    <button
                      onClick={increaseQuantity}
                      id="qty-increase"
                      style={{
                        width: '40px', height: '40px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-primary)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,151,58,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,151,58,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      +
                    </button>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      = PKR {(price * quantity).toLocaleString('en-PK')}
                    </span>
                  </div>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  id="add-to-cart-btn"
                  className="btn-primary"
                  data-umami-event="Add to Cart"
                  data-umami-event-quantity={quantity}
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem', marginBottom: '1rem' }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to Cart — PKR {(price * quantity).toLocaleString('en-PK')}
                </button>

                {/* Features */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {features.map(f => (
                    <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem' }}>{f.icon}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .shop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
        }
        .shop-video-col {
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
          display: flex;
        }
        .shop-details-col {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .shop-grid {
            grid-template-columns: 1fr !important;
          }
          .shop-video-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            min-height: 350px;
          }
          .shop-details-col {
            padding: 2.5rem 2rem !important;
          }
        }
        
        @media (max-width: 500px) {
          .shop-details-col {
            padding: 2rem 1.25rem !important;
          }
          .shop-video-col {
            min-height: 280px;
          }
        }
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default ShopSection;
