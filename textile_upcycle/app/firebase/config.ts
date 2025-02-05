import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBlWvfyTxJ4RwSuXfl5_ROGFpFnMS1yQfg",
  authDomain: "textile-upcycle.firebaseapp.com",
  projectId: "textile-upcycle",
  storageBucket: "textile-upcycle.firebasestorage.app",
  messagingSenderId: "922029562782",
  appId: "1:922029562782:web:5c7c8ff84870fa2089d48f",
  measurementId: "G-BTN8FR9MBK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Analytics only on client side
if (typeof window !== 'undefined') {
  getAnalytics(app);
} 