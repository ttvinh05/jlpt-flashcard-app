import { Skeleton } from "@/components/ui/skeleton";

const StudyHeaderSkeleton = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between pl-4 pr-4 md:pr-6 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 font-sans">
      <div className="flex items-center z-10">
        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full max-w-[35%] sm:max-w-[45%] md:max-w-[50%]">
        <Skeleton className="h-3 w-12 mb-1.5" />
        <Skeleton className="h-4 w-44 mb-2" />
        <Skeleton className="w-28 h-1" />
      </div>

      <div className="flex items-center gap-2 md:gap-3 z-10">
        <Skeleton className="hidden sm:block h-9 w-28 rounded-xl" />
        <Skeleton className="h-9 w-9 rounded-lg" />
        <Skeleton className="h-9 w-9 rounded-lg" />
      </div>
    </header>
  );
};

export default StudyHeaderSkeleton;
