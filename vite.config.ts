import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), VueRouter({
    routesFolder: [
      { src: 'src/views', path: '' },
      { src: 'src/components/dev100', path: 'dev100/' }
    ],
    extensions: ['.vue'],
  }
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
