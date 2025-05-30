import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: false
    }
  },
  preview: {
    port: 4173,
    strictPort: true
  }
})