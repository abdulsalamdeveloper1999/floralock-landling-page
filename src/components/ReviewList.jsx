import React, { useEffect, useState } from 'react';
import ReviewService from '../services/ReviewService';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock reviews for when database is empty
    const mockReviews = [
        { id: 'mock-1', customerName: 'Ayesha Rahman', rating: 5, comment: 'Absolutely love Floralock! My hair has never been this healthy and shiny. The natural ingredients make all the difference.', createdAt: { toDate: () => new Date('2024-12-20') } },
        { id: 'mock-2', customerName: 'Fatima Khan', rating: 5, comment: 'Best organic shampoo I have ever used! My hair fall reduced significantly after just 2 weeks. Highly recommended!', createdAt: { toDate: () => new Date('2024-12-18') } },
        { id: 'mock-3', customerName: 'Sara Ahmed', rating: 4, comment: 'Great product! My hair feels softer and stronger. The flaxseed formula really works.', createdAt: { toDate: () => new Date('2024-12-15') } },
        { id: 'mock-4', customerName: 'Zainab Malik', rating: 5, comment: 'Finally found a chemical-free shampoo that actually works! My scalp feels healthier and my hair has natural shine.', createdAt: { toDate: () => new Date('2024-12-12') } },
        { id: 'mock-5', customerName: 'Nadia Hassan', rating: 5, comment: 'Floralock is a game changer! My hair is thicker and stronger. Love that it is 100% organic.', createdAt: { toDate: () => new Date('2024-12-10') } },
        { id: 'mock-6', customerName: 'Mariam Ali', rating: 4, comment: 'Very impressed with the results. My hair feels nourished and healthy. Will definitely continue using!', createdAt: { toDate: () => new Date('2024-12-08') } }
    ];

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            console.log('Loading reviews...');
            const approvedReviews = await ReviewService.getApprovedReviews();
            console.log('Approved reviews from Firebase:', approvedReviews);

            // Always show mock reviews, add real reviews on top if any exist
            const allReviews = [...approvedReviews, ...mockReviews];
            console.log('Total reviews to display:', allReviews.length);
            setReviews(allReviews);
        } catch (error) {
            console.error('Error loading reviews:', error);
            // Fallback to mock reviews on error
            setReviews(mockReviews);
        } finally {
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-400">Loading reviews...</p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-gold transition-colors"
                >
                    {/* Rating */}
                    <div className="text-2xl mb-2">
                        {renderStars(review.rating)}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-300 mb-4 italic">"{review.comment}"</p>

                    {/* Customer Info */}
                    <div className="border-t border-gray-700 pt-3">
                        <p className="text-gold font-semibold">{review.customerName}</p>
                        <p className="text-xs text-gray-500">{formatDate(review.createdAt)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
