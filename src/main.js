import { 
  loginWithUniqueUsername, 
  logoutUser, 
  subscribeToAuth 
} from './services/authService';
import { uploadPhotoFile } from './services/storageService';
import { 
  savePhotoMetadata, 
  subscribeToUserPhotos, 
  deleteUserPhoto, 
  deleteMultiplePhotos 
} from './services/firestoreService';

// Application State
const state = {
  currentUser: null,
  photos: [],
  selectedPhotoIds: new Set(),
  searchQuery: '',
  sortBy: 'newest',
  currentLightboxIndex: -1,
  activeUploads: new Map(), // key: id, val: { name, percent }
  confirmAction: null,
  unsubscribePhotos: null
};

// DOM Elements Cache
const el = {
  // Nav
  userNavSection: document.getElementById('user-nav-section'),
  navUserAvatar: document.getElementById('nav-user-avatar'),
  navUserName: document.getElementById('nav-user-name'),
  navUserUid: document.getElementById('nav-user-uid'),
  btnLogout: document.getElementById('btn-logout'),

  // Auth
  authSection: document.getElementById('auth-section'),
  authForm: document.getElementById('auth-form'),
  authUsername: document.getElementById('auth-username'),
  authErrorBox: document.getElementById('auth-error-box'),
  btnAuthSubmit: document.getElementById('btn-auth-submit'),
  authSubmitLabel: document.getElementById('auth-submit-label'),
  authSubmitSpinner: document.getElementById('auth-submit-spinner'),

  // Dashboard
  dashboardSection: document.getElementById('dashboard-section'),
  dropzone: document.getElementById('dropzone'),
  fileInput: document.getElementById('file-input'),
  uploadQueue: document.getElementById('upload-queue'),
  queueCount: document.getElementById('queue-count'),
  queueTotalPercent: document.getElementById('queue-total-percent'),
  queueOverallBar: document.getElementById('queue-overall-bar'),
  uploadItemsList: document.getElementById('upload-items-list'),

  // Gallery Toolbar
  gallerySearch: document.getElementById('gallery-search'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  sortSelect: document.getElementById('sort-select'),
  checkboxSelectAll: document.getElementById('checkbox-select-all'),
  btnBulkDelete: document.getElementById('btn-bulk-delete'),
  selectedCount: document.getElementById('selected-count'),
  galleryCountBadge: document.getElementById('gallery-count-badge'),

  // Gallery Display
  galleryGrid: document.getElementById('gallery-grid'),
  galleryEmptyState: document.getElementById('gallery-empty-state'),
  galleryNoResults: document.getElementById('gallery-no-results'),
  galleryLoading: document.getElementById('gallery-loading'),
  btnEmptyUpload: document.getElementById('btn-empty-upload'),
  btnResetSearch: document.getElementById('btn-reset-search'),

  // Lightbox
  lightboxModal: document.getElementById('lightbox-modal'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  lightboxFilename: document.getElementById('lightbox-filename'),
  lightboxImg: document.getElementById('lightbox-img'),
  btnLightboxPrev: document.getElementById('btn-lightbox-prev'),
  btnLightboxNext: document.getElementById('btn-lightbox-next'),
  btnLightboxDownload: document.getElementById('btn-lightbox-download'),
  btnLightboxDelete: document.getElementById('btn-lightbox-delete'),
  btnLightboxClose: document.getElementById('btn-lightbox-close'),
  lightboxMetaDate: document.getElementById('lightbox-meta-date'),
  lightboxMetaSize: document.getElementById('lightbox-meta-size'),
  lightboxMetaType: document.getElementById('lightbox-meta-type'),
  lightboxMetaPath: document.getElementById('lightbox-meta-path'),

  // Confirm Modal
  confirmModal: document.getElementById('confirm-modal'),
  confirmBackdrop: document.getElementById('confirm-backdrop'),
  confirmTitle: document.getElementById('confirm-title'),
  confirmMessage: document.getElementById('confirm-message'),
  btnConfirmCancel: document.getElementById('btn-confirm-cancel'),
  btnConfirmOk: document.getElementById('btn-confirm-ok'),

  // Toasts
  toastContainer: document.getElementById('toast-container'),
};

function init() {
  setupAuthEventListeners();
  setupUploadEventListeners();
  setupGalleryControls();
  setupLightbox();
  setupConfirmModal();

  // Listen to Auth State
  subscribeToAuth((user) => {
    state.currentUser = user;
    renderAuthState();
    if (user) {
      loadUserPhotos(user.uid);
    } else {
      if (state.unsubscribePhotos) {
        state.unsubscribePhotos();
        state.unsubscribePhotos = null;
      }
      state.photos = [];
      state.selectedPhotoIds.clear();
      renderGallery();
    }
  });
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */
function setupAuthEventListeners() {
  // Handle Form Submission with Unique Username
  el.authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = el.authUsername.value.trim();

    if (!username) {
      showAuthError('Please enter your unique username.');
      return;
    }

    setAuthLoading(true);
    clearAuthError();

    try {
      await loginWithUniqueUsername(username);
      showToast(`Welcome to your vault, @${username}!`, 'success');
      el.authForm.reset();
    } catch (err) {
      console.error('Auth error:', err);
      showAuthError(err.message || 'Authentication failed.');
    } finally {
      setAuthLoading(false);
    }
  });

  // Logout
  el.btnLogout.addEventListener('click', async () => {
    try {
      await logoutUser();
      showToast('Logged out successfully.', 'info');
    } catch (err) {
      showToast('Failed to log out: ' + err.message, 'error');
    }
  });
}

function setAuthLoading(loading) {
  el.btnAuthSubmit.disabled = loading;
  if (loading) {
    el.authSubmitLabel.classList.add('hidden');
    el.authSubmitSpinner.classList.remove('hidden');
  } else {
    el.authSubmitLabel.classList.remove('hidden');
    el.authSubmitSpinner.classList.add('hidden');
  }
}

function showAuthError(message) {
  el.authErrorBox.textContent = message;
  el.authErrorBox.classList.remove('hidden');
}

function clearAuthError() {
  el.authErrorBox.textContent = '';
  el.authErrorBox.classList.add('hidden');
}

function renderAuthState() {
  if (state.currentUser) {
    el.authSection.classList.add('hidden');
    el.dashboardSection.classList.remove('hidden');
    el.userNavSection.classList.remove('hidden');

    const username = state.currentUser.username || state.currentUser.displayName || 'User';
    el.navUserName.textContent = `@${username}`;
    el.navUserAvatar.textContent = username[0].toUpperCase();
    const uidSnippet = state.currentUser.uid ? state.currentUser.uid.substring(0, 8) + '...' : '';
    el.navUserUid.textContent = `UID: ${uidSnippet}`;
  } else {
    el.authSection.classList.remove('hidden');
    el.dashboardSection.classList.add('hidden');
    el.userNavSection.classList.add('hidden');
  }
}

/* ==========================================================================
   PHOTO UPLOAD & DROPZONE
   ========================================================================== */
function setupUploadEventListeners() {
  const dropzone = el.dropzone;
  const fileInput = el.fileInput;

  // Open file dialog when clicking dropzone or empty button
  dropzone.addEventListener('click', () => fileInput.click());
  el.btnEmptyUpload.addEventListener('click', () => fileInput.click());

  // Drag & drop visual feedback
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('drag-over');
    });
  });

  ['dragleave', 'dragend'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('drag-over');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('drag-over');

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      handleFilesUpload(Array.from(files));
    }
  });

  fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFilesUpload(Array.from(files));
      fileInput.value = ''; // Reset input to allow re-uploading same file if desired
    }
  });
}

/**
 * Handles multiple photo upload with concurrent progress tracking
 */
async function handleFilesUpload(files) {
  if (!state.currentUser) {
    showToast('Please log in first.', 'error');
    return;
  }

  // Filter for valid image types
  const validImages = files.filter(f => f.type.startsWith('image/'));
  if (validImages.length === 0) {
    showToast('Please select valid image files (JPG, PNG, WEBP, GIF).', 'error');
    return;
  }

  if (validImages.length < files.length) {
    showToast(`${files.length - validImages.length} non-image file(s) were skipped.`, 'info');
  }

  // Show upload queue UI
  el.uploadQueue.classList.remove('hidden');
  el.queueCount.textContent = validImages.length;

  let completedCount = 0;
  let totalUploads = validImages.length;

  const uploadPromises = validImages.map(async (file, idx) => {
    const uploadId = `upload_${Date.now()}_${idx}_${Math.random().toString(36).substr(2, 5)}`;
    state.activeUploads.set(uploadId, { name: file.name, percent: 0 });
    renderUploadQueue();

    try {
      // 1. Upload to Firebase Storage with progress tracking
      const uploadResult = await uploadPhotoFile(file, state.currentUser.uid, (percent) => {
        const item = state.activeUploads.get(uploadId);
        if (item) {
          item.percent = percent;
          renderUploadQueue();
        }
      });

      // 2. Save metadata to Firestore: users/{uid}/photos/{photoId}
      await savePhotoMetadata(state.currentUser.uid, uploadResult);

      completedCount++;
      state.activeUploads.delete(uploadId);
      renderUploadQueue();
    } catch (err) {
      console.error(`Upload failed for ${file.name}:`, err);
      state.activeUploads.delete(uploadId);
      renderUploadQueue();
      showToast(`Upload failed for ${file.name}: ${err.message}`, 'error');
    }
  });

  await Promise.allSettled(uploadPromises);

  if (completedCount > 0) {
    showToast(`Successfully uploaded ${completedCount} photo${completedCount > 1 ? 's' : ''}!`, 'success');
  }

  // If no more active uploads, hide queue bar after a short delay
  if (state.activeUploads.size === 0) {
    setTimeout(() => {
      if (state.activeUploads.size === 0) {
        el.uploadQueue.classList.add('hidden');
      }
    }, 1500);
  }
}

function renderUploadQueue() {
  const uploads = Array.from(state.activeUploads.values());
  if (uploads.length === 0) return;

  const totalPercent = Math.round(
    uploads.reduce((acc, curr) => acc + curr.percent, 0) / uploads.length
  );

  el.queueTotalPercent.textContent = `${totalPercent}%`;
  el.queueOverallBar.style.width = `${totalPercent}%`;

  el.uploadItemsList.innerHTML = uploads.map(u => `
    <div class="upload-item-row">
      <span class="upload-item-name">${escapeHtml(u.name)}</span>
      <span class="upload-item-pct">${u.percent}%</span>
    </div>
  `).join('');
}

/* ==========================================================================
   PHOTO RETRIEVAL & REAL-TIME SYNC
   ========================================================================== */
function loadUserPhotos(uid) {
  el.galleryLoading.classList.remove('hidden');
  el.galleryGrid.classList.add('hidden');
  el.galleryEmptyState.classList.add('hidden');
  el.galleryNoResults.classList.add('hidden');

  if (state.unsubscribePhotos) {
    state.unsubscribePhotos();
  }

  state.unsubscribePhotos = subscribeToUserPhotos(
    uid,
    (photos) => {
      state.photos = photos;
      el.galleryLoading.classList.add('hidden');
      el.galleryGrid.classList.remove('hidden');
      renderGallery();
    },
    (error) => {
      console.error('Failed to subscribe to user photos:', error);
      el.galleryLoading.classList.add('hidden');
      showToast('Error syncing gallery: ' + error.message, 'error');
    }
  );
}

/* ==========================================================================
   GALLERY CONTROLS (SEARCH, SORT, MULTI-SELECT)
   ========================================================================== */
function setupGalleryControls() {
  // Search
  el.gallerySearch.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (state.searchQuery) {
      el.btnClearSearch.classList.remove('hidden');
    } else {
      el.btnClearSearch.classList.add('hidden');
    }
    renderGallery();
  });

  el.btnClearSearch.addEventListener('click', () => {
    el.gallerySearch.value = '';
    state.searchQuery = '';
    el.btnClearSearch.classList.add('hidden');
    renderGallery();
  });

  el.btnResetSearch.addEventListener('click', () => {
    el.gallerySearch.value = '';
    state.searchQuery = '';
    el.btnClearSearch.classList.add('hidden');
    renderGallery();
  });

  // Sort
  el.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderGallery();
  });

  // Select All
  el.checkboxSelectAll.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const currentFiltered = getFilteredAndSortedPhotos();
    if (isChecked) {
      currentFiltered.forEach(p => state.selectedPhotoIds.add(p.id));
    } else {
      state.selectedPhotoIds.clear();
    }
    updateSelectionUI();
    renderGalleryCardsSelection();
  });

  // Bulk Delete
  el.btnBulkDelete.addEventListener('click', () => {
    const count = state.selectedPhotoIds.size;
    if (count === 0) return;

    openConfirmModal({
      title: `Delete ${count} Photo${count > 1 ? 's' : ''}?`,
      message: `Are you sure you want to permanently delete these ${count} photos? They will be removed from Firebase Storage and Firestore. This action cannot be undone.`,
      onConfirm: async () => {
        const photosToDelete = state.photos.filter(p => state.selectedPhotoIds.has(p.id));
        try {
          await deleteMultiplePhotos(photosToDelete, state.currentUser.uid);
          state.selectedPhotoIds.clear();
          updateSelectionUI();
          showToast(`Successfully deleted ${count} photo(s).`, 'success');
        } catch (err) {
          showToast('Failed to delete photos: ' + err.message, 'error');
        }
      }
    });
  });
}

function getFilteredAndSortedPhotos() {
  let list = [...state.photos];

  // Search filter
  if (state.searchQuery) {
    list = list.filter(p => p.filename.toLowerCase().includes(state.searchQuery));
  }

  // Sort
  switch (state.sortBy) {
    case 'newest':
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case 'oldest':
      list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case 'name-asc':
      list.sort((a, b) => a.filename.localeCompare(b.filename));
      break;
    case 'name-desc':
      list.sort((a, b) => b.filename.localeCompare(a.filename));
      break;
    case 'size-desc':
      list.sort((a, b) => (b.fileSize || 0) - (a.fileSize || 0));
      break;
    case 'size-asc':
      list.sort((a, b) => (a.fileSize || 0) - (b.fileSize || 0));
      break;
  }

  return list;
}

function renderGallery() {
  const filtered = getFilteredAndSortedPhotos();

  // Update count badge
  if (state.searchQuery) {
    el.galleryCountBadge.textContent = `${filtered.length} of ${state.photos.length} photos`;
  } else {
    el.galleryCountBadge.textContent = `${state.photos.length} photo${state.photos.length !== 1 ? 's' : ''}`;
  }

  // Empty states handling
  if (state.photos.length === 0) {
    el.galleryGrid.classList.add('hidden');
    el.galleryNoResults.classList.add('hidden');
    el.galleryEmptyState.classList.remove('hidden');
    el.checkboxSelectAll.disabled = true;
    el.checkboxSelectAll.checked = false;
    updateSelectionUI();
    return;
  }

  el.checkboxSelectAll.disabled = false;
  el.galleryEmptyState.classList.add('hidden');

  if (filtered.length === 0) {
    el.galleryGrid.classList.add('hidden');
    el.galleryNoResults.classList.remove('hidden');
    return;
  }

  el.galleryNoResults.classList.add('hidden');
  el.galleryGrid.classList.remove('hidden');

  // Render cards
  el.galleryGrid.innerHTML = filtered.map((photo, index) => {
    const isSelected = state.selectedPhotoIds.has(photo.id);
    const formattedSize = formatFileSize(photo.fileSize);
    const formattedDate = formatDate(photo.createdAt);

    return `
      <div class="photo-card ${isSelected ? 'selected' : ''}" data-id="${photo.id}" data-index="${index}">
        <!-- Multi-select Checkbox -->
        <div class="card-checkbox-wrap" onclick="event.stopPropagation();">
          <input type="checkbox" class="custom-checkbox card-select-cb" data-id="${photo.id}" ${isSelected ? 'checked' : ''}>
        </div>

        <!-- Card Quick Action Buttons -->
        <div class="card-quick-actions" onclick="event.stopPropagation();">
          <a href="${photo.downloadURL}" download="${escapeHtml(photo.filename)}" class="quick-action-btn" title="Download original" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="12" x2="12" y2="3"/>
            </svg>
          </a>
          <button class="quick-action-btn delete-btn card-delete-btn" data-id="${photo.id}" title="Delete photo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>

        <!-- Thumbnail Image -->
        <div class="photo-thumb-wrap">
          <img src="${photo.downloadURL}" alt="${escapeHtml(photo.filename)}" loading="lazy">
        </div>

        <!-- Photo Metadata -->
        <div class="photo-info">
          <div class="photo-name" title="${escapeHtml(photo.filename)}">${escapeHtml(photo.filename)}</div>
          <div class="photo-meta-row">
            <span>${formattedDate}</span>
            <span>${formattedSize}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card event listeners
  el.galleryGrid.querySelectorAll('.photo-card').forEach(card => {
    const id = card.dataset.id;
    const index = parseInt(card.dataset.index, 10);

    // Card click opens lightbox
    card.addEventListener('click', () => {
      openLightbox(index);
    });

    // Checkbox click
    const cb = card.querySelector('.card-select-cb');
    if (cb) {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedPhotoIds.add(id);
          card.classList.add('selected');
        } else {
          state.selectedPhotoIds.delete(id);
          card.classList.remove('selected');
        }
        updateSelectionUI();
      });
    }

    // Delete button click
    const delBtn = card.querySelector('.card-delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const photo = state.photos.find(p => p.id === id);
        if (photo) promptDeleteSinglePhoto(photo);
      });
    }
  });

  updateSelectionUI();
}

function renderGalleryCardsSelection() {
  el.galleryGrid.querySelectorAll('.photo-card').forEach(card => {
    const id = card.dataset.id;
    const cb = card.querySelector('.card-select-cb');
    const isSelected = state.selectedPhotoIds.has(id);
    if (cb) cb.checked = isSelected;
    if (isSelected) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function updateSelectionUI() {
  const count = state.selectedPhotoIds.size;
  const filtered = getFilteredAndSortedPhotos();

  if (count > 0) {
    el.btnBulkDelete.classList.remove('hidden');
    el.selectedCount.textContent = count;
  } else {
    el.btnBulkDelete.classList.add('hidden');
  }

  if (filtered.length > 0 && count === filtered.length) {
    el.checkboxSelectAll.checked = true;
    el.checkboxSelectAll.indeterminate = false;
  } else if (count > 0 && count < filtered.length) {
    el.checkboxSelectAll.checked = false;
    el.checkboxSelectAll.indeterminate = true;
  } else {
    el.checkboxSelectAll.checked = false;
    el.checkboxSelectAll.indeterminate = false;
  }
}

/* ==========================================================================
   LIGHTBOX / PREVIEW MODAL
   ========================================================================== */
function setupLightbox() {
  el.btnLightboxClose.addEventListener('click', closeLightbox);
  el.lightboxBackdrop.addEventListener('click', closeLightbox);

  el.btnLightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  el.btnLightboxNext.addEventListener('click', () => navigateLightbox(1));

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (el.lightboxModal.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });

  // Delete from lightbox
  el.btnLightboxDelete.addEventListener('click', () => {
    const filtered = getFilteredAndSortedPhotos();
    const photo = filtered[state.currentLightboxIndex];
    if (photo) {
      promptDeleteSinglePhoto(photo, () => {
        closeLightbox();
      });
    }
  });
}

function openLightbox(index) {
  const filtered = getFilteredAndSortedPhotos();
  if (index < 0 || index >= filtered.length) return;

  state.currentLightboxIndex = index;
  const photo = filtered[index];

  el.lightboxFilename.textContent = photo.filename;
  el.lightboxImg.src = photo.downloadURL;
  el.btnLightboxDownload.href = photo.downloadURL;
  el.btnLightboxDownload.setAttribute('download', photo.filename);

  el.lightboxMetaDate.textContent = formatDate(photo.createdAt);
  el.lightboxMetaSize.textContent = formatFileSize(photo.fileSize);
  el.lightboxMetaType.textContent = photo.contentType || 'image/jpeg';
  el.lightboxMetaPath.textContent = photo.storagePath || '—';

  // Toggle prev/next button visibility
  el.btnLightboxPrev.style.display = filtered.length > 1 ? 'flex' : 'none';
  el.btnLightboxNext.style.display = filtered.length > 1 ? 'flex' : 'none';

  el.lightboxModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  el.lightboxModal.classList.add('hidden');
  el.lightboxImg.src = '';
  document.body.style.overflow = '';
  state.currentLightboxIndex = -1;
}

function navigateLightbox(direction) {
  const filtered = getFilteredAndSortedPhotos();
  if (filtered.length === 0) return;

  let newIndex = state.currentLightboxIndex + direction;
  if (newIndex < 0) newIndex = filtered.length - 1;
  if (newIndex >= filtered.length) newIndex = 0;

  openLightbox(newIndex);
}

/* ==========================================================================
   DELETION & CONFIRMATION
   ========================================================================== */
function setupConfirmModal() {
  el.btnConfirmCancel.addEventListener('click', closeConfirmModal);
  el.confirmBackdrop.addEventListener('click', closeConfirmModal);

  el.btnConfirmOk.addEventListener('click', async () => {
    if (state.confirmAction) {
      const action = state.confirmAction;
      closeConfirmModal();
      await action();
    }
  });
}

function openConfirmModal({ title, message, onConfirm }) {
  el.confirmTitle.textContent = title;
  el.confirmMessage.textContent = message;
  state.confirmAction = onConfirm;
  el.confirmModal.classList.remove('hidden');
}

function closeConfirmModal() {
  el.confirmModal.classList.add('hidden');
  state.confirmAction = null;
}

function promptDeleteSinglePhoto(photo, afterDeleteCallback) {
  openConfirmModal({
    title: 'Delete Photo?',
    message: `Are you sure you want to permanently delete "${photo.filename}"? This will remove the image file from Firebase Storage and its Firestore metadata.`,
    onConfirm: async () => {
      try {
        await deleteUserPhoto(photo, state.currentUser.uid);
        state.selectedPhotoIds.delete(photo.id);
        updateSelectionUI();
        showToast(`"${photo.filename}" deleted successfully.`, 'success');
        if (afterDeleteCallback) afterDeleteCallback();
      } catch (err) {
        showToast('Failed to delete photo: ' + err.message, 'error');
      }
    }
  });
}

/* ==========================================================================
   TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  el.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 3500);
}

/* ==========================================================================
   UTILITY HELPERS
   ========================================================================== */
function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function formatDate(isoString) {
  if (!isoString) return 'Just now';
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  } catch {
    return 'Recent';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Start application
init();
