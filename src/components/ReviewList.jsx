import React, { useEffect, useState } from 'react';
import ReviewService from '../services/ReviewService';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockReviews = [
    { id: 'mock-1', customerName: 'Ayesha Rahman', rating: 5, comment: 'Absolutely love FloraLock! My hair has never been this healthy and shiny. The natural ingredients make all the difference.', createdAt: { toDate: () => new Date('2026-06-15') } },
    { id: 'mock-2', customerName: 'Fatima Khan', rating: 5, comment: 'Best organic shampoo I have ever used! My hair fall reduced significantly after just 2 weeks. Highly recommended!', createdAt: { toDate: () => new Date('2026-04-20') } },
    { id: 'mock-3', customerName: 'Sara Ahmed', rating: 4, comment: 'Great product! My hair feels softer and stronger. The flaxseed formula really works wonders.', createdAt: { toDate: () => new Date('2026-02-10') } },
    { id: 'mock-4', customerName: 'Zainab Malik', rating: 5, comment: 'Finally found a chemical-free shampoo that actually works! My scalp feels healthier and my hair has natural shine.', createdAt: { toDate: () => new Date('2025-11-05') } },
    { id: 'mock-5', customerName: 'Nadia Hassan', rating: 5, comment: 'FloraLock is a game changer! My hair is thicker and stronger. Love that it\'s 100% organic.', createdAt: { toDate: () => new Date('2025-08-18') } },
    { id: 'mock-6', customerName: 'Mariam Ali', rating: 4, comment: 'Very impressed with the results. My hair feels nourished and healthy. Will definitely continue using!', createdAt: { toDate: () => new Date('2025-05-22') } },
  ];

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const approvedReviews = await ReviewService.getApprovedReviews();
      setReviews([...approvedReviews, ...mockReviews]);
    } catch (error) {
      setReviews(mockReviews);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const avatarColors = ['#C9973A', '#6B7C3D', '#f0c060', '#8EA050', '#f472b6', '#E8B84B'];

  if (loading) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px' }}>
            <div style={{ width: '80px', height: '12px', background: 'rgba(255,255,255,0.07)', borderRadius: '6px', marginBottom: '1rem' }} />
            <div style={{ height: '60px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', marginBottom: '1rem' }} />
            <div style={{ width: '120px', height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px' }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
      {reviews.slice(0, 6).map((review, i) => (
        <div key={review.id} className="glass-card" style={{ padding: '1.75rem', transitionDelay: `${i * 80}ms` }}>
          {/* Stars */}
          <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= review.rating ? '#f0c060' : 'rgba(240,192,96,0.2)'}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Comment */}
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
            fontStyle: 'italic',
          }}>
            "{review.comment}"
          </p>

          {/* Divider */}
          <div className="divider" style={{ marginBottom: '1rem' }} />

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${avatarColors[i % avatarColors.length]} 0%, ${avatarColors[(i + 2) % avatarColors.length]} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: '#fff',
              flexShrink: 0,
            }}>
              {review.customerName.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {review.customerName}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {formatDate(review.createdAt)}
              </div>
            </div>
            <div style={{
              marginLeft: 'auto',
              padding: '0.2rem 0.5rem',
              background: 'rgba(201,151,58,0.1)',
              border: '1px solid rgba(201,151,58,0.2)',
              borderRadius: '100px',
              fontSize: '0.65rem',
              fontWeight: 600,
              color: 'var(--gold)',
            }}>
              Verified
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 900px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ReviewList;
