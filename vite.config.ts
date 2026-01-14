import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Use VITE_BASE_PATH environment variable if set (from GitHub Actions)
  // Otherwise default to '/' (for local dev or if variable is missing)
  const basePath = process.env.VITE_BASE_PATH || '/'

  return {
    plugins: [react()],
    base: basePath,
  }
})
