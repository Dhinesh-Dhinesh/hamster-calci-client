import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_API_KEY,
    authDomain: import.meta.env.VITE_API_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_API_PROJECT_ID,
    storageBucket: import.meta.env.VITE_API_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_API_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_API_APP_ID,
    measurementId: import.meta.env.VITE_API_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);