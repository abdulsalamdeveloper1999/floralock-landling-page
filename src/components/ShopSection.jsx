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
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
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
        <div className="reveal" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="glass-card-gradient" style={{
            borderRadius: '28px',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '520px',
            }}>
              {/* Left: Product Visual */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(201,151,58,0.04) 0%, rgba(107,124,61,0.15) 100%)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem 2rem',
                position: 'relative',
              }}>
                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  inset: '20%',
                  background: 'radial-gradient(circle, rgba(201,151,58,0.06) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  borderRadius: '50%',
                }} />

                <img
                  src="/floralock-product.png"
                  alt="FloraLock Organic Shampoo"
                  className="animate-float"
                  style={{
                    maxWidth: '260px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(201,151,58,0.07))',
                  }}
                />

                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  padding: '0.4rem 0.875rem',
                  background: 'rgba(201,151,58,0.07)',
                  border: '1px solid rgba(201,151,58,0.3)',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  🌿 Organic
                </div>
              </div>

              {/* Right: Purchase Info */}
              <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    background: 'var(--grad-brand)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    PKR {price.toLocaleString('en-PK')}
                  </span>
                  <span style={{
                    marginLeft: '0.75rem',
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'line-through',
                  }}>PKR 1,800</span>
                  <span style={{
                    marginLeft: '0.5rem',
                    padding: '0.15rem 0.5rem',
                    background: 'rgba(239,68,68,0.15)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#f87171',
                  }}>
                    Save 17%
                  </span>
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
        @media (max-width: 768px) {
          #shop .container > div:last-child > div > div > div {
            grid-template-columns: 1fr !important;
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
