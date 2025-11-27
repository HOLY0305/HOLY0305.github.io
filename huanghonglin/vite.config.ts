import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：如果你的仓库名是 'portfolio'，这里就填 '/portfolio/'
  // 如果你的仓库名是 'holy0305.github.io'，这里就填 '/'
  base: '/portfolio/', 
})