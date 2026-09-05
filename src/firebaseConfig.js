import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

/* =========================================================================
   YOUR FIREBASE PROJECT CONFIGURATION
   All photos and user accounts are stored in your central Firebase project.
   You can either:
   1. Paste your Firebase web app keys directly in this object below, OR
   2. Set them in a .env file (VITE_FIREBASE_API_KEY, etc.)
   ========================================================================= */
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

let app = null;
let auth = null;
let db = null;
let storage = null;
let isConfigured = false;

// Check if valid Firebase configuration is provided
if (firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.apiKey !== 'YOUR_API_KEY') {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    isConfigured = true;
    console.log('[PhotoVault] Connected to Firebase Project:', firebaseConfig.projectId);
  } catch (err) {
    console.error('[PhotoVault] Firebase initialization error:', err);
    isConfigured = false;
  }
} else {
  console.info('[PhotoVault] Firebase project keys pending in src/firebaseConfig.js. Running in secure local preview mode.');
}

export { app, auth, db, storage, isConfigured };
