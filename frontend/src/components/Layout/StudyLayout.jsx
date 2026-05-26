import { Outlet } from "react-router";
import StudyHeader from "@/components/Layout/StudyHeader";
import { useState } from "react";

const StudyLayout = () => {
    const [progress, setProgress] = useState({})

    return (
        <div className="min-h-screen bg-zinc-950 text-slate-100">
        <StudyHeader progress={progress} />
        <main>
            <Outlet context={{ setProgress }} />
        </main>
        </div>
    )
}

export default StudyLayout