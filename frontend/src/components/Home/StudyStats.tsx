import { FiZap, FiTarget } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

interface StatCardProps {
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  title: string;
  value: string;
  subtitle: string;
}

const StatCard = ({ icon: Icon, color, title, value, subtitle }: StatCardProps) => (
  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all group">
    <div className={`flex justify-between items-center ${color}`}>
      <Icon size={24} />
      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {title}
      </span>
    </div>
    <div>
      <div className="text-4xl font-bold">{value}</div>
      <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>
    </div>
  </div>
);

const StudyStats = () => {
  return (
    <>
      <StatCard
        icon={FaFire}
        color="text-orange-400"
        title="Streak"
        value="12"
        subtitle="Ngày liên tiếp"
      />
      <StatCard
        icon={FiZap}
        color="text-blue-400"
        title="To Review"
        value="25"
        subtitle="Thẻ cần ôn lại"
      />
      <StatCard
        icon={FiTarget}
        color="text-emerald-400"
        title="Accuracy"
        value="92%"
        subtitle="Tỷ lệ chính xác"
      />
    </>
  );
};

export default StudyStats;
