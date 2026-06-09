import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useDeckDetails = () => {
  const [deckDetail, setDeckDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: dbDeck, error: deckError } = await supabase
          .from("decks")
          .select("*")
          .eq("id", id);

        const { data: dbCard, error: cardError } = await supabase
          .from("cards")
          .select("*")
          .eq("deck_id", id);

        if (deckError) throw deckError;
        if (cardError) throw cardError;

        const deck = dbDeck[0];

        if (!deck)
          throw new Error("Học phần này không tồn tại hoặc đã bị xóa!");

        const cardDetail = dbCard.map((item) => {
          return {
            id: item.id,
            deckId: item.deck_id,
            front: item.front,
            backHiragana: item.back_hiragana,
            backMeaning: item.back_meaning,
            backExample: item.back_example,
            status: item.status,
          };
        });

        const learnedCount = cardDetail.reduce(
          (sum, item) => (item.status === "learned" ? sum + 1 : sum),
          0,
        );

        const progress =
          cardDetail.length > 0
            ? Math.round((learnedCount / cardDetail.length) * 100)
            : 0;

        const finalDetail = {
          id: deck.id,
          title: deck.title,
          description: deck.description,
          level: deck.level,
          progress: progress,
          totalCards: deck.total_cards,
          createdAt: deck.created_at,
          author: "User",
          cards: cardDetail,
        };

        setDeckDetail(finalDetail);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { deckDetail, loading, error };
};
