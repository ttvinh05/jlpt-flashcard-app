import { FiShuffle, FiRotateCcw } from "react-icons/fi";
import FlashcardItem from "../components/Flashcard/FlashcardItem";
import { cardsData } from "../utils/mockData";
import { useState } from "react";
import { useParams } from "react-router";

import { Button } from "@/components/ui/button"; 

const shuffleArray = (array) => {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const StudySession = () => {
  const { id } = useParams()

  const sessionCards = cardsData.filter(card => card.deckId === id);
  const [shuffleCards, setShuffleCards] = useState(sessionCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = shuffleCards.length; 
  const currentCardData = shuffleCards[currentIndex];

  const [isShuffled, setIsShuffled] = useState(false);
  const [indexBeforeShuffled, setIndexBeforeShuffled] = useState(currentIndex);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleUndo = () => {
    setCurrentIndex(prev => prev - 1)
    setIsFlipped(false)
  }

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false)
    }
  };

  const handleShuffle = () => {
    if(isShuffled === false) {
        const cardsPart1 = shuffleCards.slice(0, currentIndex);
        const cardsPart2 = shuffleCards.slice(currentIndex);

        const shufflePart2 = shuffleArray(cardsPart2);
        setShuffleCards(cardsPart1.concat(shufflePart2));
        setIndexBeforeShuffled(currentIndex);
        setIsShuffled(true);
        setIsFlipped(false)
    }
    else {
        setShuffleCards(sessionCards);
        setCurrentIndex(indexBeforeShuffled);
        setIsShuffled(false);
        setIsFlipped(false)
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col text-slate-100 font-sans relative overflow-hidden z-0">
      
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <header className="w-full flex items-center justify-center p-6 relative z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-bold tracking-widest text-slate-100">
            {currentIndex + 1} / {totalCards}
          </div>
          <h1 className="text-sm text-zinc-400 font-medium tracking-wide">
            N2基礎ー語彙ーUnit 4 名詞B 271～320
          </h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center w-full px-4 z-10">
        <FlashcardItem cardData={currentCardData} key={currentCardData.id} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </main>

      <footer className="w-full max-w-4xl mx-auto flex items-center justify-between p-8 z-10">
        
        <div className="flex-1 flex justify-start">
          <Button 
            variant="outline"
            size="icon"
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all disabled:opacity-40"
            onClick={handleUndo}
          >
            <FiRotateCcw className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3">
          
          <Button 
            onClick={handleNext} 
            variant="outline" className="flex flex-col items-center justify-center w-20 h-16 rounded-xl border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-all hover:-translate-y-1"
            disabled={!isFlipped}
          >
            <span className="text-sm font-bold">Lại</span>
            <span className="text-[10px] text-rose-400/80 font-medium tracking-wide">&lt; 1 phút</span>
          </Button>

          <Button 
            onClick={handleNext} 
            variant="outline" className="flex flex-col items-center justify-center w-20 h-16 rounded-xl border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300 transition-all hover:-translate-y-1"
            disabled={!isFlipped}
          >
            <span className="text-sm font-bold">Khó</span>
            <span className="text-[10px] text-orange-400/80 font-medium tracking-wide">1 ngày</span>
          </Button>

          <Button 
            onClick={handleNext} 
            variant="outline" className="flex flex-col items-center justify-center w-20 h-16 rounded-xl border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-all hover:-translate-y-1"
            disabled={!isFlipped}
          >
            <span className="text-sm font-bold">Quen</span>
            <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide">3 ngày</span>
          </Button>

          <Button 
            onClick={handleNext} 
            variant="outline" className="flex flex-col items-center justify-center w-20 h-16 rounded-xl border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all hover:-translate-y-1"
            disabled={!isFlipped}
          >
            <span className="text-sm font-bold">Dễ</span>
            <span className="text-[10px] text-blue-400/80 font-medium tracking-wide">7 ngày</span>
          </Button>

        </div>

        <div className="flex-1 flex justify-end">
          <Button 
            onClick={handleShuffle}
            variant="outline"
            size="icon"
            className={`w-12 h-12 rounded-full transition-all duration-200 ${
            isShuffled 
                ? "bg-white/30 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                : "bg-white/10 border-white/20 text-slate-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            <FiShuffle className="w-5 h-5" />
          </Button>
        </div>

      </footer>
    </div>
  );
};

export default StudySession;