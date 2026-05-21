# UI/UX Guidelines: JLPT Flashcard App

## 1. Phong cách chủ đạo (Design Concept)
- **Theme:** Dark Mode (Zinc-950).
- **Vibe:** Cyber-Learning (Hiện đại, tập trung, chiều sâu).
- **Kỹ thuật cốt lõi:** Glassmorphism đa tầng kết hợp Glow Effects.

## 2. Bảng màu (Color Palette)
- **Nền tảng (Deep Background):** bg-zinc-950.
- **Text chính:** `text-zinc-50` hoặc `text-slate-100`.
- **Text phụ:** `text-zinc-400`.
- **Hệ màu SRS (Spaced Repetition):** 
  + Again (Lại): text-rose-400 / bg-rose-500/10.
  + Hard (Khó): text-orange-400 / bg-orange-500/10.
  + Good (Quen): text-emerald-400 / bg-emerald-500/10.
  + Easy (Dễ): text-blue-400 / bg-blue-500/10.
- **Glow Blobs:** Sử dụng blue-600/10 và emerald-600/10 với blur-[120px] làm lớp nền trang trí phía sau (z-index thấp).

## 3. Quy chuẩn Glassmorphism
Để tạo chiều sâu, chia làm 2 cấp độ kính:
- **Cấp 1 (Container/Sidebar/Table):** 
  + Nền: bg-white/5 | Viền: border-white/10 | Blur: backdrop-blur-md.
- **Cấp 2 (Hero Card/Flashcard Item):** 
  + Nền: bg-white/10 | Viền: border-white/20 | Blur: backdrop-blur-xl.
  + Bóng đổ: shadow-2xl shadow-black/80.

## 4. Nghệ thuật chữ (Typography)
- **Giao diện:** font-sans (Hệ font Geist/Inter).
- **Mặt trước Flashcard (Kanji):** - Khuyến nghị: font-serif (Noto Serif JP) để nhìn rõ bộ thủ.
  + Cỡ chữ: text-5xl đến text-7xl.
  + Khoảng cách: tracking-widest (tăng độ thoáng cho chữ Hán phức tạp).
- **Mặt sau Flashcard (Hiragana):** text-blue-400 để phân biệt với nghĩa tiếng Việt.

## 5. Quy chuẩn Component (Tích hợp shadcn/ui)
- **Flashcard (3D Flip):** 
  + Perspective: perspective-[1000px] đặt tại div bao ngoài cùng.
  + Tốc độ: duration-500 (đã test mượt, có thể giảm xuống 300 nếu muốn cảm giác nhanh hơn).
  + Backface: backface-hidden cho cả 2 mặt.
- **Buttons:**
  + Variant chính: outline kết hợp bg-white/10.
  + Hover: hover:-translate-y-1 và hover:bg-white/20 (tăng tương tác).
  + Trạng thái Disabled: opacity-40 khi thẻ chưa lật.

## 6. Layout & Interaction Rules
- Header: Cao h-14, sticky, độ trong suốt bg-zinc-950/80 để thấy nội dung cuộn bên dưới.
- Sidebar: Rộng w-20, sticky, thiết kế dạng "Mini Glass".
- Bento Grid: Sử dụng grid-cols-3 và auto-rows để tạo bố cục Dashboard hiện đại.
- Active Recall: Cấm người dùng đánh giá thẻ khi chưa lật (Bắt buộc dùng state isFlipped).