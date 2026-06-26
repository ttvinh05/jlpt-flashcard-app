import { Skeleton } from "@/components/ui/skeleton";

const StudyHeaderSkeleton = () => {
  return (
    <>
      <div className="flex items-center z-10">
        <Skeleton className="h-10 w-40 rounded-xl" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full max-w-[35%] sm:max-w-[45%] md:max-w-[50%]">
        <Skeleton className="h-3 w-12 mb-1.5" />
        <Skeleton className="h-4 w-44 mb-2" />
        <Skeleton className="w-28 h-1" />
      </div>

      <div className="flex items-center gap-2 md:gap-3 z-10">
        <Skeleton className="hidden sm:block h-9 w-[137px] rounded-xl" />
        <Skeleton className="h-10 w-10 rounded-xl" />
        <Skeleton className="h-10 w-10 rounded-xl" />
      </div>
    </>
  );
};

export default StudyHeaderSkeleton;
