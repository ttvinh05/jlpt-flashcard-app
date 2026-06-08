import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Gán chuẩn mới: bo góc vừa phải (rounded-lg), padding thoải mái (px-3 py-1)
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all select-none [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-blue-600/80 text-zinc-50 shadow-sm shadow-blue-900/20",

        secondary: "bg-white/10 text-zinc-300",

        destructive: "bg-rose-500/15 text-rose-400 border border-rose-500/30",

        // Variant Outline chủ lực: Nền trong suốt kính mờ, viền mờ.
        // Lớp nền và màu chữ sẽ do prop truyền từ ngoài (như LEVEL_COLORS) quyết định.
        outline: "border-white/20 bg-white/5 backdrop-blur-sm shadow-sm",

        ghost: "hover:bg-white/10 text-zinc-400 hover:text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
