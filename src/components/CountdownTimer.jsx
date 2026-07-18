import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndTime = () => {
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      return end;
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = getEndTime() - now;
      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n) => String(n).padStart(2, '0');

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(201,151,58,0.06) 0%, rgba(107,124,61,0.15) 100%)',
      borderTop: '1px solid rgba(201,151,58,0.07)',
      borderBottom: '1px solid rgba(201,151,58,0.07)',
      padding: '1.5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '100px',
        background: 'radial-gradient(ellipse, rgba(201,151,58,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {/* Fire badge */}
          <div className="badge" style={{
            background: 'rgba(239,68,68,0.12)',
            borderColor: 'rgba(239,68,68,0.3)',
            color: '#f87171',
          }}>
            🔥 Flash Sale
          </div>

          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Get <span style={{ color: 'var(--gold)', fontWeight: 800 }}>10% OFF</span> — Ends in:
          </span>

          {/* Timer units */}
          <div style={{ display: 'flex', align: 'center', gap: '0.5rem', alignItems: 'center' }}>
            {[
              { value: timeLeft.hours, label: 'HRS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEC' },
            ].map((unit, i) => (
              <React.Fragment key={unit.label}>
                {i > 0 && (
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--gold)', opacity: 0.5, marginBottom: '1rem' }}>:</span>
                )}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '52px',
                }}>
                  <div style={{
                    background: 'rgba(201,151,58,0.1)',
                    border: '1px solid rgba(201,151,58,0.2)',
                    borderRadius: '10px',
                    padding: '0.4rem 0.75rem',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: 'var(--gold)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    minWidth: '52px',
                    textAlign: 'center',
                  }}>
                    {fmt(unit.value)}
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.1em' }}>
                    {unit.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <a
            href="#shop"
            className="btn-primary"
            id="countdown-shop-btn"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
          >
            Claim Offer
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
