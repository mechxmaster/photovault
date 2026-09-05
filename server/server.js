import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Initialize Firebase Admin SDK
let firebaseApp = null;
let db = null;
let bucket = null;
let authAdmin = null;

function initFirebaseAdmin() {
  try {
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || path.join(__dirname, 'serviceAccountKey.json');

    if (fs.existsSync(serviceAccountPath)) {
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || `${serviceAccount.project_id}.appspot.com`
      });
      console.log(`[Backend] Firebase Admin initialized with service account: ${serviceAccount.project_id}`);
    } else if (process.env.FIREBASE_CONFIG) {
      const config = JSON.parse(process.env.FIREBASE_CONFIG);
      firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(config),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      });
      console.log('[Backend] Firebase Admin initialized with FIREBASE_CONFIG env var.');
    } else {
      console.warn('[Backend] Notice: serviceAccountKey.json not found in server folder.');
      console.warn('[Backend] Running in Standalone API Mode with in-memory persistence.');
    }

    if (firebaseApp) {
      db = admin.firestore();
      bucket = admin.storage().bucket();
      authAdmin = admin.auth();
    }
  } catch (err) {
    console.error('[Backend] Error initializing Firebase Admin:', err.message);
  }
}

initFirebaseAdmin();

// In-memory fallback database for standalone demo/testing when serviceAccountKey is pending
const mockStore = {
  users: new Map(), // name -> { uid, name, createdAt }
  photos: new Map(), // uid -> Array<Photo>
};

/* ==========================================================================
   ROUTES
   ========================================================================== */

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    firebaseAdminConnected: firebaseApp !== null,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'default',
    timestamp: new Date().toISOString()
  });
});

/**
 * NAME-ONLY AUTHENTICATION
 * Endpoint: POST /api/auth/name-login
 * Body: { name: string }
 * Returns: { uid, name, customToken }
 */
app.post('/api/auth/name-login', async (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please provide a valid name (at least 2 characters).' });
  }

  const cleanName = name.trim();
  const normalizedKey = cleanName.toLowerCase().replace(/[^a-z0-9_]/g, '');
  const uid = `usr_${normalizedKey || 'anonymous'}`;

  try {
    let customToken = null;

    if (authAdmin) {
      // Create or update Firebase user
      try {
        await authAdmin.getUser(uid);
      } catch (e) {
        if (e.code === 'auth/user-not-found') {
          await authAdmin.createUser({
            uid,
            displayName: cleanName,
            email: `${normalizedKey}@photos.vault`
          });
        }
      }
      customToken = await authAdmin.createCustomToken(uid, { name: cleanName });
    } else {
      // In-memory record
      mockStore.users.set(normalizedKey, { uid, name: cleanName, createdAt: new Date().toISOString() });
    }

    res.json({
      success: true,
      uid,
      name: cleanName,
      customToken
    });
  } catch (err) {
    console.error('[Backend] Auth error:', err);
    res.status(500).json({ error: err.message || 'Authentication error' });
  }
});

/**
 * GET USER PHOTOS
 * Endpoint: GET /api/photos?uid=...
 */
app.get('/api/photos', async (req, res) => {
  const { uid } = req.query;
  if (!uid) {
    return res.status(400).json({ error: 'Missing required query parameter: uid' });
  }

  try {
    if (db) {
      const photosSnapshot = await db
        .collection('users')
        .doc(uid)
        .collection('photos')
        .orderBy('createdAt', 'desc')
        .get();

      const photos = photosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return res.json({ photos });
    } else {
      const photos = mockStore.photos.get(uid) || [];
      return res.json({ photos });
    }
  } catch (err) {
    console.error('[Backend] Fetch photos error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * SAVE PHOTO METADATA
 * Endpoint: POST /api/photos
 * Body: { uid, filename, storagePath, downloadURL, fileSize, contentType }
 */
app.post('/api/photos', async (req, res) => {
  const { uid, filename, storagePath, downloadURL, fileSize, contentType } = req.body;

  if (!uid || !filename || !downloadURL) {
    return res.status(400).json({ error: 'Missing required photo metadata fields.' });
  }

  const photoId = `ph_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const photoData = {
    id: photoId,
    uid,
    filename,
    storagePath: storagePath || `users/${uid}/photos/${photoId}_${filename}`,
    downloadURL,
    fileSize: fileSize || 0,
    contentType: contentType || 'image/jpeg',
    createdAt: new Date().toISOString()
  };

  try {
    if (db) {
      await db
        .collection('users')
        .doc(uid)
        .collection('photos')
        .doc(photoId)
        .set(photoData);
    } else {
      if (!mockStore.photos.has(uid)) mockStore.photos.set(uid, []);
      mockStore.photos.get(uid).unshift(photoData);
    }

    res.status(201).json({ success: true, photo: photoData });
  } catch (err) {
    console.error('[Backend] Save photo error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE PHOTO
 * Endpoint: DELETE /api/photos/:photoId?uid=...&storagePath=...
 */
app.delete('/api/photos/:photoId', async (req, res) => {
  const { photoId } = req.params;
  const { uid, storagePath } = req.query;

  if (!uid || !photoId) {
    return res.status(400).json({ error: 'Missing uid or photoId.' });
  }

  try {
    if (firebaseApp) {
      // 1. Delete from Firebase Storage
      if (bucket && storagePath) {
        try {
          await bucket.file(storagePath).delete();
          console.log(`[Backend] Deleted file from Storage: ${storagePath}`);
        } catch (storageErr) {
          console.warn(`[Backend] Storage delete warning (object may already be deleted):`, storageErr.message);
        }
      }

      // 2. Delete from Cloud Firestore
      if (db) {
        await db.collection('users').doc(uid).collection('photos').doc(photoId).delete();
        console.log(`[Backend] Deleted doc from Firestore: users/${uid}/photos/${photoId}`);
      }
    } else {
      const list = mockStore.photos.get(uid) || [];
      mockStore.photos.set(uid, list.filter(p => p.id !== photoId));
    }

    res.json({ success: true, message: 'Photo deleted successfully.' });
  } catch (err) {
    console.error('[Backend] Delete photo error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` PhotoVault Backend Server running on port ${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});
