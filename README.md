# เครื่องคิดเลข Calculator 🧮

โปรแกรมเว็บแอปพลิเคชันเครื่องคิดเลขพื้นฐานที่รองรับการดำเนินการทางคณิตศาสตร์
ที่พัฒนาด้วย TypeScript และ Vite พร้อมระบบธีม Light/Dark Mode

## ✨ คุณสมบัติ

• 🔢 **การคำนวณพื้นฐาน** - บวก ลบ คูณ หาร ตัวเลขสองจำนวน
• 🎨 **UI สวยงาม** - ใช้ฟอนต์ IBM Plex Sans Thai และ CSS3 animations
• 🌙 **Dark/Light Theme** - สลับระหว่างธีมมืดและสว่างได้
• 🔄 **Real-time Validation** - ตรวจสอบข้อมูลป้อนเข้าแบบ real-time
• 📱 **Responsive Design** - รองรับการใช้งานบนอุปกรณ์ต่างๆ
• 🎉 **Toast Notifications** - แสดงการแจ้งเตือนและผลลัพธ์
• ⚡ **Performance Optimized** - ใช้ TypeScript สำหรับความเสถียร

## 🛠️ เทคโนโลยีที่ใช้

• **TypeScript** - ภาษาหลักสำหรับการพัฒนา
• **Vite** - Build tool และ development server
• **HTML5** - โครงสร้างหน้าเว็บ
• **CSS3** - Styling พร้อม animations และ transitions
• **Google Fonts** - IBM Plex Sans Thai

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดของระบบ

• Node.js (เวอร์ชั่น 16 หรือสูงกว่า)
• npm หรือ yarn

### การติดตั้ง

1. **Clone โปรเจ็กต์**
   ```bash
   git clone https://github.com/xenodeve/webhw05_s0330250.git
   cd webhw05_s0330250
   ```

2. **ติดตั้ง Dependencies**
   ```bash
   npm install
   ```

3. **รันในโหมด Development**
   ```bash
   npm run dev
   ```

4. **Build สำหรับ Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 โครงสร้างโปรเจ็กต์

```
webhw05_s0430250/
├── public/
│   ├── favicon.png              # ไอคอนเว็บไซต์
│   ├── favicon.svg              # ไอคอน SVG
│   └── vite.svg                 # Vite logo
├── src/
│   ├── main.ts                  # Entry point หลัก
│   ├── style.css                # CSS หลัก
│   ├── theme.ts                 # จัดการระบบธีม
│   ├── toast.ts                 # ระบบ Toast notifications
│   ├── toast.css                # CSS สำหรับ toast
│   └── vite-env.d.ts           # Type definitions
├── index.html                   # HTML หลัก
├── package.json                 # Dependencies และ scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # เอกสารนี้
```

## 🎮 วิธีใช้งาน

1. **กรอกตัวเลขที่ 1** - ใส่จำนวนตัวเลขแรก
2. **กรอกตัวเลขที่ 2** - ใส่จำนวนตัวเลขที่สอง
3. **เลือกการดำเนินการ** - เลือกระหว่าง บวก (+), ลบ (-), คูณ (×), หาร (÷)
4. **กดปุ่มคำนวณ** - กดปุ่ม "🔢 คำนวณ" เพื่อดูผลลัพธ์
5. **ดูผลลัพธ์** - ระบบจะแสดงผลลัพธ์ในช่อง "📊 ผลลัพธ์"

## 🔧 คุณสมบัติพิเศษ

### การตรวจสอบข้อมูล

• ❌ **ข้อมูลไม่ถูกต้อง** - แสดง Toast warning เมื่อกรอกข้อมูลไม่ครบ
• ⚠️ **คำเตือน** - แสดงการแจ้งเตือนเมื่อหารด้วยศูนย์
• ✅ **ข้อมูลถูกต้อง** - แสดง Toast success พร้อมผลลัพธ์

### Animations และ Effects

• **Smooth transitions** สำหรับ theme switching
• **Hover effects** สำหรับปุ่มและ elements
• **Toast animations** แบบ slide-in/fade-out
• **Responsive animations** สำหรับการเปลี่ยนขนาดหน้าจอ

### ระบบธีม

• **Light Mode** - ธีมสว่างสำหรับการใช้งานในตอนกลางวัน
• **Dark Mode** - ธีมมืดสำหรับลดแสงจอและประหยัดแบตเตอรี่
• **Auto Theme** - ปรับธีมตามการตั้งค่าของระบบ

## 📊 การดำเนินการทางคณิตศาสตร์

โปรแกรมรองรับการดำเนินการพื้นฐาน:

### การบวก (Addition)
```
ผลลัพธ์ = ตัวเลขที่ 1 + ตัวเลขที่ 2
```

### การลบ (Subtraction)
```
ผลลัพธ์ = ตัวเลขที่ 1 - ตัวเลขที่ 2
```

### การคูณ (Multiplication)
```
ผลลัพธ์ = ตัวเลขที่ 1 × ตัวเลขที่ 2
```

### การหาร (Division)
```
ผลลัพธ์ = ตัวเลขที่ 1 ÷ ตัวเลขที่ 2
(โดยที่ตัวเลขที่ 2 ≠ 0)
```

## 🎨 การกำหนดค่า CSS

### ตัวแปรสี (CSS Variables)

• **Primary Color**: `#2eea9d` (เขียวมิ้นต์)
• **Secondary Color**: `#00a94f` (เขียวเข้ม)  
• **Background**: Dynamic gradient ตามธีม
• **Text Color**: ปรับตามธีมที่เลือก

### ฟอนต์

• **IBM Plex Sans Thai** - ฟอนต์หลัก
• **Fallback**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 🐛 การแก้ไขปัญหา

### ปัญหาที่อาจพบ

1. **Build Error: unused variable** - ตรวจสอบให้แน่ใจว่าตัวแปรทั้งหมดถูกใช้งาน
2. **Font ไม่แสดง** - ตรวจสอบการเชื่อมต่อ Google Fonts ใน HTML
3. **Theme ไม่เปลี่ยน** - ตรวจสอบ CSS variables และ theme.ts
4. **Toast ไม่แสดง** - ตรวจสอบการ import toast module

### คำสั่งที่มีประโยชน์

```bash
# ตรวจสอบ linting
npm run build

# Clean install
rm -rf node_modules package-lock.json
npm install

# ดู development server logs
npm run dev -- --host
```

## 🎯 การใช้งานตัวอย่าง

```typescript
// การใช้งาน Toast notifications
import { toast } from './toast';

// แสดงข้อความสำเร็จ
toast.success('คำนวณเรียบร้อยแล้ว!');

// แสดงข้อความเตือน  
toast.warning('กรุณาระบุตัวเลข');

// แสดงข้อความข้อผิดพลาด
toast.error('เกิดข้อผิดพลาด');
```

## 🔗 การ Deploy

โปรเจ็กต์นี้สามารถ deploy บน:

• **Vercel** - แนะนำสำหรับ Vite projects
• **Netlify** - รองรับ static sites  
• **GitHub Pages** - สำหรับ static hosting

### Deploy บน Vercel

1. เชื่อมต่อ GitHub repository
2. เลือก build command: `npm run build`
3. เลือก output directory: `dist`
4. Deploy!

## 📝 License

โปรเจ็กต์นี้เป็นส่วนหนึ่งของการงานในการเรียน Web Development

## 👨‍💻 ผู้พัฒนา

• **Student ID**: s0430250
• **Repository**: webhw05_s0430250
• **Project**: Homework 05 - Basic Calculator

---

**Happy Calculating! 🚀**