import { FiShuffle, FiRotateCcw } from "react-icons/fi";
import FlashcardItem from "../components/Flashcard/FlashcardItem";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import { Button } from "@/components/ui/button";
import StudyFlashcardSkeleton from "@/components/Flashcard/StudyFlashcardSkeleton";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const StudyFlashcard = () => {
  const { deckDetail, loading, error, setProgress } = useOutletContext();

  const [shuffleCards, setShuffleCards] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexBeforeShuffled, setIndexBeforeShuffled] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const sessionCards = deckDetail?.cards || [];
  const isShuffled = shuffleCards !== null;
  const currentCards = isShuffled ? shuffleCards : sessionCards;
  const totalCards = currentCards.length;
  const currentCardData = currentCards[currentIndex];

  useEffect(() => {
    if (deckDetail) {
      setProgress({ current: currentIndex + 1, total: totalCards });
    }
  }, [currentIndex, totalCards, setProgress, deckDetail]);

  if (loading) return <StudyFlashcardSkeleton />;
  if (error) throw new Response(error, { status: 400 });
  if (!deckDetail)
    throw new Response("Không tìm thấy dữ liệu phiên học!", { status: 404 });

  const handleUndo = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    if (isShuffled === false) {
      const cardsPart1 = sessionCards.slice(0, currentIndex);
      const cardsPart2 = sessionCards.slice(currentIndex);

      const shufflePart2 = shuffleArray(cardsPart2);

      setShuffleCards(cardsPart1.concat(shufflePart2));
      setIndexBeforeShuffled(currentIndex);
    } else {
      setShuffleCards(null);
      setCurrentIndex(indexBeforeShuffled);
    }
    setIsFlipped(false);
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] w-full flex flex-col text-slate-100 font-sans relative overflow-hidden z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <main className="flex-1 flex items-center justify-center w-full px-4 z-10">
        <FlashcardItem
          cardData={currentCardData}
          key={currentCardData.id}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />
      </main>

      <footer className="w-full max-w-4xl mx-auto flex items-center justify-between p-6 md:p-8 z-10">
        <div className="flex-1 flex justify-start">
          <Button
            variant="outline"
            size="icon-xl"
            disabled={currentIndex === 0}
            onClick={handleUndo}
          >
            <FiRotateCcw />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={handleNext}
            variant="outline"
            disabled={!isFlipped}
            className="flex-col h-16 w-20 rounded-xl border-rose-500/40 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 hover:-translate-y-1"
          >
            <span className="text-sm font-bold">Lại</span>
            <span className="text-[10px] text-rose-400/80 font-medium tracking-wide">
              &lt; 1 phút
            </span>
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            disabled={!isFlipped}
            className="flex-col h-16 w-20 rounded-xl border-orange-500/40 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 hover:-translate-y-1"
          >
            <span className="text-sm font-bold">Khó</span>
            <span className="text-[10px] text-orange-400/80 font-medium tracking-wide">
              1 ngày
            </span>
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            disabled={!isFlipped}
            className="flex-col h-16 w-20 rounded-xl border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 hover:-translate-y-1"
          >
            <span className="text-sm font-bold">Quen</span>
            <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide">
              3 ngày
            </span>
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            disabled={!isFlipped}
            className="flex-col h-16 w-20 rounded-xl border-blue-500/40 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:-translate-y-1"
          >
            <span className="text-sm font-bold">Dễ</span>
            <span className="text-[10px] text-blue-400/80 font-medium tracking-wide">
              7 ngày
            </span>
          </Button>
        </div>

        <div className="flex-1 flex justify-end">
          <Button
            onClick={handleShuffle}
            variant="outline"
            size="icon-xl"
            className={
              isShuffled
                ? "bg-white/30 border-white/40 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : ""
            }
          >
            <FiShuffle />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default StudyFlashcard;
