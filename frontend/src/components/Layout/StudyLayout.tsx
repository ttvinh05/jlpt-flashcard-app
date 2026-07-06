import { Outlet } from "react-router";
import StudyHeader from "@/components/Layout/StudyHeader";
import { useState } from "react";
import { useDeckDetails } from "@/hooks/useDeckDetails";
import type { DeckDetail } from "@/types/deck";

export interface ProgressState {
  current?: number;
  total?: number;
}

export interface StudyContextType {
  deckDetail: DeckDetail | undefined;
  loading: boolean;
  error: string | null;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
}

const StudyLayout = () => {
  const [progress, setProgress] = useState<ProgressState>({});
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
