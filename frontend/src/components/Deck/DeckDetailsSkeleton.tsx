import { Skeleton } from "@/components/ui/skeleton";

const DeckDetailsSkeleton = () => {
  return (
    <>
      <div>
        <Skeleton className="h-9 w-36 rounded-lg" />
      </div>

      <section className="flex flex-col gap-6 pb-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap items-center gap-3">
            <Skeleton className="h-6 w-12 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-md" />
            <Skeleton className="h-5 w-36 rounded-md" />
          </div>
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-12 w-2/3 rounded-xl" />
          <Skeleton className="h-6 w-full max-w-3xl rounded-lg" />
        </div>

        <div className="flex items-center gap-6 max-w-xl pt-2 w-full">
          <div className="flex-1 space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-44 rounded-md" />
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-4">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
        </div>
      </section>
    </>
  );
};

export default DeckDetailsSkeleton;
