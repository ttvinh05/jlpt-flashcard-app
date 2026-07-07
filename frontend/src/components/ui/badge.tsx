import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all select-none [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-blue-600/80 text-zinc-50 shadow-sm shadow-blue-900/20",

        secondary: "bg-white/10 text-zinc-300",

        destructive: "bg-rose-500/15 text-rose-400 border border-rose-500/30",

        outline: "border-white/20 bg-white/5 backdrop-blur-sm shadow-sm",

        ghost: "hover:bg-white/10 text-zinc-400 hover:text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className = "",
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
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

export { Badge, badgeVariants };
