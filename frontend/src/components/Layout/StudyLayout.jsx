import { Outlet } from "react-router";
import StudyHeader from "@/components/Layout/StudyHeader";

const StudyLayout = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-slate-100">
        <StudyHeader />
        <main>
            <Outlet />
        </main>
        </div>
    )
}

export default StudyLayout