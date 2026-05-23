import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router";
import DeckCard from "@/components/Deck/DeckCard";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiChevronDown, FiCheck, FiPlay } from 'react-icons/fi';
import { useDecks } from "@/hooks/useDecks";

const FILTER_TABS = ['Tất cả', 'N1', 'N2', 'N3', 'N4', 'N5', 'Khác'];
const FILTER_DROPDOWN = ['Mới nhất', 'Cũ nhất', 'Tiến độ (%)']

const DeckList = () => {
  const navigate = useNavigate();
  const { decks } = useDecks();

  const [isTabActive, setIsTabActive] = useState("Tất cả");
  const [isDropdown, setIsDropDown] = useState("Mới nhất")

  const handleClickTab = (lvl) => {
    setIsTabActive(lvl);
  };

  const deckDataFiltered = decks.filter(
    (item) => isTabActive === "Tất cả" || item.level === isTabActive
  );

  const handleClickDropdown = (item) => {
    setIsDropDown(item);
  }

  const sortedData = [...deckDataFiltered].sort((a,b) => {
    if(isDropdown === 'Mới nhất') return new Date(b.createdAt) - new Date(a.createdAt)
    if(isDropdown === 'Cũ nhất') return new Date(a.createdAt) - new Date(b.createdAt)
    if(isDropdown === 'Tiến độ (%)') return b.progress - a.progress

    return 0
  })

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden text-zinc-50 font-sans relative">
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Thư viện của bạn</h1>
              <p className="text-zinc-400">Quản lý và theo dõi tiến độ các bộ từ vựng JLPT.</p>
            </div>
            
            <div className="flex items-center p-1 bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-x-auto custom-scrollbar w-full md:w-auto shadow-inner">
              {FILTER_TABS.map((lvl) => (
                <button
                  key={lvl}
                  className={`relative whitespace-nowrap px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ease-out outline-none
                    ${lvl === isTabActive 
                      ? 'text-zinc-50' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    }
                  `}
                  onClick={() => handleClickTab(lvl)}
                >
                  {lvl === isTabActive && (
                    <span className="absolute inset-0 bg-[#2d2d2d] border border-white/5 shadow-md rounded-2xl -z-10"></span>
                  )}
                  <span className="relative z-10">{lvl}</span>
                </button>
              ))}
            </div>
          </header>

          <section className="relative w-full rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 overflow-hidden shadow-2xl shadow-black/50 group cursor-pointer hover:border-white/20 transition-all"
                   onClick={() => navigate('/deck/deck-002')}>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-600/30 transition-all"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  <FiPlay /> Đang học dở
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">N2基礎 - Unit 2 動詞A 161~220</h2>
                  <p className="text-zinc-400">Bạn đã hoàn thành 21/60 thẻ. Đang có chuỗi học rất tốt, tiếp tục nào!</p>
                </div>
                <div className="w-full max-w-md pt-2">
  <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
    <span>Tiến độ</span>
    <span className="text-blue-400 font-medium">35%</span>
  </div>
  
  {/* Component Progress xịn xò lo hết nền đen và màu xanh */}
  <Progress value={35} className="h-2" />
</div>
              </div>
              
              <Button 
  size="lg" 
  className="h-14 rounded-2xl font-bold shrink-0"
>
  Học tiếp ngay
</Button>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold hidden md:block">Tất cả học phần</h3>
              
              <div className="flex items-center gap-3 text-sm text-zinc-400 shrink-0">
                <span>Sắp xếp:</span>
                <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center gap-1.5 bg-[#2d2d2d] border border-white/5 shadow-md text-zinc-50 px-4 py-1.5 rounded-full outline-none cursor-pointer font-medium transition-all group hover:bg-[#383838] data-[state=open]:bg-[#383838]">
    {isDropdown}
    {/* Icon giữ lại size thủ công một chút vì nằm ở trigger chứ không phải trong MenuItem */}
    <FiChevronDown 
      size={16} 
      className="text-zinc-400 group-hover:text-zinc-200 group-data-[state=open]:text-zinc-200 transition-transform duration-200 group-data-[state=open]:rotate-180" 
    />
  </DropdownMenuTrigger>
  
  <DropdownMenuContent align="end" className="min-w-[140px] mt-2">
    {FILTER_DROPDOWN.map((item) => (
      <DropdownMenuItem 
        key={item} 
        // Lợi dụng class có sẵn, chỉ thêm justify-between để đẩy dấu check sang phải
        className={`justify-between ${isDropdown === item ? 'text-zinc-50' : ''}`} 
        onClick={() => handleClickDropdown(item)}
      >
        {item}
        {/* Icon check tự động có size 16px (size-4) từ file gốc, chỉ cần đè màu xanh */}
        {isDropdown === item && <FiCheck className="!text-blue-500" />}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
                </div>
              </div>

            {deckDataFiltered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedData.map((deck) => (
                  <DeckCard key={deck.id} deck={deck} />
                ))}
              </div>
            ) : (
              <button 
                className="w-full flex flex-col items-center justify-center py-20 px-4 text-center bg-transparent border-2 border-dashed border-white/10 rounded-3xl group hover:border-white/30 hover:bg-white/5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-zinc-500 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <span className="text-3xl font-light">+</span>
                </div>
                <h4 className="text-lg font-medium text-zinc-200 mb-2">Chưa có học phần nào</h4>
                <p className="text-zinc-500 text-sm max-w-sm group-hover:text-zinc-400 transition-colors">
                  Bạn chưa tạo học phần nào trong mục <span className="text-zinc-300 font-semibold">{isTabActive}</span>. Nhấn vào đây để tạo mới nhé!
                </p>
              </button>
            )}

          </section>

        </div>
      </div>
    </main>
  );
};

export default DeckList;