import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-blue-500/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Nút Primary (Giống nút "+" trên Header)
        default: 
          "bg-blue-600/80 text-zinc-50 shadow-lg shadow-blue-900/20 hover:bg-blue-500",
        
        // Nút Kính mờ chủ đạo (Chuẩn rules thiết kế)
        outline:
          "border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md shadow-sm hover:text-white hover:bg-white/20 data-[state=open]:bg-white/10 data-[state=open]:text-white",
        
        // Nút phụ nền xám tối
        secondary:
          "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50",
        
        // Nút tàng hình (chỉ hiện khi hover)
        ghost:
          "text-zinc-400 hover:bg-white/10 hover:text-zinc-50 data-[state=open]:bg-white/10 data-[state=open]:text-zinc-50",
        
        // Nút cảnh báo/Xóa
        destructive:
          "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 hover:text-rose-400 focus-visible:border-rose-500/40 focus-visible:ring-rose-500/20",
        
        // Nút dạng text link
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 gap-2 px-4 py-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 rounded-xl px-8 text-base",
        icon: "size-9 rounded-full",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-full",
        // Size Custom cho Menu Toggle
        "icon-xl": "size-12 rounded-full [&_svg:not([class*='size-'])]:size-6", 
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }