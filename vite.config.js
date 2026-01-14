// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Esto obliga a Vite a revisar los archivos constantemente
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        capitulo1: resolve(__dirname, 'capitulo1.html'),
        capitulo2: resolve(__dirname, 'capitulo2.html'),
        capitulo3: resolve(__dirname, 'capitulo3.html'),
        capitulo4: resolve(__dirname, 'capitulo4.html'),
        capitulo5: resolve(__dirname, 'capitulo5.html'),
        capitulo6: resolve(__dirname, 'capitulo6.html'),
        capitulo7: resolve(__dirname, 'capitulo7.html'),
      },
    },
  },
})