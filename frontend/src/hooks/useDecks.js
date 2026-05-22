import { useMemo } from 'react';
import { decksData, cardsData } from "@/utils/mockData";

export const useDecks = () => {
  const decksWithProgress = useMemo(() => {
    return decksData.map(deck => {
      const deckCards = cardsData.filter(card => card.deckId === deck.id);
      
      const learnedCount = deckCards.filter(card => card.status === "learned").length;
      
      const progress = deckCards.length > 0 
        ? Math.round((learnedCount / deckCards.length) * 100) 
        : 0;

      return {
        ...deck,
        progress: progress,
        totalCards: deckCards.length 
      };
    });
  }, []);

  return { decks: decksWithProgress };
};