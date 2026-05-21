# JLPT Flashcard & Quiz App

## 1. Tech Stack & Architecture
  - Frontend: React.js (Vite), Tailwind CSS, Shadcn/ui.
  - Backend: Node.js, Express, MongoDB Atlas (Mongoose).
  - Concept: API-First, Glassmorphism, SRS (Spaced Repetition System).
  - Next steps: Migration to Next.js & TypeScript.
  **Quy tắc code: Dùng Shadcn cho các Dumb UI (Button, Dropdown, Badge...), bắt buộc tự code 100% React nguyên bản cho Core Logic/Complex UI (như Tab lọc, logic học) để luyện tay nghề.**

## 2. Core Logic & SRS Rules
  - Flashcard Logic: 4 mức đánh giá: Again (Lại), Hard (Khó), Good (Quen), Easy (Dễ).
  - UX Rule: 4 nút đánh giá chỉ enabled khi thẻ đã lật mặt sau.
  - Algorithm: Dựa vào failCount để sắp xếp thứ tự học và nextReviewDate để nhắc lịch ôn tập.
  - State Tracking: UI Bảng từ vựng trong DeckDetails gom nhóm thành 3 trạng thái thị giác (New - Xám, Learning - Vàng, Learned - Xanh) dựa trên dữ liệu SRS.

## 3 Data Schema
**Deck Schema (Bảng Bộ từ vựng):**
```json
{
  "_id": "deck_001",
  "title": "Từ vựng N3 - Tuần 1",
  "description": "Danh từ JLPT N3",
  "totalCards": 20,
  "createdAt": "2026-05-05T10:00:00.000Z",
  "author": "Haha",
  "level": "N2"
}

Card Schema (Bảng Thẻ từ):
💡 Lưu ý UX nhập liệu: Hướng tới Niche JLPT. Chỉ BẮT BUỘC nhập front và meaning. Trường hiragana và example KHÔNG BẮT BUỘC để tối ưu trải nghiệm (không ép user gõ phím nhiều). Sẽ có tính năng tự động tạo thẻ bằng AI (Prompt to JSON) ở Phase sau.

**Card Schema (Bảng Thẻ từ):**
```json
{
  "_id": "card_001",
  "deckId": "deck_001",
  "front": "目的", // BẮT BUỘC
  "back": {
    "hiragana": "もくてき", // Optional
    "meaning": "Mục đích", // BẮT BUỘC
    "example": "私の目的はN3に合格することです。" // Optional
  },
  "status": "new", // "new" | "learning" | "learned"
  "failCount": 0,
  "nextReviewDate": null
}

## 4 Folder Structure
  - frontend/src/components: UI Components (Flashcard, Quiz).

  - frontend/src/pages: Dashboard, StudySession, DeckDetails.

  - backend/src/models: Mongoose Schemas.

  - backend/src/controllers: Business logic xử lý SRS và Deck management.

## 5 Progress Roadmap
- Done:
  + Infrastructure: Setup Vite + Tailwind + Shadcn. Cấu hình Absolute Path @.
  + UI Base: Header, HomePage, DeckDetails, Flashcard UI, StudySession, DeckList.
  + Logic Flashcard: Lift state isFlipped, logic Shuffle giữ nguyên vị trí cũ, bắt phím Space.
  + Data: MockData 50 từ N2 Katakana.
  + Routing: Hoàn thiện cấu trúc react-router (v7) với MainLayout và Outlet. Các tuyến: / (HomePage), /deck/:id (DeckDetails), /study/:id (StudySession).
  + Dynamic Routing: Áp dụng hook `useParams` cho trang StudySession để tự động load data theo tham số URL.
  + Xong phần fe cho Header, Homepage, DeckList

- In Progress:
  + Viết logic React cho trang DeckDetails