import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EmploymentAgency/',
  server: {
    host: true, //Listen on all ports
    port: 5173, 
  },
});

