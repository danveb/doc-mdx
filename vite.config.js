import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // assets to be able to import and read markdown
  assetsInclude: ['**/*.md'],
  // test
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },

})
