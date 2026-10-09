import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __SITE_URL__: JSON.stringify(process.env.URL || process.env.VITE_SITE_URL || ''),
  },
});
