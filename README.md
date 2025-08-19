# WebHW05

โปรเจกต์นี้เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย Vite + TypeScript

## โครงสร้างโปรเจกต์

- `index.html` – ไฟล์ HTML หลักของแอป
- `package.json` – ข้อมูล dependencies และสคริปต์
- `tsconfig.json` – การตั้งค่า TypeScript
- `public/` – ไฟล์ static เช่น favicon
- `src/` – โค้ดต้นฉบับของแอป
    - `main.ts` – entry point ของแอป
    - `style.css` – สไตล์หลัก
    - `theme.ts` – จัดการธีม
    - `toast.ts` และ `toast.css` – ระบบ Toast notification
    - `typescript.svg` – ไอคอน TypeScript
    - `vite-env.d.ts` – การตั้งค่า environment ของ Vite

## วิธีการติดตั้งและรัน

1. ติดตั้ง dependencies:
   ```sh
   npm install
   ```
2. รันเซิร์ฟเวอร์สำหรับพัฒนา:
   ```sh
   npm run dev
   ```
3. เปิดเบราว์เซอร์ที่ http://localhost:5173

## คำสั่งที่ใช้บ่อย
- `npm run dev` – รันเซิร์ฟเวอร์สำหรับพัฒนา
- `npm run build` – สร้าง production build
- `npm run preview` – ดูตัวอย่าง production build

## ผู้พัฒนา
- รหัสนิสิต: s0330250

---
หากมีข้อสงสัยหรือพบปัญหา สามารถติดต่อผู้พัฒนาได้ทางอีเมลหรือช่องทางที่ระบุไว้ในโปรเจกต์
