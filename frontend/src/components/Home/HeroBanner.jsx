import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="col-span-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/5 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group">
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-zinc-50">Tiếp tục học N2 Katakana</h2>
          <p className="text-zinc-400 max-w-md">Bạn đã hoàn thành 70% bộ từ này. Chỉ còn 15 từ nữa là xong!</p>
        </div>
        <Link to="/study/deck_n2_791-840">
          <Button 
  size="lg" 
  className="w-fit h-12 font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95"
>
  Học ngay
</Button>
        </Link>
      </div>
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-500"></div>
    </div>
  );
};

export default HeroBanner;