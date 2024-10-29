import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/RecipeApp_FinalProject/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Makes `src` folder an alias for easier imports, if needed
    },
  }
})
