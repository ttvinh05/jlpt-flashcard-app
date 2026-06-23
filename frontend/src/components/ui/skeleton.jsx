import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse bg-white/5 border border-white/10 rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
