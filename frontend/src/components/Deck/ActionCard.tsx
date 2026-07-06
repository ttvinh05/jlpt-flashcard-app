interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  onClick: () => void;
  variant: "blue" | "purple";
}

const ActionCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  variant = "blue",
}: ActionCardProps) => {
  const styles = {
    blue: {
      glow: "bg-blue-600/10 group-hover:bg-blue-600/20",
      container:
        "bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-600/10",
      iconBox:
        "bg-blue-500/20 text-blue-400 border-blue-500/20 shadow-blue-900/20",
    },
    purple: {
      glow: "bg-purple-600/10 group-hover:bg-purple-600/20",
      container:
        "bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-600/10",
      iconBox:
        "bg-purple-500/20 text-purple-400 border-purple-500/20 shadow-purple-900/20",
    },
  };

  const currentStyle = styles[variant];

  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div
        className={`absolute inset-0 blur-xl rounded-3xl transition-all opacity-0 group-hover:opacity-100 ${currentStyle.glow}`}
      ></div>

      <div
        className={`relative border rounded-3xl p-8 transition-all h-full flex flex-col justify-between ${currentStyle.container}`}
      >
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border shadow-lg ${currentStyle.iconBox}`}
        >
          <Icon size={28} className={variant === "blue" ? "ml-1" : ""} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
