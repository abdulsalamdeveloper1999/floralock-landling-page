import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const TestimonialsSection = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleReviewSuccess = () => {
    setShowReviewForm(false);
    setRefreshKey(prev => prev + 1);
    alert('Thank you! Your review has been submitted and will be published after approval.');
  };

  return (
    <section id="testimonials" className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-gold" style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px', opacity: 0.04 }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <p className="section-label">Social Proof</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Loved by{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>10,000+</span>{' '}
            Customers
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Real people. Real results. See what our customers are saying about their FloraLock journey.
          </p>
        </div>

        {/* Cinematic Testimonials Banner */}
        <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto 4rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <img
            src="/two-bottles.png"
            alt="Shine Naturally, Style Easily"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>

        {/* TikTok Influencer Review CTA */}
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <a href="https://vt.tiktok.com/ZSXuHdsyL/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="glass-card-gradient" style={{
              padding: '2.5rem',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(201,151,58,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%', background: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Watch the Viral Review</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>See why influencers are loving FloraLock on TikTok.</p>
                </div>
              </div>
              <div style={{
                background: 'var(--grad-brand)', color: '#000', padding: '0.875rem 2rem', borderRadius: '100px', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                Watch Now
              </div>
            </div>
          </a>
        </div>

        {/* Overall rating bar */}
        <div className="reveal glass-card" style={{ padding: '2rem 2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', minWidth: '80px' }}>
            <div style={{
              fontSize: '3rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 900,
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}>4.9</div>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '0.4rem 0' }}>
              {[1, 2, 3, 4, 5].map(s => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f0c060">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Overall</div>
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            {[
              { stars: 5, pct: 82 },
              { stars: 4, pct: 13 },
              { stars: 3, pct: 4 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 0 },
            ].map(r => (
              <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', minWidth: '12px' }}>{r.stars}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0c060"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <div style={{ flex: 1, height: '6px', borderRadius: '100px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct}%`, height: '100%', background: r.pct > 50 ? 'var(--grad-brand)' : 'rgba(240,192,96,0.5)', borderRadius: '100px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', minWidth: '28px' }}>{r.pct}%</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '160px' }}>
            <div className="badge">✅ Verified Purchases</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>All reviews from real buyers</div>
          </div>
        </div>

        {/* Reviews grid */}
        <ReviewList key={refreshKey} />

        {/* Submit Review CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Tried FloraLock? Share your experience!
          </p>
          <button
            onClick={() => setShowReviewForm(true)}
            id="submit-review-btn"
            className="btn-secondary"
            style={{ fontSize: '0.95rem', padding: '0.875rem 2rem' }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Write a Review
          </button>
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <ReviewForm
          onClose={() => setShowReviewForm(false)}
          onSuccess={handleReviewSuccess}
        />
      )}
    </section>
  );
};

export default TestimonialsSection;
