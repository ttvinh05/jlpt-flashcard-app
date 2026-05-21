const heatmapData = [
  0, 1, 0, 2, 3, 1, 0, 
  1, 2, 2, 1, 0, 3, 3, 
  0, 0, 1, 2, 2, 1, 0, 
  1, 1, 3, 2, 1, 1, 2, 
  2, 3, 3, 1, 0, 1, 2
];

const StudySidebar = () => {
  return (
    <aside className="w-80 border-l border-white/10 p-8 flex flex-col gap-8 sticky top-0 h-screen bg-zinc-950/50 backdrop-blur-md">
      <div>
        <h3 className="font-bold mb-4 text-zinc-50">Lịch sử học tập</h3>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
           <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-zinc-500 font-medium mb-1">
              <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
           </div>

           <div className="grid grid-cols-7 gap-2 w-full">
              {heatmapData.map((level, index) => {
                let cellStyle = "bg-white/5"; 
                if (level === 1) cellStyle = "bg-emerald-500/20"; 
                if (level === 2) cellStyle = "bg-emerald-500/50"; 
                if (level === 3) cellStyle = "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]"; 

                return (
                    <div 
                        key={index} 
                        className={`h-6 w-full rounded-md ${cellStyle} hover:ring-1 hover:ring-emerald-400/50 transition-all cursor-pointer`}
                        title={`Ngày ${index + 1}`}
                    ></div>
                );
              })}
           </div>
           
           {/* Legend */}
           <div className="flex items-center justify-between mt-2 text-[10px] text-zinc-500 font-medium">
               <span>Ít</span>
               <div className="flex gap-2">
                   <div className="w-4 h-2 rounded-full bg-white/5"></div>
                   <div className="w-4 h-2 rounded-full bg-emerald-500/20"></div>
                   <div className="w-4 h-2 rounded-full bg-emerald-500/50"></div>
                   <div className="w-4 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></div>
               </div>
               <span>Nhiều</span>
           </div>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-bold mb-4 text-rose-400">Từ vựng hay quên</h3>
        <div className="flex flex-col gap-3">
          {['インテリア', 'スムーズ', 'トラブル'].map((word) => (
            <div key={word} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
              <span className="font-medium text-lg text-zinc-100">{word}</span>
              <span className="text-xs text-rose-400 font-mono bg-rose-500/10 px-2 py-1 rounded-md font-semibold">Fail: 5</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default StudySidebar;