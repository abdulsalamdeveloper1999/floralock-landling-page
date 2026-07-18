import React from 'react';
import { Sprout, Leaf, Droplets, Sparkles } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Sprout size={28} strokeWidth={1.5} color="#C9973A" />,
      gradient: 'linear-gradient(135deg, rgba(201,151,58,0.07) 0%, rgba(201,151,58,0.04) 100%)',
      border: 'rgba(201,151,58,0.25)',
      accent: '#C9973A',
      title: 'Stronger Roots',
      desc: 'Flaxseed omega-3 and bhringraj deeply nourish follicles, building thicker, more resilient roots with consistent use.',
      tag: 'Strengthening',
    },
    {
      icon: <Leaf size={28} strokeWidth={1.5} color="#6B7C3D" />,
      gradient: 'linear-gradient(135deg, rgba(107,124,61,0.15) 0%, rgba(107,124,61,0.15) 100%)',
      border: 'rgba(107,124,61,0.15)',
      accent: '#6B7C3D',
      title: 'Reduces Hair Fall',
      desc: 'Hibiscus and amla fortify each strand, dramatically reducing breakage and hair fall from wash to wash.',
      tag: 'Anti Hair-Loss',
    },
    {
      icon: <Droplets size={28} strokeWidth={1.5} color="#E8B84B" />,
      gradient: 'linear-gradient(135deg, rgba(232,184,75,0.12) 0%, rgba(232,184,75,0.04) 100%)',
      border: 'rgba(232,184,75,0.25)',
      accent: '#E8B84B',
      title: 'Nourishes Scalp',
      desc: 'Aloe vera and glycerin deliver deep hydration, soothing dry scalp while promoting a healthy growth environment.',
      tag: 'Scalp Care',
    },
    {
      icon: <Sparkles size={28} strokeWidth={1.5} color="#B8862E" />,
      gradient: 'linear-gradient(135deg, rgba(184,134,46,0.14) 0%, rgba(184,134,46,0.04) 100%)',
      border: 'rgba(184,134,46,0.28)',
      accent: '#B8862E',
      title: 'Mirror Shine',
      desc: "Vitamin E and shikakai smooth each strand's cuticle layer, delivering a luminous, salon-quality shine.",
      tag: 'Shine Boost',
    },
  ];

  return (
    <section id="benefits" className="section-py" style={{
      position: 'relative',
      overflow: 'hidden',
      clipPath: 'inset(0)',
      transform: 'translateZ(0)',
    }}>
      {/* Parallax Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.8,
        }}
      >
        <source src="/broll2-opt.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, var(--bg-deep) 0%, rgba(10,10,10,0.7) 15%, rgba(10,10,10,0.7) 85%, var(--bg-deep) 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <p className="section-label">Why FloraLock</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Real Results,{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Real Ingredients</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            Each benefit is backed by centuries of botanical wisdom, now scientifically validated for modern hair care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="glass-card reveal"
              style={{
                padding: '2rem',
                transitionDelay: `${i * 120}ms`,
                cursor: 'default',
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: b.gradient,
                  border: `1px solid ${b.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  flexShrink: 0,
                }}>
                  {b.icon}
                </div>
                <span style={{
                  padding: '0.3rem 0.75rem',
                  background: b.gradient,
                  border: `1px solid ${b.border}`,
                  borderRadius: '100px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: b.accent,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>{b.tag}</span>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.625rem',
              }}>{b.title}</h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {b.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                marginTop: '1.5rem',
                height: '2px',
                borderRadius: '100px',
                background: `linear-gradient(90deg, ${b.accent}, transparent)`,
                opacity: 0.5,
              }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="reveal" style={{ marginTop: '3rem' }}>
          <div className="glass-card-gradient" style={{
            padding: '2.5rem 3rem',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Limited Offer
              </p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Try FloraLock — Risk Free
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                See results in 4 weeks or your money back.
              </p>
            </div>
            <a href="#shop" className="btn-primary" id="benefits-shop-cta" style={{ flexShrink: 0 }}>
              Order Now
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #benefits .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
