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
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-gold mb-6">Submit Your Feedback</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                                    className="text-3xl transition-colors"
                                >
                                    {star <= formData.rating ? '⭐' : '☆'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Your Review</label>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none resize-none"
                            placeholder="Tell us about your experience..."
                            required
                        />
                        <p className="text-xs text-gray-400 mt-1">{formData.comment.length}/500 characters</p>
                    </div>

                    {/* Errors */}
                    {errors.length > 0 && (
                        <div className="mb-4 p-3 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg">
                            {errors.map((error, idx) => (
                                <p key={idx} className="text-sm text-red-400">{error}</p>
                            ))}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-black font-bold py-3 rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>

                    <p className="text-xs text-gray-400 mt-3 text-center">
                        Your review will be published after approval
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
