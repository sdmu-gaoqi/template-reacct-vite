import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      styles: path.resolve(__dirname, 'src/assets/style'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      mocks: path.resolve(__dirname, 'mocks')
    }
  },
  server: {
    https: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/main.scss";'
      },
      less: {
        modifyVars: {
          // 在这里自定义主题色等样式
          'primary-color': '#fc8352',
          'link-color': '#fc8352',
          'border-radius-base': '2px',
          'btn-border-radius-base': '20px',
          'btn-height-base': '40px'
        },
        javascriptEnabled: true
      }
    }
  }
})
