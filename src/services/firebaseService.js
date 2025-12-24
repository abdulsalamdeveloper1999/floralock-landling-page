// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMQcmD70KcccOdM2nLntK7UFPQnnqTxNI",
    authDomain: "floralock-6c437.firebaseapp.com",
    projectId: "floralock-6c437",
    storageBucket: "floralock-6c437.firebasestorage.app",
    messagingSenderId: "44322231898",
    appId: "1:44322231898:web:faeca002959dd98474ea63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;