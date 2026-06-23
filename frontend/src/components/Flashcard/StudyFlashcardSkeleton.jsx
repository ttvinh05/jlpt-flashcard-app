import { Skeleton } from "@/components/ui/skeleton";

const StudyFlashcardSkeleton = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] w-full flex flex-col text-slate-100 font-sans bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="flex-1 flex items-center justify-center w-full px-4">
        <Skeleton className="w-full max-w-xl h-[350px] rounded-3xl" />
      </main>

      <footer className="w-full max-w-4xl mx-auto flex items-center justify-between p-6 md:p-8">
        <Skeleton className="h-12 w-12 rounded-lg" />

        <div className="flex items-center gap-3">
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
        </div>

        <Skeleton className="h-12 w-12 rounded-lg" />
      </footer>
    </div>
  );
};

export default StudyFlashcardSkeleton;
