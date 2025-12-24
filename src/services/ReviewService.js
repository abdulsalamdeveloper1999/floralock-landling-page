import { db } from './firebaseService.js';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';

/**
 * ReviewService - Handles all review CRUD operations
 * Following Single Responsibility Principle
 */
class ReviewService {
    constructor() {
        this.collectionName = 'reviews';
    }

    /**
     * Submit a new review (customer-facing)
     * @param {Object} reviewData - {customerName, rating, comment}
     * @returns {Promise<string>} - Review ID
     */
    async submitReview(reviewData) {
        try {
            const review = {
                customerName: reviewData.customerName,
                rating: reviewData.rating,
                comment: reviewData.comment,
                isApproved: false, // All reviews start as not approved
                flagged: false,
                flagReason: null,
                createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, this.collectionName), review);
            return docRef.id;
        } catch (error) {
            console.error('Error submitting review:', error);
            throw new Error('Failed to submit review');
        }
    }

    /**
     * Get all approved reviews (public-facing)
     * @returns {Promise<Array>} - Approved reviews
     */
    async getApprovedReviews() {
        try {
            console.log('Fetching approved reviews from Firestore...');
            const q = query(
                collection(db, this.collectionName),
                where('isApproved', '==', true)
            );

            const querySnapshot = await getDocs(q);
            console.log('Query snapshot size:', querySnapshot.size);

            const reviews = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log('Fetched reviews:', reviews);

            // Sort by createdAt in JavaScript instead
            reviews.sort((a, b) => {
                const aTime = a.createdAt?.toDate?.() || new Date(0);
                const bTime = b.createdAt?.toDate?.() || new Date(0);
                return bTime - aTime;
            });

            return reviews;
        } catch (error) {
            console.error('Error fetching approved reviews:', error);
            return [];
        }
    }

    /**
     * Flag a review for manual review
     * @param {string} reviewId
     * @param {string} reason
     * @returns {Promise<void>}
     */
    async flagReview(reviewId, reason) {
        try {
            const reviewRef = doc(db, this.collectionName, reviewId);
            await updateDoc(reviewRef, {
                flagged: true,
                flagReason: reason
            });
        } catch (error) {
            console.error('Error flagging review:', error);
        }
    }
}

// Export singleton instance
export default new ReviewService();
