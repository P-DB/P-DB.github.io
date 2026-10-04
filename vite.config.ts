import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served from the root of https://p-db.github.io/, so the default base (/) applies
export default defineConfig({
  plugins: [react()],
})
