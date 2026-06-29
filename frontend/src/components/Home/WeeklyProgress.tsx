interface WeeklyProgressProps {
  percentage?: number
}

const WeeklyProgress = ({ percentage = 70 }: WeeklyProgressProps) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center gap-4 hover:bg-white/10 transition-all group">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-28 h-28 transform -rotate-90 overflow-visible">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="4 6"
            className="text-zinc-800"
          />
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#blueGradient)"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-bold text-zinc-50 group-hover:text-blue-400 transition-colors">
            {percentage}%
          </span>
        </div>
      </div>

      <div>
        <p className="font-semibold text-zinc-100">Tiến độ tuần</p>
        <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-medium">
          Mục tiêu: 500 từ
        </p>
      </div>
    </div>
  );
};

export default WeeklyProgress;
