import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { storage } from '../firebaseConfig';
import { isUsingLiveFirebase } from './authService';
import { mockUploadPhoto } from './demoService';

/**
 * Uploads a photo file to Firebase Storage (or mock) and monitors progress.
 * @param {File} file 
 * @param {string} uid 
 * @param {Function} onProgress (percent: number) => void
 * @returns {Promise<{ downloadURL: string, storagePath: string, filename: string, fileSize: number, contentType: string }>}
 */
export function uploadPhotoFile(file, uid, onProgress) {
  if (!uid) {
    return Promise.reject(new Error('Authentication required to upload photos.'));
  }

  if (isUsingLiveFirebase() && storage) {
    return new Promise((resolve, reject) => {
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const uniqueSuffix = Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      const storagePath = `users/${uid}/photos/${uniqueSuffix}_${sanitizedName}`;
      const storageRef = ref(storage, storagePath);

      const metadata = {
        contentType: file.type,
        customMetadata: {
          originalName: file.name,
          uploadedBy: uid,
        }
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          if (onProgress) onProgress(progress);
        },
        (error) => {
          console.error('Firebase Storage Upload Error:', error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({
              downloadURL,
              storagePath,
              filename: file.name,
              fileSize: file.size,
              contentType: file.type || 'image/jpeg',
            });
          } catch (urlErr) {
            reject(urlErr);
          }
        }
      );
    });
  } else {
    // Demo mode upload
    return mockUploadPhoto(file, uid, onProgress);
  }
}

/**
 * Deletes a photo file from Firebase Storage
 * @param {string} storagePath 
 * @returns {Promise<void>}
 */
export async function deletePhotoFile(storagePath) {
  if (isUsingLiveFirebase() && storage && storagePath) {
    try {
      const fileRef = ref(storage, storagePath);
      await deleteObject(fileRef);
    } catch (err) {
      // If the file does not exist in storage anymore, treat as deleted
      if (err.code === 'storage/object-not-found') {
        console.warn('Storage object not found, skipping delete:', storagePath);
        return;
      }
      throw err;
    }
  }
  // In demo mode, deletion from store is handled in firestoreService/demoService
}
