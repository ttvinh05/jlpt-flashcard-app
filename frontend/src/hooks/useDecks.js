import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export const useDecks = () => {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: dbDecks, error: decksError } = await supabase.from('decks').select('*');
        const { data: dbCards, error: cardsError } = await supabase.from('cards').select('*');

        if (decksError) throw decksError;
        if (cardsError) throw cardsError;

        const decksWithProgress = dbDecks.map(deck => {
          const deckCards = dbCards.filter(card => card.deck_id === deck.id);
          
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

        setDecks(decksWithProgress);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { decks, loading, error };
};