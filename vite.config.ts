import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return ({
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(env.MODE)
    },
    build: {
      sourcemap: mode === "development",
      minify: mode === "production"
    }
  })
})
