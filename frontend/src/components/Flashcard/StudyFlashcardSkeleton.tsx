import { Skeleton } from "@/components/ui/skeleton";

const StudyFlashcardSkeleton = () => {
  return (
    <>
      <main className="flex-1 flex items-center justify-center w-full px-4 z-10">
        <Skeleton className="w-[900px] h-[450px] max-w-[95vw] rounded-3xl" />
      </main>

      <footer className="w-full max-w-4xl mx-auto flex items-center justify-between p-6 md:p-8 z-10">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
          <Skeleton className="h-16 w-20 rounded-xl" />
        </div>
        <Skeleton className="h-12 w-12 rounded-lg" />
      </footer>
    </>
  );
};

export default StudyFlashcardSkeleton;
