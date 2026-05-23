import { useEffect } from "react";

const FlashcardItem = ({ cardData, isFlipped, setIsFlipped }) => {

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
        if(event.code === 'Space') {
            event.preventDefault(); 
            setIsFlipped(prev => !prev);
        }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, [setIsFlipped]);

  return (
    <div className="w-[900px] h-[450px] max-w-[95vw] cursor-pointer group perspective-[1000px]">
      
      <div 
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        
        {/* ================= MẶT TRƯỚC ================= */}
        <div 
            className="absolute inset-0 h-full w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/80 [backface-visibility:hidden] flex items-center justify-center px-8"
            onClick={handleClick}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-widest drop-shadow-lg text-center leading-snug">
            {cardData.front}
          </h2>
        </div>

        {/* ================= MẶT SAU ================= */}
        <div 
            className="absolute inset-0 h-full w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-8"
            onClick={handleClick}
        >
          {cardData.back.hiragana && (
            <p className="text-4xl text-blue-400 font-semibold mb-6 tracking-widest drop-shadow-md text-center">
              {cardData.back.hiragana}
            </p>
          )}

          <div className="w-3/4 h-px bg-white/20 mb-6"></div>

          {/* Bổ sung whitespace-pre-line để xử lý xuống dòng ở phần Ý nghĩa */}
          <p className="text-2xl text-slate-100 text-center font-medium mb-4 whitespace-pre-line">
            {cardData.back.meaning}
          </p>
          
          {cardData.back.example && (
            /* Bổ sung whitespace-pre-line để xử lý xuống dòng ở phần Ví dụ (nếu có) */
            <p className="text-lg text-zinc-400 italic text-center leading-relaxed px-4 whitespace-pre-line">
              {cardData.back.example}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default FlashcardItem;