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
              {[1,2,3,4,5].map(s => (
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
