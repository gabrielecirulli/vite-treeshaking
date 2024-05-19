import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  worker: {
    format: 'es',
    rollupOptions: {
      treeshake: 'smallest',
    },
  },
  build: {
    rollupOptions: {
      treeshake: 'smallest',
    },
  },
});
