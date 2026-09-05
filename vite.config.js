import { defineConfig } from 'vite';

export default defineConfig({
  // Base path must match the GitHub repository name for GitHub Pages
  base: '/photovault/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
