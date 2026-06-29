import GreetingHeader from "@/components/Home/GreetingHeader";
import StudyStats from "@/components/Home/StudyStats";
import HeroBanner from "@/components/Home/HeroBanner";
import WeeklyProgress from "@/components/Home/WeeklyProgress";
import HomeDeckList from "@/components/Home/HomeDeckList";
import StudySidebar from "@/components/Home/StudySidebar";
import { useDecks } from "@/hooks/useDecks";
import HomePageSkeleton from "@/components/Home/HomePageSkeleton";
const HomePage = () => {
  const { decks, loading, error } = useDecks();

  if (error) throw new Response("Lỗi tải trang chủ", { status: 400 });

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      <main className="flex-1 flex overflow-hidden">
        {loading ? (
          <HomePageSkeleton />
        ) : (
          <>
            <section className="flex-1 p-8 overflow-y-auto custom-scrollbar">
              <GreetingHeader />

              <div className="grid grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                <StudyStats />
                <HeroBanner />
                <WeeklyProgress percentage={70} />
                <HomeDeckList decks={decks ?? []} />
              </div>
            </section>

            <StudySidebar />
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage;
