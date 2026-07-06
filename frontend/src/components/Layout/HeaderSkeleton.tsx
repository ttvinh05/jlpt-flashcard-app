import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-xl bg-white/5" />

        <Skeleton className="hidden sm:block h-6 w-24 rounded-md bg-white/5" />
      </div>

      <div className="flex-1 max-w-2xl px-4 md:px-8">
        <div className="relative w-full">
          <Skeleton className="h-10 w-full rounded-full bg-white/5 border border-white/5" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl bg-white/5" />

        <Skeleton className="h-10 w-10 rounded-full bg-white/5" />
      </div>
    </>
  );
};

export default HeaderSkeleton;
