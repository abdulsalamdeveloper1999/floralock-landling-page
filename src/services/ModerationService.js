/**
 * ModerationService - Handles content validation and filtering
 * Following Single Responsibility Principle
 */
class ModerationService {
    constructor() {
        // Common profanity and inappropriate words (expandable)
        this.profanityList = [
            'badword1', 'badword2', 'inappropriate', // Placeholder - add real words
            // Add more based on your needs
        ];
    }

    /**
     * Check if text contains profanity
     * @param {string} text
     * @returns {boolean}
     */
    containsProfanity(text) {
        if (!text) return false;

        const lowerText = text.toLowerCase();
        return this.profanityList.some(word => lowerText.includes(word));
    }

    /**
     * Validate review content
     * @param {Object} review - {customerName, rating, comment}
     * @returns {Object} - {isValid, errors}
     */
    validateReviewContent(review) {
        const errors = [];

        // Validate customer name
        if (!review.customerName || review.customerName.trim().length < 2) {
            errors.push('Name must be at least 2 characters');
        }
        if (review.customerName && review.customerName.length > 50) {
            errors.push('Name must be less than 50 characters');
        }

        // Validate rating
        if (!review.rating || review.rating < 1 || review.rating > 5) {
            errors.push('Rating must be between 1 and 5');
        }

        // Validate comment
        if (!review.comment || review.comment.trim().length < 10) {
            errors.push('Review must be at least 10 characters');
        }
        if (review.comment && review.comment.length > 500) {
            errors.push('Review must be less than 500 characters');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    /**
     * Check if review should be auto-flagged
     * @param {Object} review
     * @returns {Object} - {shouldFlag, reason}
     */
    flagSuspiciousContent(review) {
        // Check for profanity
        if (this.containsProfanity(review.comment) || this.containsProfanity(review.customerName)) {
            return {
                shouldFlag: true,
                reason: 'Contains potentially inappropriate language'
            };
        }

        // Check for excessive caps (spam-like)
        const capsRatio = (review.comment.match(/[A-Z]/g) || []).length / review.comment.length;
        if (capsRatio > 0.5 && review.comment.length > 20) {
            return {
                shouldFlag: true,
                reason: 'Excessive use of capital letters'
            };
        }

        // Check for repeated characters (spam pattern)
        if (/(.)\1{4,}/.test(review.comment)) {
            return {
                shouldFlag: true,
                reason: 'Contains spam-like patterns'
            };
        }

        return {
            shouldFlag: false,
            reason: null
        };
    }
}

// Export singleton instance
export default new ModerationService();
