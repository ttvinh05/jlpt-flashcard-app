import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Deck } from "@/types/deck";

export const useDecks = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: dbDecks, error: decksError } = await supabase
          .from("decks")
          .select("*");
        const { data: dbCards, error: cardsError } = await supabase
          .from("cards")
          .select("*");

        if (decksError) throw decksError;
        if (cardsError) throw cardsError;

        const decksWithProgress = (dbDecks ?? []).map((deck) => {
          const deckCards = (dbCards ?? []).filter(
            (card) => card.deck_id === deck.id,
          );

          const learnedCount = deckCards.filter(
            (card) => card.status === "learned",
          ).length;

          const progress =
            deckCards.length > 0
              ? Math.round((learnedCount / deckCards.length) * 100)
              : 0;

          return {
            id: deck.id,
            title: deck.title,
            description: deck.description,
            level: deck.level,
            progress: progress,
            totalCards: deck.total_cards,
            createdAt: deck.created_at,
            author: "User",
          };
        });

        setDecks(decksWithProgress);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Đã xảy ra lỗi không xác định");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { decks, loading, error };
};
