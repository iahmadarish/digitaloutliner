import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ['react', 'react-dom'],
          swiper: ['swiper'],
          framer: ['framer-motion'],
          // Add more big libs if needed
        }
      }
    },
    // Increase limit so Vite doesn't warn
    chunkSizeWarningLimit: 1000 // in KB
  }
})
