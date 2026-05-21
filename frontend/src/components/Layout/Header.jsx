import { FiMenu, FiSearch, FiPlus, FiUser, FiSettings, FiLogOut, FiAward } from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { decksData } from '@/utils/mockData';

const Header = ({ handleToggle }) => {

  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(inputRef.current && !inputRef.current.contains(e.target)) setIsSearching(false)
    } 

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[])

  const handleClickInput = () => {
    setIsSearching(true)
  }
  
  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const filteredDecks = useMemo(() => {
    if (!searchTerm.trim()) {
      return decksData; 
    }

    const lowerCaseTerm = searchTerm.toLowerCase();
    return decksData.filter(item => 
      item.title.toLowerCase().includes(lowerCaseTerm) || 
      item.description.toLowerCase().includes(lowerCaseTerm)
    );
  },[searchTerm])

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between pl-4 pr-4 md:pr-6 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50">

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          className="w-12 h-12 text-zinc-400 hover:text-zinc-50 hover:bg-white/10 rounded-full flex items-center justify-center"
          onClick={handleToggle}
        >
          <FiMenu className="!w-6 !h-6" />
        </Button>
        
        <Link to="/" className="hidden sm:block font-bold text-xl tracking-wider text-zinc-50 hover:opacity-80 transition-opacity">
          JLPT<span className="text-blue-500">Flash</span>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl px-4 md:px-8">
        <div 
          className="relative group"
          ref={inputRef}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
            <FiSearch className="text-zinc-400 group-focus-within:text-blue-400 transition-colors" size={18} />
          </div>
          <Input
            type="text"
            placeholder="Tìm học phần..."
            value={searchTerm}
            className="w-full h-10 bg-white/5 border-white/10 text-zinc-50 placeholder-zinc-400 rounded-full py-2 pl-10 pr-4 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:bg-white/10 transition-all"
            onClick={handleClickInput}
            onChange={handleChangeInput}
          />

          {isSearching && (
            <div className="absolute top-12 left-0 w-full bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black overflow-hidden z-50 py-2">
              <div className="px-4 py-2 text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-white/5">
                Khuyến nghị cho bạn
              </div>

              <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                
                {filteredDecks.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors group/item">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      {item.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-zinc-100 font-medium line-clamp-1">{item.title}</span>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span>{item.author}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span>{item.totalCards} thuật ngữ</span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              
              {filteredDecks.length === 0 && 
                (<div className="p-8 text-center text-zinc-500 text-sm italic">
                  Không tìm thấy học phần phù hợp...
                </div>)
              }
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              size="icon"
              className="w-9 h-9 bg-blue-600/80 hover:bg-blue-500 text-zinc-50 rounded-full shadow-lg shadow-blue-900/20 outline-none"
            >
              <FiPlus size={20} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent 
            align="end" 
            sideOffset={12}
            className="w-48 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black p-1 z-50"
          >
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-100 focus:bg-blue-600/20 focus:text-blue-400 cursor-pointer rounded-lg transition-colors group">
              <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded group-hover:bg-blue-500/20">
                📚
              </span>
              Học phần
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-white/10 my-1" />
            
            <DropdownMenuItem disabled className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-600 cursor-not-allowed rounded-lg">
              <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded opacity-50">
                📁
              </span>
              Thư mục
            </DropdownMenuItem>
            
            <DropdownMenuItem disabled className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-600 cursor-not-allowed rounded-lg">
              <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded opacity-50">
                👥
              </span>
              Nhóm học
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              <Avatar className="w-9 h-9 border border-white/10 cursor-pointer hover:border-white/30 transition-all">
                <AvatarFallback className="bg-emerald-600/80 hover:bg-emerald-500 text-zinc-50 font-bold transition-colors">
                  V
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent 
            align="end" 
            sideOffset={12}
            className="w-56 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black p-1 z-50"
          >
            <DropdownMenuLabel className="font-normal px-3 py-2.5">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-zinc-100 leading-none">Trần Thanh Vinh</p>
                <p className="text-xs text-zinc-400 leading-none mt-1">23521799@gm.uit.edu.vn</p>
              </div>
            </DropdownMenuLabel>
            
            <DropdownMenuSeparator className="bg-white/10 my-1" />
            
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-200 focus:bg-white/10 cursor-pointer rounded-lg transition-colors">
              <FiUser className="text-zinc-400" size={16} />
              Hồ sơ của bạn
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-200 focus:bg-white/10 cursor-pointer rounded-lg transition-colors">
              <FiAward className="text-zinc-400" size={16} />
              Thành tựu
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-200 focus:bg-white/10 cursor-pointer rounded-lg transition-colors">
              <FiSettings className="text-zinc-400" size={16} />
              Cài đặt
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-white/10 my-1" />
            
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 text-sm text-rose-400 focus:bg-rose-500/20 focus:text-rose-300 cursor-pointer rounded-lg transition-colors">
              <FiLogOut size={16} />
              Đăng xuất
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
    </header>
  );
};

export default Header;