
import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Kích thước chuẩn & Layout
        "flex h-10 w-full rounded-xl px-4 py-2 text-sm",
        // Glassmorphism Base
        "bg-white/5 border border-white/10 text-zinc-50 transition-all duration-200",
        // Placeholder
        "placeholder:text-zinc-500",
        // Trạng thái Focus (Click vào ô nhập liệu)
        "outline-none focus-visible:bg-white/10 focus-visible:border-white/20 focus-visible:ring-2 focus-visible:ring-blue-500/50",
        // Trạng thái vô hiệu hóa & lỗi
        "disabled:cursor-not-allowed disabled:opacity-40",
        "aria-invalid:border-rose-500/50 aria-invalid:ring-rose-500/20",
        // File input đặc thù
        "file:inline-flex file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-200",
        className
      )}
      {...props} />
  );
}

export { Input }