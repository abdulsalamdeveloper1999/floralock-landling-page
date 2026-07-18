import React, { useState } from 'react';
import ReviewService from '../services/ReviewService';
import ModerationService from '../services/ModerationService';

const ReviewForm = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        rating: 5,
        comment: ''
    });
    const [errors, setErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'rating' ? parseInt(value) : value
        }));
        setErrors([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate
        const validation = ModerationService.validateReviewContent(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Submit review
            const reviewId = await ReviewService.submitReview(formData);

            // Check if needs flagging
            const flagCheck = ModerationService.flagSuspiciousContent(formData);
            if (flagCheck.shouldFlag) {
                await ReviewService.flagReview(reviewId, flagCheck.reason);
            }

            // Success
            if (onSuccess) onSuccess();

            // Reset form
            setFormData({ customerName: '', rating: 5, comment: '' });
            setErrors([]);

        } catch (error) {
            setErrors(['Failed to submit review. Please try again.']);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.3s ease'
        }}>
            <div className="glass-card-gradient" style={{ 
                padding: '2.5rem', 
                width: '100%', 
                maxWidth: '500px', 
                borderRadius: '24px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
            }}>
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.25rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--text-primary)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        transition: 'all 0.2s ease',
                        zIndex: 10
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    ✕
                </button>

                <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                }}>Submit Your Feedback</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Name Input */}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Your Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Rating</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '2.5rem',
                                        cursor: 'pointer',
                                        color: star <= formData.rating ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                                        transition: 'color 0.2s ease',
                                        padding: 0
                                    }}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Comment */}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>Your Review</label>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s ease',
                                resize: 'none',
                                fontFamily: 'var(--font-sans)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                            placeholder="Tell us about your experience..."
                            required
                        />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'right' }}>
                            {formData.comment.length}/500 characters
                        </p>
                    </div>

                    {/* Errors */}
                    {errors.length > 0 && (
                        <div style={{
                            padding: '1rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '12px',
                        }}>
                            {errors.map((error, idx) => (
                                <p key={idx} style={{ fontSize: '0.9rem', color: '#f87171', margin: 0 }}>{error}</p>
                            ))}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            padding: '1rem',
                            fontSize: '1.1rem',
                            marginTop: '1rem',
                            opacity: isSubmitting ? 0.7 : 1
                        }}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem', margin: 0 }}>
                        Your review will be published after approval.
                    </p>
                </form>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; backdrop-filter: blur(0px); }
                    to { opacity: 1; backdrop-filter: blur(12px); }
                }
            `}</style>
        </div>
    );
};

export default ReviewForm;
