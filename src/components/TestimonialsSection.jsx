import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const TestimonialsSection = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleReviewSuccess = () => {
    setShowReviewForm(false);
    setRefreshKey(prev => prev + 1); // Refresh review list
    // Show success message
    alert('Thank you! Your review has been submitted and will be published after approval.');
  };

  return (
    <section id="testimonials" className="py-20 bg-black bg-opacity-30 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-12">What Our Customers Say</h2>

        {/* Dynamic Reviews */}
        <ReviewList key={refreshKey} />

        {/* Submit Feedback Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowReviewForm(true)}
            className="bg-gold text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors btn-ripple"
          >
            Submit Your Feedback
          </button>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <ReviewForm
            onClose={() => setShowReviewForm(false)}
            onSuccess={handleReviewSuccess}
          />
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
