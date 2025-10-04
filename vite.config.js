// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // 1. Import the Tailwind plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Enable the Tailwind v4 processor here
  ],
  // Your package.json shows an older version of vite (^7.1.7). 
  // If you run into build errors, you may need to update your Vite dependency.
});