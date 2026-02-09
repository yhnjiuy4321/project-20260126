import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 👈 1. 記得引入這個 (Node.js 的路徑工具)

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        // 設定多個入口
        main: resolve(__dirname, 'index.html'),          // 這是首頁
        design: resolve(__dirname, 'design-system.html') // 這是你要多加的頁面
      }
    }
  }
})