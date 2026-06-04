import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getViteConfig } from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    getViteConfig(),
    react(),
  ],
})