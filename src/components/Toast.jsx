import React from 'react';

const Toast = ({ showToast }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120px)',
      opacity: showToast ? 1 : 0,
      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.875rem 1.5rem',
      background: 'rgba(16, 216, 138, 0.12)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(201,151,58,0.3)',
      borderRadius: '100px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,151,58,0.07)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '24px', height: '24px',
        borderRadius: '50%',
        background: 'var(--grad-brand)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        Added to cart!
      </span>
    </div>
  );
};

export default Toast;
