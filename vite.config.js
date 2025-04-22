import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Base public path when served in development or production.
  base: '/',

  resolve: {
    alias: {
      // Map '@' to your 'src' directory for simpler imports
      '@': path.resolve(__dirname, 'src'),
      // Map 'dataStructures' to the folder where you keep your data structures.
      // This lets you import modules like: import Stack from 'dataStructures/Stack'
      'dataStructures': path.resolve(__dirname, 'src/dataStructures'),
      'utils': path.resolve(__dirname, 'src/utils'),
      // You can add more aliases here if needed:
      // Example: 'components': path.resolve(__dirname, 'src/components')
    }
  },

  // Development server configuration
  server: {
    port: 3000,
    open: false, // Automatically open the browser on server start
  },

  // Production build configuration
  build: {
    outDir: 'dist',  // Output directory for the production build
    rollupOptions: {
      // Additional Rollup options can be placed here if necessary.
    }
  },

  // Plugins configuration (add any plugins you might need)
  plugins: [
    // Example: react(), vue(), etc.
  ]
});
