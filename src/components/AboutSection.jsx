import React from 'react';

const AboutSection = () => {
  const pillars = [
    {
      icon: '🧪',
      title: 'Paraben Free',
      desc: 'No harmful preservatives. Just nature doing its thing.',
      color: 'rgba(201,151,58,0.1)',
      border: 'rgba(201,151,58,0.25)',
    },
    {
      icon: '🛡️',
      title: 'Chemical Free',
      desc: 'Zero synthetic chemicals. Pure botanical goodness.',
      color: 'rgba(107,124,61,0.15)',
      border: 'rgba(107,124,61,0.15)',
    },
    {
      icon: '☪️',
      title: 'Halal Certified',
      desc: 'Certified and trusted — made with full integrity.',
      color: 'rgba(184,134,46,0.12)',
      border: 'rgba(184,134,46,0.28)',
    },
    {
      icon: '🐾',
      title: 'Cruelty Free',
      desc: 'Never tested on animals. Always made with compassion.',
      color: 'rgba(142,160,80,0.12)',
      border: 'rgba(142,160,80,0.25)',
    },
  ];

  return (
    <section id="about" className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background orb */}
      <div className="orb orb-green" style={{ width: '500px', height: '500px', top: '-100px', right: '-100px', opacity: 0.07 }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <p className="section-label">Our Philosophy</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
          }}>
            Nature Meets{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Strength</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Floralock™ combines the purest organic ingredients — flaxseed, hibiscus, and bhringraj — to create a powerful formula that strengthens hair from the roots. Harness nature's best, without compromise.
          </p>
        </div>

        {/* Two column: image + text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          {/* Left: Big statement */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div className="glass-card-gradient" style={{ padding: '2.5rem', borderRadius: '24px' }}>
              <div style={{
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 900,
                lineHeight: 1,
                background: 'var(--grad-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
              }}>
                100%
              </div>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Honestly Organic
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Every ingredient is sourced from nature. We disclose exactly what goes in — no hidden fillers, no mysteries.
              </p>
              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                gap: '2rem',
              }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>10K+</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Happy Users</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>4.9★</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Average Rating</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#A89880' }}>9</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Key Ingredients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product image */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '10%',
              background: 'radial-gradient(circle, rgba(201,151,58,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
              borderRadius: '50%',
            }} />
            <img
              src="/floralock-product.png"
              alt="FloraLock Organic Shampoo"
              className="animate-float-slow"
              style={{
                maxWidth: '280px',
                width: '100%',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              }}
            />
          </div>
        </div>

        {/* Certification Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-card reveal"
              style={{
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                transitionDelay: `${i * 100}ms`,
                borderColor: p.border,
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: p.color,
                border: `1px solid ${p.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #about .container > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          #about .container > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
