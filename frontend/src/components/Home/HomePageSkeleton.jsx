import { Skeleton } from "@/components/ui/skeleton";

const HomePageSkeleton = () => {
  return (
    <>
      <section className="flex-1 p-8 overflow-y-auto custom-scrollbar">
        <header className="mb-8 space-y-2">
          <Skeleton className="h-9 w-48 rounded-lg" />
          <Skeleton className="h-5 w-64 rounded-md" />
        </header>

        <div className="grid grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between h-[180px]"
            >
              <div className="flex justify-between items-center">
                <Skeleton className="size-6 rounded-lg" />
                <Skeleton className="h-4 w-16 rounded-md" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-10 w-20 rounded-xl" />
                <Skeleton className="h-4 w-28 rounded-md" />
              </div>
            </div>
          ))}

          <div className="col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-[180px]">
            <div className="space-y-2">
              <Skeleton className="h-7 w-64 rounded-lg" />
              <Skeleton className="h-5 w-96 rounded-md" />
            </div>
            <Skeleton className="h-12 w-32 rounded-xl" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center gap-4 h-[180px]">
            <Skeleton className="size-24 rounded-full" />
            <div className="space-y-1.5 flex flex-col items-center">
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-3 w-16 rounded-md" />
            </div>
          </div>

          <div className="col-span-3 space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-7 w-44 rounded-md" />
              <Skeleton className="h-5 w-16 rounded-md" />
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-[380px] h-56 shrink-0 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between"
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
          </div>
        </div>
      </section>

      <aside className="w-80 border-l border-white/10 p-8 flex flex-col gap-8 sticky top-0 h-screen bg-zinc-950/50 backdrop-blur-md">
        <div className="space-y-4">
          <Skeleton className="h-5 w-32 rounded-md" />
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <div className="grid grid-cols-7 gap-2">
              {[...Array(7)].map((_, i) => (
                <Skeleton key={i} className="h-3 w-full rounded-sm" />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(35)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full rounded-md" />
              ))}
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-3 w-6" />
              <Skeleton className="h-3 w-20 rounded-full" />
              <Skeleton className="h-3 w-8" />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <Skeleton className="h-5 w-36 rounded-md" />
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center h-[60px]"
              >
                <Skeleton className="h-5 w-24 rounded-md" />
                <Skeleton className="h-6 w-14 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default HomePageSkeleton;
