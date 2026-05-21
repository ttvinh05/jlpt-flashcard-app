const extractedCards = [];

// 👉 BƯỚC 1: SỬA TÊN ID BỘ BÀI Ở ĐÂY TRƯỚC KHI CÀO
const currentDeckId = "deck_n2_1-50"; 

const sides = document.querySelectorAll('div[data-testid="set-page-term-card-side"]');

for (let i = 0; i < sides.length; i += 2) {
  const frontElem = sides[i];
  const backElem = sides[i+1];

  if (frontElem && backElem) {
    let frontText = frontElem.innerText.trim();
    let backText = backElem.innerText.trim();

    // 1. DỌN RÁC MẶT TRƯỚC
    const frontLines = frontText.split('\n');
    let cleanFront = frontLines[frontLines.length - 1].trim();
    cleanFront = cleanFront.replace(/^No\d+\.\s*/i, '');

    // 2. BÓC TÁCH MẶT SAU
    let hiragana = "";
    let meaning = "";
    let example = "";

    // Lấy Hiragana
    const hMatch = backText.match(/- 回答([\s\S]*?)- 意味/);
    if (hMatch) hiragana = hMatch[1].trim();

    // Lấy Ý nghĩa và ÉP XUỐNG DÒNG (Tách Hán Việt & Nghĩa Việt)
    const mMatch = backText.match(/- 意味([\s\S]*?)- 例文/);
    if (mMatch) {
      let rawMeaning = mMatch[1].trim();
      let words = rawMeaning.split(/\s+/);
      
      let hanViet = [];
      let vietMeaning = [];
      let isHanVietPhase = true;

      for (let w of words) {
        if (isHanVietPhase && w === w.toUpperCase() && w !== w.toLowerCase()) {
          hanViet.push(w);
        } else {
          isHanVietPhase = false; 
          if (w) vietMeaning.push(w);
        }
      }
      if (hanViet.length > 0 && vietMeaning.length > 0) {
        meaning = hanViet.join(' ') + '\n' + vietMeaning.join(' ');
      } else {
        meaning = rawMeaning;
      }
    }

    // Lấy Ví dụ và ÉP XUỐNG DÒNG (Thuật toán tìm dấu chấm câu 。)
    const eMatch = backText.match(/- 例文([\s\S]*)/);
    if (eMatch) {
      const allExamples = eMatch[1].trim().split('\n');
      let firstExampleLine = allExamples[0].trim();
      
      // Tìm dấu 。 sau đó dọn sạch các dấu - hoặc ・ hoặc khoảng trắng thừa, rồi tự động xuống dòng thêm ・
      example = firstExampleLine.replace(/。([\s\-・]*)(?=[^\s])/g, '。\n・').trim();
      
      // Nếu câu đầu chưa có dấu ・ ở đầu tiên thì tiện tay thêm vào cho đồng bộ
      if (!example.startsWith('・')) {
        example = '・' + example;
      }
    }

    // 3. ĐÓNG GÓI JSON
    extractedCards.push({
      id: `${currentDeckId}_card_${(i/2) + 1}`,
      deckId: currentDeckId, 
      front: cleanFront,
      back: {
        hiragana: hiragana,
        meaning: meaning,
        example: example
      },
      status: "new"
    });
  }
}

// In ra JSON
const finalJson = JSON.stringify(extractedCards, null, 2);
console.log(finalJson);
console.log(`✅ Đã cào thành công ${extractedCards.length} từ vựng! Chấp hết mọi loại dấu gạch ngang hay chấm lửng.`);