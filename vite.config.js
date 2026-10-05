import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import hotelDataApi from './scripts/hotelDataApi.js';

export default defineConfig(({ command }) => ({
  base: '/', // Changed this line
  plugins: [react(), hotelDataApi()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
}));
