import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  server: {
    host: '0.0.0.0',  // This binds the server to all network interfaces
    port: 5173         // You can specify the port here (or change it if needed)
  }
})
