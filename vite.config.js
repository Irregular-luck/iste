import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts : ['cyclonic-norah-epistylar.ngrok-free.dev',]
  }
})
