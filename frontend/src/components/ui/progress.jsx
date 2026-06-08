import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  indicatorColor, // Giữ lại prop này phòng trường hợp bạn muốn ép màu thủ công ở đâu đó
  ...props
}) {
  // TỰ ĐỘNG XỬ LÝ MÀU: Nếu đạt 100% thì dùng màu Ngọc lục bảo (Emerald) + Glow ngọc, ngược lại dùng Xanh dương (Blue) + Glow xanh
  const autoColor =
    value === 100
      ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
      : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]";

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        // Set mặc định chiều cao 6px (h-1.5) và nền tối (bg-zinc-800) luôn
        "relative flex h-1.5 w-full items-center overflow-hidden rounded-full bg-zinc-800",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        // Thêm transition duration dài hơn chút (500ms) để thanh chạy mượt mà
        className={cn(
          "h-full w-full flex-1 transition-all duration-500 ease-in-out",
          indicatorColor || autoColor,
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
