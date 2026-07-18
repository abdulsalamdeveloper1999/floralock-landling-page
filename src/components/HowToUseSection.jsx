import React from 'react';

const HowToUseSection = () => {
  const steps = [
    {
      number: '01',
      icon: '💦',
      title: 'Wet Your Hair',
      desc: 'Thoroughly saturate your hair with warm water to open the cuticle for maximum absorption.',
      color: '#A89880',
    },
    {
      number: '02',
      icon: '🧴',
      title: 'Apply FloraLock',
      desc: 'Squeeze a generous amount onto your palm. Apply from roots to tips, working through every strand.',
      color: '#C9973A',
    },
    {
      number: '03',
      icon: '🙌',
      title: 'Massage & Lather',
      desc: 'Use fingertips to massage gently into the scalp for 60 seconds, building a rich, nourishing lather.',
      color: '#8EA050',
    },
    {
      number: '04',
      icon: '🚿',
      title: 'Rinse Thoroughly',
      desc: 'Rinse completely with lukewarm water. Use weekly for maintenance, or twice weekly for best results.',
      color: '#C9973A',
    },
  ];

  return (
    <section id="how-to-use" className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '450px', height: '450px', top: '-100px', right: '-100px', opacity: 0.1 }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 4.5rem' }}>
          <p className="section-label">How It Works</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            4 Steps to{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Healthy Hair</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Simple, effective, and takes less than 5 minutes. Your hair will thank you.
          </p>
        </div>

        {/* Steps — horizontal with connector */}
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '12.5%',
            right: '12.5%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,151,58,0.3) 20%, rgba(201,151,58,0.3) 80%, transparent)',
            zIndex: 0,
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal"
                style={{
                  textAlign: 'center',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {/* Step number circle */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  position: 'relative',
                  fontSize: '1.8rem',
                  boxShadow: `0 0 30px ${step.color}20`,
                }}>
                  {step.icon}
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: '#05050f',
                  }}>
                    {i + 1}
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.625rem',
                }}>{step.title}</h3>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage tips */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <div className="glass-card" style={{
            padding: '2rem 2.5rem',
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[
              { icon: '📅', tip: 'Use 2–3x per week', sub: 'For best results' },
              { icon: '🌡️', tip: 'Lukewarm water', sub: 'Preserves nutrients' },
              { icon: '⏱️', tip: '60-sec massage', sub: 'Activates ingredients' },
              { icon: '🌙', tip: 'Night routine', sub: 'Maximize absorption' },
            ].map(t => (
              <div key={t.tip} style={{ textAlign: 'center', minWidth: '100px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.tip}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how-to-use .container > div:nth-child(2) > div { display: none !important; }
          #how-to-use .container > div:nth-child(2) > div + div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #how-to-use .container > div:nth-child(2) > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowToUseSection;
