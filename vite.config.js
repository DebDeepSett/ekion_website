import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works whether it's served from a project page
// (username.github.io/ekion-website/) or a user/custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
