import { Skeleton } from "@/components/ui/skeleton";

const DeckDetailsSkeleton = () => {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden text-zinc-50 font-sans bg-zinc-950 p-8">
      <div className="max-w-5xl mx-auto space-y-10 w-full">
        <Skeleton className="h-6 w-32" />

        <div className="space-y-4">
          <div className="flex gap-3">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-12 w-2/3 rounded-xl" />
          <Skeleton className="h-6 w-full rounded-lg" />
          <Skeleton className="h-6 w-1/2 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-28 rounded-2xl" />
          <Skeleton className="h-28 rounded-2xl" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-48 w-full rounded-2xl" />
        </div>
      </div>
    </main>
  );
};

export default DeckDetailsSkeleton;
