# How to Approve Reviews in Firebase Console

## Quick Guide - Super Simple! ✨

### Step 1: Go to Firestore Console
https://console.firebase.google.com/project/floralock-6c437/firestore

### Step 2: Navigate to Reviews Collection
- Click on **`reviews`** collection in left sidebar

### Step 3: Approve a Review
1. Click on a review document (each one has a unique ID)
2. Find the **`isApproved`** field
3. Click on the value **`false`**
4. Change it to **`true`**
5. Press Enter or click the checkmark ✓

### Step 4: Done!
The review will now appear on your website immediately!

---

## To Hide/Reject a Review
1. Follow same steps above
2. Change `isApproved` back to **`false`**
3. The review will be hidden from the website

---

## Review Fields Explained

| Field | Description | How to Edit |
|-------|-------------|-------------|
| `customerName` | Customer's name | Don't change |
| `rating` | 1-5 stars | Don't change |
| `comment` | Review text | Don't change |
| **`isApproved`** | **Show on website?** | **Change to `true` to approve** |
| `flagged` | Auto-flagged for bad language | Just for info |
| `flagReason` | Why it was flagged | Just for info |
| `createdAt` | When submitted | Don't change |

---

## Simple Process

```
New Review Submitted
    ↓
isApproved: false (hidden)
    ↓
You change to: true
    ↓
Review appears on website! ✅
```

That's it! Just toggle `false` → `true`. Super easy! 🎉
