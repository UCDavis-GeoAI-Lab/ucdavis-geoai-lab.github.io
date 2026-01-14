import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // For ucdavis-geoai-lab.github.io, the base should be '/'
  if (command !== 'serve') {
    config.base = '/'
  }

  return config
})
