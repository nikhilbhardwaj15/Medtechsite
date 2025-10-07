import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }, server: {
    host: 'localhost',   // or '0.0.0.0' to allow network access
    port: 4000,          // change to whatever port you want
    strictPort: true     // fails if the port is busy
  }
});
