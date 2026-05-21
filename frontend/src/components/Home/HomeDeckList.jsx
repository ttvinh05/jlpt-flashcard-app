import { Button } from "@/components/ui/button";
import DeckCard from "@/components/Deck/DeckCard";

const HomeDeckList = ({ decks }) => {
  return (
    <div className="col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-zinc-100">Học phần gần đây</h3>
        <Button variant="link" className="text-zinc-500 hover:text-zinc-300 p-0 h-auto">
          Xem tất cả
        </Button>
      </div>
      
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {decks.map((item) => (
          <div key={item.id} className="w-[380px] shrink-0 snap-start">
            <DeckCard deck={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDeckList;