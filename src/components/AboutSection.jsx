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

        {/* Cinematic Model Banner */}
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto 5rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <img 
            src="/model-banner.png" 
            alt="Floralock 100% Organic Shampoo"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>

        {/* Stats Card */}
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="glass-card-gradient" style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}>
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
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
              Every ingredient is sourced from nature. We disclose exactly what goes in — no hidden fillers, no mysteries.
            </p>
            <div style={{
              marginTop: '2.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}>
              {[
                { val: '10K+', label: 'Happy Users', color: 'var(--gold)' },
                { val: '4.9★', label: 'Average Rating', color: 'var(--gold)' },
                { val: '9', label: 'Key Ingredients', color: '#A89880' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: '#0a0a0a',
                  padding: '1.5rem 2.5rem',
                  borderRadius: '20px',
                  boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.8), inset -6px -6px 12px rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,0,0,1)',
                  minWidth: '180px',
                }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: stat.color, marginBottom: '0.25rem' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Pillars (Neumorphic) */}
        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                transitionDelay: `${i * 100}ms`,
                borderRadius: '24px',
                background: '#0e0e0e',
                boxShadow: '8px 8px 16px rgba(0,0,0,0.9), -8px -8px 16px rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.01)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#0e0e0e',
                boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.8), inset -4px -4px 8px rgba(255,255,255,0.04)',
                border: `1px solid rgba(255,255,255,0.02)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
