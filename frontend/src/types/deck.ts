export interface Deck {
  id: string;
  title: string;
  level: "N1" | "N2" | "N3" | "N4" | "N5" | "Khác";
  description: string | null;
  totalCards: number;
  author: string;
  createdAt: string;
  progress: number;
}

export interface CardDetail {
  id: string;
  deckId: string;
  front: string;
  backHiragana: string;
  backMeaning: string;
  backExample: string;
  status: string;
}

export interface DeckDetail {
  id: string;
  title: string;
  description: string | null;
  level: string;
  progress: number;
  totalCards: number;
  createdAt: string;
  author: string;
  cards: CardDetail[];
}
