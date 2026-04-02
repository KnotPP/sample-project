import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ใส่ชื่อ Alias ที่คุณตั้งใน IIS ลงไป (ต้องมี / ปิดหัวท้าย)
  base: '/test/', 
  plugins: [react()],
})