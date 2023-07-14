import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    svelte(),
    cssInjectedByJsPlugin({
      injectCode: (cssCode) => {
        return `var s = document.createElement('style');s.textContent = ${cssCode.trim()};document.head.appendChild(s)`
      }
    })
  ]
})
