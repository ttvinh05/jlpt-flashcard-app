import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  FiArrowLeft, 
  FiPlay, 
  FiCheckSquare, 
  FiSettings, 
  FiClock, 
  FiUser,
  FiEdit2, 
  FiRefreshCcw, 
  FiTrash2,
  FiShare2
} from 'react-icons/fi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useParams } from "react-router";
import { cardsData, decksData } from "@/utils/mockData";
import ActionCard from "@/components/Deck/ActionCard";

const DeckDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const deckFiltered = decksData.find(item => item.id === id)
  const cardFiltered = cardsData.filter(item => item.deckId === id)

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden text-zinc-50 font-sans bg-zinc-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/decks')}
              className="text-zinc-400 hover:text-zinc-50 pl-0 gap-2 hover:bg-transparent -ml-2 transition-colors"
            >
              <FiArrowLeft size={18} />
              Quay lại thư viện
            </Button>
          </div>

          <section className="flex flex-col gap-6 pb-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <Badge variant="outline" className="text-blue-400 border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-semibold">
                  {deckFiltered.level}
                </Badge>
                <span className="flex items-center gap-1.5"><FiUser size={14}/>{deckFiltered.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><FiClock size={14}/> Tạo lúc: {new Date(deckFiltered.createdAt).toLocaleDateString('vi-VN')}</span>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="h-9 px-4 border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white rounded-full outline-none transition-all shadow-sm flex items-center gap-2 font-medium"
                >
                  <FiSettings size={16} />
                  Tùy chọn
                </Button>
              </DropdownMenuTrigger>
                
                <DropdownMenuContent align="end" className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 text-zinc-300 rounded-xl shadow-2xl min-w-[200px] p-1.5 mt-2">
                  <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                    <FiEdit2 size={14} className="text-zinc-400" /> Chỉnh sửa toàn bộ
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                    <FiRefreshCcw size={14} className="text-zinc-400" /> Đặt lại tiến độ
                  </DropdownMenuItem>

                  <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                    <FiShare2 size={14} className="text-zinc-400" /> Chia sẻ học phần
                  </DropdownMenuItem>
                  
                  <div className="h-px bg-white/10 my-1 mx-1.5"></div>
                  
                  <DropdownMenuItem className="focus:bg-red-500/20 focus:text-red-400 text-red-500 cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors outline-none flex items-center gap-2 font-medium">
                    <FiTrash2 size={14} /> Xóa học phần
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{deckFiltered.title}</h1>
              <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
                {deckFiltered.description}
              </p>
            </div>

            <div className="flex items-center gap-6 max-w-xl pt-2">
              <div className="flex-1">
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <span className="text-zinc-400">Tiến độ học phần</span>
                  <span className="text-emerald-400">{deckFiltered.progress}% (21/60 thẻ)</span>
                </div>
                <Progress value={35} className="h-2 bg-zinc-800" indicatorColor="bg-emerald-400" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActionCard
              title="Học Thẻ Ghi Nhớ"
              description="Bắt đầu phiên học với thuật toán Spaced Repetition."
              icon={FiPlay}
              variant="blue"
              onClick={() => navigate(`/study/${id || 'deck-002'}`)}
            />

            <ActionCard
              title="Làm Bài Kiểm Tra"
              description="Đánh giá năng lực với bài thi trắc nghiệm ngẫu nhiên."
              icon={FiCheckSquare}
              variant="purple"
              onClick={() => console.log('Chuyển sang trang Quiz')}
            />
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Danh sách từ vựng <Badge variant="secondary" className="bg-white/10 hover:bg-white/10 font-normal">{deckFiltered.totalCards} thẻ</Badge>
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
              <Table>
                <TableHeader className="bg-black/40 hover:bg-black/40 border-b border-white/5">
                  <TableRow className="border-none">
                    <TableHead className="w-[80px] text-center text-zinc-400">STT</TableHead>
                    <TableHead className="text-zinc-400 w-[150px]">Kanji</TableHead>
                    <TableHead className="text-zinc-400 w-[150px]">Hiragana</TableHead>
                    <TableHead className="text-zinc-400">Ý nghĩa & Ví dụ</TableHead>
                    <TableHead className="text-center text-zinc-400 w-[140px]">Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cardFiltered.map((word, index) => (
                    <TableRow key={word.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="text-center text-zinc-500 font-mono w-[80px]">{index + 1}</TableCell>
                      <TableCell className="font-bold text-lg text-zinc-100">{word.front}</TableCell>
                      <TableCell className="text-zinc-300">{word.back.hiragana}</TableCell>
                      
                      <TableCell>
                        <div className="flex flex-col gap-1 py-2">
                          <span className="text-zinc-200 font-medium whitespace-pre-line">
                            {word.back.meaning}
                          </span>
                          
                          {word.back.example && (
                            <span className="block text-sm text-zinc-500 italic mt-1 bg-white/5 p-2 rounded-md border border-white/5 whitespace-pre-line break-words">
                              {word.back.example}
                            </span>
                          )}
                        </div>
                      </TableCell>

                      <TableCell className="w-[140px]">
                        <div className="flex justify-center w-full">
                          <div className="flex items-center justify-start gap-2 w-[64px]">
                            {word.status === 'learned' && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0"></div>
                                <span className="text-xs font-medium text-emerald-400/70">Đã thuộc</span>
                              </>
                            )}
                            {word.status === 'learning' && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] shrink-0"></div>
                                <span className="text-xs font-medium text-amber-400/70">Đang học</span>
                              </>
                            )}
                            {word.status === 'new' && (
                              <>
                                <div className="w-2 h-2 rounded-full bg-zinc-600 shrink-0"></div>
                                <span className="text-xs font-medium text-zinc-500">Chưa học</span>
                              </>
                            )}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default DeckDetails;