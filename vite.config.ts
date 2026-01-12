import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // Only use the repository name as base path when building for production
  if (command !== 'serve') {
    config.base = '/ABT182_Advance_GIS_UCDavis/'
  }

  return config
})
