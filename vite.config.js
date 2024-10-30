// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: '/RecipeApp_FinalProject/',
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': '/src', // Makes `src` folder an alias for easier imports, if needed
//     },
//   }
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyRecipeApp/", // Adjust to your repository name on GitHub
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Keeps `src` as an alias for easier imports, if needed
    },
  },
});