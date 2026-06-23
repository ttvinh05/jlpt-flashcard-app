import { Outlet } from "react-router";
import StudyHeader from "@/components/Layout/StudyHeader";
import { useState } from "react";
import { useDeckDetails } from "@/hooks/useDeckDetails";

const StudyLayout = () => {
  const [progress, setProgress] = useState({});
  const { deckDetail, loading, error } = useDeckDetails();

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100">
      <StudyHeader
        progress={progress}
        deckDetail={deckDetail}
        loading={loading}
        error={error}
      />
      <main>
        <Outlet context={{ deckDetail, loading, error, setProgress }} />
      </main>
    </div>
  );
};

export default StudyLayout;
