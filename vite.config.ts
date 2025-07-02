import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss()
  ],
})

  // Uncomment the following lines if you need to configure the server for allowed hosts (NGROK)
  // server: {
  //   allowedHosts: [
  //     '9079-201-207-176-239.ngrok-free.app',
  //     'localhost',
  //   ]
  // }
