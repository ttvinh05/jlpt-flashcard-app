import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  indicatorColor?: string;
}

function Progress({
  className = "",
  value = 0,
  indicatorColor = undefined,
  ...props
}: ProgressProps) {
  const autoColor =
    value === 100
      ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
      : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]";

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1.5 w-full items-center overflow-hidden rounded-full bg-zinc-800",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
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
