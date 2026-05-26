import { FiX, FiSettings, FiChevronDown, FiBookOpen, FiAward, FiGrid, FiZap, FiLayers } from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDecks } from '@/hooks/useDecks';
import { useNavigate, useParams } from 'react-router';

export default function StudyHeader({ progress }) {

  const { decks } = useDecks()
  const { id } = useParams()
  const navigate = useNavigate()

  const deckFiltered = decks.find(item => item.id === id)
  const currentCard = progress?.current ?? 1
  const totalCard = progress?.total ?? deckFiltered?.totalCards
  const percent = (currentCard / totalCard) * 100

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between pl-4 pr-4 md:pr-6 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 font-sans">
      
      <div className="flex items-center z-10">
        <DropdownMenu>
          
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="h-10 rounded-xl font-semibold shadow-black/40"
            >
              <FiLayers className="!text-blue-400" />
              <span>Thẻ ghi nhớ</span>
              <FiChevronDown className="mt-0.5 !text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" sideOffset={8} className="w-56">
            <DropdownMenuItem>
              <FiBookOpen /> 
              <span>Học</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem>
              <FiAward /> 
              <span>Kiểm tra</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem disabled>
              <FiGrid /> 
              <span>Khối hộp</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem disabled>
              <FiZap /> 
              <span>Blast</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem disabled>
              <FiLayers /> 
              <span>Ghép thẻ</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem variant="destructive">
              <span>Quay lại Trang chủ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
          
        </DropdownMenu>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full max-w-[35%] sm:max-w-[45%] md:max-w-[50%]">
        <span className="text-xs font-bold text-zinc-200 tracking-wider">
          {`${currentCard} / ${totalCard}`}
        </span>
        <span className="text-xs text-zinc-400 font-medium truncate w-full mt-0.5 mb-1.5 max-w-[180px] sm:max-w-[300px] md:max-w-[450px]">
          {deckFiltered.title}
        </span>
        
        <Progress value={percent} className="w-28 h-1 bg-white/5 border border-white/5" />
        
      </div>

      <div className="flex items-center gap-2 md:gap-3 z-10">
        <Button 
          variant="outline"
          className="hidden sm:flex h-9 text-xs font-semibold border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 rounded-xl"
        >
          Chuyển sang Học
        </Button>
        
        <Button variant="ghost" size="icon-lg">
          <FiSettings />
        </Button>

        <Button
          variant="ghost"
          size="icon-lg"
          className="hover:text-rose-400 hover:bg-rose-500/10"
          onClick={() => navigate(`/deck/${id}`)}
        >
          <FiX className="size-6" />
        </Button>
      </div>

    </header>
  );
}