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
  FiShare2,
} from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useParams } from "react-router";
import ActionCard from "@/components/Deck/ActionCard";
import { useDeckDetails } from "@/hooks/useDeckDetails";
import DeckDetailsSkeleton from "@/components/Deck/DeckDetailsSkeleton";

const DeckDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { deckDetail, loading, error } = useDeckDetails();

  if (error) {
    throw new Response(error, { status: 400 });
  }

  if (!loading && !deckDetail) {
    throw new Response("Học phần này không tồn tại hoặc đã bị xóa!", {
      status: 404,
    });
  }

  const cardFiltered = deckDetail?.cards ?? [];
  const cardLearned = cardFiltered.filter(
    (card) => card.status === "learned",
  ).length;

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden text-zinc-50 font-sans bg-zinc-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <div className="max-w-5xl mx-auto space-y-10">
          {loading ? (
            <DeckDetailsSkeleton />
          ) : (
            <>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/decks")}
                  className="pl-0 -ml-2 hover:bg-transparent [&_svg]:size-[18px]"
                >
                  <FiArrowLeft />
                  Quay lại thư viện
                </Button>
              </div>

              <section className="flex flex-col gap-6 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-500/30 bg-blue-500/10 text-sm"
                    >
                      {deckDetail.level}
                    </Badge>
                    <span className="flex items-center gap-1.5">
                      <FiUser size={14} />
                      {deckDetail.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <FiClock size={14} /> Tạo lúc:{" "}
                      {new Date(deckDetail.createdAt).toLocaleDateString(
                        "vi-VN",
                      )}
                    </span>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="rounded-full">
                        <FiSettings />
                        Tùy chọn
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48 mt-2">
                      <DropdownMenuItem>
                        <FiEdit2 /> Chỉnh sửa toàn bộ
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <FiRefreshCcw /> Đặt lại tiến độ
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <FiShare2 /> Chia sẻ học phần
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem variant="destructive">
                        <FiTrash2 /> Xóa học phần
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {deckDetail.title}
                  </h1>
                  <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
                    {deckDetail.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 max-w-xl pt-2">
                  <div className="flex-1">
                    <div className="flex justify-between items-center text-sm font-medium mb-2">
                      <span className="text-zinc-400">Tiến độ học phần</span>
                      <span
                        className={
                          deckDetail.progress === 100
                            ? "text-emerald-400"
                            : "text-blue-400"
                        }
                      >
                        {deckDetail.progress}% ({cardLearned}/
                        {deckDetail.cards.length} thẻ)
                      </span>
                    </div>

                    <Progress value={deckDetail.progress} className="h-2" />
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActionCard
                  title="Học Thẻ Ghi Nhớ"
                  description="Bắt đầu phiên học với thuật toán Spaced Repetition."
                  icon={FiPlay}
                  variant="blue"
                  onClick={() => navigate(`/study/${id}`)}
                />

                <ActionCard
                  title="Làm Bài Kiểm Tra"
                  description="Đánh giá năng lực với bài thi trắc nghiệm ngẫu nhiên."
                  icon={FiCheckSquare}
                  variant="purple"
                  onClick={() => console.log("Chuyển sang trang Quiz")}
                />
              </section>

              <section>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-zinc-100 leading-none">
                  <span>Danh sách từ vựng</span>
                  <Badge
                    variant="secondary"
                    className="border border-white/10 px-2 py-0.5 text-[11px] font-medium rounded-full font-mono tracking-wider shadow-inner translate-y-[3px]"
                  >
                    {deckDetail.cards.length} thẻ
                  </Badge>
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-none hover:bg-transparent">
                        <TableHead className="w-[80px] text-center">
                          STT
                        </TableHead>
                        <TableHead className="w-[150px]">Kanji</TableHead>
                        <TableHead className="w-[150px]">Hiragana</TableHead>
                        <TableHead>Ý nghĩa & Ví dụ</TableHead>
                        <TableHead className="text-center w-[140px]">
                          Trạng thái
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cardFiltered.map((word, index) => (
                        <TableRow key={word.id}>
                          <TableCell className="text-center text-zinc-500 font-mono w-[80px]">
                            {index + 1}
                          </TableCell>
                          <TableCell className="font-bold text-lg text-zinc-100">
                            {word.front}
                          </TableCell>
                          <TableCell className="text-zinc-300">
                            {word.backHiragana}
                          </TableCell>

                          <TableCell>
                            <div className="flex flex-col gap-1 py-2">
                              <span className="text-zinc-200 font-medium whitespace-pre-line">
                                {word.backMeaning}
                              </span>

                              {word.backExample && (
                                <span className="block text-sm text-zinc-500 italic mt-1 bg-white/5 p-2 rounded-md border border-white/5 whitespace-pre-line break-words">
                                  {word.backExample}
                                </span>
                              )}
                            </div>
                          </TableCell>

                          <TableCell className="w-[140px]">
                            <div className="flex justify-center w-full">
                              <div className="flex items-center justify-start gap-2 w-[64px]">
                                {word.status === "learned" && (
                                  <>
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0"></div>
                                    <span className="text-xs font-medium text-emerald-400/70">
                                      Đã thuộc
                                    </span>
                                  </>
                                )}
                                {word.status === "learning" && (
                                  <>
                                    <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] shrink-0"></div>
                                    <span className="text-xs font-medium text-amber-400/70">
                                      Đang học
                                    </span>
                                  </>
                                )}
                                {word.status === "new" && (
                                  <>
                                    <div className="w-2 h-2 rounded-full bg-zinc-600 shrink-0"></div>
                                    <span className="text-xs font-medium text-zinc-500">
                                      Chưa học
                                    </span>
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
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default DeckDetails;
