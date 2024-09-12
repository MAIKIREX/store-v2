import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://MAIKIREX.github.io/store-v2/",
  plugins: [react()],
})
