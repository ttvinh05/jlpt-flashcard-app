import { Skeleton } from "@/components/ui/skeleton";

const DeckListSkeleton = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-2">
          <Skeleton className="h-9 w-56 rounded-lg" />
          <Skeleton className="h-5 w-80 rounded-md" />
        </div>
        <div className="h-11 w-full md:w-[450px] bg-[#1a1a1a]/60 border border-white/10 rounded-[20px] p-1 flex items-center">
          <Skeleton className="h-full w-full rounded-2xl" />
        </div>
      </header>

      <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1 space-y-4 w-full">
          <Skeleton className="h-5 w-28 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-3/4 rounded-xl" />
            <Skeleton className="h-5 w-1/2 rounded-md" />
          </div>
          <div className="w-full max-w-md space-y-2 pt-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-8" />
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
          </div>
        </div>
        <Skeleton className="h-14 w-36 rounded-2xl shrink-0" />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-36 rounded-md hidden md:block" />
          <Skeleton className="h-8 w-40 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between h-56"
            >
              <div className="flex justify-between items-start">
                <Skeleton className="h-5 w-12 rounded-full" />
                <Skeleton className="size-8 rounded-full" />
              </div>

              <div className="flex-1 mt-4 space-y-2">
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-1/2 rounded-md" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-8" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DeckListSkeleton;
