// Test ortamı kurulumu: her test dosyasından önce çalışır (vite.config.ts → setupFiles)
import '@testing-library/jest-dom/vitest' // DOM doğrulama metotlarını Vitest'in expect'ine ekler
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// globals: false olduğu için Testing Library otomatik temizlik yapamaz;
// her testten sonra render edilen bileşeni DOM'dan kaldırıyoruz (testler birbirini etkilemesin)
afterEach(() => {
  cleanup()
})