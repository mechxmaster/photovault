// IndexedDB based persistent mock provider for testing when Firebase credentials are not yet configured.
// Implements the exact same user isolation model: users/{uid}/photos/{photoId}.

const DB_NAME = 'PhotoVaultMockDB';
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'email' });
      }
      if (!db.objectStoreNames.contains('photos')) {
        const photoStore = db.createObjectStore('photos', { keyPath: 'id' });
        photoStore.createIndex('uid', 'uid', { unique: false });
        photoStore.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Mock Auth
let currentDemoUser = JSON.parse(sessionStorage.getItem('demo_current_user') || 'null');
const authListeners = new Set();

export function mockSubscribeAuth(cb) {
  authListeners.add(cb);
  cb(currentDemoUser);
  return () => authListeners.delete(cb);
}

function notifyAuthChange() {
  sessionStorage.setItem('demo_current_user', JSON.stringify(currentDemoUser));
  for (const cb of authListeners) {
    cb(currentDemoUser);
  }
}

export async function mockSignUp(name) {
  const cleanName = name.trim();
  const normalizedKey = cleanName.toLowerCase();
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['users'], 'readwrite');
    const store = tx.objectStore('users');
    const getReq = store.get(normalizedKey);
    getReq.onsuccess = () => {
      if (getReq.result) {
        reject(new Error(`An account named "${cleanName}" already exists. Please log in.`));
        return;
      }
      const uid = 'usr_' + normalizedKey.replace(/[^a-z0-9]/g, '_');
      const user = {
        uid,
        email: normalizedKey,
        displayName: cleanName,
        createdAt: new Date().toISOString()
      };
      store.add(user);
      tx.oncomplete = () => {
        currentDemoUser = { uid: user.uid, email: user.displayName, displayName: user.displayName };
        notifyAuthChange();
        resolve(currentDemoUser);
      };
      tx.onerror = () => reject(tx.error);
    };
  });
}

export async function mockLogin(name) {
  const cleanName = name.trim();
  const normalizedKey = cleanName.toLowerCase();
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['users'], 'readwrite');
    const store = tx.objectStore('users');
    const getReq = store.get(normalizedKey);
    getReq.onsuccess = () => {
      let user = getReq.result;
      if (!user) {
        // Auto-create or register if logging in with new name
        const uid = 'usr_' + normalizedKey.replace(/[^a-z0-9]/g, '_');
        user = {
          uid,
          email: normalizedKey,
          displayName: cleanName,
          createdAt: new Date().toISOString()
        };
        store.add(user);
      }
      currentDemoUser = { uid: user.uid, email: user.displayName, displayName: user.displayName };
      notifyAuthChange();
      resolve(currentDemoUser);
    };
    getReq.onerror = () => reject(getReq.error);
  });
}

export async function mockLogout() {
  currentDemoUser = null;
  sessionStorage.removeItem('demo_current_user');
  notifyAuthChange();
}

// Mock Storage & Firestore with progress
export function mockUploadPhoto(file, uid, onProgress) {
  return new Promise((resolve, reject) => {
    if (!uid) {
      reject(new Error('Permission denied: Authenticated user required.'));
      return;
    }

    const photoId = 'ph_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    const storagePath = `users/${uid}/photos/${photoId}_${file.name}`;
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (onProgress) onProgress(100);

        // Read file as data URL to persist in IndexedDB
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const dataUrl = reader.result;
            const photoData = {
              id: photoId,
              uid,
              filename: file.name,
              storagePath,
              downloadURL: dataUrl,
              fileSize: file.size,
              contentType: file.type,
              createdAt: new Date().toISOString()
            };

            const db = await openDB();
            const tx = db.transaction(['photos'], 'readwrite');
            tx.objectStore('photos').add(photoData);
            tx.oncomplete = () => resolve(photoData);
            tx.onerror = () => reject(tx.error);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      } else {
        if (onProgress) onProgress(progress);
      }
    }, 80);
  });
}

export async function mockFetchUserPhotos(uid) {
  if (!uid) return [];
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['photos'], 'readonly');
    const store = tx.objectStore('photos');
    const index = store.index('uid');
    const req = index.getAll(IDBKeyRange.only(uid));
    req.onsuccess = () => {
      const list = req.result || [];
      // Sort newest first by default
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      resolve(list);
    };
    req.onerror = () => reject(req.error);
  });
}

export async function mockDeletePhoto(photoId, uid) {
  if (!uid) throw new Error('Unauthenticated user cannot delete.');
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['photos'], 'readwrite');
    const store = tx.objectStore('photos');
    const getReq = store.get(photoId);
    getReq.onsuccess = () => {
      const item = getReq.result;
      if (!item) {
        resolve(); // Already deleted
        return;
      }
      if (item.uid !== uid) {
        reject(new Error('Permission denied: Cannot delete another user photo.'));
        return;
      }
      store.delete(photoId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    getReq.onerror = () => reject(getReq.error);
  });
}
