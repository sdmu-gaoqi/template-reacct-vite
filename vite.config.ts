import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import viteImagemin from 'vite-plugin-imagemin'
import postCssPxToRem from 'postcss-pxtorem'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    svgr(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'store', replacement: path.resolve(__dirname, './src/store') }
    ]
  },
  server: {
    https: false
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75,
          propList: ['*'],
          selectorBlackList: ['./to', 'html'], // to开头的不进行转换,
          exclude: '/node_modules',
          unit: 'wx'
        })
      ]
    },
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
