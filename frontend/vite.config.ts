/// <reference types="vitest/config" />
// Üstteki satır: TypeScript'e defineConfig içindeki "test" alanını tanıtır (Vitest tiplerini yükler)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite yapılandırması: geliştirme sunucusu, derleme ve testler aynı dosyadan beslenir
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',               // testler sahte tarayıcı DOM'unda çalışır
    setupFiles: './src/test/setup.ts',  // her test dosyasından önce bir kez çalışır
    globals: false,                     // describe/it/expect açıkça import edilir; neyin nereden geldiği görünür
  },
})