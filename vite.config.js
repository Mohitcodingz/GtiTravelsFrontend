import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import hotelDataApi from './scripts/hotelDataApi.js';

export default defineConfig({
  // './' = relative paths -> works when dist CONTENTS are uploaded to
  // domain root (public_html/) OR any subfolder (public_html/dist/, /demo/, etc.)
  // With '/' (absolute) the built index.html requests /assets/... which 404s
  // the moment the site is not served from domain root.
  base: './',
  plugins: [react(), hotelDataApi()],
  server: {
    port: 3000,
    host: true
  }
});
