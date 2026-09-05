# PhotoVault — Cloud Photo Storage

A modern, responsive, and secure photo storage web application built with **HTML5, Vanilla CSS, Vanilla JavaScript, and Firebase (Authentication, Cloud Firestore, and Firebase Storage)**.

---

## Features

- **Unique Username Access**: Fast, seamless login across any Google Chrome browser or mobile device without requiring passwords or email prompts. Each unique username gets a completely isolated personal vault.
- **Multiple Photo Upload**: Upload multiple photos at once with drag-and-drop support (JPG, JPEG, PNG, WEBP, GIF).
- **Upload Progress Tracker**: Real-time progress bars showing individual and overall upload percentages.
- **Responsive Photo Gallery**: Beautiful responsive grid adapting seamlessly from mobile phones (touch-friendly) to tablets, laptops, and 4K displays.
- **Interactive Lightbox Viewer**: High-resolution image preview with download, delete, and keyboard navigation (Arrow keys / Escape).
- **Search & Sort**: Real-time search by filename and multiple sorting options (Newest, Oldest, Name A-Z, Size).
- **Bulk Selection & Deletion**: Select multiple photos or select all with a single click, featuring a confirmation modal before permanent deletion.
- **Strict User Isolation**: Configured with strict Firebase Security Rules so each user can ONLY access and delete their own photos.

---

## Project Structure

```
cloud/
├── index.html              # Main application markup
├── firebase.json           # Firebase deployment configuration
├── firestore.rules         # Cloud Firestore security rules
├── storage.rules           # Firebase Storage security rules
├── .env.example            # Environment variables template
├── src/
│   ├── firebaseConfig.js   # Firebase SDK initialization
│   ├── main.js             # Application controller & state management
│   ├── style.css           # Vanilla CSS design system (dark theme)
│   └── services/
│       ├── authService.js      # Unique username authentication
│       ├── storageService.js   # Resumable photo upload & storage delete
│       ├── firestoreService.js # Metadata sync & real-time updates
│       └── demoService.js      # IndexedDB fallback for preview mode
└── server/                 # Optional Node.js Express backend with Firebase Admin SDK
    ├── server.js
    └── package.json
```

---

## Getting Started

### 1. Install Dependencies & Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Connect Your Firebase Project
Open `src/firebaseConfig.js` and paste your Firebase project web configuration from your [Firebase Console](https://console.firebase.google.com/):

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef"
};
```

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to Firebase Hosting (Optional)
```bash
npx firebase deploy
```
