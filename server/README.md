# PhotoVault — Backend API Server

This is the backend server for the **Private Photo Storage Website**, built with Node.js, Express, and the official **Firebase Admin SDK**.

---

## Features

- **Name-Only Authentication**: Generates secure, user-isolated Firebase UIDs based on the user's name (`POST /api/auth/name-login`) without requiring email or password prompts.
- **Private Firestore Integration**: Direct access to `users/{uid}/photos/{photoId}` with server-side validation.
- **Firebase Storage Management**: Handles file deletion and metadata synchronization.
- **Standalone Fallback Mode**: If `serviceAccountKey.json` is not yet configured, the server runs in safe in-memory mode so you can test all API endpoints immediately.

---

## Setup & Running

### 1. Install Dependencies
Open a terminal in the `server` directory:
```bash
cd server
npm install
```

### 2. Configure Firebase Admin Credentials (Optional but Recommended for Production)
1. Go to your **[Firebase Console](https://console.firebase.google.com/)**.
2. Navigate to **Project Settings** (gear icon) -> **Service accounts**.
3. Click **Generate new private key** and download the JSON file.
4. Rename the downloaded file to `serviceAccountKey.json` and place it inside this `server/` directory:
   ```
   server/serviceAccountKey.json
   ```
5. Set your storage bucket in `server/.env`:
   ```env
   PORT=3001
   FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   ```

### 3. Start the Server
```bash
npm start
```
Or for development with automatic reload:
```bash
npm run dev
```

The server will start at: `http://localhost:3001`

---

## API Endpoints

### 1. Health Check
- **Endpoint**: `GET /api/health`
- **Response**:
  ```json
  {
    "status": "ok",
    "firebaseAdminConnected": true,
    "storageBucket": "your-project.appspot.com"
  }
  ```

### 2. Name-Only Authentication
- **Endpoint**: `POST /api/auth/name-login`
- **Body**:
  ```json
  {
    "name": "Manasi"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "uid": "usr_manasi",
    "name": "Manasi",
    "customToken": "<Firebase Custom Auth Token>"
  }
  ```

### 3. Fetch User's Private Photos
- **Endpoint**: `GET /api/photos?uid=usr_manasi`
- **Response**:
  ```json
  {
    "photos": [
      {
        "id": "ph_12345",
        "uid": "usr_manasi",
        "filename": "sunset.jpg",
        "downloadURL": "https://...",
        "storagePath": "users/usr_manasi/photos/...",
        "fileSize": 1048576,
        "createdAt": "2026-09-05T12:00:00.000Z"
      }
    ]
  }
  ```

### 4. Save Photo Metadata
- **Endpoint**: `POST /api/photos`
- **Body**:
  ```json
  {
    "uid": "usr_manasi",
    "filename": "sunset.jpg",
    "storagePath": "users/usr_manasi/photos/...",
    "downloadURL": "https://...",
    "fileSize": 1048576,
    "contentType": "image/jpeg"
  }
  ```

### 5. Delete Photo
- **Endpoint**: `DELETE /api/photos/:photoId?uid=usr_manasi&storagePath=...`
- **Response**:
  ```json
  {
    "success": true,
    "message": "Photo deleted successfully."
  }
  ```
