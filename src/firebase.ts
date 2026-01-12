import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZSiybu9FzXR7LpuOmKCgORU27UUMIixs",
  authDomain: "abt182website.firebaseapp.com",
  projectId: "abt182website",
  storageBucket: "abt182website.firebasestorage.app",
  messagingSenderId: "742401412786",
  appId: "1:742401412786:web:d9d3a6f6c9813534a683ab",
  measurementId: "G-NWRFHZWWPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
