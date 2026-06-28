export interface Deck {
  id: string;
  title: string;
  level: string;
  description: string | null;
  totalCards: number;
  author: string;
  createdAt: string;
  progress: number;
}