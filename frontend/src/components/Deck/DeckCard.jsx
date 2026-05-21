import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FiMoreHorizontal, FiBookOpen, FiEdit2, FiRefreshCcw, FiTrash2 } from "react-icons/fi";
import { LEVEL_COLORS } from "@/utils/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DeckCard = ({ deck }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/deck/${deck.id}`)}
      className="bg-white/5 border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between h-56 group cursor-pointer transition-all hover:bg-white/[0.07] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all pointer-events-none"></div>

      <div className="relative z-10 flex justify-between items-start mb-4">
        <Badge 
          variant="outline" 
          className={`${LEVEL_COLORS[deck.level] || LEVEL_COLORS.default} px-3 py-1 rounded-lg`}
        >
          {deck.level || "Khác"}
        </Badge>
        
        <div onClick={(e) => e.stopPropagation()}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-zinc-500 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white rounded-full outline-none"
              >
                <FiMoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 text-zinc-300 rounded-xl shadow-2xl min-w-[160px] p-1.5 mt-1">
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                <FiEdit2 size={14} className="text-zinc-400" /> Đổi tên nhanh
              </DropdownMenuItem>
              
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                <FiRefreshCcw size={14} className="text-zinc-400" /> Đặt lại tiến độ
              </DropdownMenuItem>
              
              <div className="h-px bg-white/10 my-1 mx-1.5"></div>
              
              <DropdownMenuItem className="focus:bg-red-500/20 focus:text-red-400 text-red-500 cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                <FiTrash2 size={14} /> Xóa học phần
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="relative z-10 flex-1 mt-1"> 
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <h4 className="text-lg font-bold text-white truncate mb-2 group-hover:text-blue-400 transition-colors text-left">
                {deck.title}
              </h4>
            </TooltipTrigger>
            
            <TooltipContent 
              side="top" 
              align="start" 
              className="bg-[#1a1a1a] border border-white/10 text-zinc-100 rounded-lg shadow-2xl max-w-[300px]"
            >
              {deck.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5"><FiBookOpen size={14}/> {deck.cardsCount || deck.totalCards} thẻ</span>
          <span>•</span>
          <span>{deck.author}</span>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-zinc-500">Hoàn thành</span>
          <span className={deck.progress === 100 ? "text-emerald-400" : "text-zinc-300"}>
            {deck.progress || 0}%
          </span>
        </div>
        <Progress 
          value={deck.progress || 0} 
          className="h-1.5 bg-zinc-800" 
          indicatorColor={deck.progress === 100 ? "bg-emerald-400" : "bg-blue-500"} 
        />
      </div>
    </div>
  );
};

export default DeckCard;