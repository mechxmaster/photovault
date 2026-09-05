import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  getDocs,
  writeBatch
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { isUsingLiveFirebase } from './authService';
import { deletePhotoFile } from './storageService';
import { 
  mockFetchUserPhotos, 
  mockDeletePhoto 
} from './demoService';

/**
 * Creates photo document under users/{uid}/photos/{photoId}
 */
export async function savePhotoMetadata(uid, photoData) {
  if (!uid) throw new Error('Unauthenticated user cannot save photo.');

  if (isUsingLiveFirebase() && db) {
    const photosCol = collection(db, 'users', uid, 'photos');
    const newDocRef = doc(photosCol);
    const photoDoc = {
      id: newDocRef.id,
      uid,
      filename: photoData.filename,
      storagePath: photoData.storagePath,
      downloadURL: photoData.downloadURL,
      fileSize: photoData.fileSize,
      contentType: photoData.contentType,
      createdAt: serverTimestamp(),
      isoDate: new Date().toISOString()
    };
    await setDoc(newDocRef, photoDoc);
    return photoDoc;
  } else {
    // In mock mode, the demoService already saved it to indexedDB in mockUploadPhoto
    return photoData;
  }
}

/**
 * Subscribes to user's private photos collection: users/{uid}/photos
 * @param {string} uid 
 * @param {Function} onPhotosChange 
 * @param {Function} onError 
 * @returns {Function} unsubscribe
 */
export function subscribeToUserPhotos(uid, onPhotosChange, onError) {
  if (!uid) {
    onPhotosChange([]);
    return () => {};
  }

  if (isUsingLiveFirebase() && db) {
    const photosCol = collection(db, 'users', uid, 'photos');
    const q = query(photosCol, orderBy('createdAt', 'desc'));
    
    return onSnapshot(q, (snapshot) => {
      const photos = snapshot.docs.map(doc => {
        const data = doc.data();
        let formattedDate = data.isoDate || new Date().toISOString();
        if (data.createdAt && typeof data.createdAt.toDate === 'function') {
          formattedDate = data.createdAt.toDate().toISOString();
        }
        return {
          id: doc.id,
          ...data,
          createdAt: formattedDate
        };
      });
      onPhotosChange(photos);
    }, (err) => {
      console.error('Firestore subscription error:', err);
      if (onError) onError(err);
    });
  } else {
    // Demo mode polling/refresh listener
    let active = true;
    const fetch = async () => {
      if (!active) return;
      try {
        const photos = await mockFetchUserPhotos(uid);
        if (active) onPhotosChange(photos);
      } catch (err) {
        if (active && onError) onError(err);
      }
    };
    fetch();

    const interval = setInterval(fetch, 1000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }
}

/**
 * Deletes a single photo from both Storage and Firestore
 */
export async function deleteUserPhoto(photo, uid) {
  if (!uid || photo.uid !== uid) {
    throw new Error('Permission denied: You can only delete your own photos.');
  }

  if (isUsingLiveFirebase() && db) {
    // 1. Delete from Firebase Storage
    if (photo.storagePath) {
      await deletePhotoFile(photo.storagePath);
    }
    // 2. Delete from Firestore
    const docRef = doc(db, 'users', uid, 'photos', photo.id);
    await deleteDoc(docRef);
  } else {
    await mockDeletePhoto(photo.id, uid);
  }
}

/**
 * Bulk deletes multiple photos
 */
export async function deleteMultiplePhotos(photos, uid) {
  if (!uid) throw new Error('Unauthenticated user.');
  
  const errors = [];
  for (const photo of photos) {
    try {
      await deleteUserPhoto(photo, uid);
    } catch (err) {
      console.error(`Failed to delete photo ${photo.id}:`, err);
      errors.push({ photoId: photo.id, error: err.message });
    }
  }

  if (errors.length > 0) {
    throw new Error(`Failed to delete ${errors.length} of ${photos.length} photos.`);
  }
}
