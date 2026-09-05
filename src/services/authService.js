import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, isConfigured } from '../firebaseConfig';
import { 
  mockLogin, 
  mockLogout, 
  mockSubscribeAuth 
} from './demoService';

export function isUsingLiveFirebase() {
  return isConfigured && auth !== null;
}

// Convert unique username into a standardized Firebase Auth identifier
function usernameToEmail(username) {
  const clean = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
  return `${clean || 'user'}@vault.app`;
}

// Deterministic internal auth secret for the unique username
function usernameToSecret(username) {
  const clean = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
  return `Vault_Secret_${clean}_Key99!`;
}

export function subscribeToAuth(callback) {
  if (isUsingLiveFirebase()) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = user.displayName || user.email.split('@')[0];
        callback({
          uid: user.uid,
          username: username,
          displayName: username,
          isAnonymous: user.isAnonymous
        });
      } else {
        callback(null);
      }
    });
  } else {
    return mockSubscribeAuth(callback);
  }
}

/**
 * Logs in or registers a unique username in Firebase.
 * Works across any Google Chrome browser or device:
 * Entering the same unique username logs into the same account and loads all photos.
 */
export async function loginWithUniqueUsername(username) {
  const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
  if (!cleanUsername || cleanUsername.length < 2) {
    throw new Error('Please enter a username with at least 2 characters.');
  }

  if (isUsingLiveFirebase()) {
    const email = usernameToEmail(cleanUsername);
    const secret = usernameToSecret(cleanUsername);

    try {
      // 1. Try signing in first
      const credential = await signInWithEmailAndPassword(auth, email, secret);
      const user = credential.user;
      return {
        uid: user.uid,
        username: cleanUsername,
        displayName: cleanUsername
      };
    } catch (err) {
      // 2. If user doesn't exist yet, automatically create the unique user in Firebase
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        try {
          const newCredential = await createUserWithEmailAndPassword(auth, email, secret);
          await updateProfile(newCredential.user, { displayName: cleanUsername });
          return {
            uid: newCredential.user.uid,
            username: cleanUsername,
            displayName: cleanUsername
          };
        } catch (createErr) {
          // If already exists due to race condition, re-attempt sign in
          if (createErr.code === 'auth/email-already-in-use') {
            const retryCred = await signInWithEmailAndPassword(auth, email, secret);
            return {
              uid: retryCred.user.uid,
              username: cleanUsername,
              displayName: cleanUsername
            };
          }
          throw createErr;
        }
      }
      throw err;
    }
  } else {
    // Standalone / fallback demo mode
    return await mockLogin(cleanUsername);
  }
}

export async function logoutUser() {
  if (isUsingLiveFirebase()) {
    await signOut(auth);
  } else {
    await mockLogout();
  }
}
