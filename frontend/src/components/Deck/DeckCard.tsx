import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FiMoreHorizontal,
  FiBookOpen,
  FiEdit2,
  FiRefreshCcw,
  FiTrash2,
} from "react-icons/fi";
import { LEVEL_COLORS } from "@/utils/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Deck } from "@/types/deck";

interface DeckCardProps {
  deck: Deck;
}

const DeckCard = ({ deck }: DeckCardProps) => {
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
          className={LEVEL_COLORS[deck.level] || LEVEL_COLORS.default}
        >
          {deck.level || "Khác"}
        </Badge>

        <div onClick={(e) => e.stopPropagation()}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8 rounded-full p-0">
                <FiMoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <FiEdit2 /> Đổi tên nhanh
              </DropdownMenuItem>

              <DropdownMenuItem>
                <FiRefreshCcw /> Đặt lại tiến độ
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem variant="destructive">
                <FiTrash2 /> Xóa học phần
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="relative z-10 flex-1 mt-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h4 className="text-lg font-bold text-white truncate mb-2 group-hover:text-blue-400 transition-colors text-left">
                {deck.title}
              </h4>
            </TooltipTrigger>

            <TooltipContent side="top" align="start">
              {deck.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5">
            <FiBookOpen className="size-3.5" /> {deck.totalCards} thẻ
          </span>
          <span>•</span>
          <span>{deck.author}</span>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-zinc-500">Hoàn thành</span>
          <span
            className={
              deck.progress === 100 ? "text-emerald-400" : "text-zinc-300"
            }
          >
            {deck.progress || 0}%
          </span>
        </div>
        <Progress value={deck.progress || 0} />
      </div>
    </div>
  );
};

export default DeckCard;
