# Firestore Security Rules for Reviews

Copy these rules to your Firebase Console:
**Firestore Database → Rules**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reviews collection
    match /reviews/{reviewId} {
      // Anyone can create (submit review)
      allow create: if true;
      
      // Only approved reviews (isApproved = true) are readable by public
      allow read: if resource.data.isApproved == true;
      
      // Admins can read all reviews and update/delete
      // For now, no authentication - you'll add admin check later
      allow update, delete: if true; // TODO: Add admin authentication
    }
  }
}
```

## Important: Deploy these rules in Firebase Console!

1. Go to https://console.firebase.google.com/project/floralock-6c437
2. Navigate to **Firestore Database**
3. Click **Rules** tab
4. Replace with the rules above
5. Click **Publish**
